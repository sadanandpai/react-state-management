import { atom, selector } from "recoil";

export const state = atom({
  key: "counter",
  default: 0,
});

export const asyncIncrement = selector({
  key: "asyncCounter",
  get: ({ get }) => {
    const currentState = get(state);
    return currentState + 1;
  },
});
