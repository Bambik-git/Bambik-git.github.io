import React, {useEffect, useState} from "react";
import './ProfileStatus.css'


const ProfileStatus = ({isOwner, updateStatus, ...props}) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(status);

    }

    return (
        <>
            {
                !editMode ?
                    <div className='status'>
                        <span onDoubleClick={() => {
                            setEditMode(true)
                        }}>{status || "Нет статуса"}</span>
                        {isOwner &&
                            <div>
                                <span
                                    className="status_annotation basic-text--color-muted">Для того чтобы изменить статус дважды щелкните на текст</span>
                            </div>}
                    </div>
                    : isOwner ?
                        <div className='update_status_input'>
                            <input className='default_input status_input'
                                   onChange={event => setStatus(event.currentTarget.value)}
                                   autoFocus={true}
                                   onBlur={deactivateEditMode}
                                   value={status}
                                   maxLength='200'/>
                            <div>
                                <span
                                    className="status_annotation basic-text--color-muted">Ваш статус должен содержать не более 200 символов</span>
                            </div>
                        </div> : <span>{status || "Нет статуса"}</span>
            }
        </>
    )

}

export default ProfileStatus;

