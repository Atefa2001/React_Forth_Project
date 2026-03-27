
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";
import './App.css';



function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/"  element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} >
      <Route index element={<ProductList />} />
      <Route path=":id" element={<ProductDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;