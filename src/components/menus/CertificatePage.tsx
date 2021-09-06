import React, { useEffect } from 'react';
import { Center, Box, Text, Button, Stack, Divider } from "native-base";

export default function CertificatePage ({route, navigation}: {route: any, navigation: any}) {
    const [vaccineInfo, setVaccineInfo] = React.useState([]);
    const [userInfo, setUserInfo] = React.useState([]);
    console.log(vaccineInfo);
    console.log(userInfo);

    useEffect(() => {
        setUserInfo(route.params.userInfo);

        if (route.params.type === "vac") {
            setVaccineInfo(route.params.vacInfo);
        } else if (route.params.type === "covidTest") {

        }
    }, []);

    return(
        <Center>
            <Box
                bg={{
                    linearGradient: {
                    colors: ["darkBlue.700", "lightBlue.500"],
                    start: [0, 0],
                    end: [1, 0],
                    },
                }}
                p={12}
                style={{ height: '100%', width: '100%' }}
            >
                <Text fontSize="2xl" mt={8} color='white' bold>Vaccine Certificate</Text>
                <Box bg='white' rounded="lg" mt={4} style={{ height: '80%', width: '100%' }}>
                    {vaccineInfo.length != 0 && (
                        <Stack space={5} margin={4}>
                            <Text fontSize="lg" bold>{vaccineInfo.name}</Text>
                            <Divider my={2} />
                            <Stack direction="row">
                                <Text fontSize="sm" bold color='black' style={{ width:'23%' }}>Name</Text>
                                <Text fontSize="sm" color='black' style={{ width:'77%', textAlign:'right' }}>
                                    {userInfo.middleName.length == 0 ?
                                        userInfo.firstName+" "+userInfo.lastName
                                        : userInfo.firstName+" "+userInfo.middleName+" "+userInfo.lastName}
                                </Text>
                            </Stack>
                            <Stack direction="row">
                                <Text fontSize="sm" bold color='black' style={{ width:'30%' }}>User ID</Text>
                                <Text fontSize="sm" color='black' style={{ width:'70%', textAlign:'right' }}>{userInfo.userId}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text fontSize="sm" bold color='black' style={{ width:'40%' }}>Code</Text>
                                <Text fontSize="sm" color='black' style={{ width:'60%', textAlign:'right' }}>{vaccineInfo.code}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text fontSize="sm" bold color='black' style={{ width:'40%' }}>Type</Text>
                                <Text fontSize="sm" color='black' style={{ width:'60%', textAlign:'right' }}>{vaccineInfo.type}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text fontSize="sm" bold color='black' style={{ width:'40%' }}>Location</Text>
                                <Text fontSize="sm" color='black' style={{ width:'60%', textAlign:'right' }}>{vaccineInfo.location}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text fontSize="sm" bold color='black' style={{ width:'40%' }}>Date</Text>
                                <Text fontSize="sm" color='black' style={{ width:'60%', textAlign:'right' }}>{vaccineInfo.date.toDate().toDateString()}</Text>
                            </Stack>
                            <Divider bg="black" my={2} />
                        </Stack>)
                    }
                    <Button onPress={() => navigation.goBack()} colorScheme="green">
                        Email me
                    </Button>
                </Box>
                <Button onPress={() => navigation.goBack()} colorScheme="blue">
                    Back to Vaccine list
                </Button>
            </Box>
        </Center>
    );
}