import React from "react";
import style from './Header.css';
import {Link} from "react-router-dom";
import {logoutTC} from "../../redux/auth_reducer";
import Navbar from "../Navbar/navbar";

const Header = ({logoutTC, isAuth, login}) => {
    return (
        <header className='header'>
            <Navbar/>
            <div className='header__user_login'>
                {isAuth ?
                    <>
                        <button className="default_btn" onClick={logoutTC}>Выйти</button>
                        <div className='header__user_name'>
                            <Link to={'/profile'}>{login}</Link>
                        </div>
                    </>
                    : <Link to={'/login'}>
                        <button className="default_btn">Войти</button>
                    </Link>
                }
            </div>
        </header>

    )
}

export default Header;