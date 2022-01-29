import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = state.messages.map(m =><Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageText;

    let onAddMessage= () => {
        props.addMessage()
    }

    let oncNewChangeMessage = (e) =>{
        let text = e.target.value;
        props.updateNewMessageText(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea
                        placeholder="Enter your message"
                        onChange={oncNewChangeMessage}
                        value={newMessageBody}
                    />
                </div>
                <div>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;