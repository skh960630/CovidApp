import React from 'react';
import { Platform, Linking } from 'react-native';
import { Center, Text, Stack, Link, Button } from 'native-base';

export default function EmergencyPage () {
    const dialCall = () => {
        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${1800020080}';
        }
        else {
            phoneNumber = 'telprompt:${1800020080}';
        }

        Linking.openURL(phoneNumber);
    };

    
    return (
        <Center mt={50} ml={10} mr={10}>
            <Stack space={3}>
                <Text fontSize='2xl'>Experiencing any symptoms?</Text>
                <Text>If you are experiencing any symptoms, please visit Covid Clinic Centre and get tested. <Text bold>Your testing will save our lives.</Text></Text>
            </Stack>
            <Link mt={5} _text={{color: "blue.500"}} href="https://www.nsw.gov.au/covid-19/health-and-wellbeing/clinics">Covid Clinic Centre</Link>
            <Link mt={1} _text={{color: "blue.500"}} href="https://www.nsw.gov.au/covid-19/health-and-wellbeing/clinics">https://www.nsw.gov.au/covid-19/health-and-wellbeing/clinics</Link>
            <Stack space={3} mt={10}>
                <Text fontSize='2xl'>Did you get vaccinated recently and experiencing any reactions?</Text>
                <Text>You may experience some side effects following vaccination. Most side effects last no more than a couple of days and you will recover without any problems.</Text>
                <Text>There is also a National Coronavirus Helpline, opens 24 hours 7 days.</Text>
            </Stack>
            <Button onPress={() => dialCall()} mt={10}>Call 1800 020 080</Button>
        </Center>
    );
}