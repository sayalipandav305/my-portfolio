// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SnapSearch from "./pages/snapsearch";
import Trendzy from "./pages/trendzy";
import Work from "./pages/Work.jsx";
import ATG from "./pages/ATG.jsx";
import Drafto from "./pages/drafto.jsx";
import Athena from "./pages/Athena.jsx";  


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/snapsearch" element={<SnapSearch />} />
      <Route path="/trendzy" element={<Trendzy />} />
      <Route path="/work" element={<Work />} />
      <Route path="/atg" element={<ATG />} />
      <Route path="/drafto" element={<Drafto />} />
      <Route path="/athena" element={<Athena />} />
    </Routes>
  );
}

export default App;
