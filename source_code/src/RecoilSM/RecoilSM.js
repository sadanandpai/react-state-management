import React from "react";
import { RecoilRoot } from "recoil";

import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

export default function ReduxToolKitSM(props) {
  return (
    <RecoilRoot>
      <div>
        <h3 className="flex">{props.title}</h3>
        <div className="flex">
          <Counter />
          <CounterDisplay />
        </div>
      </div>
    </RecoilRoot>
  );
}
