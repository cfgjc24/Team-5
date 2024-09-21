import React from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

export default function Login() {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col space-y-4 items-center">

         {/* Header */}
         <h1 className="text-2xl font-bold">Log In</h1>

        {/* Email Input */}
        <Input
          isRequired
          type="username"
          label="Username"
          defaultValue="client@gmail.com"
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
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
        />

        {/* Submit Button */}
        <Button color="primary" size="md">
          Log In
        </Button>
      </div>
    </div>
  );
}
