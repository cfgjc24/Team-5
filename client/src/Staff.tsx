import './App.css'


function Staff() {
  const good_button= () =>{
    console.log("Great!");
  };

  const extend_time = () => {
    const extraTime = window.prompt("Enter the amount of extra time (in minutes):");
    if (extraTime) {
      console.log(`You have requested ${extraTime} extra minutes.`);
    } else {
      console.log("No extra time entered.");
    }
  };

  const small_emergency = () =>{
    console.log("Supervisors have been notified");
  };

  const sos = () => {
    console.log("Appropriate measures have been taken");
  };

  return (
    <>
      <form action="/supervisor">
        <div>
        <button type="button" onClick={good_button}>Great</button>
        <button type="button" onClick={extend_time}>Extend Time</button>
        <button type = "button" onClick = {small_emergency}>Emergency</button>
        <button type = "button" onClick = {sos}>SOS</button>
        </div>
        <input type="text" id="test" name="test"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

export default Staff

