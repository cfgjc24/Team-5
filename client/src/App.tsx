import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import Staff from "./Staff";
import Clock from "./Clock";
import Supervisor from "./Supervisor";
import Sidebar from "./supervisor/components/Sidebar";
import Notifications from "./supervisor/components/Notifications";
import "./App.css";
import Login from "./login/Login.tsx";
import Register from "./login/Register.tsx";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  return (
    <>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path="/staff" element={isLoggedIn ? <Staff /> : <Navigate to="/login" />} />
            <Route path="/clockin" element={isLoggedIn ? <Clock /> : <Navigate to="/login" />} />
            <Route path="/supervisor" element={isLoggedIn ? <Supervisor /> : <Navigate to="/login" />} />
            <Route path="/sidebar" element={isLoggedIn ? <Sidebar /> : <Navigate to="/login" />} />
            <Route path="/notifications" element={isLoggedIn ? <Notifications /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
