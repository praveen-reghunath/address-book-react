import { CONTACT_ACTION_TYPE } from 'redux/constants/actionTypes';
import API from 'services/api';

export function getAllContacts() {

    return async dispatch => {

        const {
            CONTACTS_FETCH_BEGIN,
            CONTACTS_FETCH_SUCCESS,
            CONTACTS_FETCH_FAILURE
        } = CONTACT_ACTION_TYPE;

        dispatch({ type: CONTACTS_FETCH_BEGIN });

        try {
            const contactData = await API.getAllContacts();
            dispatch({ type: CONTACTS_FETCH_SUCCESS, payload: contactData });
        }
        catch (error) {
            console.log(error);
            dispatch({ type: CONTACTS_FETCH_FAILURE, payload: error });
        }
    }
}

export function selectContact(id, index) {

    return async dispatch => {

        const {
            CONTACT_DETAILS_FETCH_BEGIN,
            CONTACT_DETAILS_FETCH_SUCCESS,
            CONTACT_DETAILS_FETCH_FAILURE
        } = CONTACT_ACTION_TYPE;

        dispatch({ type: CONTACT_DETAILS_FETCH_BEGIN, payload: index });

        try {
            const data = await API.getContactDetails(id);
            const result = {
                ...data.contact,
                addresses: data.addresses,
                phones: data.phones
            }
            // console.log(result);
            dispatch({ type: CONTACT_DETAILS_FETCH_SUCCESS, payload: result });
        }
        catch (error) {
            console.log(error);
            dispatch({ type: CONTACT_DETAILS_FETCH_FAILURE, payload: error });
        }
    }
}