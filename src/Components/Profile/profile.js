import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.js";
const  Profile = () => {
    return (
        <div>
            <img className={style.profile_img} alt={'profile-img'}
                 src={"https://ic.pics.livejournal.com/kapuchin/11418467/533811/533811_original.jpg"}/>
            <div className={style.item}>Some content</div>
            <MyPosts />
        </div>
    )
}

export default Profile;