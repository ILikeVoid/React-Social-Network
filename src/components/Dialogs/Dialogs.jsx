import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Massage from "./Massage/Massage";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dauren'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Nurzhan'},
        {id: 4, name: 'Madara'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Do you spek English?'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Massage massage={m.message}/>)

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