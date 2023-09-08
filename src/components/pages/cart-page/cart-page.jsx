import { useContext } from 'react';
import {CartContext} from '../../../context/cart-context';

import { CartItem } from './cart-items';
import './cart-page.styles.scss';
import { Layout } from '../../shared/layout';
import { Total } from './total';

export const CartPage = () => {
    const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart} = useContext(CartContext);
    const funcs = {increase, decrease, removeProduct}

    return(
        <Layout>
            <>
            <h1>Cart</h1>
            {cartItems.length === 0 ? <div className='empty-cart'>Your Cart Empty</div> :

            <>
                <div className='cart-page'>
                    <div className='cart-item-container'>
                        {cartItems.map(item => <CartItem{...item} key={item.id} {...funcs} />)}
                    </div>
                </div>
                <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
            </>

            }

            </>
        </Layout>
    )

}