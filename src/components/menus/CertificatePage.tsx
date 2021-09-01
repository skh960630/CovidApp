import React from 'react';
import { Center, Box, Text, Button } from "native-base";

export default function CertificatePage ({route, navigation}: {route: any, navigation: any}) {
    return(
        <Center>
            <Box
                bg={{
                    linearGradient: {
                    colors: ["lightBlue.300", "violet.800"],
                    start: [0, 0],
                    end: [1, 0],
                    },
                }}
                p={12}
                style={{ height: '100%', width: '100%' }}
                >
                <Box bg='white' width={500} shadow={1} rounded="lg" style={{ height: '90%', width: '100%' }}>
                    <Text>HELLO</Text>
                    <Button>Back to the list</Button>
                </Box>
            </Box>
        </Center>
    );
}