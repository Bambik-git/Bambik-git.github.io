import React from "react";
import './ProfileData.css'

const ProfileData = (props) => {
    return <>
        <div className="page_profile_user_data">
            <div><span className="basic-text--color-muted">Имя: </span> {props.profile.fullName}</div>
            <div><span
                className="basic-text--color-muted">В поиске работы? </span> {props.profile.lookingForAJob ? 'Да' : 'Нет'}
            </div>

            <div className='page_profile_user_data_item'>
                <span className="basic-text--color-muted">Профессиональные навыки: </span>
                <span>{props.profile.lookingForAJobDescription}</span>
            </div>

            {/*<div>*/}
            {/*    <span className="basic-text--color-muted">Обо мне: </span>*/}
            {/*</div>*/}
            <div className="page_profile_user_data_contacts">
                <h3>Контакты</h3>
                {Object.keys(props.profile.contacts).map(key =>
                    <div key={key}><span className="basic-text--color-muted">
                {key}:</span> {props.profile.contacts[key]}
                    </div>)}
            </div>
        </div>

    </>
}

export default ProfileData;