import React from "react";
import s from './../Dialogs.module.css'

const Massage = (props) => {
    return (
        <div className={s.massage}>
            <img src={props.avatar1}/>
            <img src={props.avatar2}/>
            {props.massage}
        </div>
    )
}

export default Massage;