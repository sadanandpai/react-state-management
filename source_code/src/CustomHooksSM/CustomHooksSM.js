import React from "react";

import { useCounter, counterManager } from "./useCounter";

import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

export default function CustomHooksSM(props) {
  const state = useCounter(0);

  return (
    <div>
      <h3 className="flex">{props.title}</h3>
      <div className="flex">
        <Counter
          increment={counterManager.increment}
          decrement={counterManager.decrement}
          incrementAsync={counterManager.incrementAsync}
          decrementAsync={counterManager.decrementAsync}
        />
        <CounterDisplay state={state} />
      </div>
    </div>
  );
}
