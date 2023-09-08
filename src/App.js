import {Routes,Route} from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/home-page';
import { NotFound } from './components/not-found';
import { Shop } from './components/pages/shop/shop';
import { SingleProduct } from './components/single-product/single-product';
import { CartPage } from './components/pages/cart-page/cart-page';
import { Checkout } from './components/checkout/checkout';
import { Success } from './components/checkout/stripe-checkout/success';
import { Canceled } from './components/checkout/stripe-checkout/canceled';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' Component={HomePage}/>
        <Route path='/shop' Component={Shop} />
        <Route path='/product/:id' Component={SingleProduct} />
        <Route path='/cart' Component={CartPage}/>
        <Route path='*' Component={NotFound}/>
        <Route path='/checkout' Component={Checkout} />
        <Route path='/success' Component={Success} />
        <Route path='/canceled' Component={Canceled} />
      </Routes>
    </div>
  );
}

export default App;
