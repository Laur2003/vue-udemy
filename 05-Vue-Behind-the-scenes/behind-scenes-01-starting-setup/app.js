const app = Vue.createApp({
  data() {
    return {
      message: 'Vue is great!'
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userInput.value;
    },
  },
});

app.mount('#app');
