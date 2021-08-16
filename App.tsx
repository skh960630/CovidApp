import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { NativeBaseProvider } from 'native-base';
import RegistrationPage from './src/components/initial/RegistrationPage';
import PassportPage from './src/components/verifications/PassportPage';

// Create a Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={RegistrationPage}
            options={{
              headerShown: false,
              cardStyle: { backgroundColor: 'white' }
            }}
          />
          <Stack.Screen name="Passport" component={PassportPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
