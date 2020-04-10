import { CONTACT_ACTION_TYPE } from 'redux/constants/actionTypes';

const {
    CONTACTS_FETCH_BEGIN,
    CONTACTS_FETCH_SUCCESS,
    CONTACTS_FETCH_FAILURE,
    CONTACT_DETAILS_FETCH_BEGIN,
    CONTACT_DETAILS_FETCH_SUCCESS,
    CONTACT_DETAILS_FETCH_FAILURE,
    REQUEST_EDIT_CONTACT,
    EDIT_CONTACT_CONTACT_CHANGED,
    DELETE_CONTACT
} = CONTACT_ACTION_TYPE;

const initialState = {
    contacts: [],
    addressTypes: [],
    phoneTypes: [],
    isContactsLoading: true,
    error: null,
    selectedContact: null,
    selectedContactIndex: -1,
    isContactDetailsLoading: true,
    selectedContactError: null
};

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case CONTACTS_FETCH_BEGIN: {
            return {
                ...state,
                isContactsLoading: true
            };
        }
        case CONTACTS_FETCH_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                isContactsLoading: false,
            };
        }
        case CONTACTS_FETCH_FAILURE: {
            return {
                ...state,
                isContactsLoading: false,
                error: action.payload,
            };
        }
        case CONTACT_DETAILS_FETCH_BEGIN: {
            const { contacts, selectedContactIndex } = state;
            const newIndex = action.payload;

            if (selectedContactIndex > -1) {
                contacts[selectedContactIndex].selected = false;
            }

            contacts[newIndex].selected = true;

            return {
                ...state,
                contacts: [...contacts],
                selectedContactIndex: newIndex,
                isContactDetailsLoading: true,
            };
        }
        case CONTACT_DETAILS_FETCH_SUCCESS: {
            return {
                ...state,
                selectedContact: { ...action.payload, isEditMode: false },
                isContactDetailsLoading: false,
            };
        }
        case CONTACT_DETAILS_FETCH_FAILURE: {
            return {
                ...state,
                selectedContactError: action.payload,
                isContactDetailsLoading: false,
            };
        }
        case REQUEST_EDIT_CONTACT: {
            return {
                ...state,
                selectedContact: { ...state.selectedContact, isEditMode: true },
            };
        }
        case EDIT_CONTACT_CONTACT_CHANGED: {
            return {
                ...state,
                selectedContact: { ...state.selectedContact }
            };
        }
        case DELETE_CONTACT: {
            const index = action.payload;
            const { contacts } = state;
            contacts.splice(index, 1);
            return {
                ...state,
                contacts: [...contacts],
                selectedContact: null,
                selectedContactIndex: -1,
                isContactDetailsLoading: false,
                selectedContactError: null
            };
        }
        default:
            return state;
    }
}