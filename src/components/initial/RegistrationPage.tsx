import React from 'react';
import { Image } from 'react-native';
import { Button, Heading, Center, Text, Stack } from 'native-base';

export const Options = () => {
  return (
    <Stack space={10}>
      <Button onPress={() => console.log("hello world")}>Passport</Button>
      <Button onPress={() => console.log("hello world")}>Driver License</Button>
      <Button onPress={() => console.log("hello world")}>Medicare card</Button>
    </Stack>
  );
}

export default function RegistrationPage() {
  return (
    <Center flex={1}>
      <Image source={require('../../image/logo.png')} style={{width: 200, height: 200}} />
      <Stack space={10} alignItems="center">
        <Heading mt={3}>Please Confirm your identity </Heading>
        <Text>
          To confirm your identify, please use one of below options.
        </Text>
        <Options />
      </Stack>
    </Center>
  );
}
