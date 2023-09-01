import {Routes,Route} from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/home-page';
import { NotFound } from './components/not-found';
import { Shop } from './components/pages/shop/shop';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' Component={HomePage}/>
        <Route path='/shop' Component={Shop} />
        <Route path='*' Component={NotFound}/>
      </Routes>
    </div>
  );
}

export default App;
