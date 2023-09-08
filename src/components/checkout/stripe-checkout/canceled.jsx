import { useNavigate } from "react-router-dom";
import { Layout } from "../../shared/layout";

export const Canceled = () => {
    const navigate = useNavigate();
    <Layout>
        <div className="checkout">
            <h1>Payment Failed</h1>
            <p>Payment was not successful</p>
            <div>
                <button className="button is-black nomad-btn submit" onClick={() => navigate('/shop')}>Continue Shopping</button>
            </div>
        </div>
    </Layout>
}