import React from "react";
import s from './ProfileInfo.module.css'
import style from './../../common/FormControl/FormControl.module.css'
import ProfileStatus from './ProfileStatus'
import { createField, Input, Textarea} from "../../common/FormControl/FormControl";
import { reduxForm } from "redux-form";

export const ProfileDataForm = ({ handleSubmit, profile, updateStatus, status, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button className={s.button} onClick={() => {}}>Сохранить</button></div>
            {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
            <div className={s.status}>
                <b>Статус</b>: <ProfileStatus className={s.text} status={status} updateStatus={updateStatus} />
            </div>
            <div className={s.fullname}>
                <b>Имя</b>: {createField('Полное имя', 'fullName', Input, [])}
            </div>
            <div className={s.looking_job}>
                <b>В поиске работы</b>: {createField('', 'lookingForAJob', Input, [], { type: 'checkbox' })}
            </div>
            <div className={s.skills}>
                <b>Мои профессиональные умения</b>: {createField('Что я умения', 'lookingForAJobDescription', Textarea,)}
            </div>
            <div className={s.about_me}>
                <b>Обо мне</b>: {createField('Обо мне', 'aboutMe', Textarea)}
            </div>
            <div className={s.contacts_block}>
                <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={s.contacts}>
                            <b>{key}: {createField(key, 'contacts.' + key,  Input)}</b>
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm