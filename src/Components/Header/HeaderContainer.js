import React from "react";
import style from './Header.module.css';
import {Link} from "react-router-dom";

const Header = () => {


    return (
        <header className={style.header}>
            <img className={style.logo} src={'https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png'}
                 alt={'logo'}/>
             <div className={style.login_block}>
                 <Link to={'/login'}>Login</Link>
             </div>
        </header>
    )
}

export default Header;