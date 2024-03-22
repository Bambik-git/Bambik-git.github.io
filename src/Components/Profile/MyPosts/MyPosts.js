import style from "./MyPosts.module.css"
import Post from "./Post/Post.js";
const  MyPosts = () => {
    return (
        <div>
            My posts
            <div className={`${style.item} ${style.active}`}><br/>
                New Post<br/>
                <textarea></textarea><br/>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                <Post message='Привет, как ты?'/>
                <Post message={'Это мой первый пост!'}/>
            </div>
        </div>
    )
}

export default MyPosts;