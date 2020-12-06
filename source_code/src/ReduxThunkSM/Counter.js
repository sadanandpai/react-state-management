import React from "react";
import { connect } from "react-redux";

const delay = 1500;

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
    return (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: "INCREMENT",
          payload,
        });
      }, delay);
    };
  },

  decrementAsync: (payload) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: "DECREMENT",
          payload,
        });
      }, delay);
    };
  },
};

export default connect(undefined, mapDispatchToProps)(Counter);
