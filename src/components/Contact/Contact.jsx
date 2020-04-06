import React from 'react';
import classNames from 'classnames';

import style from './Contact.module.scss';

function Contact(props) {
    const { firstName, lastName, onClick = () => { }, selected = false } = props;
    return (
        <div className={classNames(style.Contact, { [style.Selected]: selected })} onClick={onClick} >
            <span className={style.firstName}>{firstName}</span>
            <span className={style.lastName}>{lastName}</span>
        </div >
    );
}

export default Contact;