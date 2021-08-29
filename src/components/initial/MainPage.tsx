import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Button, Heading, Center, Text, Stack  } from 'native-base';

const Options = ({navigation}: {navigation: any}) => {
    return (
      <Stack space={10}>
        <Button bgColor="#7395ae" onPress={() => navigation.navigate("Passport Verify")}>View my Vaccination History</Button>
        <Button colorScheme="emerald" onPress={() => navigation.navigate("Australian Visa Verify")}>View my Covid Test History</Button>
        <Button onPress={() => navigation.navigate("Driver License Verify")}>Covid Tracking Service</Button>
        <Button colorScheme="secondary" onPress={() => navigation.navigate("Medicare Card Verify")}>Experiencing Symptoms?</Button>
      </Stack>
    );
  }

export default function MainPage ({navigation}: {navigation: any}) {
    return (
        <ImageBackground source={require('../../image/mainBg.png')} resizeMode="cover" style={styles.image}>
            <Center flex={1}>
                <Image source={require('../../image/logo_v2.png')} style={{width: 200, height: 200}} />
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