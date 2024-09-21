import "./App.css";
import Map from "./supervisor/components/Map";
import MarkerList from "./supervisor/components/MarkerList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Staff from "./Staff";
import Supervisor from "./Supervisor";
import Sidebar from "./supervisor/components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
