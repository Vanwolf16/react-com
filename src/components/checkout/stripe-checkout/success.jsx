import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cart-context";
import { useEffect } from "react";
import { Layout } from '../../shared/layout';

export const Success = () => {
    const navigate = useNavigate();
    const { clearCart, cartItems } = useContext(CartContext);
    useEffect(() => {
        if(cartItems.length !== 0) {clearCart()}
    },[clearCart]);


    return(
        <Layout>
            <div className="checkout">
            <h1>Thank you for your order </h1>
            <p>We are currently processing your order </p>
            <div>
                <button className="button is-black nomad-btn submit" onClick={() => navigate('/shop')}>Continue Shopping</button>
            </div>
            </div>
        </Layout>
        
    )

}