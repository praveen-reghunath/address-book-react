import React from 'react';
import Contact from 'components/Contact';
import NewContactButton from 'components/NewContactButton';

import style from './ContactList.module.scss';

function ContactList(props) {
    const { items } = props;

    const onContactSelect = (index, item) => {
        props.selectContact(item.id, index);
    };

    const onAddNewClick = (e) => {
        console.log(e);
    };

    return (
        <div className={style.ContactList}>
            {
                items.map((item, index) => <Contact key={item.id} {...item} onClick={() => onContactSelect(index, item)} />)
            }
            <NewContactButton onClick={onAddNewClick} />
        </div>
    )
}

export default ContactList;