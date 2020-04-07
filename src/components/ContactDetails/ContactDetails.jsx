import React, { useState } from 'react';
import classNames from 'classnames';
import View from './View';
import Build from './Build';

import style from './ContactDetails.module.scss';

function ContactDetails(props) {
    const { contact } = props;

    const toggleEdit = () => {
        props.editContact();
    };

    const onDoneClick = () => {

    };

    const onDeleteClick = () => {

    };

    if (contact) {
        const isEditMode = contact.isEditMode;
        return (
            <div className={classNames(style.ContactDetails)} >
                <div className={style.buttonRow}>
                    {
                        (isEditMode ? (
                            <>
                                <button className={style.deleteButton} onClick={() => onDeleteClick()}>Delete</button>
                                <button className={style.doneButton} onClick={() => onDoneClick()}>Done</button>
                            </>
                        ) : (
                                <button className={style.editButton} onClick={() => toggleEdit()}>Edit</button>
                            ))
                    }
                </div>
                {
                    (isEditMode ? (<Build />) : (<View data={contact} />))
                }
            </div >
        );
    }
    else {
        return (
            <div className={classNames(style.ContactDetails)} >
                <div className={style.message}>
                    Select a contact to view details..
                </div>
            </div >
        );
    }
}

export default ContactDetails;