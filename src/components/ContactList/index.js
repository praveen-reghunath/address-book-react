import { connect } from 'react-redux';

import ContactList from './ContactList';
import { selectContact } from 'redux/actions/contact';

const mapStateToProps = (state, ownProps) => {
    const { contacts: items } = state;
    return ({
        items
    });
}

const mapDispatchToProps = {
    selectContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);