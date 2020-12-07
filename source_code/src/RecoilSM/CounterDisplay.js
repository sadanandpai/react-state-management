import React from "react";
import { useRecoilValue } from "recoil";
import { state } from "./reducer";

function Counter() {
  const stateValue = useRecoilValue(state);

  return <div className="count-value">{stateValue}</div>;
}

export default Counter;
