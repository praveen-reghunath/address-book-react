import { connect } from 'react-redux';
import { requestEditContact, saveContact, deleteContact } from 'redux/actions/contact';

import ContactDetails from './ContactDetails';

const mapStateToProps = (state, ownProps) => {
    const { selectedContact: contact, selectedContactIndex, error, isContactLoading: isLoading } = state;
    return ({
        contact,
        selectedContactIndex,
        error,
        isLoading
    });
}

const mapDispatchToProps = {
    requestEditContact,
    saveContact,
    deleteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);