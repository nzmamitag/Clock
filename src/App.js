import './App.css';
import React, { useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  // Update time every second
  setInterval(() => {
    setTime(new Date());
  }, 1000);

  const formattedTime = time.toLocaleTimeString('en-US', { timeZone: 'Asia/Manila' });
  return (
    <div className="App">
      <header className="App-header">
        <h2>{formattedTime}</h2>
      </header>
    </div>
  );
}

export default App;
