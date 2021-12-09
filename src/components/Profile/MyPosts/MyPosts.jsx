import React from "react";
import s from './MyPosts.css'

const MyPosts = () => {
    console.log(s);
    return (
        <div>My posts
            <div>New Post</div>
            <div className={s.posts}>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
            </div>
        </div>
    )
}

export default MyPosts;