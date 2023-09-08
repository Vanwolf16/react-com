import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductsContextProvider from './context/products-context';
import { CartContextProvider } from './context/cart-context';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51NnmTELRhrEpBsmSOSCqIlyWu8wMkVo47IkioWa7RlSuiwrGg6QQjgYcWMmnPPGzPq2XVFrq2WMlmlMvzASsKBal00NuKcVaUP");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    
    <ProductsContextProvider>


    <CartContextProvider>
        <Elements stripe={stripePromise}>
        <App />
        </Elements>
        
    </CartContextProvider>
    

    </ProductsContextProvider>
    
    </BrowserRouter>
    
);


