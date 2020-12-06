import React from "react";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import reducer from "./reducer";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default function ReduxSagaSM(props) {
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
