<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { inject, onBeforeMount } from 'vue';

export default {
  props: ['userName', 'age'],
  setup(props, context) {
    context.emit('test-emit');

    const injectedVariable = inject('globalFullName');
    window.alert(injectedVariable);

    onBeforeMount(function() {
      window.alert('on before mounted');
    });
  }
}
</script> 