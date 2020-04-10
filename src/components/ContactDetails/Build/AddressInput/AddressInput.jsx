
import React from 'react';
import DataItem from 'components/DataItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import style from './AddressInput.module.scss';

function AddressInput(props) {
    const { addressTypes, onDeleteClick = () => { }, value = {}, onChange = () => { } } = props;

    const onInputChange = (e) => {
        value[e.target.name] = e.target.value;
        onChange(value);
    };

    const getAddressLabel = () => {
        return (
            <div className={style.addressTypes}>
                <FontAwesomeIcon icon={faMinusCircle} className={style.icon} onClick={onDeleteClick} />
                <select className={style.DropDownBox} onChange={onInputChange} name="addressType">
                    {
                        addressTypes.map(name => (<option key={name} value={name}>{name}</option>))
                    }
                </select>
            </div>
        );
    }

    return (
        <DataItem label={getAddressLabel()} className={style.AddressInput}>
            <div>
                <div className={style.firstLine}>
                    <input
                        type="text"
                        className={style.input}
                        value={value.street}
                        onChange={onInputChange}
                        name="street"
                        maxLength="250"
                    />
                    <label>Street Address</label>
                </div>
                <div className={style.secondLine}>
                    <div className={style.city}>
                        <input
                            type="text"
                            className={style.input}
                            value={value.city}
                            onChange={onInputChange}
                            name="city"
                            maxLength="250"
                        />
                        <label>City</label>
                    </div>
                    <div className={style.state}>
                        <input
                            type="text"
                            className={style.input}
                            value={value.state}
                            onChange={onInputChange}
                            name="state"
                            maxLength="250"
                        />
                        <label>State</label>
                    </div>
                    <div className={style.postalCode}>
                        <input
                            type="number"
                            className={style.input}
                            value={value.postalCode}
                            onChange={onInputChange}
                            name="postalCode"
                            maxLength="10"
                        />
                        <label>Postal Code</label>
                    </div>
                </div>
            </div>
        </DataItem>
    );

}

export default AddressInput;
