import { connect } from 'react-redux';
import { editContact } from 'redux/actions/contact';

import Build from './Build';

const mapStateToProps = (state, ownProps) => {
    const { contact, addressTypes, phoneTypes } = state;
    return ({
        contact,
        addressTypes,
        phoneTypes
    });
}

const mapDispatchToProps = {
    editContact
};

export default connect(mapStateToProps, mapDispatchToProps)(Build);