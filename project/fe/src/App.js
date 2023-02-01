import { Routes, Route } from "react-router-dom";
import Users from "./Pages/Users";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Side from "./Components/side";
import AddUsers from "./Pages/AddUsers";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/addusers" element={<AddUsers />} />
      </Routes>
    </div>
  );
}

export default App;
