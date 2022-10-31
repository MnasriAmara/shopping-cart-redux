import "./App.css";
import ListProd from "./Components/ListProd";
import FilterProduct from "./Components/FilterProduct";
import { Panier } from "./Components/Panier";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import AddProduct from "./Components/addproduct"
import EditProd from "./Components/editprod";


function App() {
  
  return (
    <div className="App">
      <nav>
        <FilterProduct/>
      </nav>
      
      <Routes>
        <Route path="/addprod" element={<AddProduct/>}/>
        <Route path="/" element={<ListProd/>} />

        <Route path="/panier" element={ <Panier/> } />

        <Route path="/details/:idprod" element={<ProductDetails/>}/>

        <Route path="/edit/:id" element={<EditProd/> }/>
      </Routes>

    </div>
  );
}

export default App;
