import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Center } from 'native-base';
import { AsyncStorage } from 'react-native';

export default function SplashPage ({navigation}: {navigation: any}) {
    useEffect(() => {
        NavigateToMainOrRegistrationPage();
    }, [navigation])

    const NavigateToMainOrRegistrationPage = async() => {
        let currentUser = null;
        try {
            currentUser = await AsyncStorage.getItem('loginData');
        } catch (e) {
            console.log(e);
        }
        
        setTimeout(function(){
            if (currentUser != null) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Password Page',  params: JSON.parse(currentUser) }]
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Options'}]
                });
            }
        }, 2000);
    }

    return (
        <ImageBackground source={require('../../image/mainBg.png')} resizeMode="cover" style={styles.image}>
            <Center flex={1}>
                <Image source={require('../../image/logo_v2.png')} style={{width: 200, height: 200}} />
            </Center>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
});