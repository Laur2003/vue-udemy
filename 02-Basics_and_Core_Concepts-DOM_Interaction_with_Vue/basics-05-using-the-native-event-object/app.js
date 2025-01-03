const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
        window.alert("The counter has been set to 0");
      }
    }
  },
  computed: {
    changedName() {
      if (this.confirmedName != "")
        return this.confirmedName + " " + "Racovet";
      else return "";
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    confirmName() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
