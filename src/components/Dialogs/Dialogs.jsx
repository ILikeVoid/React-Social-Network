import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}><NavLink to={path} >{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className={s.massage}>{props.massage}</div>
    )
}
const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Dauren' id='1'/>
                <DialogItem name='Dima' id='2'/>
                <DialogItem name='Nurzhan' id='3'/>
                <DialogItem name='Madara' id='4'/>
            </div>
            <div className={s.massages}>
                <Message massage='Hi'/>
                <Message massage='How are you?'/>
                <Message massage='Do you spek English?'/>

            </div>
        </div>
    )
}

export default Dialogs;