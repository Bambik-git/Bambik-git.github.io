import style from "./MyPosts.module.css"
import Post from "./Post/Post.js";
import React from "react";
import {add_post_ActionCreator, update_new_post_text_ActionCreator} from "../../../redux/store";



const  MyPosts = (props) => {

    let postsElements = props.posts_data.postsData.map( posts => <Post message={posts.post_text} likes={posts.likes}/>)

    // Создание ссылки и привязка к тегу textarea
    let newPostElement = React.createRef()

    const addPost =() => {
        debugger;
        props.dispatch(add_post_ActionCreator());
    }

    let OnPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(update_new_post_text_ActionCreator(text));
    }

    return (
        <div className={style.content}>
            My posts
            <div className={`${style.item} ${style.active}`}><br/>
                New Post<br/>
                <textarea ref={newPostElement}
                          value={props.posts_data.NewPostText}
                          onChange={OnPostChange} /><br/>
                <button onClick={addPost}> Add post </button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;