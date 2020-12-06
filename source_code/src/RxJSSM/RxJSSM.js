import React from "react";

import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

export default function RxJSSM(props) {
  return (
    <div>
      <h3 className="flex">{props.title}</h3>
      <div className="flex">
        <Counter />
        <CounterDisplay />
      </div>
    </div>
  );
}
