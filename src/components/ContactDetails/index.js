import { connect } from 'react-redux';
import { editContact } from 'redux/actions/contact';

import ContactDetails from './ContactDetails';

const mapStateToProps = (state, ownProps) => {
    const { contact, error, isContactLoading: isLoading } = state;
    return ({
        contact,
        error,
        isLoading
    });
}

const mapDispatchToProps = {
    editContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);