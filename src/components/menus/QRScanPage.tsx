import React, { useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { View, Text } from "native-base";
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRScanPage ({route, navigation}: {route: any, navigation: any}) {
    const [scanned, setScanned] = React.useState(false);
    const [hasPermission, setHasPermission] = React.useState(null);

    useEffect(() => {
        requestCameraPermission();
    }, [])

    const requestCameraPermission = async () => {
        (async() => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == 'granted');
        })();
    };

    const handleQRScanned = ({type, data}) => {
        const receivedData = data.split(",");

        if (receivedData[0] === "vac") {
            navigation.navigate("Vaccination History", { userId: receivedData[1] });
        } else if (receivedData[0] === "covidTest") {
            navigation.navigate("Covid-19 Test History", { userId: receivedData[1] });
        }
    }

    if (hasPermission === null) {
        return (
            <View style={styles.permission}>
                <Text>Please provide the permission to the camera.</Text>
            </View>
        ); 
    }

    if (hasPermission === false) {
        return (
            <View style={styles.permission}>
                <Text>We do not have access to the camera.</Text>
            </View>
        ); 
    }

    return(
        <BarCodeScanner
            onBarCodeScanned={handleQRScanned}
            style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            }}
        />
    );
}

const styles = StyleSheet.create({
    permission: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });