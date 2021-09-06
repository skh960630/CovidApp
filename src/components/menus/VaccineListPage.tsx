import React from 'react';
import { Center, Box, Stack, ScrollView, Pressable, Heading, Text } from "native-base";

export default function VaccineListPage ({route, navigation}: {route: any, navigation: any}) {
    console.log(route.params.userId);
    
    return(
        <Center style={{ marginTop: '10%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack space={5}>
                    <Pressable onPress={() => navigation.navigate("Certificate Page")}>
                        <Box
                            bg={{
                                linearGradient: {
                                colors: ["darkBlue.700", "lightBlue.500"],
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
                    </Pressable>
                    <Box
                        bg={{
                            linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
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