import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiR1n-IPAz03SLcAuXrW8N7AI3vYjtEpYPg&usqp=CAU'/>
            {props.message}
            <div>
                {props.like}
                <span> Like</span>
            </div>
        </div>
    )
}

export default Post;