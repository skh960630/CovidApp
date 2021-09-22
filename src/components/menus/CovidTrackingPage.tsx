import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, Circle, Heatmap } from 'react-native-maps';
import { Center, Text, Stack, Switch, Box } from 'native-base';
import * as Location from 'expo-location';
import * as firebase from 'firebase';

export default function CovidTrackingPage ({route, navigation}: {route: any, navigation: any}) {
    const [covidCases, setCovidCases] = React.useState([]);
    const [userLocation, setUserLocation] = React.useState({ latitude: -33.855143, longitude: 151.209900 });
    const [trackingAllowed, setTrackingAllowed] = React.useState(false);
    const [allLocation, setAllLocation] = React.useState([]);
    const [switchToggle, setSwitchToggle] = React.useState(false);
    const db = firebase.firestore();

    useEffect(() => {
        db.collection('covidCases').doc('locations').get().then((doc) => {
            setCovidCases(doc.data().info);
        });

        db.collection('users').doc(route.params.userId).get().then((doc) => {
            setSwitchToggle(doc.data().trackingService);
        });

        db.collection('locationData').doc('allUsers').get().then((doc) => {
            setAllLocation(doc.data().locationInfo);
        });

        getLocation();
    }, []);

    useEffect(() => {
        trackingAllowed && trackUser();
    }, [trackingAllowed]);

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            db.collection("users").doc(route.params.userId).update({ trackingService: false });
            setTrackingAllowed(false);
            setSwitchToggle(false);
            console.log("Permission not granted");
        } else {
            setTrackingAllowed(true);
        }
    }

    const trackUser = () => {
        Location.watchPositionAsync({
            accuracy: Location.Accuracy.Balanced,
            distanceInterval: 50
        }, (location) => {
            const { latitude, longitude } = location.coords;
            covidCases.map((info) => {
                let distance = measure(latitude, longitude, info.latitude, info.longitude);
                if (distance <= 100) {
                    console.log(distance);
                }
            });

            // db.collection('locationData').doc('allUsers').get().then((doc) => {
            //     db.collection("locationData").doc('allUsers').update( { locationInfo: [...doc.data().locationInfo, {latitude, longitude, weight: 1}] } );
            // });

            setUserLocation({ latitude, longitude });
        });
    }

    const measure = (lat1 : number, lon1 : number, lat2 : number, lon2 : number) => {  // generally used geo measurement function
        var R = 6378.137; // Radius of earth in KM
        var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
        var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d * 1000; // meters
    }

    const toggleTrackingService = () => {
        if (trackingAllowed) {
            db.collection("users").doc(route.params.userId).update({ trackingService: !switchToggle });
            setSwitchToggle(!switchToggle);
        } else {
            db.collection("users").doc(route.params.userId).update({ trackingService: false });
            console.log("Please turn on GPS service");
            setSwitchToggle(false);
        }
    }

    return (
        <Center mt={50}>
            <Stack direction='row' space={5} alignItems='center' mt={10}>
                <Text fontSize='lg'>Allow updating my location</Text>
                <Switch size='md' colorScheme="emerald" isChecked={switchToggle} onToggle={() => toggleTrackingService()} />
            </Stack>
            <Box
                width='100%'
                height='100%'
                mt={10}
                style={{ borderTopWidth: 1, borderColor: 'grey'}}
                >
                <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    loadingEnabled={true}
                    initialRegion={{
                        latitude: userLocation.latitude,
                        longitude: userLocation.longitude,
                        latitudeDelta: 0.04,
                        longitudeDelta: 0.05,
                    }}
                >
                    {covidCases.map((info) => {
                        return (
                            <>
                                <Circle
                                    center={{
                                        latitude: info.latitude,
                                        longitude: info.longitude,
                                    }}
                                    radius={100}
                                    fillColor={'rgba(200, 300, 200, 0.5)'}
                                />
                                <Marker
                                    coordinate={{
                                        latitude: info.latitude,
                                        longitude: info.longitude,
                                    }}
                                    title={info.description}
                                />
                                <Heatmap 
                                    points={allLocation}
                                    radius={40}
                                    opacity={1}
                                    gradient={{
                                        colors: ["black", "purple", "red", "yellow", "white"],
                                        startPoints: [0.1, 0.4, 1, 5, 10],
                                        colorMapSize: 2000
                                    }}
                                >
                                </Heatmap>
                            </>
                        )
                    })}
                </MapView>
            </Box>
        </Center>
    );
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
  });