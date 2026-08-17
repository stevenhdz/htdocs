import { reactive } from "vue";

const store = reactive({
  saldo: 5000,
  addSaldo() {
    this.saldo += 100;
  },
  diaSaldo() {
    this.saldo -= 100;
  },
});

export default store;
