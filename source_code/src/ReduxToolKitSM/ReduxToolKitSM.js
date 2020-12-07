import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { counterSlice } from "./reducer";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default function ReduxToolKitSM(props) {
  return (
    <Provider store={store}>
      <div>
        <h3 className="flex">{props.title}</h3>
        <div className="flex">
          <Counter />
          <CounterDisplay />
        </div>
      </div>
    </Provider>
  );
}
