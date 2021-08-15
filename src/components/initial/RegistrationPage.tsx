import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Stack, View, Text, NativeBaseProvider } from 'native-base';

export const Options = () => {
  return (
    <Stack space={10}>
      <Button onPress={() => console.log("hello world")}>Passport</Button>
      <Button onPress={() => console.log("hello world")}>Driver License</Button>
      <Button onPress={() => console.log("hello world")}>Birth Certificate</Button>
      <Button onPress={() => console.log("hello world")}>Medicare card</Button>
    </Stack>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text fontSize='3xl'>Please confirm your identity.</Text>
        <Options />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
