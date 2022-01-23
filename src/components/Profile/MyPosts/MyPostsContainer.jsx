import React from "react";
import s from './MyPosts.module.css'
import {addPostActionCreator} from "../../../redux/profilePage-reducer";
import {updateNewPostTextActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let PostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts addPost={onAddPost} profilePage={state} updateNewPostText={PostChange}/>
    )
}

export default MyPostsContainer;