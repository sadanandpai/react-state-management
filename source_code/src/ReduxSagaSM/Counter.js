import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <button onClick={() => props.increment(1)}>Increment</button>
      <button onClick={() => props.decrement(1)}>Decrement</button>
      <button onClick={() => props.incrementAsync(1)}>Increment Async</button>
      <button onClick={() => props.decrementAsync(1)}>Decrement Async</button>
    </div>
  );
}

const mapDispatchToProps = {
  increment: (payload) => {
    return {
      type: "INCREMENT",
      payload,
    };
  },

  decrement: (payload) => {
    return {
      type: "DECREMENT",
      payload,
    };
  },

  incrementAsync: (payload) => {
    return {
      type: "INCREMENT_ASYNC",
      payload,
    };
  },

  decrementAsync: (payload) => {
    return {
      type: "DECREMENT_ASYNC",
      payload,
    };
  },
};

export default connect(undefined, mapDispatchToProps)(Counter);
