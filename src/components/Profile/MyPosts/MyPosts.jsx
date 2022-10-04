import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControl/FormControl";

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
    let state = props.profilePage
    let postsElement = state.posts.map(p => <Post message={p.message} key={p.id} like={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.posts}>
                {postsElement}
            </div>
            <AddPostReduxForm onSubmit={addNewPost}/>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name='newPostText'
                        placeholder="What's new?"
                        validate={[required, maxLength10]}
            />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'postAddPostForm'})(AddPostForm)

export default MyPosts;