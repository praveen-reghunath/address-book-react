import { connect } from 'react-redux';
import { getAllContacts } from 'redux/actions/contact';

import App from './App';

const mapStateToProps = (state, ownProps) => {
    const { contacts, error, isContactsLoading: isLoading } = state;
    return ({
        contacts,
        error,
        isLoading
    });
}

const mapDispatchToProps = {
    getAllContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
