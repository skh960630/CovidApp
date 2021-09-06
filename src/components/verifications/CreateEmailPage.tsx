import React from 'react';
import { Center, Text, Button, FormControl, TextField, Spinner, HStack, Collapse, Alert } from 'native-base';
import * as firebase from 'firebase';

export default function CreateEmailPage ({route, navigation}: {route: any, navigation: any}) {
    const [email, setEmail] = React.useState("");
    const [showError, setShowError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const submitBt = () => {
        let usedEmail = 0;

        firebase.auth()
            .fetchSignInMethodsForEmail(email)
            .then((result) => {
                if (result.length > 0) {
                    console.log(result);
                    usedEmail++;
                }
            });
		setLoading(true);
		setTimeout(function () {
			setLoading(false);
            console.log(usedEmail);
            if (usedEmail > 0) {
                setShowError('Email already exists');
            } else {
                navigation.navigate("Create Password", { userInfo: { ...route.params.userInfo, email } });
            }
        }, 2000);
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
                    bgColor="teal.600"
                    onPress={() => submitBt()}>
                    Set up a Password
                </Button>
                {loading && <Spinner color="#41b3a3" />}
            </HStack>
            <Collapse mt={5} isOpen={showError != null}>
                <Alert status='error' w="100%">
                    <Alert.Icon />
                    <Alert.Title flexShrink={1}>{showError}</Alert.Title>
                </Alert>
            </Collapse>
        </Center>
    );
}