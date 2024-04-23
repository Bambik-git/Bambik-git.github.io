import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";
import MyPostsContrainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContrainer/>
        </div>
    )
}

export default Profile;