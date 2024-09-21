import { useState } from 'react';

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
          <button type="button" onClick={() => handleButtonClick('good')}>Great</button>
          <button type="button" onClick={() => handleButtonClick('extend')}>Extend Time</button>
          <button type="button" onClick={() => handleButtonClick('emergency')}>Emergency</button>
          <button type="button" onClick={() => handleButtonClick('sos')}>SOS</button>
        </div>
        <input type="text" id="comment" name="comment" value={formData.comment} onChange={handleInputChange}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

export default Staff

