import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div><img src='https://img3.akspic.ru/previews/1/0/5/6/6/166501/166501-mikael_gustafsson_malenkaya_pamyat-oblako-rastenie-atmosfera-voda-550x310.jpg'/></div>
            <div className={s.discriptionBlock}>ava+discription</div>
        </div>
    )
}

export default ProfileInfo;