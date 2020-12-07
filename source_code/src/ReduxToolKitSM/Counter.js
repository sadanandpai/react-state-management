import React from "react";
import { counterSlice, incrementAsync, decrementAsync } from "./reducer";
import { useDispatch } from "react-redux";

const { increment, decrement } = counterSlice.actions;

function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync(1))}>Increment Async</button>
      <button onClick={() => dispatch(decrementAsync(1))}>Decrement Async</button>
    </div>
  );
}

export default Counter;
