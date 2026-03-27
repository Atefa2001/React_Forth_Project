
import {NavLink} from "react-router-dom";


function Navbar  (){
     return (
        <nav  className="nav">
            <h2 className="logo">Ruby Store</h2>

            <div>
                <NavLink  to="/home">Home</NavLink>
                <NavLink  to="/products">Products</NavLink>
            </div>
        </nav>
     );
}


export default Navbar;