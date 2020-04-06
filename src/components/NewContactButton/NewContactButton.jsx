import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import style from './NewContactButton.module.scss';

function NewContactButton(props) {
    const { onClick = () => { } } = props;
    return (
        <div className={style.NewContactButton} onClick={onClick} >
            <FontAwesomeIcon icon={faPlusCircle} className={style.icon} />
            <span className={style.label}>Add new contact</span>
        </div >
    );
}

export default NewContactButton;