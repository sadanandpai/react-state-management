import React from "react";
import "./App.css";

import PureReactSM from "./PureReactSM/PureReactSM";
import CustomHooksSM from "./CustomHooksSM/CustomHooksSM";
import ReduxThunkSM from "./ReduxThunkSM/ReduxThunkSM";
import ReduxSagaSM from "./ReduxSagaSM/ReduxSagaSM";
import MobXSM from "./MobXSM/MobXSM";
import RxJSSM from "./RxJSSM/RxJSSM";

function App(props) {
  return (
    <div className="app">
      <h2>Different ways of managing state in React JS</h2>
      <PureReactSM title="Pure React State Management" />
      <CustomHooksSM title="React Hooks State Management" />
      <ReduxThunkSM title="Redux Thunk State Management" />
      <ReduxSagaSM title="Redux Saga State Management" />
      <RxJSSM title="RxJS State Management" />
      <MobXSM title="MobX State Management" />
    </div>
  );
}

export default App;
