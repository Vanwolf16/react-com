import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {ProductContext} from '../../context/products-context';
import { CartContext } from "../../context/cart-context";
import { isInCart } from "../../helpers";
import './single-product.styles.scss';
import { Layout } from "../shared/layout";


export const SingleProduct = () => {
    const navigate = useNavigate();
    const { products } = useContext(ProductContext);
    const {addProduct, cartItems, increase } = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const product = products.find(item => Number(item.id) === Number(id));

        //if product does not exist, redirect to shop page
        if(!product){
            return navigate('/shop');
            
        }
        
        setProduct(product);

    },[id,product,products]);
    //while we check for product
    if(!product) {return null}

    const {imageUrl,title,price,description} = product;
    const itemInCart = isInCart(product,cartItems);


    return(
        <Layout>
            <div className="single-product-container">
                <div className="product-image">
                    <img src={imageUrl} alt="product" />
                </div>
                <div className="product-details">
                    <div className="name-price">
                        <h3>{title}</h3>
                        <p>{price}</p>
                    </div>
                    <div className="add-to-cart-btns">

                        { !itemInCart && <button className="button is-white nomad-btn" id="btn-white-outline" onClick={() => addProduct(product)}>ADD TO CART</button>}
                        
                        { itemInCart && <button className="button is-white nomad-btn" id="btn-white-outline" onClick={() => increase(product)}>ADD MORE</button>}

                        <button className="button is-black nomad-btn" id="btn-white-outline">PROCEED TO CHECKOUT</button>

                    </div>
                    <div className="product-description">
                        <p>{ description }</p>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

