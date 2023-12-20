const vm = Vue.createApp({
  data() {
    return {
      isUnderlined: false,
      isBigFont: false,
      isRed: false,
      highlightClass: 'underline',
      errorClass: 'red',
      theText: '',
    }
  },
  computed: {
    classes() {
      return {
        red: this.isRed,
        underline: this.isUnderlined,
        bigfont: this.isBigFont
      }
    },
    isOk() {
      return this.theText === 'okay';
    }
  }
}).mount('#app');