import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Staff from "./Staff";
import Supervisor from "./Supervisor";
import Sidebar from "./supervisor/components/Sidebar";
import { NextUIProvider } from "@nextui-org/react";

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
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/supervisor" element={<Supervisor />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
