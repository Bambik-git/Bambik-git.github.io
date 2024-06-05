import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link className='navbar__menu_item' to={'/#'}>Главная</Link>
            <Link className='navbar__menu_item' to={'/profile'}>Профиль</Link>
            <Link className='navbar__menu_item' to={'/users'}>Пользователи</Link>
        </nav>
    )
}

export default Navbar;