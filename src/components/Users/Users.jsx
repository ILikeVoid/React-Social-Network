import React from 'react'
import s from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChange, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <div className={s.postBlock}>
            <Paginator currentPage={currentPage}
                       onPageChange={onPageChange}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                                         key={u.id}/>
                    )
                }
            </div>
        </div>
    )
}

export default Users;