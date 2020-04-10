import { connect } from 'react-redux';
import { onContactChange } from 'redux/actions/contact';

import Build from './Build';

const mapStateToProps = (state, ownProps) => {
    const { selectedContact: contact, addressTypes, phoneTypes } = state;
    return ({
        contact,
        addressTypes,
        phoneTypes
    });
}

const mapDispatchToProps = {
    onContactChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Build);