const vm = Vue.createApp({
  data() {
    return {
      visible: true
    }
  },
  methods: {
    log(msg) {
      console.log(msg);
    },
    hide() {
      this.visible = false;
    }
  }
}).mount('#app');