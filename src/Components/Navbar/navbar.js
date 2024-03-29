import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><a className={style.item} href={'/profile'}>Profile</a></li>
                <li><a href={'/dialogs'}>Messages</a></li>
                <li><a href={'/#'}>News</a></li>
                <li><a href={'/#'}>Music</a></li>
                <li><a href={'/#'}>Settings</a></li>
            </ul>
        </nav>

    )
}

export default Navbar;