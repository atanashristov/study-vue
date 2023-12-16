const taxRate = 1.23;

const vm = Vue.createApp({
  data() {
    return {
      price: 33,
      items: 3
    }
  },
  computed: {
    taxRate() {
      console.log('taxRate called');
      return taxRate * 100 - 100;
    },
    priceIncludingVat() {
      console.log('includingVat called');
      return (this.price * taxRate).toFixed(2);
    },
    total() {
      console.log('total called');
      return (this.priceIncludingVat * this.items).toFixed(2);
    },
  }
}).mount('#app');