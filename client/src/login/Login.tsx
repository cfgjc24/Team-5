import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!) || []
      : [];
    const foundUser = users.find(
      (user: { username: string; password: string }) =>
        user.username === username && user.password === password
    );

    if (foundUser) {
      if (foundUser.role === "supervisor") {
        navigate("/supervisor");
      } else {
        navigate("/clockin");
      }
    } else {
      // Handle invalid credentials
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
    >
      <div className="flex flex-col space-y-4 items-center">
        {/* Header */}
        <h1 className="text-2xl font-bold">Log In</h1>

        {/* Username Input */}
        <Input
          onChange={handleUserNameChange}
          isRequired
          type="text"
          label="Username"
          value={username}
          className="max-w-xs"
        />

        {/* Password Input */}
        <Input
          onChange={handlePasswordChange}
          isRequired
          label="Password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          value={password}
          className="max-w-xs"
        />

        {/* Submit Button */}
        <Button onClick={handleSubmit} size="md">
          Log In
        </Button>

        {/* Register Link */}
        <Button
          onClick={() => navigate("/register")}
          className="mt-2"
        >
          Don't have an account? Register
        </Button>
      </div>
    </div>
  );
}

