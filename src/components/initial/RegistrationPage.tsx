import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Button, Heading, Center, Text, Stack  } from 'native-base';

const Options = ({navigation}: {navigation: any}) => {
  return (
    <Stack space={10}>
      <Button onPress={() => navigation.navigate("Passport Verify")}>Australian Passport</Button>
      <Button onPress={() => navigation.navigate("Australian Visa Verify")}>Australian Visa (Foreign Passport)</Button>
      <Button onPress={() => navigation.navigate("Driver License Verify")}>Driver License</Button>
      <Button onPress={() => navigation.navigate("Medicare Card Verify")}>Medicare Card</Button>
    </Stack>
  );
}

export default function RegistrationPage({navigation}: {navigation: any}) {
  return (
    <ImageBackground source={require('../../image/mainBg.png')} resizeMode="cover" style={styles.image}>
      <Center flex={1}>
        <Image source={require('../../image/logo_v2.png')} style={{width: 200, height: 200}} />
        <Stack space={10} alignItems="center">
          <Heading mt={1}>Please Verify your identity</Heading>
          <Text>
            To verify your identify, please use one of below options.
          </Text>
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
