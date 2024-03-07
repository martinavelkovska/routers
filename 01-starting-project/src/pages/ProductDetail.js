import {Link, useParams} from 'react-router-dom'; // react router dom gives us another tool for getting hold of the actual value used

function ProductDetailPage(){
    const params = useParams();

    return <> <h1>
        Product Details!
    </h1>
    <p>{ params.productId}</p>
    <p><Link to="/products" relative="path">Back</Link></p> 
</>
}

export default ProductDetailPage;