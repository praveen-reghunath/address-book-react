
const CONTACTS_FETCH_BEGIN = 'CONTACTS_FETCH_BEGIN';
const CONTACTS_FETCH_SUCCESS = 'CONTACTS_FETCH_SUCCESS';
const CONTACTS_FETCH_FAILURE = 'CONTACTS_FETCH_FAILURE';
const CONTACT_DETAILS_FETCH_BEGIN = 'CONTACT_DETAILS_FETCH_BEGIN';
const CONTACT_DETAILS_FETCH_SUCCESS = 'CONTACT_DETAILS_FETCH_SUCCESS';
const CONTACT_DETAILS_FETCH_FAILURE = 'CONTACT_DETAILS_FETCH_FAILURE';
const CONTACT_DETAILS_SAVE_BEGIN = 'CONTACT_DETAILS_SAVE_BEGIN';
const CONTACT_DETAILS_SAVE_SUCCESS = 'CONTACT_DETAILS_SAVE_SUCCESS';
const CONTACT_DETAILS_SAVE_FAILURE = 'CONTACT_DETAILS_SAVE_FAILURE';
const CONTACT_DETAILS_DELETE_BEGIN = 'CONTACT_DETAILS_DELETE_BEGIN';
const CONTACT_DETAILS_DELETE_SUCCESS = 'CONTACT_DETAILS_DELETE_SUCCESS';
const CONTACT_DETAILS_DELETE_FAILURE = 'CONTACT_DETAILS_DELETE_FAILURE';
const EDIT_CONTACT_DETAILS = 'EDIT_CONTACT_DETAILS';

export const CONTACT_ACTION_TYPE = Object.freeze({
    CONTACTS_FETCH_BEGIN,
    CONTACTS_FETCH_SUCCESS,
    CONTACTS_FETCH_FAILURE,
    CONTACT_DETAILS_FETCH_BEGIN,
    CONTACT_DETAILS_FETCH_SUCCESS,
    CONTACT_DETAILS_FETCH_FAILURE,
    CONTACT_DETAILS_SAVE_BEGIN,
    CONTACT_DETAILS_SAVE_SUCCESS,
    CONTACT_DETAILS_SAVE_FAILURE,
    CONTACT_DETAILS_DELETE_BEGIN,
    CONTACT_DETAILS_DELETE_SUCCESS,
    CONTACT_DETAILS_DELETE_FAILURE,
    EDIT_CONTACT_DETAILS
});