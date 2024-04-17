import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer.js";
import {dialogsReducer} from "./dialogs_reducer.js";

let CombineReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(CombineReducers);

window.store = store;


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const update_new_message_text_ActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT,  newMessage: text }
}

export const send_message_ActionCreator = () => {
    return { type: SEND_MESSAGE }
}

export const add_post_ActionCreator = () => {
    return { type: ADD_POST }
}
export const update_new_post_text_ActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default store;