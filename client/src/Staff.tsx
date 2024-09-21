import { useState } from 'react';
import {Button} from "@nextui-org/react";



function Staff() {
  const [formData, setFormData] = useState({
    status: "good",
    comment: "",
  })

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
  }
  
  return (
    <>

      <form onSubmit={handleSubmit}>
        <div>
        <Button color="primary" onClick={() => handleButtonClick('good')}>
          Great
        </Button>
        <Button color = "primary" onClick ={() => handleButtonClick('extend')}>
          Extend Time
        </Button>
        <Button color = "primary" onClick ={() => handleButtonClick('emergency')}>
          Emergency
        </Button>
        <Button color = "primary" onClick ={() => handleButtonClick('sos')}>
          SOS
        </Button>
        </div>
        <input type="text" id="comment" name="comment" value={formData.comment} onChange={handleInputChange}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

export default Staff

