import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.js";
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";
import MyPostsContrainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>

            <MyPostsContrainer store={props.store}/>
        </div>
    )
}

export default Profile;