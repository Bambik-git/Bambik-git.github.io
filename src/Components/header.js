import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} src={'https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png'}
                 alt={'logo'}/>
        </header>
    )
}

export default Header;