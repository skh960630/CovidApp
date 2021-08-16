import React from 'react';
import { View } from "react-native";
import { Text, FormControl, Select, Container, Divider, Stack, CheckIcon, TextField, Checkbox, Button, Icon, Input } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function DriverLicensePage() {
    const [state, setState] = React.useState("New South Wales");
    const [driverNo, setDriverNo] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [middleName, setMiddleName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
	const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
	const [birth, setBirth] = React.useState("DD/MM/YYYY");
	const [confirm, setConfirm] = React.useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};
	
	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	}
	
	const handleConfirm = (date) => {
		var dd = String(date.getDate()).padStart(2, '0');
		var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = date.getFullYear();
		setBirth(dd + '/' + mm + '/' + yyyy);
		hideDatePicker();
	};

    return (
        <>
            <Container style={{ marginTop: '5%' }}>
                <Text fontSize='2xl' style={{ fontFamily: 'Menlo-Italic'}} style={{ marginLeft: '4%' }}>Driver License</Text>
            </Container>
            <Divider my={3} bg="grey" style={{ marginBottom: '7%' }} />
            <Stack space={3} alignItems="center" style={{marginLeft: '2%', marginRight: '2%'}}>
                <FormControl>
                    <FormControl.Label>State Issued</FormControl.Label>
                    <Select
                        style={{ width: '100%', backgroundColor: 'white' }}
                        selectedValue={state}
                        minWidth={200}
                        accessibilityLabel="Select nationality on your passport"
                        placeholder="Select nationality on your passport"
                        onValueChange={(itemValue) => {
                            setState(itemValue)
                        }}
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />,
                        }}
                        mt={1}
                    >
                        {stateList.map((s) => {
                            return (<Select.Item label={s} value={s} />);
                        })}
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Driver License No.</FormControl.Label>
                    <TextField
						bg="#fff"
                        isInvalid={driverNo !== null ? (driverNo.length > 0 ? false : true) : false}
                        value={driverNo}
                        onChangeText={(t) => /^[a-z]+$/i.test(t.charAt(t.length-1)) ? 
                            setDriverNo(t.toUpperCase()) 
                            : (!isNaN(t.charAt(t.length-1)) && t.charAt(t.length-1) != ' '
                            ? setDriverNo(t)
                            : console.log('Invalid Symbol'))}
                        placeholder="Driver License Number"
                        helperText="Only use Alphabets and Numbers without any spaces"
                        errorMessage="Please fill out."
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>First Name</FormControl.Label>
                    <TextField
						bg="#fff"
                        isInvalid={firstName && firstName.length > 0 ? false : true}
                        value={firstName}
                        onChangeText={(t) => /^[a-z]+$/i.test(t.charAt(t.length-1)) || t.charAt(t.length-1) == ' ' || t.length == 0 ? 
                            setFirstName(t.toUpperCase()) 
                            : console.log('Invalid Symbol')}
                        placeholder="First Name"
                        helperText="Only use Alphabets"
                        errorMessage="Please fill out."
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Middle Name <Text fontSize='sm'>(required if you have one)</Text></FormControl.Label>
                    <TextField
						bg="#fff"
                        value={middleName}
                        onChangeText={(t) => /^[a-z]+$/i.test(t.charAt(t.length-1)) || t.charAt(t.length-1) == ' ' || t.length == 0 ? 
                            setMiddleName(t.toUpperCase()) 
                            : console.log('Invalid Symbol')}
                        placeholder="Middle Name"
                        helperText="Only use Alphabets"
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Last Name</FormControl.Label>
                    <TextField
						bg="#fff"
                        isInvalid={lastName && lastName.length > 0 ? false : true}
                        value={lastName}
                        onChangeText={(t) => /^[a-z]+$/i.test(t.charAt(t.length-1)) || t.charAt(t.length-1) == ' ' || t.length == 0 ? 
                            setLastName(t.toUpperCase()) 
                            : console.log('Invalid Symbol')}
                        placeholder="Last Name"
                        helperText="Only use Alphabets"
                        errorMessage="Please fill out."
                    />
                </FormControl>
				<FormControl isRequired>
                    <FormControl.Label>Date of Birth <Text fontSize='sm'>(DD/MM/YYYY)</Text></FormControl.Label>
					<View>
						<Input
							bg="#fff"
							editable={false}
							value={birth}
							InputRightElement={<Icon onPress={showDatePicker} size='sm' m={2} as={<AntDesign name="calendar" />} />}
						/>
						<DateTimePickerModal
							isVisible={isDatePickerVisible}
							mode="date"
							onConfirm={(c) => handleConfirm(c)}
							onCancel={hideDatePicker}
						/>
					</View>
                </FormControl>
				<Checkbox.Group>
					<Checkbox value='confirm' colorScheme="info" onChange={() => setConfirm(!confirm)}>I understand that 'NSW Vaccine Passport' will use my above information for the verification process.</Checkbox>
				</Checkbox.Group>
				<Button colorScheme="emerald" isDisabled={driverNo.length == 0 || firstName.length == 0 || lastName.length == 0 || birth.charAt(0) =='D' || !confirm}>Verify these details</Button>
            </Stack>
        </>
    );
}

const stateList = [
	"New South Wales",
    "Queensland",
    "Northen Territory",
    "Tasmania",
    "Victoria",
    "Western Australia",
    "South Australia"
];