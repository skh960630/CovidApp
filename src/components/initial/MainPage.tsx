import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Button, Heading, Center, Stack } from 'native-base';

export default function MainPage ({route, navigation}: {route: any, navigation: any}) {
  const Options = ({navigation}: {navigation: any}) => {
    return (
      <Stack space={10}>
        <Button bgColor="#7395ae" onPress={() => navigation.navigate("Vaccination History", { userId: route.params.userId })}>View my Vaccination History</Button>
        <Button colorScheme="emerald" onPress={() => navigation.navigate("Covid-19 Test History", { userId: route.params.userId })}>View my Covid Test History</Button>
        <Button onPress={() => navigation.navigate("Covid Tracking", { userId: route.params.userId })}>Covid Tracking Service</Button>
        <Button colorScheme="secondary" onPress={() => navigation.navigate("Emergency Contact")}>Experiencing Symptoms?</Button>
        <Button colorScheme="blue" onPress={() => navigation.navigate("QR Scanning")}>QR Code Reader</Button>
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