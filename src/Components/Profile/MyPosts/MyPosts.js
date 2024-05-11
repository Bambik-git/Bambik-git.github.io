import style from "./MyPosts.module.css"
import Post from "./Post/Post.js";
import React from "react";

const MyPosts = React.memo(props => {

    let postsElements = [...props.profileData.postsData]
        .reverse()
        .map(posts => <Post message={posts.post_text} likes={posts.likes}/>)

    // Создание ссылки и привязка к тегу textarea
    let newPostElement = React.createRef()

    return (
        <div className={style.content}>
            My posts
            <div className={`${style.item} ${style.active}`}><br/>
                New Post<br/>
                <textarea ref={newPostElement}
                          value={props.profileData.NewPostText}
                          onChange={(e) => props.update_new_post(e.target.value)}/><br/>
                <button onClick={() => props.add_post()}> Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;