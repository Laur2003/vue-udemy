const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter+=num;
    },
    reduce(num) {
      this.counter >= num ? this.counter-=num : window.alert("The events number can't be a negative");
    },
    changeName(event) {
      this.name = event.target.value
    }
  }
});

app.mount('#events');
