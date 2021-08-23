import React from 'react';
import { Image } from 'react-native';
import { Center, Text, Button } from 'native-base';
import PINCode from '@haskkor/react-native-pincode';

export default function CreatePasswordPage ({route, navigation}: {route: any, navigation: any}) {
    const [pinCode, setPinCode] = React.useState("");

    return (
        <Center flex={1}>
            <PINCode 
                status={pinCode} 
                touchIDDisabled={true} 
            /> 
        </Center>
    );
}