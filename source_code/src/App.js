import React from "react";
import "./App.css";

import PureReactSM from "./PureReactSM/PureReactSM";
import CustomHooksSM from "./CustomHooksSM/CustomHooksSM";
import ReduxThunkSM from "./ReduxThunkSM/ReduxThunkSM";
import ReduxSagaSM from "./ReduxSagaSM/ReduxSagaSM";
import ReduxToolKitSM from "./ReduxToolKitSM/ReduxToolKitSM";
import RecoilSM from "./RecoilSM/RecoilSM";
import RxJSSM from "./RxJSSM/RxJSSM";
import MobXSM from "./MobXSM/MobXSM";

function App(props) {
  return (
    <div className="app">
      <h2>Different ways of managing state in React JS</h2>
      <PureReactSM title="Pure React State Management" />
      <CustomHooksSM title="React Hooks State Management" />
      <ReduxThunkSM title="Redux Thunk State Management" />
      <ReduxSagaSM title="Redux Saga State Management" />
      <ReduxToolKitSM title="Redux Toolkit State Management" />
      <RecoilSM title="Recoil State Management" />
      <RxJSSM title="RxJS State Management" />
      <MobXSM title="MobX State Management" />
    </div>
  );
}

export default App;
