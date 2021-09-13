import React, { useEffect } from 'react';
import { Center, Box, Stack, ScrollView, Pressable, Spinner, Text, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default function CovidTestListPage ({route, navigation}: {route: any, navigation: any}) {
    const [testList, setTestList] = React.useState([]);
    const [userInfo, setUserInfo] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(true);
		setTimeout(function () {
            setLoading(false);
        }, 1000);
        
        const db = firebase.firestore();
        db.collection('covidTests').doc(route.params.userId).get().then((doc) => {
            setTestList(doc.data().testList);
        });
        
        db.collection('users').doc(route.params.userId).get().then((doc) => {
            setUserInfo(doc.data());
        });
    }, []);
    
    return(
        <Center style={{ marginTop: '10%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack space={5}>
                    {loading ? <Spinner />
                    : 
                    (
                        testList == undefined || testList.length == 0 ? 
                            <Text>There are no Covid-19 test history.</Text>
                        :
                        testList.map((test, index) => {
                                return (
                                <Pressable onPress={() => navigation.navigate("Certificate Page", { type: 'covidTest', testInfo: test, userInfo: {...userInfo, userId: route.params.userId, index } })}>
                                    <Box
                                        bg={{
                                            linearGradient: {
                                            colors: ["violet.800", "lightBlue.400"], // "darkBlue.700", "lightBlue.500"
                                            start: [0, 0],
                                            end: [1, 0],
                                            },
                                        }}
                                        p={7}
                                        rounded="lg"
                                        >
                                        <Text fontSize="2xl" color='white' bold>{test.name}</Text>
                                        <Stack direction="row" mt={5}>
                                            <Stack style={{ width:'90%' }} direction="column">
                                                <Stack direction="row">
                                                    <Text fontSize="sm" style={{ width:'20%' }} bold color='white'>Result:</Text>
                                                    <Text fontSize="sm" style={{ width:'80%' }} color='white'>{test.result}</Text>
                                                </Stack>
                                                <Stack direction="row">
                                                    <Text fontSize="sm" style={{ width:'20%' }} bold color='white'>Date:</Text>
                                                    <Text fontSize="sm" style={{ width:'80%' }} color='white'>{test.date.toDate().toDateString()}</Text>
                                                </Stack>
                                            </Stack>
                                            <Icon style={{ color: '#00ff40' }} size='md' as={<Ionicons name="shield-checkmark-sharp" />} />
                                        </Stack>
                                    </Box>
                                </Pressable>);
                            })
                    )}
                </Stack>
            </ScrollView>
        </Center>
    );
}