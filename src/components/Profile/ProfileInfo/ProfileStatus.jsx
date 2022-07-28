import React, {useState} from "react";
import s from './ProfileInfo.module.css'

const ProfileStatus = (props) => {
    const [state, setState] = useState({
        editMode: false
    })

    function activateEditMode() {
        setState({
            editMode: true
        })
    }
    function deActivateEditMode() {
        setState({
            editMode: false
        })
    }

    return (
        <div className={s.status}>
            {!state.editMode && <div><span onDoubleClick={activateEditMode}>{props.status}</span></div>}
            {state.editMode && <div><input autoFocus={true} onBlur={deActivateEditMode} value={props.status}/></div>}
        </div>
    )
}

export default ProfileStatus;