import React from "react";
import style from './Header.module.css';
import {Link} from "react-router-dom";
import {logoutTC} from "../../redux/auth_reducer";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img className={style.logo} src={'https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png'}
                 alt={'logo'}/>
             <div className={style.login_block}>
                 { props.isAuth ?
                     <div> {props.login} - <button onClick={props.logoutTC}>Log out</button> </div>:
                     <Link to={'/login'}>Login</Link>}
             </div>
        </header>
    )
}

export default Header;