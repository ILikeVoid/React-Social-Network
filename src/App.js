import React, {Component, Suspense} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sett from "./components/Settings/Sett";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<div><Preloader/></div>}>
                            <Routes>
                                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                                <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                                <Route path="/users/*" element={<UsersContainer/>}/>
                                <Route path="/news/*" element={<News/>}/>
                                <Route path="/music/*" element={<Music/>}/>
                                <Route path="/settings/*" element={<Sett/>}/>
                                <Route path="/login/" element={<Login/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const MainApp = (props) => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}

export default MainApp