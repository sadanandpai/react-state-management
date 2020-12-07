import React from "react";
import { useSetRecoilState } from "recoil";

import { state } from "./reducer";

const delay = 1500;

function Counter() {
  const setState = useSetRecoilState(state);

  return (
    <div>
      <button onClick={() => setState((state) => state + 1)}>Increment</button>
      <button onClick={() => setState((state) => state - 1)}>Decrement</button>
      <button
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, delay));
          setState((state) => state + 1);
        }}
      >
        Increment Async
      </button>
      <button
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, delay));
          setState((state) => state - 1);
        }}
      >
        Decrement Async
      </button>
    </div>
  );
}

export default Counter;
