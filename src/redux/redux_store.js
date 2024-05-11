import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile_reducer.js";
import {dialogsReducer} from "./dialogs_reducer.js";
import {usersReducer} from "./users_reducer";
import {authReducer} from "./auth_reducer";
import {thunk as thunkMiddleWare} from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

// window.store = store;

export default store;