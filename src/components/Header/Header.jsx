import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://svirtus.cdnvideo.ru/wyfmapneqHUurr_mlqhnldhN-Os=/0x0:202x202/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/f9/f9d7bbc7839d7a4c9a2d3bacecbc30c8.png?m=127ef30cfbc05dbe965544fadc7b9044'/>
            <div className={s.login_block}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;