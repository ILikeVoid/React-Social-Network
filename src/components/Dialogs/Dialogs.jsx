import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsPage-reducer";


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
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m =><Message message={m.message}/>);
    let newMessageBody = state.newMessageText;


    let addMessage= () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let changeMessage = (e) =>{
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text))
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
                        onChange={changeMessage}
                        value={newMessageBody}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;