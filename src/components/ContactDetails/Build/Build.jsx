
import React, { useState } from 'react';
import DataItem from 'components/DataItem';
import AddNewButton from 'components/AddNewButton';
import style from './Build.module.scss';

function Build(props) {
    const { contact = {}, addressTypes, phoneTypes } = props;

    const onAddNewPhoneClick = () => { };
    const onAddNewAddressClick = () => { };

    const getPhoneTypes = () => {
        return phoneTypes;
    };

    return (
        <div className={style.Build} >
            <DataItem label="First Name">
                <input type="text" className={style.input} />
            </DataItem>
            <DataItem label="Last Name">
                <input type="text" className={style.input} />
            </DataItem>
            {

            }
            <AddNewButton label="Add new phone" className={style.addNewPhone} onClick={onAddNewPhoneClick} />
            <AddNewButton label="Add new address" className={style.addNewAddress} onClick={onAddNewAddressClick} />
        </div >
    );

}

/* <DataItem label={<select><option>Home Phone</option></select>}></DataItem> */
export default Build;