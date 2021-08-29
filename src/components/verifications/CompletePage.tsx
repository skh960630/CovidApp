import React from 'react';
import { Image } from 'react-native';
import { Center, Text, Button } from 'native-base';

export default function CompletePage ({route, navigation}: {route: any, navigation: any}) {
    return (
        <Center flex={1}>
            <Image source={require('../../image/check.png')} style={{width: 300, height: 300}} />
            <Text fontSize="xl" style={{ marginTop: '2%' }}>Congratulation!</Text>
            <Text fontSize="xl">You have successfully create an account.</Text>
            <Button style={{ marginTop: '10%' }} onPress={() => navigation.navigate("Main Page")}>Go to Main page</Button>
        </Center>
    );
}