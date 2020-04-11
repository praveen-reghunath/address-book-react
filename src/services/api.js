import { URL } from 'constants/index';

async function serverRequest(url, params) {
    const response = await fetch(url, params);
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    else {
    }
}

async function get(url) {
    return serverRequest(url, { method: 'GET' });
}

async function post(url, data) {
    return serverRequest(url, { method: 'POST', body: JSON.stringify(data) });
}

class ApiClient {

    static async getAllContacts() {
        return {
            contacts: await get(URL.CONTACTS),
            addressTypes: await get(URL.ADDRESS_TYPES),
            phoneTypes: await get(URL.PHONE_TYPES),
        }
    }

    static async saveContact(contact, mode = 'CREATE') {
        if (mode === 'CREATE') {
            return post(URL.CONTACTS, contact);
        }
        else {
            return post(URL.CONTACTS.replace(':contactId', contact.id), contact);
        }
    }

    static async getContactDetails(id) {
        return get(URL.CONTACT_DETAILS.replace(':contactId', id));
    }

}

export default ApiClient;