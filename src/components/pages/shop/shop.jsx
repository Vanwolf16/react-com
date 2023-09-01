import "./shop.styles.scss";
import { Layout } from "../../shared/layout";
import { FeaturedProduct } from "../../shared/featured-product";
import { ProductContext } from "../../../context/products-context";
import { useContext } from "react";


export const Shop = () => {
    const { products } = useContext(ProductContext);
    const allProducts = products.map(product => (
        <FeaturedProduct {...product} key={product.id}/>
    ));

    return(
       <Layout>
         <div className="product-list-container container">
            <h2 className="product-list-title">Shop</h2>
            <div className="product-list">
                {
                    allProducts
                }
            </div>
        </div>
       </Layout>
    )

}