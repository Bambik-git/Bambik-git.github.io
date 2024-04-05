import style from "./MyPosts.module.css"
import Post from "./Post/Post.js";
const  MyPosts = (props) => {

    let postsElements = props.posts_data.map( posts => <Post message={posts.post_text} likes={posts.likes}/>)

    return (
        <div className={style.content}>
            My posts
            <div className={`${style.item} ${style.active}`}><br/>
                New Post<br/>
                <textarea></textarea><br/>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;