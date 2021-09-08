import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Button, Heading, Center, Stack  } from 'native-base';
import { BarCodeScanner, Permissions } from 'expo';

export default function MainPage ({route, navigation}: {route: any, navigation: any}) {
  const [scan, setScan] = React.useState(false);
  const [hasCameraPermission, setHasCameraPermission] = React.useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  };

  const Options = ({navigation}: {navigation: any}) => {
    return (
      <Stack space={10}>
        <Button bgColor="#7395ae" onPress={() => navigation.navigate("Vaccination History", { userId: route.params.userId })}>View my Vaccination History</Button>
        <Button colorScheme="emerald" onPress={() => navigation.navigate("Covid-19 Test History", { userId: route.params.userId })}>View my Covid Test History</Button>
        <Button onPress={() => navigation.navigate("Driver License Verify")}>Covid Tracking Service</Button>
        <Button colorScheme="secondary" onPress={() => navigation.navigate("Medicare Card Verify")}>Experiencing Symptoms?</Button>
        <Button colorScheme="blue" onPress={() => setScan(true)}>QR Code Reader</Button>
      </Stack>
    );
  }

  return (
    <ImageBackground source={require('../../image/mainBg.png')} resizeMode="cover" style={styles.image}>
      <Center flex={1}>
        <Image source={require('../../image/logo_v2.png')} style={{ marginTop:'15%', width: 200, height: 200}} />
        <Stack space={20} alignItems="center">
          <Heading mt={3}>NSW Vaccination Assistance</Heading>
          <Options navigation={navigation} />
          {scan &&
            <BarCodeScanner
              // onBarCodeRead={this._handleBarCodeRead}
              style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
              }}
            />
        }
        </Stack>
    </Center>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
});