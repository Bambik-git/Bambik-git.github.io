import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";
import MyPostsContrainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContrainer/>
        </div>
    )
}

export default Profile;