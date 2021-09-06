import React, { useEffect } from 'react';
import { Center, Box, Stack, ScrollView, Pressable, Heading, Text, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default function VaccineListPage ({route, navigation}: {route: any, navigation: any}) {
    const [vaccineList, setVaccineList] = React.useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('vaccines').doc(route.params.userId).get().then((doc) => {
            console.log(doc.data());
        });
    }, []);
    
    return(
        <Center style={{ marginTop: '10%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack space={5}>
                    <Pressable onPress={() => navigation.navigate("Certificate Page")}>
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
                            <Heading color='white'>Header Name</Heading>
                            <Text color='white'>Vaccine Code</Text>
                            <Stack direction="row">
                                <Stack style={{ width:'90%' }} direction="column">
                                    <Text mt={3} color='white'><Text bold color='white'>Type:</Text>    type name</Text>
                                    <Text color='white'><Text bold color='white'>Date:</Text>    00/00/0000</Text>
                                </Stack>
                                <Icon style={{ color: '#00ff40' }} mt={4} size='md' as={<Ionicons name="shield-checkmark-sharp" />} />
                            </Stack>
                        </Box>
                    </Pressable>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["violet.800", "lightBlue.400"],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p={7}
                        rounded="lg"
                        >
                            <Heading color='white'>Header Name</Heading>
                            <Text color='white'>Vaccine Code</Text>
                            <Text mt={3} color='white'><Text bold color='white'>Type:</Text>    type name</Text>
                            <Text color='white'><Text bold color='white'>Date:</Text>    00/00/0000</Text>
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
                    </Box>
                </Stack>
            </ScrollView>
        </Center>
    );
}