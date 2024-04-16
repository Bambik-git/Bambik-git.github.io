import React from "react";
import style from './Dialogs.module.css';
import {Link} from "react-router-dom";
import {send_message_ActionCreator, update_new_message_text_ActionCreator} from "../../redux/store";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs_data.dialogsData.map(dialog => <li><Link to={`/dialogs/` + dialog.id}>{dialog.name}</Link></li>)
    let messagesElements = props.dialogs_data.messagesData.map(message => <li>{message.message}</li>)
    let NewMessageText = props.dialogs_data.NewMessageText

    //event обьект события onChange
    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(update_new_message_text_ActionCreator(text))
    }

    let SendMessage = () => {
        props.dispatch(send_message_ActionCreator())
    }

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
                          onChange={onNewMessageChange}/><br/>
                <button onClick={SendMessage}>Отправить</button>
            </div>

        </div>

    )
}

export default Dialogs;