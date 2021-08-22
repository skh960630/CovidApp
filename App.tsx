import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import RegistrationPage from './src/components/initial/RegistrationPage';
import PassportPage from './src/components/verifications/PassportPage';
import VisaPage from './src/components/verifications/VisaPage';
import DriverLicensePage from './src/components/verifications/DriverLicensePage';
import MedicarePage from './src/components/verifications/MedicarePage';
import VerifiedPage from './src/components/verifications/VerifiedPage';

// Create a Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Options"
            component={RegistrationPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Passport Verify" 
            component={PassportPage}
            options={{
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#0891b2',
              },
            }}
          />
          <Stack.Screen 
            name="Australian Visa Verify" 
            component={VisaPage}
            options={{
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#0891b2',
              },
            }}
          />
          <Stack.Screen 
            name="Driver License Verify" 
            component={DriverLicensePage}
            options={{
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#0891b2',
              },
            }}
          />
          <Stack.Screen 
            name="Medicare Card Verify" 
            component={MedicarePage}
            options={{
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#0891b2',
              },
            }}
          />
          <Stack.Screen 
            name="Verified" 
            component={VerifiedPage}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
