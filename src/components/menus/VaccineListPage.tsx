import React, { useEffect } from 'react';
import { Center, Box, Stack, ScrollView, Pressable, Spinner, Text, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default function VaccineListPage ({route, navigation}: {route: any, navigation: any}) {
    const [vaccineList, setVaccineList] = React.useState([]);
    const [userInfo, setUserInfo] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(true);
		setTimeout(function () {
            setLoading(false);
        }, 1000);

        const db = firebase.firestore();
        db.collection('vaccines').doc(route.params.userId).get().then((doc) => {
            setVaccineList(doc.data().vaccineList);
        });
        
        db.collection('users').doc(route.params.userId).get().then((doc) => {
            setUserInfo(doc.data());
        });
    }, []);
    
    return(
        <Center style={{ marginTop: '10%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack space={5}>
                    { loading ? <Spinner />
                    : 
                    (
                        vaccineList.length == 0 ? 
                            <Text>There are no vaccination history.</Text>
                        :
                            vaccineList.map((vac, index) => {
                                return (
                                <Pressable onPress={() => navigation.navigate("Certificate Page", { type: 'vac', vacInfo: vac, userInfo: {...userInfo, userId: route.params.userId }, index })}>
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
                                        <Text fontSize="2xl" color='white' bold>{vac.name}</Text>
                                        <Text fontSize="sm" color='white'>{vac.code}</Text>
                                        <Stack direction="row" mt={5}>
                                            <Stack style={{ width:'90%' }} direction="column">
                                                <Stack direction="row">
                                                    <Text fontSize="sm" style={{ width:'15%' }} bold color='white'>Type:</Text>
                                                    <Text fontSize="sm" style={{ width:'85%' }} color='white'>{vac.type}</Text>
                                                </Stack>
                                                <Stack direction="row">
                                                    <Text fontSize="sm" style={{ width:'15%' }} bold color='white'>Date:</Text>
                                                    <Text fontSize="sm" style={{ width:'85%' }} color='white'>{vac.date.toDate().toDateString()}</Text>
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