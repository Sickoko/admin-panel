import { Routes, Route, Link } from "react-router-dom";
import Users from "./Pages/Users";
import "./App.css";
import AddUsers from "./Pages/AddUsers";

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
