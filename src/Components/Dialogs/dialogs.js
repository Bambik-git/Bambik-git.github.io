import React from "react";
import style from './Dialogs.module.css';
import {Link} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs_data.dialogsData.map(dialog => <li><Link to={`/dialogs/` + dialog.id}>{dialog.name}</Link></li>)
    let messagesElements = props.dialogs_data.messagesData.map(message => <li>{message.message}</li>)
    let NewMessageText = props.dialogs_data.NewMessageText

    //event обьект события onChange
    let onNewMessageChange = (event) => {
        let text = event.target.value;
        let action = {
            type: 'UPDATE_NEW_MESSAGE_TEXT',
            newMessage: text
        }
        props.dispatch(action)
    }

    let SendMessage = (event) => {
        let action = {
            type: 'SEND_MESSAGE',
        }
        props.dispatch(action)
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