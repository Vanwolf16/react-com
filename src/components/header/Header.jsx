import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { CartIcon } from '../cart-icon/cart-icon';

export const Header = () => {
    return(
        <nav className='nav-menu container'>
            <div className='logo'>
                <Link to='/'>NoMad</Link>
            </div>
            <ul>
                <li>
                <Link to='/'>
                    Home
                </Link>
                </li>
                <li>
                <Link to='/shop'>
                    Shop
                </Link>
                </li>
            </ul>
            <CartIcon />
        </nav>
    )
}