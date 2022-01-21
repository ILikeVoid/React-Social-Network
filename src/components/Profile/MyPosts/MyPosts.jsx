import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator} from "../../../redux/profilePage-reducer";
import {updateNewPostTextActionCreator} from "../../../redux/profilePage-reducer";

const MyPosts = (props) => {

    let state = props.store.getState().profilePage
    let postsElement = state.posts.map(p => <Post message={p.message} like={p.likesCount}/>)
    let newPostText = state.newPostText

    let newPostElement = React.createRef();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        placeholder="What's new?"
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;