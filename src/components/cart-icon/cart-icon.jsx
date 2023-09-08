import { useContext } from 'react';
import ShoppingBag from '../../assets/shopping-bag.png';
import { CartContext } from '../../context/cart-context';
import './cart-icon.styles.scss';
import { useNavigate, useParams } from 'react-router-dom';

export const CartIcon = () => {
    const navigate = useNavigate();
    const {itemCount,cartItems} = useContext(CartContext);
    console.log('CartItems:',cartItems);
    return(
        <div className='cart-container' onClick={() => navigate('/cart')}>
            <img src={ShoppingBag} alt='shopping-cart-icon'/>
            {itemCount > 0 ? <span className='cart-count'>{itemCount}</span> : null}
            
        </div>
    )
}