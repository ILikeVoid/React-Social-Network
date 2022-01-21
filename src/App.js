import React from "react";
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar"
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sett from "./components/Settings/Sett";
import {Route, BrowserRouter, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/*" element={<Profile
                            store={props.store}
                        />}/>
                        <Route path="/dialogs/*" element={<Dialogs
                            store={props.store}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Sett/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;