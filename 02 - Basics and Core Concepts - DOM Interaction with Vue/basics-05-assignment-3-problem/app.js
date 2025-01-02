const app = Vue.createApp({
    data() {
        return {
            result: 0,
            messageTooSmall: "Not there yet",
            messageTooBig: "Too much!",
        }
    },
    computed: {
        evaluatedResult() {
            console.log(this.result);
            if (this.result < 37) {
                return this.messageTooSmall;
            } else if (this.result > 37) {
                return this.messageTooBig;
            } else {
                return this.result;
            }
        }
    },
    methods: {
        add(number) {
            this.result += number;
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.result = 0;
            }, 5000);
        }
    }
})

app.mount("#assignment");