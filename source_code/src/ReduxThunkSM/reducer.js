export default function reducer(state = 0, action) {
  if (action.type === "INCREMENT") {
    return state + (action?.payload ?? 1);
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
}
