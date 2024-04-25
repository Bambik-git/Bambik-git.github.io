import style from "../Profile.module.css";
import Preloader from "../../common/Preloader/preloader";
import React from "react";
import user_NoLogo_photo from '../../../assets/man-user.svg'

const ProfileInfo = (props) => {
    debugger;
    if (!props.profile) {
        <Preloader />
    }

    return (
        <div>
            <div>
                <img className={style.profile_img} alt={'profile-img'}
                     src={"https://ic.pics.livejournal.com/kapuchin/11418467/533811/533811_original.jpg"}/>
            </div>
            <div>
                    <img alt={'Profile_logo'} src={props.profile.photos.large ? props.profile.photos.large : user_NoLogo_photo} width={'200'} height={'200'} />
            </div>
            <div className={style.item}>
                Some content
            </div>
        </div>
    )
}

export default ProfileInfo;