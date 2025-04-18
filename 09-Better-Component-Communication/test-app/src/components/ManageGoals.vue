<template>
    <h1>Manage Goals</h1>

    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>

    <teleport to="body">
        <error-alert v-if="inputIsInvalid">
            <h1>Input is invalid</h1>
            <button @click="hideError">Okay</button>
        </error-alert>
    </teleport>
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
        },
        hideError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>