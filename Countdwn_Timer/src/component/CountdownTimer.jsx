import React, { useState, useEffect } from 'react';
import '../component/Countdwn.css'
function CountdownTimer() {
  const [seconds, setSeconds] = useState(60);     // default 60 seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(60); // Reset to default or any value
  };

  return (
    <div className="timer-container">
      <h1>Countdown Timer</h1>
      <h2>{seconds}s</h2>
      <div>
        <button onClick={startTimer} disabled={isActive}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default CountdownTimer;
