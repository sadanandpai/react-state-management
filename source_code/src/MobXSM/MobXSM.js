import React from "react";
import { observer } from "mobx-react";

import countManager from "./countManager";
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";

const CounterView = observer(({ countManager }) => (
  <div className="flex">
    <Counter
      increment={countManager.increment}
      decrement={countManager.decrement}
      incrementAsync={countManager.incrementAsync}
      decrementAsync={countManager.decrementAsync}
    />
    <CounterDisplay state={countManager.state} />
  </div>
));

export default function MobXSM(props) {
  return (
    <div>
      <h3 className="flex">{props.title}</h3>
      <CounterView countManager={countManager} />
    </div>
  );
}
