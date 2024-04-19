import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";
import MyPostsContrainer from "./MyPosts/MyPostsContainer";



const Profile = () => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPostsContrainer/>
        </div>
    )
}

export default Profile;