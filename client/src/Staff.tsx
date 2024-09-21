import { useState } from 'react';
import { Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { FiInfo } from "react-icons/fi";

function Staff() {
  const [formData, setFormData] = useState({
    name: "Liam Wilson",
    status: "good",
    comment: "",
  });
  const [checkOutTime, setCheckOutTime] = useState<Date | null>(null);
  const navigate = useNavigate();

  const handleCheckOut = () => {
    const currentTime = new Date();
    setCheckOutTime(currentTime);
    console.log(`Checked out at: ${currentTime}`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4326/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submission successful:', result);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleButtonClick = (choice: string) => {
    setFormData((prevData) => ({
      ...prevData,
      status: choice,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClockOut = () => {
    navigate('/clockin');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-11 md:gap-y-8">
          <div className="flex items-center">
            <Button color="success" className="w-80 md:w-70" onClick={() => handleButtonClick('good')}>
              Great
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button isIconOnly className="mx-2">
                  <FiInfo size="20" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p>All is well, nothing to report.</p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center">
            <Button color="primary" className="w-80 md:w-70" onClick={() => handleButtonClick('extend')}>
              Extend Time
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button isIconOnly className="mx-2">
                  <FiInfo size="20" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p>Need more time to complete my visit.</p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center">
            <Button color="warning" className="w-80 md:w-70" onClick={() => handleButtonClick('emergency')}>
              Emergency
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button isIconOnly className="mx-2">
                  <FiInfo size="20" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p>Handling an emergency situation, assistance may be required.</p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center">
            <Button color="danger" className="w-80 md:w-70" onClick={() => handleButtonClick('sos')}>
              SOS
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button isIconOnly className="mx-2">
                  <FiInfo size="20" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p>Call 911 for me or request immediate help.</p>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <input
          type="text"
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          className="mt-10 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        />
        <Button
          color="secondary"
          type="submit"
          className="mt-8 p-2 rounded-md shadow-md transition duration-200"
        >
          Submit
        </Button>

        <Button radius="full" className="mt-6" onClick={handleClockOut}>
          Clock Out
        </Button>
      </form>
    </>
  );
}

export default Staff;

