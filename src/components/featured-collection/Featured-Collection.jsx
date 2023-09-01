import { useContext } from 'react';
import { ProductContext } from '../../context/products-context';
import { FeaturedProduct } from '../shared/featured-product';

export const FeaturedCollection = () => {
    const {products} = useContext(ProductContext);
    const productItems = products.filter((product, i) => i < 4).map(product => (
        <FeaturedProduct key={product.id} {...product} />
    ));

    return(
        <div className='featured-collection container'>
            <h2 className='featured-section-title'>Featured Collection</h2>
            <div className='products'>
                {
                    productItems
                }
            </div>
        </div>
    )

}