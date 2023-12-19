const vm = Vue.createApp({
  data() {
    return {
      todos: [
        {
          name: 'Buy groceries',
          done: false
        },
        {
          name: 'Pay bills',
          done: true
        },
        {
          name: 'Take dogs for a walk',
          done: true
        },
      ],
      showTodos: true,
      sortOrder: 'ASC',
      onlyPaid: false,
      invoices: [
        {
          id: 2,
          item: 'Udemy Course',
          price: 9.99,
          paid: false
        },
        {
          id: 1,
          item: 'Book',
          price: 39.99,
          paid: true
        },
        {
          id: 3,
          item: 'MacBook Air',
          price: 599.99,
          paid: true
        }
      ]
    }
  },
  computed: {
    doneTodos() {
      return this.todos.filter(todo => todo.done);
    },
    paidInvoices() {
      return this.invoices.filter(invoice => invoice.paid);
    },
    sortedInvoices() {
      const invoices = this.onlyPaid ? this.paidInvoices : this.invoices;
      return invoices.sort((a, b) => this.sortOrder === 'ASC'
        ? a.id - b.id
        : b.id - a.id);

    }
  },
  methods: {
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'ASC'
        ? 'DESC'
        : 'ASC';
    }
  }
}).mount('#app');