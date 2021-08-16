import React from 'react';
import RegistrationPage from './src/components/initial/RegistrationPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

// const Stack = createNativeStackNavigator();

// function Registration() {
//   return (
//     <RegistrationPage />
//   );
// }

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="NSW Vaccine Passport" 
          component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>   */}
      <RegistrationPage />
    </NativeBaseProvider>
  );
};
