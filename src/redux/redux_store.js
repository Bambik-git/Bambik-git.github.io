import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer.js";
import {dialogsReducer} from "./dialogs_reducer.js";

let CombineReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(CombineReducers);

export default store;