import { connect } from 'react-redux';
import { selectContact } from 'redux/actions/contact';

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
    selectContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);