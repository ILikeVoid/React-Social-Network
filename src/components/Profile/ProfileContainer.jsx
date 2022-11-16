import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, getUserProfile, updateStatus, savePhoto, saveProfile} from "../../redux/profilePage-reducer";
import {compose} from "redux";
import {useParams} from "react-router-dom";

const ProfileContainer = ({profile, status, updateStatus, getUserProfile, getUserStatus, savePhoto, saveProfile}) => {

    let {userId} = useParams()

    useEffect(() => {
        getUserProfile(userId)
        getUserStatus(userId)
    }, [])

    return (
        <Profile 
        isOwner={!!userId} 
        profile={profile}
        status={status} 
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
        />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
    
})

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile}))(ProfileContainer)
