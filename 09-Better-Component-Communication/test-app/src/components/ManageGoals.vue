<template>
    <h1>Manage Goals</h1>

    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>

    <error-alert v-if="inputIsInvalid">
        <h1>input is invalid</h1>
    </error-alert>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    data() {
        return {
            inputIsInvalid: false
        }
    },
    components: {
        ErrorAlert
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === ''){
                this.inputIsInvalid = true;
            }
        }
    }
}
</script>