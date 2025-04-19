<template>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>

  <button @click="confirmInput">Confirm Input</button>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  beforeRouteLeave(to, from, next) {
    if (this.changesSaved) next();
    else {
      const userWantsToLeave = confirm('You have unsaved data!');
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>