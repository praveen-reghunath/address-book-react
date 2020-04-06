import React, { useState } from 'react';
import classNames from 'classnames';
import View from './View';
import Build from './Build';

import style from './ContactDetails.module.scss';

function ContactDetails(props) {
    const { contact } = props;
    const [isEditMode, setIsEditMode] = useState(false);

    const toggleEdit = () => {
        setIsEditMode(!isEditMode);
    };

    const onDoneClick = () => {

    };

    const onDeleteClick = () => {

    };

    if (contact) {
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
                    (isEditMode ? (<Build data={contact} />) : (<View data={contact} />))
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