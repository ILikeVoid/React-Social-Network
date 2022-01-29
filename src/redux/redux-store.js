import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarPageReducer from "./sidebarPage-reducer";
import usersPageReducer from "./userPage-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarPageReducer,
    usersPage: usersPageReducer
});

let store = createStore(reducers);

export default store;