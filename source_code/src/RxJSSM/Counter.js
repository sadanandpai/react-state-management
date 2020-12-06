import React from "react";

import { increment, decrement, incrementAsync, decrementAsync } from "./useCounter";

export default function Counter(props) {
  return (
    <div>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
      <button onClick={() => incrementAsync(1)}>Increment Async</button>
      <button onClick={() => decrementAsync(1)}>Decrement Async</button>
    </div>
  );
}
