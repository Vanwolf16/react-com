import {useNavigate} from 'react-router-dom';
import studioBag from '../../assets/studio-bag.png'
import './main-section.style.scss';


export const MainSection = () =>{
    const navigate = useNavigate();

    return(
        <div className='main-section-container'>
            <div className='main-section-middle'>
                <div className='ms-m-image'>
                    <img src={studioBag} alt="studioBag" />
                </div>
                <div className='ms-m-description'>
                    <h2>Designed for fashion. Crafted for sport.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi, consequuntur nesciunt adipisci eaque provident nobis consectetur laborum dolor minima.
                    </p>
                    <button className='button is-bulma' id='shop-now' onClick={() => navigate('/shop')}>STUDIO BAG</button>
                </div>
            </div>
        </div>
    );
}