import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome/Welcome";
import Employees from "./components/Employees/Employees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
