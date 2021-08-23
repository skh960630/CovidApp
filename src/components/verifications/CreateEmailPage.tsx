import React from 'react';
import { Center, Text, Button, FormControl, TextField, Spinner, HStack } from 'native-base';

export default function CreateEmailPage ({route, navigation}: {route: any, navigation: any}) {
    const [email, setEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const submitBt = () => {
		setLoading(true);
		setTimeout(function () {
			setLoading(false);
			navigation.navigate("Create Password", { userInfo: { ...route.params.userInfo, email } })
        }, 1000);
	}

    return (
        <Center flex={1} style={{marginLeft: '5%', marginRight: '5%'}}>
            <Text fontSize="xl">Please type your email address.</Text>
            <FormControl isRequired style={{ marginTop: '10%' }}>
                <TextField
                    bg="#fff"
                    isInvalid={email !== null ? (email.length > 0 ? false : true) : false}
                    value={email}
                    onChangeText={(t) => setEmail(t.toLowerCase().trim())}
                    placeholder="Email Address"
                    errorMessage="Please fill out."
                />
            </FormControl>
            <HStack space={2} style={{ marginTop: '5%' }} >
                <Button 
                    isDisabled={email.length == 0 || !re.test(email) || loading}
                    colorScheme="secondary"
                    onPress={() => submitBt()}>
                    Next
                </Button>
                {loading && <Spinner color="#c70039" />}
            </HStack>
        </Center>
    );
}