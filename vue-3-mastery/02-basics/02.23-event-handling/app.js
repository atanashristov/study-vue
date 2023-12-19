const vm = Vue.createApp({
  data() {
    return {
      step: 1
    }
  },
  methods: {
    log(msg, event) {
      console.log(msg);

      if (event) {
        console.log(event);
      }
    },
    nextStep(event) {
      console.log(event);
      this.step++;
    }
  }
}).mount('#app');