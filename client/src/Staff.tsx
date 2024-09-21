import { useState } from 'react';
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom'; 



function Staff() {
  const [formData, setFormData] = useState({
    status: "good",
    comment: "",
  })
  const [checkOutTime, setCheckOutTime] = useState<Date | null>(null); // State to store the timestamp
  const navigate = useNavigate();
  const handleCheckOut = () => {
    const currentTime = new Date(); 
    setCheckOutTime(currentTime);
    console.log(`Checked out at: ${currentTime}`);
    //send to backend?
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)

    try {
      const response = await fetch('http://localhost:5000/notifications', {
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
    }
    ));
  };

    const handleClockOut = () => {
      navigate('/clockin'); 
    };
  return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-11 md:gap-y-8">
                    <Button color="success" className="w-80 md:w-70" onClick={() => handleButtonClick('good')}>
                        Great
                    </Button>
                    <Button color="primary" className="w-80 md:w-70" onClick={() => handleButtonClick('extend')}>
                        Extend Time
                    </Button>
                    <Button color="warning" className="w-80 md:w-70" onClick={() => handleButtonClick('emergency')}>
                        Emergency
                    </Button>
                    <Button color="danger" className="w-80 md:w-70" onClick={() => handleButtonClick('sos')}>
                        SOS
                    </Button>
                </div>
                <input
                type="text"
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                className="mt-10 w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
              <input
                type="submit"
                value="Submit"
                className="mt-8 bg-black text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
              />
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-6" onClick={handleClockOut}>
                  Clock Out                    
                </Button>
            </form>
        </>
    );
}
export default Staff;