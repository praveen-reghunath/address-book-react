
import React from 'react';
import DataItem from 'components/DataItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import style from './PhoneInput.module.scss';

function PhoneInput(props) {
    const { phoneTypes, onDeleteClick = () => { }, value = '', onChange = () => { } } = props;

    const getPhoneLabel = () => {
        return (
            <div className={style.phoneTypes}>
                <FontAwesomeIcon icon={faMinusCircle} className={style.icon} onClick={onDeleteClick} />
                <select className={style.DropDownBox}>
                    {
                        phoneTypes.map(name => (<option key={name} value={name}>{name}</option>))
                    }
                </select>
            </div>
        );
    }

    return (
        <DataItem label={getPhoneLabel()} className={style.PhoneInput}>
            <input type="text" className={style.input} value={value} onChange={(e) => { onChange(e.target.value) }} />
        </DataItem>
    );

}

export default PhoneInput;
