import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import userPhoto from "../../../assets/images/users.jpg"


const ProfileInfo = ({isOwner,profile, status, updateStatus, savePhoto}) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div><img src={profile.photos.large || userPhoto} className={s.mainPhoto}/></div>
                {isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
    )
}

export default ProfileInfo;