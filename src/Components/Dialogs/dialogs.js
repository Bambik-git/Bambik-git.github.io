import React from "react";
import style from './Dialogs.module.css';
import {Link} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.dialogsData.map(dialog => <li><Link to={`/dialogs/` + dialog.id}>{dialog.name}</Link></li>)
    let messagesElements = props.dialogsData.messagesData.map(message => <li>{message.message}</li>)
    let NewMessageText = props.dialogsData.NewMessageText

    //event обьект события onChange
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <ul className={style.listItem}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={style.verticalLine}></div>
            <div>
                <ul className={style.message}>
                    {messagesElements}
                </ul>
            </div>
            <div>
                <textarea value={NewMessageText}
                          placeholder={'Enter message'}
                          onChange={(event) => props.onNewMessageChange(event.target.value)}/><br/>
                <button onClick={ () =>  props.onSendMessage()  }>Отправить</button>
            </div>

        </div>

    )
}

export default Dialogs;