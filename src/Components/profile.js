import style from "./Profile.module.css"
const  Profile = () => {
    return (
        <div className={style.content}>
            <img className={style.profile_img} alt={'profile-img'}
                 src={"https://ic.pics.livejournal.com/kapuchin/11418467/533811/533811_original.jpg"}/>
            <div className={style.item}>Some content</div>
            <div className={`${style.item} ${style.active}`}>My posts</div>
            <div>New post</div>
            <div>Post 1</div>
            <div>Post 2</div>
        </div>
    )
}

export default Profile;