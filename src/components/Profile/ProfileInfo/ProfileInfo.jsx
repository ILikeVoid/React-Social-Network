import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileDataReduxForm from "./profileDataForm";
import userPhoto from "../../../assets/images/users.jpg"
import { useState } from "react";


const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
            {isOwner && <div><input className={s.btn} type='file' onChange={onMainPhotoSelected} /></div>}
            {editMode
                ? <ProfileDataReduxForm onSubmit={onSubmit} profile={profile} initialValues={profile} updateStatus={updateStatus} status={status} />
                : <ProfileData goToEditMode={() => setEditMode(true)}
                    profile={profile}
                    status={status}
                    isOwner={isOwner} />}

        </div>
    )
}

const ProfileData = ({ profile, status, isOwner, goToEditMode }) => {
    return (
        <form>
            {isOwner && <div><button className={s.button} onClick={goToEditMode}>Редактировать профиль</button></div>}
            <div className={s.status}>
                <b>Статус</b>: <ProfileStatus className={s.text} status={status} />
            </div>
            <div className={s.fullname}>
                <b>Имя</b>: {profile.fullName}
            </div>
            <div className={s.looking_job}>
                <b>В поиске работы</b>: {profile.lookingForAJob ? "Да" : "Нет"}
            </div>
            {profile.lookingForAJobDescription &&
                <div className={s.skills}>
                    <b>Мои профессиональные умения</b>: {profile.lookingForAJobDescription}
                </div>}
            {profile.aboutMe &&
                <div className={s.about_me}>
                    <b>Обо мне</b>: {profile.aboutMe}
                </div>}
            <div className={s.contacts_block}>
                <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </form>
    )
}


export const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;