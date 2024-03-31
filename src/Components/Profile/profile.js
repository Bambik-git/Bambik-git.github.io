import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.js";
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";



const Profile = () => {
    return (
        <div className={style.content}>
            <ProfileInfo/>

            <MyPosts/>
        </div>
    )
}

export default Profile;