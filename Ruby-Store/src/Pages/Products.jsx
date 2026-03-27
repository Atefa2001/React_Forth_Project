
import { Outlet } from "react-router-dom";


function Products () {
    return(
        <div className="products">
            <h2>Our Ruby Collection</h2>
            <p>Choos your favorite jewelry</p>

            <Outlet />
        </div>
    );
}


export default Products;