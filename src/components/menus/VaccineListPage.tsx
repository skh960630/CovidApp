import React, { useEffect } from 'react';
import { Center, Box, Stack, ScrollView, Pressable, Heading, Text, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default function VaccineListPage ({route, navigation}: {route: any, navigation: any}) {
    const [vaccineList, setVaccineList] = React.useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('vaccines').doc(route.params.userId).get().then((doc) => {
            setVaccineList(doc.data().vaccineList);
        });
    }, []);
    
    return(
        <Center style={{ marginTop: '10%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack space={5}>
                    {vaccineList.map((vac) => {
                        return (
                        <Pressable onPress={() => navigation.navigate("Certificate Page", { type: 'vac', vacInfo: vac })}>
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
                                    <Stack style={{ width:'90%' }} direction="row">
                                        <Stack direction="column" style={{ width:'20%' }}>
                                            <Text fontSize="sm" bold color='white'>Type:</Text>
                                            <Text fontSize="sm" bold color='white'>Date:</Text>
                                        </Stack>
                                        <Stack direction="column" style={{ width:'70%' }}>
                                            <Text fontSize="sm" color='white'>{vac.type}</Text>
                                            <Text fontSize="sm" color='white'>{vac.date.toDate().toDateString()}</Text>
                                        </Stack>
                                    </Stack>
                                    <Icon style={{ color: '#00ff40' }} size='md' as={<Ionicons name="shield-checkmark-sharp" />} />
                                </Stack>
                            </Box>
                        </Pressable>);
                    })}

                    {/* <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box><Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={12}
                        rounded="lg"
                        _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        >
                        This is a Box with Linear Gradient
                    </Box> */}
                </Stack>
            </ScrollView>
        </Center>
    );
}