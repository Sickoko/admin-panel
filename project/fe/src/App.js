import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Product from "./Pages/AddProduct";
import AddUsers from "./Pages/AddUsers";
import UserList from "./Pages/UserList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/addproduct" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
