import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Center, HStack, Button, Spinner, Icon } from 'native-base';
import { Feather } from "@expo/vector-icons"

export default function CreatePasswordPage ({route, navigation}: {route: any, navigation: any}) {
    const [pinCode, setPinCode] = React.useState(["", "", "", ""]);
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
			navigation.navigate("Password Confirm", 
                { userInfo: { ...route.params.userInfo, pinCode } });
        }, 1000);
	}

    return (
        <Center flex={1}>
            <View>
               <Text style={styles.passcodeText}>Create Password</Text> 
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
                    Next
                </Button>
                {loading && <Spinner />}
            </HStack>
        </Center>
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