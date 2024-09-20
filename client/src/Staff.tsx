import './Staff.css'


function Staff() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/supervisor', {
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

  const goodButton= () =>{
    console.log("Great!");
  };

  const extendTime = () => {
    const extraTime = window.prompt("Enter the amount of extra time (in minutes):");
    if (extraTime) {
      console.log(`You have requested ${extraTime} extra minutes.`);
    } else {
      console.log("No extra time entered.");
    }
  };

  const smallEmergency = () =>{
    console.log("Supervisors have been notified");
  };

  const sos = () => {
    console.log("Appropriate measures have been taken");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
        <button type="button" onClick={goodButton}>Great</button>
        <button type="button" onClick={extendTime}>Extend Time</button>
        <button type ="button" onClick = {smallEmergency}>Emergency</button>
        <button type ="button" onClick = {sos}>SOS</button>
        </div>
        <input type="text" id="test" name="test"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

export default Staff

