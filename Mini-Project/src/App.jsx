import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Sidebar from "./Components/Sidebar.jsx";
import Home from "./Pages/Home.jsx";
import Institute from "./Pages/Institute.jsx";
import Lodge from "./Pages/Lodge.jsx";
import Business from "./Pages/Business.jsx";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/lodge" element={<Lodge />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
