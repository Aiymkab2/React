import React, { useState } from 'react';

const StepCounter = ({ initialValue = 0, step = 1 }) => {
  const [count, setCount] = useState(initialValue);
  
  const [history, setHistory] = useState([initialValue]);
  const [operationCount, setOperationCount] = useState(0);
  
  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };
  
  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };
  
  const reset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
    setOperationCount(0);
  };

  const lastFiveValues = history.length <= 5 
    ? history 
    : history.slice(-5);
  
  return (
    <div>
      <h2>Step Counter</h2>
      <p>Current Count: <strong>{count}</strong></p>
      <p>Total Operations: <strong>{operationCount}</strong></p>
      <p>Last 5 values: <strong>{lastFiveValues.join(', ')}</strong></p>
      
      <button onClick={increment}>Increment (+{step})</button>
      <button onClick={decrement}>Decrement (-{step})</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StepCounter;