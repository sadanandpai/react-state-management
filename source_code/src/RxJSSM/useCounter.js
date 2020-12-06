import { BehaviorSubject } from "rxjs";

let state = 0;
const delay = 1500;
const subject = new BehaviorSubject(state);

subject.subscribe((value) => {
  state = value;
});

const increment = (value) => {
  subject.next(state + value);
};

const decrement = (value) => {
  subject.next(state - value);
};

const incrementAsync = (value) => {
  setTimeout(increment, delay, value);
};

const decrementAsync = (value) => {
  setTimeout(decrement, delay, value);
};

export { subject, increment, decrement, incrementAsync, decrementAsync };
