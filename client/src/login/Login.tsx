import React from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom' ;

export default function Login() {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userName == "supervisor") {
      navigate("/supervisor") 
    } ;
    if (userName == "staff") {
      navigate("/staff") 
    } ;
   
  }

  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh' }} className="flex items-center justify-center">
      <div className="flex flex-col space-y-4 items-center">
  
         {/* Header */}
         <h1 className="text-2xl font-bold">Log In</h1>
  
        {/* Email Input */}
        <Input onChange={handleUserNameChange}
          isRequired
          type="username"
          label="Username"
          defaultValue="client@gmail.com"
          className="max-w-xs"
        />
  
        {/* Password Input */}
        <Input onChange={handlePasswordChange}
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
        />
  
        {/* Submit Button */}
        <Button color="primary" onClick = {handleSubmit} size="md">
          Log In
        </Button>
      </div>
    </div>
  );
  
}
