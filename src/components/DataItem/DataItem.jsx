import React from 'react';
import classNames from 'classnames';

import style from './DataItem.module.scss';

function DataItem(props) {
    const {
        children,
        className = '',
        label = '',
        classNameForLabel = '',
        classNameForValue = ''
    } = props;

    return (
        <div className={classNames(style.DataItem, className)}>
            <div className={classNames(style.label, classNameForLabel)}>{label}</div>
            <div className={classNames(style.value, classNameForValue)}>{children}</div>
        </div>
    );

}

export default DataItem;