
import React, { useState } from 'react';
import DataItem from 'components/DataItem';
import AddNewButton from 'components/AddNewButton';
import style from './Build.module.scss';
import PhoneInput from './PhoneInput';
import AddressInput from './AddressInput';

function Build(props) {
    const { contact = {}, addressTypes, phoneTypes, onContactChange } = props;

    const onAddNewPhoneClick = () => {
        contact.phones.push({});
        onContactChange(contact);
    };

    const onAddNewAddressClick = () => {
        contact.addresses.push({});
        onContactChange(contact);
    };

    const onInputChange = (e) => {
        contact[e.target.name] = e.target.value;
        onContactChange(contact);
    };

    const onPhoneChange = (phoneNumber, phone, index) => {
        phone.phoneNumber = phoneNumber;
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
                <input type="text" className={style.input} value={contact.firstName} onChange={onInputChange} name="firstName" />
            </DataItem>
            <DataItem label="Last Name">
                <input type="text" className={style.input} value={contact.lastName} onChange={onInputChange} name="lastName" />
            </DataItem>
            {
                contact.phones.map((phone, index) => (
                    <PhoneInput
                        key={phone.id}
                        phoneTypes={phoneTypes}
                        value={phone.phoneNumber}
                        onDeleteClick={() => onPhoneDelete(index)}
                        onChange={(newValue) => { onPhoneChange(newValue, phone, index); }}
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