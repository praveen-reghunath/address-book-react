const CONTACTS = '/contacts';
const CONTACT_DETAILS = '/contacts/:contactId';
const ADDRESSES = '/addresses';
const PHONES = '/phones';
const ADDRESS_TYPES = '/addressTypes';
const PHONE_TYPES = '/phoneTypes';

// TODO: follow REST principles.
// Redesign the API end Points like bellow.
// const CONTACTS = '/contacts';
// const CONTACT = '/contacts/122';
// const ADDRESSES = '/contacts/122/addresses';
// const ADDRESS = '/contacts/122/addresses/2';
// const PHONES = '/contacts/122/phones';
// const PHONE = '/contacts/122/phones/4';

export const URL = Object.freeze({
    CONTACTS,
    CONTACT_DETAILS,
    ADDRESSES,
    PHONES,
    ADDRESS_TYPES,
    PHONE_TYPES
});