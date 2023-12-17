const vm = Vue.createApp({
  data() {
    return {
      riddle1: null,
      riddle2: null,
      riddle3: [],
      ready: false
    }
  },
  computed: {
    level1() {
      return this.riddle1 === 'mustache';
    },
    level2() {
      return this.level1 && this.riddle2 === 3;
    },
    level3() {
      return this.level2
        && !this.riddle3.includes('Variable')
        && this.riddle3.length === 3;
    }
  }
}).mount('#app');