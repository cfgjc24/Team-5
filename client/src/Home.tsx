import React from 'react';
import './App.css';

interface HomeProps {
  onClockIn: () => void;
}

const Home: React.FC<HomeProps> = ({ onClockIn }) => {
  return (
    <>
      <div>
        <h1>Please Clock In </h1>
        <button type="button" onClick={onClockIn}>
          Clock In
        </button>
      </div>
    </>
  );
};

export default Home;
