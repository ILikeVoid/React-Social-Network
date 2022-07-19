import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setToggleIsFetching, setToggleIsFollowingInProgress,
    setTotalUsersCount,
    setUsers,
    unfollow
} from '../../redux/userPage-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.setToggleIsFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)
                }
            )
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                    this.props.setToggleIsFetching(false)
                    this.props.setUsers(data.items)
                }
            )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setToggleIsFollowingInProgress={this.props.setToggleIsFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching, setToggleIsFollowingInProgress})(UsersContainer)