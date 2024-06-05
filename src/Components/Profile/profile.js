import ProfileInfo from "./ProfileInfo/ProfileInfo.js";
import MyPostsContrainer from "./MyPosts/MyPostsContainer";


const Profile = ({status, profile, isOwner, updateStatus, savePhoto, editProfile}) => {
    console.log('Profile')
    return (
        <>
            <div className='block'>
                <ProfileInfo profile={profile}
                             isOwner={isOwner}
                             status={status}
                             updateStatus={updateStatus}
                             savePhoto={savePhoto}
                             editProfile={editProfile}/>
            </div>
            {isOwner && <MyPostsContrainer profile={profile}/>}

        </>
    )
}

export default Profile;