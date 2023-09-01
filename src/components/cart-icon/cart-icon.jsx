import ShoppingBag from '../../assets/shopping-bag.png';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    return(
        <div className='cart-container'>
            <img src={ShoppingBag} alt='shopping-cart-icon'/>
            <span className='cart-count'>5</span>
        </div>
    )
}