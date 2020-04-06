import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import style from './AddNewButton.module.scss';

function AddNewButton(props) {
    const { onClick = () => { }, label = 'Add new contact' } = props;
    return (
        <div className={style.AddNewButton} onClick={onClick} >
            <FontAwesomeIcon icon={faPlusCircle} className={style.icon} />
            <span className={style.label}>{label}</span>
        </div >
    );
}

export default AddNewButton;