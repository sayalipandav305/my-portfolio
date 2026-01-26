// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SnapSearch from "./pages/snapsearch";
import Trendzy from "./pages/trendzy";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/snapsearch" element={<SnapSearch />} />
      <Route path="/trendzy" element={<Trendzy />} />
    </Routes>
  );
}

export default App;
