const express = require('express');
const faker = require('faker');

const { URL } = require('../src/constants/index');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

server.timeout = 1000 * 60 * 2; // 2 minutes

const addressTypes = require('./data/addressTypes.json');
const phoneTypes = require('./data/phoneTypes.json');

app.use(function (request, response, next) {
    response.set('Content-Type', 'application/json');
    let message = `Incoming API request: ${request.originalUrl}`;
    console.log(message);
    next();
});

app.get(URL.CONTACTS, (request, response) => {
    const contacts = [];
    for (let index = 0; index < 5; index++) {
        const contact = {
            id: index,
            firstName: faker.name.firstName,
            lastName: faker.name.lastName
        }
        contacts.push(contact);
    }
    response.json(contacts);
});

function getRandomType(type) {
    const addressType = faker.helpers.randomize(type);
    return addressType;
}

app.get(URL.CONTACT_DETAILS, (request, response) => {
    const contactId = request.params.contactId;
    const result = {
        id: contactId,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        addresses: [],
        phones: []
    };

    let addressCount = faker.random.number({ min: 1, max: 3 });
    for (let index = 0; index < addressCount; index++) {
        const addressType = getRandomType(addressTypes);
        const address = {
            id: index,
            addressType: addressType.id,
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            postalCode: faker.address.zipCode()
        }
        result.addresses.push(address);
    }

    let phoneCount = faker.random.number({ min: 1, max: 3 });
    for (let index = 0; index < phoneCount; index++) {
        const phoneType = getRandomType(phoneTypes);
        const address = {
            id: index,
            phoneType: phoneType.id,
            phoneNumber: faker.phone.phoneNumber()
        }
        result.addresses.push(address);
    }
    response.json(result);
});

const server = app.listen(port, "localhost");

console.log("Server is running @ http://localhost:" + port);