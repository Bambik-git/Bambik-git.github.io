import style from "../Profile.module.css";
import Preloader from "../../common/Preloader/preloader";
import React from "react";
import userNoLogo from '../../../assets/man-user.svg'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    const onSavePhoto = (e) =>{
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={style.profile_img} alt={'profile-img'}*/}
            {/*         src={"https://ic.pics.livejournal.com/kapuchin/11418467/533811/533811_original.jpg"}/>*/}
            {/*</div>*/}
            <div>   {props.profile ?
                    <img alt={'Profile_logo'} src={props.profile.photos.large || userNoLogo} width={'200'} height={'200'} />
                : null
            }
                {props.isOwner && <input type={'file'} onChange={onSavePhoto}/>}
            </div>
            <div className={style.item}>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;