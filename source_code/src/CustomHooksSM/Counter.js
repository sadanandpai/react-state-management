import React from "react";

export default function Counter(props) {
  return (
    <div>
      <button onClick={() => props.increment(1)}>Increment</button>
      <button onClick={() => props.decrement(1)}>Decrement</button>
      <button onClick={() => props.incrementAsync(1)}>Increment Async</button>
      <button onClick={() => props.decrementAsync(1)}>Decrement Async</button>
    </div>
  );
}
