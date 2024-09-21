<<<<<<< Updated upstream
import { useState } from 'react';
import './App.css';
import Home from './Home';
import Staff from './Staff';
=======
import './App.css'
import Home from './Home.tsx'
import Staff from './Staff.tsx'
import Clock from './Clock.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
>>>>>>> Stashed changes


function App() {
<<<<<<< Updated upstream
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
=======
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  )
>>>>>>> Stashed changes
}

export default App;
