import React from 'react';
import { Center, Box, Stack, ScrollView, Pressable } from "native-base";

export default function VaccineListPage ({route, navigation}: {route: any, navigation: any}) {
    return(
        <Center style={{ marginTop: '10%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack space={5}>
                    <Pressable onPress={() => navigation.navigate("Certificate Page")}>
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
                    </Pressable>
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