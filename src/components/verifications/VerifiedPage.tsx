import React from 'react';
import { Image } from 'react-native';
import { Center, Text, Button } from 'native-base';

export default function VerifiedPage () {
    return (
        <Center flex={1}>
            <Image source={require('../../image/check.png')} style={{width: 300, height: 300}} />
            <Text fontSize="xl" style={{ marginTop: '2%' }}>Congratulation!</Text>
            <Text fontSize="xl">We have verified your account.</Text>
            <Button style={{ marginTop: '10%' }}>Start by Setting up a Password</Button>
        </Center>
    );
}