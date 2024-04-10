import style from "./MyPosts.module.css"
import Post from "./Post/Post.js";
import React from "react";



const  MyPosts = (props) => {

    let postsElements = props.posts_data.map( posts => <Post message={posts.post_text} likes={posts.likes}/>)

    // Создание ссылки и привязка к тегу textarea
    let newPostElement = React.createRef()

    const addPost =() => {
        let text = newPostElement.current.value
        props.addPost(text);
    }

    return (
        <div className={style.content}>
            My posts
            <div className={`${style.item} ${style.active}`}><br/>
                New Post<br/>
                <textarea ref={newPostElement}></textarea><br/>
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