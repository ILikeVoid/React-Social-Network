import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarPageReducer from "./sidebarPage-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, How are you?', likesCount: 100},
                {id: 2, message: 'This`is my new post', likesCount: 83},
            ],
            newPostText:''
        },
        dialogsPage: {
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
            newMessageText:''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarPageReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;