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
            const contact = await API.getContactDetails(id);

            dispatch({ type: CONTACT_DETAILS_FETCH_SUCCESS, payload: contact });
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

export function requestNewContact() {

    return async dispatch => {
        const {
            REQUEST_NEW_CONTACT,
        } = CONTACT_ACTION_TYPE;

        dispatch({ type: REQUEST_NEW_CONTACT });

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

export function saveContact(contactDetails, index) {

    return async dispatch => {

        const {
            SAVE_CONTACT_BEGIN,
            SAVE_CONTACT_SUCCESS,
            SAVE_CONTACT_FAILURE
        } = CONTACT_ACTION_TYPE;

        dispatch({ type: SAVE_CONTACT_BEGIN });

        try {
            const { firstName, lastName } = contactDetails;
            contactDetails = await API.saveContact(contactDetails);
            const contact = { id: contactDetails.id, firstName, lastName };
            dispatch({ type: SAVE_CONTACT_SUCCESS, payload: { contact, contactDetails, index } });
        }
        catch (ex) {
            dispatch({ type: SAVE_CONTACT_FAILURE, payload: ex });
        }
    }
}

export function deleteContact(id, index) {

    return async dispatch => {
        const {
            DELETE_CONTACT_BEGIN,
            DELETE_CONTACT_SUCCESS,
            DELETE_CONTACT_FAILURE
        } = CONTACT_ACTION_TYPE;

        dispatch({ type: DELETE_CONTACT_BEGIN, payload: index });

        try {

            await API.deleteContact(id);
            dispatch({ type: DELETE_CONTACT_SUCCESS, payload: index });
        }
        catch (ex) {
            dispatch({ type: DELETE_CONTACT_FAILURE, payload: ex });
        }

    }
}

