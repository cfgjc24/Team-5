import React, { useState } from "react";
import { Input, Button, RadioGroup, Radio } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    role: "staff",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleRoleChange = (value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      role: value,
    }));
  };

  const handleRegister = () => {
    console.log(formValues);
    if (!formValues.name || !formValues.email || !formValues.phoneNumber || !formValues.username || !formValues.password) {
      console.error("Form is incomplete");
    } else {
      console.log(formValues);
      const existingUsers = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users")!) || []
        : [];
      const updatedUsers = [...existingUsers, formValues];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      if (formValues.role === "supervisor") {
        navigate("/supervisor");
      } else {
        navigate("/staff");
      }
    }
  };

  return (
    <div
      style={{ backgroundColor: "lightblue", minHeight: "100vh" }}
      className="flex items-center justify-center"
    > <div className="flex flex-col space-y-4 items-center">
        <h1 className="text-2xl font-bold">Register</h1>

        <Input
          name="name"
          onChange={handleChange}
          isRequired
          type="text"
          label="Name"
          value={formValues.name}
          className="max-w-xs"
        />

        <div className="max-w-xs w-full">
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <RadioGroup
            orientation="horizontal"
            value={formValues.role}
            onChange={handleRoleChange}
            className="mt-2"
          >
            <Radio value="staff">Staff</Radio>
            <Radio value="supervisor">Supervisor</Radio>
          </RadioGroup>
        </div>

        <Input
          name="email"
          onChange={handleChange}
          isRequired
          type="email"
          label="Email Address"
          value={formValues.email}
          className="max-w-xs"
        />

        <Input
          name="phoneNumber"
          onChange={handleChange}
          isRequired
          type="tel"
          label="Phone Number"
          value={formValues.phoneNumber}
          className="max-w-xs"
        />

        <Input
          name="username"
          onChange={handleChange}
          isRequired
          type="text"
          label="Username"
          value={formValues.username}
          className="max-w-xs"
        />

        <Input
          name="password"
          onChange={handleChange}
          label="Password"
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
          value={formValues.password}
          className="max-w-xs"
        />

        <Button color="success" onClick={handleRegister} size="md">
          Register
        </Button>

        <Button
          onClick={() => navigate("/login")}
          className="mt-2"
        >
          Already have an account? Log In
        </Button>
      </div>
    </div>
  );
}

