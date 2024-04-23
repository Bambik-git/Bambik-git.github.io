import style from "../Profile.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={style.profile_img} alt={'profile-img'}
                     src={"https://ic.pics.livejournal.com/kapuchin/11418467/533811/533811_original.jpg"}/>
            </div>
            <div>
                <img alt={'Profile_logo'} src={props.profile.photos.large} />
            </div>
            <div className={style.item}>
                Some content
            </div>
        </div>
    )
}

export default ProfileInfo;