import { useContext } from 'react';
import ShoppingBag from '../../assets/shopping-bag.png';
import { CartContext } from '../../context/cart-context';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    const {itemCount} = useContext(CartContext);
    return(
        <div className='cart-container'>
            <img src={ShoppingBag} alt='shopping-cart-icon'/>
            {itemCount > 0 ? <span className='cart-count'>{itemCount}</span> : null}
            
        </div>
    )
}