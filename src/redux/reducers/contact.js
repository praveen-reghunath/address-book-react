import { CONTACT_ACTION_TYPE } from 'redux/constants/actionTypes';

const {
    CONTACTS_FETCH_BEGIN,
    CONTACTS_FETCH_SUCCESS,
    CONTACTS_FETCH_FAILURE,
    CONTACT_DETAILS_FETCH_BEGIN,
    CONTACT_DETAILS_FETCH_SUCCESS,
    CONTACT_DETAILS_FETCH_FAILURE,
    REQUEST_EDIT_CONTACT,
    REQUEST_NEW_CONTACT,
    EDIT_CONTACT_CONTACT_CHANGED,
    DELETE_CONTACT_BEGIN,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE,
    SAVE_CONTACT_BEGIN,
    SAVE_CONTACT_FAILURE,
    SAVE_CONTACT_SUCCESS,
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
        case REQUEST_NEW_CONTACT: {
            const { contacts, selectedContactIndex } = state;

            if (selectedContactIndex > -1) {
                contacts[selectedContactIndex].selected = false;
            }

            return {
                ...state,
                selectedContact: { phones: [], addresses: [], isEditMode: true },
                selectedContactIndex: -1,
                contacts: [...contacts]
            };
        }
        case EDIT_CONTACT_CONTACT_CHANGED: {
            return {
                ...state,
                selectedContact: { ...state.selectedContact }
            };
        }
        case DELETE_CONTACT_BEGIN: {
            return {
                ...state,
            };
        }
        case DELETE_CONTACT_SUCCESS: {
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
        case DELETE_CONTACT_FAILURE: {
            return {
                ...state,
            };
        }
        case SAVE_CONTACT_BEGIN: {
            return {
                ...state,
                isContactDetailsLoading: true
            };
        }
        case SAVE_CONTACT_FAILURE: {
            return {
                ...state,
                isContactDetailsLoading: false
            };
        }
        case SAVE_CONTACT_SUCCESS: {
            const { contact, contactDetails, index } = action.payload;
            const { contacts } = state;
            contact.selected = true;
            contacts[index] = contact;
            return {
                ...state,
                isContactDetailsLoading: false,
                selectedContact: { ...contactDetails, isEditMode: false },
                contacts: [...contacts]
            };
        }
        default:
            return state;
    }
}