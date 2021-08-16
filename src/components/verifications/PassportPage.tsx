import React from 'react';
import { Text, FormControl, Select, Container, Divider, Stack, CheckIcon, TextField, Checkbox } from 'native-base';

export default function PassportPage() {
    const [nationality, setNationality] = React.useState("Australia");
    const [passportNo, setPassportNo] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [middleName, setMiddleName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
	const [birth, setBirth] = React.useState("");
	const [confirm, setConfirm] = React.useState(false);

    return (
        <>
            <Container style={{ marginTop: '5%' }}>
                <Text fontSize='2xl' style={{ fontFamily: 'Menlo-Italic'}}>Australian Passport</Text>
            </Container>
            <Divider my={3} bg="grey" style={{ marginBottom: '7%' }} />
            <Stack space={3} alignItems="center">
                <FormControl>
                    <FormControl.Label>Nationality</FormControl.Label>
                    <Select
                        selectedValue={nationality}
						isDisabled
                        minWidth={200}
                        accessibilityLabel="Select nationality on your passport"
                        placeholder="Select nationality on your passport"
                        onValueChange={(itemValue) => {
                            setNationality(itemValue)
                        }}
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />,
                        }}
                        mt={1}
                    >
                        {countryList.map((c) => {
                            return (<Select.Item label={c} value={c} />);
                        })}
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Passport No.</FormControl.Label>
                    <TextField
                        isInvalid={passportNo !== null ? (passportNo.length > 0 ? false : true) : false}
                        value={passportNo}
                        onChangeText={(t) => /^[a-z]+$/i.test(t.charAt(t.length-1)) ? 
                            setPassportNo(t.toUpperCase()) 
                            : (!isNaN(t.charAt(t.length-1)) && t.charAt(t.length-1) != ' '
                            ? setPassportNo(t)
                            : console.log('Invalid Symbol'))}
                        placeholder="Passport Number"
                        helperText="Only use Alphabets and Numbers without any spaces"
                        errorMessage="Please fill out."
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>First Name</FormControl.Label>
                    <TextField
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
                    <FormControl.Label>Middle Name <Text fontSize='xs'>(required if you have one)</Text></FormControl.Label>
                    <TextField
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
                    <FormControl.Label>Date of Birth</FormControl.Label>
                    
                </FormControl>
				<Checkbox.Group>
					<Checkbox value='confirm' onChange={() => setConfirm(!confirm)}>I understand that 'NSW Vaccine Passport' will use my above information for the verification process.</Checkbox>
				</Checkbox.Group>
            </Stack>
        </>
    );
}

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];