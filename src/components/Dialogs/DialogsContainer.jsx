import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let onAddMessage= () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onChangeMessage = (text) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs updateNewMessageText={onChangeMessage} addMessage={onAddMessage}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer;