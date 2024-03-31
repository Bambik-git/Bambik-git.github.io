import React from "react";
import style from './Dialogs.module.css';
import {Link} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <ul className={style.listItem}>
                    <li><Link to={'/dialogs/1'}>Андрей</Link></li>
                </ul>
            </div>
            <div className={style.verticalLine}></div>
            <div className={style.message}>
                Messages
            </div>
        </div>

    )
}

export default Dialogs;