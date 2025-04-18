<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponents('active-goals')">Active Goals</button>
    <button @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponents(_component) {
      this.selectedComponent = _component;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>