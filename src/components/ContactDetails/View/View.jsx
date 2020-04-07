
import React from 'react';
import DataItem from 'components/DataItem';

import style from './View.module.scss';

function View(props) {
    const { data: contact } = props;

    return (
        <div className={style.View} >
            <DataItem label="First Name">{contact.firstName}</DataItem>
            <DataItem label="Last Name">{contact.lastName}</DataItem>
            {
                contact.phones.map(phone => <DataItem key={phone.id} label={phone.phoneType}>{phone.phoneNumber}</DataItem>)
            }
            {
                contact.addresses.map(address => (
                    <DataItem label={address.addressType} className={style.address} key={address.id}>
                        <div className={style.street}>{address.street}</div>
                        <div className={style.line2}>
                            <span className={style.city}>{address.city},</span>
                            <span className={style.state}>{address.state}</span>
                            <span className={style.zip}>{address.postalCode}</span>
                        </div>
                    </DataItem>
                ))
            }
        </div >
    );

}

export default View;