
import React from 'react';
import DataItem from 'components/DataItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import style from './PhoneInput.module.scss';

function PhoneInput(props) {
    const { phoneTypes, onDeleteClick = () => { }, value = {}, onChange = () => { } } = props;

    const onInputChange = (e) => {
        value[e.target.name] = e.target.value;
        onChange(value);
    };

    const getPhoneLabel = () => {
        return (
            <div className={style.phoneTypes}>
                <FontAwesomeIcon icon={faMinusCircle} className={style.icon} onClick={onDeleteClick} />
                <select className={style.DropDownBox} onChange={onInputChange} name="phoneType">
                    {
                        phoneTypes.map(name => (<option key={name} value={name}>{name}</option>))
                    }
                </select>
            </div>
        );
    }

    return (
        <DataItem label={getPhoneLabel()} className={style.PhoneInput}>
            <input
                type="tel"
                className={style.input}
                value={value.phoneNumber}
                onChange={onInputChange}
                name="phoneNumber"
                maxLength="12"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
        </DataItem>
    );

}

export default PhoneInput;
