import ReactDOM from "react-dom/client";
import React from "react";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import  {addPost, subscribe, UpdateNewPostText} from "./redux/state";

let reRenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={UpdateNewPostText}/>
        </React.StrictMode>
    );
}

reRenderEntireTree();

subscribe(reRenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
