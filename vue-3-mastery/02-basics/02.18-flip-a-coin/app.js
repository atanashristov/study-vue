const vm = Vue.createApp({
  data() {
    return {
      result: null
    }
  },
  computed: {
    message() {
      if (this.result === 0) {
        return 'Heads';
      } else if (this.result === 1) {
        return 'Tails';
      } else {
        return 'Click the button to flip the coin!';
      }
    }
  },
  methods: {
    flipCoin() {
      this.result = Math.floor(Math.random() * 2);
    }
  }
}).mount('#app');