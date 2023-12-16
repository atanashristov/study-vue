const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++;
    },
    incrementTwice() {
      this.increment();
      this.increment();
    },
    decrement() {
      this.counter--;
    },
    decrementTwice() {
      this.decrement();
      this.decrement();
    },
  }
});

const vm = app.mount('#app');
