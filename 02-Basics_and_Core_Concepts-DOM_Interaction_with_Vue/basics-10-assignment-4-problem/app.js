const app = Vue.createApp({
    data() {
        return {
            userClassInput: '',
            userClassConfirmed: '',
            visibility: true,
            backgroundColorEntered: ''
        }
    },
    methods: {
        confirmUserClass() {
            this.userClassConfirmed = this.userClassInput;
            if (this.userClassConfirmed != "user1" && this.userClassConfirmed != "user2" ) {
                window.alert("The class inserted is not correct! It should be either user1 or user2");
                this.userClassInput = '';
            }
        },
        toggleVisibility() {
            this.visibility = !this.visibility;
        }
    },
    computed: {
        userClass() {
            if (this.userClassConfirmed == "user1") {
                return this.userClassConfirmed
            } else if (this.userClassConfirmed == "user2") {
                return this.userClassConfirmed
            } else {
                
            }
        },
        visibilityClass() {
            return this.visibility ? 'visible' : 'hidden';
        }
    }
});

app.mount("#assignment");