import { useState } from 'react';
import './App.css';
import Home from './Home';
import Staff from './Staff';

function App() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  
  const handleClockIn = () => {
    setIsClockedIn(true);
    
  };

  return (
    <div>
      {isClockedIn ? (
        <Staff />
      ) : (
        <Home onClockIn={handleClockIn} />
      )}
    </div>
  );
}

export default App;
