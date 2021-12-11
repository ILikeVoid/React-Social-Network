import React from "react";
import s from './MyPosts.css'

const MyPosts = () => {
    return (
        <div>My posts
            <div>
            <textarea></textarea>
            <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post massage='Hi, How are you?' like='30'/>
                <Post massage='This`is my new post' like='20'/>
            </div>
        </div>
    )
}

export default MyPosts;