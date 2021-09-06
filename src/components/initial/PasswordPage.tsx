import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Center, Icon, Alert, Collapse } from 'native-base';
import { Feather } from "@expo/vector-icons"

export default function PasswordPage({route, navigation}: {route: any, navigation: any}) {
    const [pinCode, setPinCode] = React.useState(["", "", "", ""]);
    const [password, setPassword] = React.useState(["", "", "", ""]);
    const [showError, setShowError] = React.useState(false);

    useEffect(() => {
        setPassword(route.params.password.split(","));
    }, []);

    const onPressNumber = (num : string) => {
        let tempCode = pinCode;
        for (var i = 0; i < tempCode.length; i++) {
            if (tempCode[i] == '') {
                tempCode[i] = num;
                if (i === 3) {
                    submitBt();
                }
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
		setTimeout(function () {
            if (JSON.stringify(password) === JSON.stringify(pinCode)) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Main Page',  params: { userId: route.params.userId } }]
                });
            } else {
                setShowError(true);
            }
        }, 500);
	}

    return (
        <ImageBackground source={require('../../image/mainBg.png')} resizeMode="cover" style={styles.image}>
            <Center flex={1}>
                <View>
                    <Text style={styles.passcodeText}>Please enter your password</Text> 
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
                <Collapse isOpen={showError} style={{ marginTop: '10%' }}>
                    <Alert status='error' w="100%">
                        <Alert.Icon />
                        <Alert.Title flexShrink={1}>Wrong Password</Alert.Title>
                    </Alert>
                </Collapse>
            </Center>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
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