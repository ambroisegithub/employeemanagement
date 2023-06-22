import React, { useState, useEffect } from 'react';

const DateTimeUpdater = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Current Date and Time: {currentDateTime.toString()}</p>
    </div>
  );
};

export default DateTimeUpdater;
