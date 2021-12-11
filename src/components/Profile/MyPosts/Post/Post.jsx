import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://scontent.fala4-2.fna.fbcdn.net/v/t39.30808-6/266375242_946196645988559_4416930081646619561_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGrDmK93LCu0B9S-ViexX-_eimCNNip0pN6KYI02KnSk6_mVql1NKtAtNrFDKQ5_P_k4TryoePlKk8aNXS16AHk&_nc_ohc=AuYORL3DHqQAX-BhShQ&_nc_ht=scontent.fala4-2.fna&oh=6cd67ebaccd8d1ac9ad61ed38bf11059&oe=61B713F6'/>
            {props.massage}
            <div>
                {props.like}
                <span> Like</span>
            </div>
        </div>
    )
}

export default Post;