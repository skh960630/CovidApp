import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Center, HStack, Button, Spinner, Icon, IconButton } from 'native-base';
import { Feather } from "@expo/vector-icons"

export default function CreatePasswordPage ({route, navigation}: {route: any, navigation: any}) {
    const [pinCode, setPinCode] = React.useState(['', '', '', '']);
    const [loading, setLoading] = React.useState(false);

    const submitBt = () => {
		setLoading(true);
		setTimeout(function () {
			setLoading(false);
			navigation.navigate("Create Password Confirm", 
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
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>1</Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>2</Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>3</Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>4</Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>5</Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>6</Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>7</Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>8</Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>9</Text>
                    </View>
                    <View style={styles.emptyNumber}>
                        <Text style={styles.numberText}></Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>0</Text>
                    </View>
                    <View style={styles.emptyNumber}>
                        <IconButton
                            variant="solid"
                            backgroundColor='white'
                            icon={<Icon size="lg" as={<Feather name="delete" />} color='#A2B5CD'/>}
                        />
                    </View>
                </View>
            </View>
            <HStack space={2} style={{ marginTop: '15%' }} >
                <Button 
                    isDisabled={pinCode[4] !== ''}
                    onPress={() => submitBt()}>
                    Next
                </Button>
                {loading && <Spinner color="#41b3a3" />}
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
        borderWidth: 1,
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