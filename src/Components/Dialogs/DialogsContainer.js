import React from "react";
import style from './Dialogs.module.css';
import {Link} from "react-router-dom";
import {send_message_ActionCreator, update_new_message_text_ActionCreator} from "../../redux/store";
import Dialogs from "./dialogs";


const DialogsContainer = (props) => {
    let get_state = props.store.getState();
    let onNewMessageChange = (text) => {
        props.store.dispatch(update_new_message_text_ActionCreator(text))
    }

    let onSendMessage = () => {
        props.store.dispatch(send_message_ActionCreator())
    }

    return (
        <Dialogs onSendMessage={onSendMessage}
                 onNewMessageChange={onNewMessageChange}
                 dialogs={get_state.dialogsPage.dialogsData}
                 message={get_state.dialogsPage.messagesData}
                 newMessageText={get_state.dialogsPage.NewMessageText}/>
    )
}

export default DialogsContainer;