
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css"
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Institute from "./Pages/Institute.jsx";
import Lodge from "./Pages/Lodge.jsx";
import Business from "./Pages/Business.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/lodge" element={<Lodge />} />
            <Route path="/business" element={<Business />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
