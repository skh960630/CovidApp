import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Center, HStack, Button, Spinner, Icon, Alert, Collapse } from 'native-base';
import { Feather } from "@expo/vector-icons"
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

export default function CreatePasswordConfirmPage ({route, navigation}: {route: any, navigation: any}) {
    const [pinCode, setPinCode] = React.useState(["", "", "", ""]);
    const [showError, setShowError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onPressNumber = (num : string) => {
        let tempCode = pinCode;
        for (var i = 0; i < tempCode.length; i++) {
            if (tempCode[i] == '') {
                tempCode[i] = num;
                break;
            }
        }
        setPinCode([...tempCode]);
    }

    const deleteNumber = () => {
        let tempCode = pinCode;
        for (var i = tempCode.length-1; i >= 0; i--) {
            if (tempCode[i] !== '') {
                tempCode[i] = '';
                break;
            }
        }
        setPinCode([...tempCode]);
    }

    const submitBt = () => {
		setLoading(true);
		setTimeout(function () {
            setLoading(false);
            if (route.params.userInfo.pinCode.toString() == pinCode.toString()) {
                const { userInfo } = route.params;
                firebase.auth().createUserWithEmailAndPassword(userInfo.email, pinCode.toString())
                .then((result) => {
                    firebase.firestore()
                    .collection('users')
                    .doc(result.user.uid)
                    .set({
                        firstName: userInfo.firstName,
                        middleName: userInfo.middleName,
                        lastName: userInfo.lastName,
                        email: userInfo.email,
                        pinCode: pinCode.toString()
                    });

                    firebase.firestore()
                    .collection('vaccines')
                    .doc(result.user.uid)
                    .set({
                        vaccineList: [{
                            code: 'Pfizer 0001A (1st Dose)',
                            name: 'Covid-19 Vaccine 1st Dose',
                            location: 'Sydney Olympic Park - Qudos Bank Stadium',
                            type: 'Pfizer-BioNTech COVID-19 Vaccine',
                            date: new Date(2021, 8, 29, 13, 0, 0)
                        }]
                    });

                    firebase.firestore()
                    .collection('covidTests')
                    .doc(result.user.uid)
                    .set({
                        testList: [{
                            name: 'Covid-19 test on 29/08/2021',
                            location: 'Sydney Olympic Park Drive-through Clinic',
                            result: 'Negative',
                            date: new Date(2021, 8, 29, 13, 0, 0)
                        }]
                    });
                    
                    const loginJson = {userId: result.user.uid, email: userInfo.email, password: pinCode.toString()};
                    setLoginLocal(loginJson);
                    navigation.reset({ index: 0, routes: [{name: 'Completed', params: { userId: result.user.uid }}] })
                })
                .catch((error) => {
                    console.log(error);
                });
            } else {
                setShowError(true);
                setPinCode(["", "", "", ""]);
            }
        }, 1000);
	}

    const setLoginLocal = async (loginData) => {
        try {
            await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        <Collapse isOpen={showError}>
            <Alert status='error' w="100%">
                <Alert.Icon />
                <Alert.Title flexShrink={1}>Password does not match</Alert.Title>
            </Alert>
        </Collapse>
        <Center flex={1}>
            <View>
               <Text style={styles.passcodeText}>Password Confirm</Text> 
            </View>
            <View style={styles.codeContainer}>
                {pinCode.map((p) => {
                    let codeStyle = p != '' ? styles.code2 : styles.code1;
                    return <View style={codeStyle}></View>
                })}
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.numbersContainer}>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("1")}>
                        <Text style={styles.numberText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("2")}>
                        <Text style={styles.numberText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("3")}>
                        <Text style={styles.numberText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("4")}>
                        <Text style={styles.numberText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("5")}>
                        <Text style={styles.numberText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("6")}>
                        <Text style={styles.numberText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("7")}>
                        <Text style={styles.numberText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("8")}>
                        <Text style={styles.numberText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("9")}>
                        <Text style={styles.numberText}>9</Text>
                    </TouchableOpacity>
                    <View style={styles.emptyNumber}>
                        <Text style={styles.numberText}></Text>
                    </View>
                    <TouchableOpacity style={styles.numbers} onPress={() => onPressNumber("0")}>
                        <Text style={styles.numberText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emptyNumber} onPress={() => deleteNumber()}>
                        <Icon size="lg" as={<Feather name="delete" />} color='#A2B5CD'/>
                    </TouchableOpacity>
                </View>
            </View>
            <HStack space={2} style={{ marginTop: '15%' }} >
                <Button
                    isDisabled={pinCode[3] == ""}
                    onPress={() => submitBt()}>
                    Confirm
                </Button>
                {loading && <Spinner />}
            </HStack>
        </Center>
        </>
    );
}

const styles = StyleSheet.create({
    passcodeText: {
        fontSize: 22,
        color: '#808080',
        letterSpacing: 0.34,
        lineHeight: 25
    },
    codeContainer: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between'
    },
    code1: {
        width: 20,
        height: 20,
        margin: 15,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#dbf3fa'
    },
    code2: {
        width: 20,
        height: 20,
        margin: 15,
        borderRadius: 13,
        backgroundColor: '#A2B5CD'
    },
    numbersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '5%',
        width: 282,
        height: 348,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyNumber: {
        width: 75,
        height: 75,
        margin: 9,
        borderRadius: 75,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numbers: {
        width: 75,
        height: 75,
        margin: 9,
        borderRadius: 75,
        backgroundColor: '#dbf3fa',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberText: {
        fontSize: 36,
        color: '#A2B5CD',
        letterSpacing: 0,
        textAlign: 'center'
    }
});