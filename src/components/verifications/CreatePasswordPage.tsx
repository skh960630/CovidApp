import React from 'react';
import { Center, Text, Button } from 'native-base';

export default function CreatePasswordPage ({route, navigation}: {route: any, navigation: any}) {
    const [pinCode, setPinCode] = React.useState("");

    return (
        <Center flex={1}>
            <Text>Password page</Text>
        </Center>
    );
}