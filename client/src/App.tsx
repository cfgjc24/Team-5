import './App.css'
import Home from './Home.tsx'
import Staff from './Staff.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  )
}

export default App
