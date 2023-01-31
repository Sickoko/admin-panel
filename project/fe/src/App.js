import { Routes, Route } from "react-router-dom";
import Users from "./Pages/Users";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Admin Panel Project</h1>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;