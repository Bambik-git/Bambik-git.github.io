import style from "./MyPosts.module.css"
import Post from "./Post/Post.js";
import React from "react";

const  MyPosts = (props) => {
    let postsElements = props.profileData.postsData
        .map( posts => <Post message={posts.post_text} likes={posts.likes}/>)

    // Создание ссылки и привязка к тегу textarea
    let newPostElement = React.createRef()

    const onAddPost =() => {
        props.onAddPost();
    }

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value
        props.onPostChange(text);
    }

    return (
        <div className={style.content}>
            My posts
            <div className={`${style.item} ${style.active}`}><br/>
                New Post<br/>
                <textarea ref={newPostElement}
                          value={props.profileData.NewPostText}
                          onChange={onPostChange} /><br/>
                <button onClick={onAddPost}> Add post </button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;