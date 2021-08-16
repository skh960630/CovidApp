import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>Vaccine Passport</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    }
});