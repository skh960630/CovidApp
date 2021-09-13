import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import RegistrationPage from './src/components/initial/RegistrationPage';
import SplashPage from './src/components/initial/SplashPage';
import PasswordPage from './src/components/initial/PasswordPage';
import MainPage from './src/components/initial/MainPage';
import PassportPage from './src/components/verifications/PassportPage';
import VisaPage from './src/components/verifications/VisaPage';
import DriverLicensePage from './src/components/verifications/DriverLicensePage';
import MedicarePage from './src/components/verifications/MedicarePage';
import VerifiedPage from './src/components/verifications/VerifiedPage';
import CreateEmailPage from './src/components/verifications/CreateEmailPage';
import CreatePasswordPage from './src/components/verifications/CreatePasswordPage';
import CreatePasswordConfirmPage from './src/components/verifications/CreatePasswordConfirmPage';
import VaccineListPage from './src/components/menus/VaccineListPage';
import CovidTestListPage from './src/components/menus/CovidTestListPage';
import QRScanPage from './src/components/menus/QRScanPage';
import CertificatePage from './src/components/menus/CertificatePage';
import CompletePage from './src/components/verifications/CompletePage';

import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbbCKuIjRcEjP576I2ABMmIe3JqoOC1I0",
  authDomain: "covidapp-3e7b6.firebaseapp.com",
  databaseURL: "https://covidapp-3e7b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "covidapp-3e7b6",
  storageBucket: "covidapp-3e7b6.appspot.com",
  messagingSenderId: "157374364796",
  appId: "1:157374364796:web:46518f2e20df9ed9389df9",
  measurementId: "G-V1ZQCWEJ3T"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// Create a Stack Navigator
const Stack = createStackNavigator();

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
}

export default function App() {

  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash Page">
          <Stack.Screen
            name="Splash Page"
            component={SplashPage}
            options={{
              cardStyle: {
                backgroundColor: 'transparent',
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Options"
            component={RegistrationPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Password Page"
            component={PasswordPage}
            options={{
              cardStyle: {
                backgroundColor: 'white',
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Main Page"
            component={MainPage}
            options={{
              cardStyle: {
                backgroundColor: 'transparent',
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Vaccination History"
            component={VaccineListPage}
            options={{
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#2e5984',
              },
            }}
          />
          <Stack.Screen
            name="Covid-19 Test History"
            component={CovidTestListPage}
            options={{
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#2e5984',
              },
            }}
          />
          <Stack.Screen
            name="QR Scanning"
            component={QRScanPage}
            options={{
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#2e5984',
              },
            }}
          />
          <Stack.Screen
            name="Certificate Page"
            component={CertificatePage}
            options={{
              cardStyle: {
                backgroundColor: 'transparent',
              },
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
          <Stack.Screen 
            name="Create Email" 
            component={CreateEmailPage}
            options={{
              cardStyle: {
                backgroundColor: 'white',
              },
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
            name="Create Password" 
            component={CreatePasswordPage}
            options={{
              cardStyle: {
                backgroundColor: 'white',
              },
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
            name="Password Confirm" 
            component={CreatePasswordConfirmPage}
            options={{
              cardStyle: {
                backgroundColor: 'white',
              },
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
            name="Completed" 
            component={CompletePage}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
