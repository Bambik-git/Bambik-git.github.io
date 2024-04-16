import style from "./MyPosts.module.css"
import Post from "./Post/Post.js";
import React from "react";
import {add_post_ActionCreator, update_new_post_text_ActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";


//Компонента обертка для другой компоненты. Компонента овтечает за данные и логику.
const  MyPostsContrainer = (props) => {
    debugger;
    const onAddPost =() => {
        props.store.dispatch(add_post_ActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(update_new_post_text_ActionCreator(text));
    }

    return (
        <MyPosts onPostChange={onPostChange}
                 onAddPost={onAddPost}
                 posts={props.store.getState().profilePage.postsData}
                 NewPostText={props.store.getState().profilePage.NewPostText}/>
    )
}

export default MyPostsContrainer;