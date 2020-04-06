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
        return get(URL.CONTACTS);
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
        // TODO: Cache
        const result = {
            contact: await get(URL.CONTACT_DETAILS.replace(':contactId', id)),
            addresses: await get(URL.ADDRESSES),
            phones: await get(URL.PHONES)
        }

        return result;
    }

}

export default ApiClient;