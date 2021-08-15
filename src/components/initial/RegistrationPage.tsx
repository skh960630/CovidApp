import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, View, Text, NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text fontSize='3xl'>Please confirm your identity.</Text>
        <Button onPress={() => console.log("hello world")}>Passport</Button>
        <Button onPress={() => console.log("hello world")}>Driver License</Button>
        <Button onPress={() => console.log("hello world")}>Birth Certificate</Button>
        <Button onPress={() => console.log("hello world")}>Medicare card</Button>
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
