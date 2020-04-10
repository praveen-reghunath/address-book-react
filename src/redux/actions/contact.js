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
            const data = await API.getAllContacts();
            dispatch({ type: CONTACTS_FETCH_SUCCESS, payload: data });
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

export function requestEditContact(id) {

    return async dispatch => {
        const {
            REQUEST_EDIT_CONTACT,
        } = CONTACT_ACTION_TYPE;

        dispatch({ type: REQUEST_EDIT_CONTACT, payload: id });

    }
}

export function onContactChange(contact) {

    return async dispatch => {
        const {
            EDIT_CONTACT_CONTACT_CHANGED,
        } = CONTACT_ACTION_TYPE;

        dispatch({ type: EDIT_CONTACT_CONTACT_CHANGED, payload: contact });

    }
}

export function saveContact(contact) {

    return async dispatch => {
        const {
            EDIT_CONTACT_CONTACT_CHANGED,
        } = CONTACT_ACTION_TYPE;

        dispatch({ type: EDIT_CONTACT_CONTACT_CHANGED, payload: contact });

    }
}

export function deleteContact(id, index) {

    return async dispatch => {
        const {
            DELETE_CONTACT,
        } = CONTACT_ACTION_TYPE;

        // API Call.

        dispatch({ type: DELETE_CONTACT, payload: index });

    }
}

