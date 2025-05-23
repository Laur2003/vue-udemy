const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter+=num;
    },
    reduce(num) {
      this.counter >= num ? this.counter-=num : window.alert("The events number can't be a negative");
    },
    changeName(event, lastName) {
      this.name = event.target.value + " " + lastName
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted');
    }
  }
});

app.mount('#events');
