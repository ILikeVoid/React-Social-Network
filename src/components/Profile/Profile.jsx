import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img src='https://img3.akspic.ru/previews/1/0/5/6/6/166501/166501-mikael_gustafsson_malenkaya_pamyat-oblako-rastenie-atmosfera-voda-550x310.jpg'/></div>
            <div>ava+discription</div>
            <MyPosts />
        </div>
    )
}

export default Profile;