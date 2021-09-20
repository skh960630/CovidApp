import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Center, Text, Stack, Switch, Box } from 'native-base';
import * as firebase from 'firebase';

export default function CovidTrackingPage () {
    const [covidCases, setCovidCases] = React.useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('covidCases').doc('locations').get().then((doc) => {
            setCovidCases(doc.data().info);
        });
    }, []);
    
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
                        latitude: -33.865143,
                        longitude: 151.209900,
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