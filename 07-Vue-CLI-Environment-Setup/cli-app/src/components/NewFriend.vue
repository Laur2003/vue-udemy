<template>
  <div class="newFriendWrapper">
    <h1>Enter a new friend:</h1>

    <form @submit.prevent="submitData">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="tel" v-model="phone" placeholder="Phone" required/>
      <input type="email" v-model="email" placeholder="Email" required/>

      <button type="submit">Confirm data</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['create-friend'],
  data() {
    return {
      name: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    submitData() {
      this.$emit('create-friend',
        this.name,
        this.phone,
        this.email
      );

      this.clearForm();
    },
    clearForm() {
      this.name = '';
      this.phone = '';
      this.email = '';
    }
  }
}
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }

  input {
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid gray;
    height: 30px;
    padding: 0 10px;
  }

  .newFriendWrapper {
    width: 90%;
    margin: 1rem auto;
    max-width: 20rem;
  }

  .checkboxWrapper {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    margin: 0 15px;
    width: 24px;
    padding: 0;
  }

  button {
    margin-top: 30px;
  }
</style>