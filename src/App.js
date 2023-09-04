import {Routes,Route} from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/home-page';
import { NotFound } from './components/not-found';
import { Shop } from './components/pages/shop/shop';
import { SingleProduct } from './components/single-product/single-product';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' Component={HomePage}/>
        <Route path='/shop' Component={Shop} />
        <Route path='/product/:id' Component={SingleProduct} />
        <Route path='*' Component={NotFound}/>
      </Routes>
    </div>
  );
}

export default App;
