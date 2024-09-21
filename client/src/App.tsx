import "./App.css";
import Map from "./supervisor/components/Map";
import MarkerList from "./supervisor/components/MarkerList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Staff from "./Staff";
import Supervisor from "./Supervisor";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
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
