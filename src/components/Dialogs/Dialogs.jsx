import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Massage from "./Massage/Massage";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>
               <img src={props.avatar}/>
                {props.name}
            </NavLink>
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messageElements = props.state.messages.map(m => <Massage massage={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;