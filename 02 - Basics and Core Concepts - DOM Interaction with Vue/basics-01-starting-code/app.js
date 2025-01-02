const app = Vue.createApp({
    data() {
        return {
            message: 'Learn Vue!',
            messageB: '<h1>Master Vue!</h1>',
            link: 'https://www.google.co.uk/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.message
            } else {
                return this.messageB
            }
        },
        changeMessage() {
            this.message = 'Changed Message'
        }
    }
});

app.mount('#user-goal');
