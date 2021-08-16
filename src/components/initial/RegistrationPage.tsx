import React from 'react';
import { Image } from 'react-native';
import { Button, Heading, Center, Text, Stack } from 'native-base';

const Options = ({navigation}: {navigation: any}) => {
  return (
    <Stack space={10}>
      <Button onPress={() => navigation.navigate("Passport Verify")}>Australian Passport</Button>
      <Button onPress={() => console.log("hello world")}>Australian Visa (Foreign Passport)</Button>
      <Button onPress={() => console.log("hello world")}>Driver License</Button>
      <Button onPress={() => console.log("hello world")}>Medicare card</Button>
    </Stack>
  );
}

export default function RegistrationPage({navigation}: {navigation: any}) {
  return (
    <Center flex={1}>
      <Image source={require('../../image/logo.png')} style={{width: 200, height: 200}} />
      <Stack space={20} alignItems="center">
        <Heading mt={3}>Please Verify your identity</Heading>
        <Text>
          To verify your identify, please use one of below options.
        </Text>
        <Options navigation={navigation} />
      </Stack>
    </Center>
  );
}
