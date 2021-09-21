import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Center, Text, Stack, Switch, Box } from 'native-base';
import * as Location from 'expo-location';
import * as firebase from 'firebase';

export default function CovidTrackingPage ({route, navigation}: {route: any, navigation: any}) {
    const [covidCases, setCovidCases] = React.useState([]);
    const [locationPermission, setLocationPermission] = React.useState(false);
    const [userLocation, setUserLocation] = React.useState({ latitude: -33.865143, longitude: 151.209900 });
    const [tracking, setTracking] = React.useState(false);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('covidCases').doc('locations').get().then((doc) => {
            setCovidCases(doc.data().info);
        });

        db.collection('users').doc(route.params.userId).get().then((doc) => {
            setTracking(doc.data().trackingService);
        });

        getLocation();
    }, []);

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.log("Permission not granted");
        } else {
            setLocationPermission(true);
            Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 3000, distanceInterval: 1
            }, (location) => {
                const { latitude, longitude } = location.coords;
                setUserLocation({ latitude, longitude });
            });
        }
    }
    
    return (
        <Center mt={50}>
            <Stack direction='row' space={5} alignItems='center' mt={10}>
                <Text fontSize='lg'>Allow GPS tracking notifications</Text>
                <Switch size='md' colorScheme="emerald" />
            </Stack>
            <Box
                width='100%'
                height='100%'
                mt={10}
                style={{ borderTopWidth: 1, borderColor: 'grey'}}
                >
                <MapView
                    style={styles.map}
                    loadingEnabled={true}
                    region={{
                        latitude: userLocation.latitude,
                        longitude: userLocation.longitude,
                        latitudeDelta: 0.04,
                        longitudeDelta: 0.05,
                    }}
                >
                    {covidCases.map((info) => {
                        return (
                            <Marker
                                coordinate={{
                                    latitude: info.latitude,
                                    longitude: info.longitude,
                                }}
                            />
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