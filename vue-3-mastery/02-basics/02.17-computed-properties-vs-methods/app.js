const taxRate = 1.23;

const vm = Vue.createApp({
  data() {
    return {
      price: 33,
      items: 3
    }
  },
  methods: {
    priceIncludingVatM() {
      console.log('method - priceIncludingVatM called');
      return (this.price * taxRate).toFixed(2);
    }
  },
  computed: {
    taxRate() {
      return taxRate * 100 - 100;
    },
    priceIncludingVat() {
      console.log('computed - priceIncludingVat called');
      return (this.price * taxRate).toFixed(2);
    },
    total() {
      return (this.priceIncludingVat * this.items).toFixed(2);
    },
  }
}).mount('#app');