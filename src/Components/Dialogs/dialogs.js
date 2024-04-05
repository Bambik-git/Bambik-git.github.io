import React from "react";
import style from './Dialogs.module.css';
import {Link} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs_data.map(dialog => <li><Link to={`/dialogs/` + dialog.id}>{dialog.name}</Link></li>)
    let messagesElements = props.message_data.map(message => <li>{message.message}</li>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <ul className={style.listItem}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={style.verticalLine}></div>
            <ul className={style.message}>
                    {messagesElements}
            </ul>
        </div>

    )
}

export default Dialogs;