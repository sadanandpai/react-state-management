import React, { useState, useEffect } from "react";

import { subject } from "./useCounter";

export default function Counter(props) {
  const [state, setState] = useState(0);

  useEffect(() => {
    const subscriber = subject.subscribe((state) => {
      setState(state);
    });

    return () => {
      subscriber.unsubscribe();
    };
  });

  return <div className="count-value">{state}</div>;
}
