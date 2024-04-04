import React from "react";
import style from './Dialogs.module.css';
import {Link} from "react-router-dom";

let dialogsData = [
    {id: 1, name: 'Андрей'},
    {id: 2, name: 'Ваня'},
    {id: 3, name: 'Света'},
    {id: 4, name: 'Алина'},
    {id: 5, name: 'Евгений'},
]


let messagesData =[
    {id: 1, message:'Yo'},
    {id: 2, message:'Hi!'},
    {id: 3, message:'How are you?'}
]
let dialogsElements = dialogsData.map(dialog => <li><Link to={`/dialogs/` + dialog.id}>{dialog.name}</Link></li>)
let messagesElements = messagesData.map(message => <li>{message.message}</li>)

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
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