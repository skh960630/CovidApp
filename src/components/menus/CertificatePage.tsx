import React from 'react';
import { Center, Container, Box, Stack } from "native-base";

export default function CertificatePage ({route, navigation}: {route: any, navigation: any}) {
    return(
        <Container bg={{
            linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0],
            },
        }}>
            <Center style={{ marginTop: '10%' }}>
            </Center>
        </Container>
    );
}