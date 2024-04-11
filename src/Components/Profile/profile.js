import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.js";
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";



const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>

            <MyPosts posts_data={props.posts_data}
                     addPost={props.addPost}
                     updateNewPost={props.updateNewPost}/>
        </div>
    )
}

export default Profile;