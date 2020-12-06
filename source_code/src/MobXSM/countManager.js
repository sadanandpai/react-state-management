import { makeAutoObservable } from "mobx";

const delay = 1500;

class CountManager {
  state = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.state += 1;
  };

  decrement = () => {
    this.state -= 1;
  };

  incrementAsync() {
    setTimeout(this.increment, delay);
  }

  decrementAsync() {
    setTimeout(this.decrement, delay);
  }
}

export default new CountManager();
