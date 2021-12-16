import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://scontent.fala4-2.fna.fbcdn.net/v/t1.6435-9/59939365_380381872570042_2950069948786933760_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=19026a&_nc_ohc=wcv-MnFWLjUAX8RNVU3&tn=GoRAJpqLcdXBDJ5Q&_nc_ht=scontent.fala4-2.fna&oh=123b835f8aa03809d9c02830e56dc22f&oe=61DB139E'/>
            {props.massage}
            <div>
                {props.like}
                <span> Like</span>
            </div>
        </div>
    )
}

export default Post;