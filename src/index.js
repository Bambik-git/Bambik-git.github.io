import ReactDOM from "react-dom/client";
import React from "react";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from "./redux/redux_store";
import {Provider} from "react-redux";
import {getAuthUserData} from "./redux/auth_reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(getAuthUserData());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
