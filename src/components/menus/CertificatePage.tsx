import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { Center, Box, Text, Button, Stack, Divider } from "native-base";
import QRCode from 'react-native-qrcode-svg';
import CameraRoll from "@react-native-community/cameraroll";
import { captureScreen } from "react-native-view-shot";
import Mailer from 'react-native-mail';

export default function CertificatePage ({route, navigation}: {route: any, navigation: any}) {
    const [vaccineInfo, setVaccineInfo] = React.useState([]);
    const [testInfo, setTestInfo] = React.useState([]);
    const [userInfo, setUserInfo] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [back, setBack] = React.useState("");
    const [imageURI, setImageURI] = React.useState("");

    useEffect(() => {
        setUserInfo(route.params.userInfo);

        if (route.params.type === "vac") {
            setVaccineInfo(route.params.vacInfo);
            setTitle("Vaccine Certificate");
            setBack("Back to Vaccine list");
        } else if (route.params.type === "covidTest") {
            setTestInfo(route.params.testInfo);
            setTitle("Covid-19 test Certificate");
            setBack("Back to Covid-19 test list");
        }
    }, []);

    const handleEmail = () => {
        Mailer.mail({
            subject: 'Certificate',
            recipients: [route.params.userInfo.email],
            body: '<b>We have attached your cerficatification file.</b>',
            isHTML: true,
            attachment: {
                path: imageURI,  // The absolute path of the file from which to read data.
                type: 'png',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
                name: 'Certificate',   // Optional: Custom filename for attachment
            }
        }, (error, event) => {
            Alert.alert(
            error,
            event,
            [
                {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
                {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
            ],
            { cancelable: true }
            )
        })
    }

    const captureScreenFunction = () => {
        captureScreen({
            format: "png",
            quality: 0.8
        })
        .then(
            uri => setImageURI(uri),
            error => console.error("Oops, Something Went Wrong", error)
        );
    }

    const sendEmailFunction = () => {
        console.log(imageURI);
        handleEmail();
    }

    const ScreenFunction = () => {
        console.log(imageURI);
        CameraRoll.saveToCameraRoll(imageURI,'photo');
    }

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
                <Text fontSize="2xl" mt={8} color='white' bold>{title}</Text>
                <Box bg='white' rounded="lg" mt={4} style={{ height: '80%', width: '100%' }}>
                    {vaccineInfo.length != 0 ? (
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
                    :   testInfo.length != 0 && (
                        <Stack space={5} margin={4}>
                            <Text fontSize="lg" bold>{testInfo.name}</Text>
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
                                <Text fontSize="sm" bold color='black' style={{ width:'40%' }}>Result</Text>
                                <Text fontSize="sm" color='black' style={{ width:'60%', textAlign:'right' }}>{testInfo.result}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text fontSize="sm" bold color='black' style={{ width:'40%' }}>Location</Text>
                                <Text fontSize="sm" color='black' style={{ width:'60%', textAlign:'right' }}>{testInfo.location}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text fontSize="sm" bold color='black' style={{ width:'40%' }}>Date</Text>
                                <Text fontSize="sm" color='black' style={{ width:'60%', textAlign:'right' }}>{testInfo.date.toDate().toDateString()}</Text>
                            </Stack>
                            <Divider bg="black" my={2} />
                        </Stack>)
                    }
                    <Center flex={1}>
                        <QRCode
                            value={route.params.type+","+userInfo.userId}
                        />
                    </Center>
                    <Center mb={5}>
                        <Stack direction="row" mt={5} space={2}>
                            <Button size='sm' onPress={() => navigation.goBack()} colorScheme="teal">
                                Email me QR code
                            </Button>
                            <Button size='sm' 
                                onPress={() => {
                                    captureScreenFunction();
                                    sendEmailFunction();
                                    // ScreenFunction();
                                }}
                                colorScheme="teal">
                                Take a Screenshot
                            </Button>
                        </Stack>
                    </Center>
                </Box>
                <Button onPress={() => navigation.goBack()} colorScheme="blue">
                    {back}
                </Button>
            </Box>
        </Center>
    );
}