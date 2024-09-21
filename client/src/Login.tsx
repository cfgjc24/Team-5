import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div></div>
      <h1>LoadStar</h1>
      <div className="card">
        <h3>UserName:</h3>
        <input value={userName} onChange={handleUserNameChange} />
        <h3>Password:</h3>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button>Login</button>
    </>
  );
}
