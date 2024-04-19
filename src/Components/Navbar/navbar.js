import style from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.listItem}>
                <li><Link className={style.item} to={'/profile'}>Profile</Link></li>
                <li><Link to={'/dialogs'}>Messages</Link></li>
                <li><Link to={'/#'}>News</Link></li>
                <li><Link to={'/#'}>Music</Link></li>
                <li><Link to={'/#'}>Settings</Link></li>
                <li><Link to={'/users'}>Find Users</Link></li>

            </ul>
        </nav>

    )
}

export default Navbar;