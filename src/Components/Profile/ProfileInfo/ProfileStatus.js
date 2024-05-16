import React, {useEffect, useState} from "react";


const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }


        return (
            <>
                {
                    !editMode ?
                        <div><b>Статус: </b>
                            <span onDoubleClick={() => {
                                setEditMode(true)
                            }}>{status || "Нет статуса"}</span>
                        </div>
                        :
                        <div>
                            <input onChange={ event => setStatus(event.currentTarget.value)}
                                   autoFocus={true}
                                   onBlur={deactivateEditMode}
                                   value={status}/>
                        </div>
                }
            </>
        )

}

export default ProfileStatus;

