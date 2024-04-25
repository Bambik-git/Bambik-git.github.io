import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer.js";
import {dialogsReducer} from "./dialogs_reducer.js";
import {usersReducer} from "./users_reducer";
import {authReducer} from "./auth_reducer";

let CombineReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(CombineReducers);

window.store = store;


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const update_new_message_text_ActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT,  newMessage: text }
}

export const send_message_ActionCreator = () => {
    debugger;
    return { type: SEND_MESSAGE }
}


export default store;