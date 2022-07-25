import React from "react";
import Profile from "./Profile";
import{connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePage-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile()
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})


export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withAuthRedirect
)(ProfileContainer)