import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Product from "./Pages/AddProduct";
import AddUsers from "./Pages/AddUsers";
import ProductsList from "./Pages/ProductsList";
import UserList from "./Pages/UserList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<AddUsers />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/addproduct" element={<Product />} />
        <Route path="/productslist" element={<ProductsList />} />
      </Routes>
    </div>
  );
}

export default App;
