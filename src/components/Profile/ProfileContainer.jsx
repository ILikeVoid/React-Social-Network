import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, getUserProfile, updateStatus} from "../../redux/profilePage-reducer";
import {compose} from "redux";
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {

    let {userId} = useParams()

    useEffect(() => {
        props.getUserProfile(userId)
        props.getUserStatus(userId)
    }, [])

    return (
        <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}))(ProfileContainer)
