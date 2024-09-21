import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

export default function Login() {
  // Explicitly typing the state as a boolean
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col space-y-4">
      {/* Email Input */}
      <Input
        isRequired
        type="username"
        label="Username"
        defaultValue="client@lodestar.org"
        className="max-w-xs"
      />

      {/* Password Input */}
      <Input
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
        // Toggling password visibility
        type={isVisible ? "text" : "password"}
        className="max-w-xs"
        
        
      />
    </div>
    
  );
  
}

