const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Do you speak English?'},
    ],
    dialogs: [
        {id: 1, name: 'Dauren'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Nurzhan'},
        {id: 4, name: 'Madara'},
    ],
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageBody,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsPageReducer;