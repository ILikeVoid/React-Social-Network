import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, massage: 'Hi, How are you?', likesCount: 100},
        {id: 2, massage: 'This`is my new post', likesCount: 83},
    ]

    let postsElement = posts.map(p => <Post massage={p.massage} like={p.likesCount}/>)


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;