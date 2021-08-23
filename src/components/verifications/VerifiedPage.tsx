import React from 'react';
import { Image } from 'react-native';
import { Center, Text, Button } from 'native-base';

export default function VerifiedPage ({route, navigation}: {route: any, navigation: any}) {
    console.log(route.params);

    return (
        <Center flex={1}>
            <Image source={require('../../image/check.png')} style={{width: 300, height: 300}} />
            <Text fontSize="xl" style={{ marginTop: '2%' }}>Congratulation!</Text>
            <Text fontSize="xl">We have verified your identify.</Text>
            <Button style={{ marginTop: '10%' }} colorScheme="secondary" onPress={() => navigation.navigate("Create Email", { userInfo: route.params.userInfo } )}>Start by Setting up an Account</Button>
        </Center>
    );
}