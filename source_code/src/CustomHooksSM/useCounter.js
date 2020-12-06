import { useState } from "react";

let counterManager = {};
const delay = 1500;

function useCounter(count = 0) {
  const [counter, setCounter] = useState(count);

  counterManager.increment = (value) => {
    setCounter((state) => state + value);
  };

  counterManager.decrement = (value) => {
    setCounter((state) => state - value);
  };

  counterManager.incrementAsync = (value) => {
    setTimeout(counterManager.increment, delay, value);
  };

  counterManager.decrementAsync = (value) => {
    setTimeout(counterManager.decrement, delay, value);
  };

  return counter;
}

export { useCounter, counterManager };
