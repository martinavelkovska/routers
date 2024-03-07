import {Link, useNavigate} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function HomePage(){
    const navigate = useNavigate(); //to switch route programatically

    function navigateHanler(){
        navigate('/products');
    }
 return <><h1>My Home Page</h1>
 <p>Go to <Link to="/products">  the list of products</Link></p>
 <p>
    <button onClick={navigateHanler}>Navigate</button>
 </p>
 </>
}

export default HomePage;