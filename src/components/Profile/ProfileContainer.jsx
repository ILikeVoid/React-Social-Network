import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePage-reducer";
import {compose} from "redux";
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {

    let {userId} = useParams()

    useEffect(() => {
        props.getUserProfile(userId)
    }, [])

    return (
        <Profile {...props} profile={props.profile}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(connect(mapStateToProps, {getUserProfile}))(ProfileContainer)
