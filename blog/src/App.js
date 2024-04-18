import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
