import './ProfileInfo.css'
import Preloader from "../../common/Preloader/preloader";
import React, {useState} from "react";
import userNoLogo from '../../../assets/no_logo.svg'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileEdit} from "./ProfileEdit/ProfileEdit";
import ProfileData from "./ProfileData/ProfileData";



const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto, editProfile}) => {
    //Переход в режим редактирования страницы профиля
    const [editMode, setEditMode] = useState(false)

    //Если профиль не загрузился
    if (!profile) {
        return <Preloader/>
    }

    //Загрузка фотографии с помощью <input type='file'>
    const onSavePhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <>
            <div className="section_profile">
                <div className="section_title">
                    <h2>Профиль</h2>
                    {isOwner && !editMode && <div>
                        <button className="default_btn" onClick={() => setEditMode(true)}>Изменить</button>
                    </div>}
                </div>
            </div>
            <div className="page_profile__body">
                <div className="page_profile__user_img">
                    {profile ?
                        <img alt={'Profile_logo'} src={profile.photos.large || userNoLogo}/>
                        : null
                    }
                </div>
                {isOwner && editMode &&
                    <div className="upload_photo">
                        {isOwner &&
                                <input type={'file'} onChange={onSavePhoto}/>
                        }

                    </div>
                }


            <div className="page_profile__content">
                    <div className="page_profile__user_status">
                        <ProfileStatus status={status}
                                       updateStatus={updateStatus}
                                       isOwner={isOwner}/>

                    </div>

                    {editMode
                        ? <ProfileEdit profile={profile}
                                       setEditMode={setEditMode}
                                       editProfile={editProfile}/>
                        : <ProfileData profile={profile}
                                       isOwner={isOwner}
                                       editMode={setEditMode}
                        />}
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;