import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, UpdateNewPostText} from "./redux/state.js";


export let reRenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={UpdateNewPostText}/>
        </React.StrictMode>
    );
}

