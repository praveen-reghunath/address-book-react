import React from 'react';
import Contact from 'components/Contact';
import AddNewButton from 'components/AddNewButton';

import style from './ContactList.module.scss';

function ContactList(props) {
    const { items } = props;

    const onContactSelect = (index, item) => {
        props.selectContact(item.id, index);
    };

    const onAddNewClick = (e) => {
        props.requestNewContact();
    };

    return (
        <div className={style.ContactList}>
            {
                items.map((item, index) => <Contact key={item.id} {...item} onClick={() => onContactSelect(index, item)} />)
            }
            <AddNewButton onClick={onAddNewClick} label="Add new contact" className={style.addNewButton} />
        </div>
    )
}

export default ContactList;