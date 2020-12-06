import React from "react";

import { useState } from "react";

import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

const initalState = 0;
const delay = 1500;

export default function ReduxSagaSM(props) {
  const [state, setState] = useState(initalState);

  const increment = (value) => {
    setState((state) => state + value);
  };

  const decrement = (value) => {
    setState((state) => state - value);
  };

  const incrementAsync = (value) => {
    setTimeout(() => setState((state) => state + value), delay);
  };

  const decrementAsync = (value) => {
    setTimeout(() => setState((state) => state - value), delay);
  };

  return (
    <div>
      <h3 className="flex">{props.title}</h3>
      <div className="flex">
        <Counter increment={increment} decrement={decrement} incrementAsync={incrementAsync} decrementAsync={decrementAsync} />
        <CounterDisplay state={state} />
      </div>
    </div>
  );
}
