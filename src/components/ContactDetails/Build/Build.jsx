
import React, { useState } from 'react';
import DataItem from 'components/DataItem';

import style from './Build.module.scss';

function Build(props) {
    const { data: contact = {} } = props;

    return (
        <div className={style.Build} >
            <DataItem label="First Name">
                <input type="text" className={style.input} />
            </DataItem>
            <DataItem label="Last Name">
                <input type="text" className={style.input} />
            </DataItem>
            {

            }
            <DataItem label={<select><option>Home Phone</option></select>}></DataItem>
        </div >
    );

}

export default Build;