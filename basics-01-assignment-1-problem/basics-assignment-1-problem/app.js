const app = Vue.createApp({
    data() {
        return {
            name: 'Laur',
            age: 21,
            image: 'https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg'
        }
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    }
});

app.mount('#assignment');