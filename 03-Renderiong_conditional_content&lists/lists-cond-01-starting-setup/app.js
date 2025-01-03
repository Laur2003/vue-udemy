const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      goalInput: '',
      goalsObject: {
        name: "TestGoal",
        importance: "High"
      }
    };
  },
  methods: {
    addGoal() {
      if (this.goalInput !== '') {
        this.goals.push(this.goalInput);
        this.goalInput = '';
      }
    },
    removeItem(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
