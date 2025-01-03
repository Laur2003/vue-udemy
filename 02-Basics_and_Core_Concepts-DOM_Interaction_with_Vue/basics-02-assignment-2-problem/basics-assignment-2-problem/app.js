const app = Vue.createApp({
    data() {
        return {
            alertMessage: 'Clicked',
            inputContent: '',
            inputContentConfirmed: '',
        }
    },
    methods: {
        showAlert() {
            window.alert(this.alertMessage)
        },
        updateInputContent(event) {
            this.inputContent = event.target.value;
            console.log('test')
        },
        confirmInputContent(event) {
            this.inputContentConfirmed = event.target.value;
            console.log('test')
        }
    }
});

app.mount('#assignment')