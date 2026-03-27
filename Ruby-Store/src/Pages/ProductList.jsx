
import { Link } from "react-router-dom";
import products from "../Data/Products";

function ProductList() {
    return(
        <div className="grid">
            {products.map((P) => (
                <div key={P.id} className="card">
                    <img src={P.image} alt={P.name}/>

                    <h3>{P.name}</h3>
                    <p>${P.price}</p>

                    <Link to={`/products/${P.id}`}>
                    <button>View Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}


export default ProductList;