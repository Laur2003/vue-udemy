<template>
  <section class="container">
    <user-data :user-name="fullName" :age="age" @test-emit="testEmit"></user-data>

    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const age = ref('');

    console.log(age);
    
    const fullName = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    function testEmit() {
      window.alert('test emit here');
    }

    provide('globalFullName', 'Test');

    return {
      firstName,
      lastName,
      fullName,
      testEmit
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>