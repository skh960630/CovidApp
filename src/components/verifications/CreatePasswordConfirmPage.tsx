import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Center, HStack, Button, Spinner } from 'native-base';

export default function CreatePasswordConfirmPage ({route, navigation}: {route: any, navigation: any}) {
    const [pinCode, setPinCode] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const submitBt = () => {
		setLoading(true);
		setTimeout(function () {
			setLoading(false);
			navigation.navigate("Main Page");
        }, 1000);
	}

    return (
        <Center flex={1}>
            <View>
               <Text style={styles.passcodeText}>Create Password</Text> 
            </View>
            <View style={styles.codeContainer}>
                <View style={styles.code}></View>
                <View style={styles.code}></View>
                <View style={styles.code}></View>
                <View style={styles.code}></View>
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
                    <View style={styles.numbers}>
                        <Text style={styles.numberText}>0</Text>
                    </View>
                </View>
            </View>
            <HStack space={2} style={{ marginTop: '15%' }} >
                <Button 
                    isDisabled={pinCode.length !== 4}
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
        fontFamily: 'SFProDisplay-Regular',
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
    code: {
        width: 20,
        height: 20,
        margin: 15,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#afdcec'
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
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 36,
        color: '#A2B5CD',
        letterSpacing: 0,
        textAlign: 'center'
    }
});