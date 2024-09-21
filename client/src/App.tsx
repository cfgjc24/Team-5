import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Staff from "./Staff";
import Clock from "./Clock";
import Supervisor from "./Supervisor";
import Sidebar from "./supervisor/components/Sidebar";
import Notifications from "./supervisor/components/Notifications";
import "./App.css";
import Login from "./login/Login.tsx";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/clockin" element={<Clock />} />
            <Route path="/supervisor" element={<Supervisor />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
