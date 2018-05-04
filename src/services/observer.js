export const errObserver = {
  observers: [],

  addObserver(method) {
    this.observers.push(method);
  },

  trigger(data) {
    this.observers.forEach(method => method(data));
  }
};