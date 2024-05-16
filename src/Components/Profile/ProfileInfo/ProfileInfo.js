import style from "../Profile.module.css";
import Preloader from "../../common/Preloader/preloader";
import React, {useState} from "react";
import userNoLogo from '../../../assets/man-user.svg'
import ProfileStatus from "./ProfileStatus";
import {ProfileEditForm} from "./ProfileEditForm";


const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)
    
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
                <img alt={'Profile_logo'} src={props.profile.photos.large || userNoLogo} width={'200'} height={'200'}/>
                : null
            }
                {props.isOwner && <input type={'file'} onChange={onSavePhoto}/>}
            </div>

            { editMode
                ? <ProfileEditForm profile={props.profile}
                                   editMode={setEditMode}
                                   editProfile={props.editProfile}/>
                : <ProfileData profile={props.profile}
                               isOwner={props.isOwner}
                               editMode={setEditMode}
                               />}

            <div className={style.item}>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}


const ProfileData = (props) => {
    return <>
    { props.isOwner && <div><button onClick={() => props.editMode(true)}>Edit</button></div> }
        <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {props.profile.lookingForAJob}
        </div>

        <div>
            <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => <div>
            <b>{key}:</b> {props.profile.contacts[key]}</div>)}
        </div>
    </>
}
export default ProfileInfo;