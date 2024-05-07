import React, {useState} from "react";


const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    return (
        <>
            {
                !editMode ?
                    <div>
                        <span onDoubleClick={() => setEditMode(true)}>{status || "Нет статуса"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={(event) => setStatus(event.currentTarget.value)}
                               onBlur={deactivateEditMode}
                               autoFocus={true}
                               value={status} />
                    </div>
            }
        </>
    )

}

export default ProfileStatus;

