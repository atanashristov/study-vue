const vm = Vue.createApp({
  data() {
    return {
    }
  },
  methods: {
    log(msg, event) {
      console.log(msg);

      if (event) {
        console.log(event);
      }
    }
  }
}).mount('#app');