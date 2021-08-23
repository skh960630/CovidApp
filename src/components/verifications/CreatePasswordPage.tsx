import React from 'react';
import { Image } from 'react-native';
import { Center, Text, Button } from 'native-base';
import PinView from 'react-native-pin-view';

export default function CreatePasswordPage ({route, navigation}: {route: any, navigation: any}) {
    return (
        <Center flex={1}>
            <PinView
                password={ [1, 3, 5, 7, 9] }
                onSuccess={ ()=>{alert("SUCCESS")} }
                onFailure={ ()=>{alert("FAILURE")} }
            />
        </Center>
    );
}