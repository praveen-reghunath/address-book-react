
import React, { useState } from 'react';
import DataItem from 'components/DataItem';
import AddNewButton from 'components/AddNewButton';
import style from './Build.module.scss';
import PhoneInput from './PhoneInput';
import AddressInput from './AddressInput';

function Build(props) {
    const { contact = {}, addressTypes, phoneTypes, onContactChange } = props;

    const onAddNewPhoneClick = () => {
        const phone = {
            id: -1,
            phoneType: phoneTypes[0],
            phoneNumber: ''
        };
        contact.phones.push(phone);
        onContactChange(contact);
    };

    const onAddNewAddressClick = () => {
        const address = {
            id: -1,
            addressType: addressTypes[0],
            street: '',
            city: '',
            state: '',
            postalCode: ''
        };
        contact.addresses.push(address);
        onContactChange(contact);
    };

    const onInputChange = (e) => {
        contact[e.target.name] = e.target.value;
        onContactChange(contact);
    };

    const onPhoneChange = (newPhone) => {
        onContactChange(contact);
    };

    const onPhoneDelete = (index) => {
        contact.phones.splice(index, 1);
        onContactChange(contact);
    };

    const onAddressChange = () => {
        onContactChange(contact);
    };

    const onAddressDelete = (index) => {
        contact.addresses.splice(index, 1);
        onContactChange(contact);
    };

    return (
        <div className={style.Build} >
            <DataItem label="First Name">
                <input
                    type="text"
                    className={style.input}
                    value={contact.firstName}
                    onChange={onInputChange}
                    name="firstName"
                    maxLength="250"
                />
            </DataItem>
            <DataItem label="Last Name">
                <input
                    type="text"
                    className={style.input}
                    value={contact.lastName}
                    onChange={onInputChange}
                    name="lastName"
                    maxLength="250"
                />
            </DataItem>
            {
                contact.phones.map((phone, index) => (
                    <PhoneInput
                        key={phone.id}
                        phoneTypes={phoneTypes}
                        value={phone}
                        onDeleteClick={() => onPhoneDelete(index)}
                        onChange={onPhoneChange}
                    />
                ))
            }
            <AddNewButton label="Add new phone" className={style.addNewPhone} onClick={onAddNewPhoneClick} />
            {
                contact.addresses.map((address, index) => (
                    <AddressInput
                        key={address.id}
                        addressTypes={addressTypes}
                        value={address}
                        onChange={(newAddress) => { onAddressChange(newAddress); }}
                        onDeleteClick={() => onAddressDelete(index)}
                    />
                ))
            }
            <AddNewButton label="Add new address" className={style.addNewAddress} onClick={onAddNewAddressClick} />
        </div >
    );

}

export default Build;