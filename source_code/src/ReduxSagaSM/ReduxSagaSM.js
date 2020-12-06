import React from "react";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

import reducer from "./reducer";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

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

sagaMiddleware.run(rootSaga);
