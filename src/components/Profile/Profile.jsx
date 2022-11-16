import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {

    return (
        <div>
            <ProfileInfo isOwner={isOwner} 
            profile={profile} 
            status={status} 
            updateStatus={updateStatus}
            savePhoto={savePhoto}
            saveProfile={saveProfile }
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;