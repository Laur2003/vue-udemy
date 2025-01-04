function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        monsterBarStyles() {
            return this.monsterHealth >= 0 ? {width: this.monsterHealth + '%'} : {width: 0};
        },
        playerBarStyles() {
            return this.playerHealth >= 0 ? {width: this.playerHealth + '%'} : {width: 0}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        startNewGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = []
        },
        attackMonster() {
            this.monsterHealth -= getRandomValue(5,12);
            this.currentRound++;
            this.addLogMessages('player', 'attack', getRandomValue(5,12));
            this.attackPlayer();
            
        },
        attackPlayer() {
            this.addLogMessages('monster', 'attack', getRandomValue(8,15));
            this.playerHealth -= getRandomValue(8,15);
        },
        specialAttackMonster() {
            this.currentRound ++;
            this.monsterHealth -= getRandomValue(10,25);
            this.addLogMessages('monster', 'attack', getRandomValue(10,25));
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            if (this.playerHealth + getRandomValue(8,20) >= 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += getRandomValue(8,20);
                this.addLogMessages('player', 'heal', getRandomValue(8,20));
            }
            this.attackPlayer();
        },
        surrender() {
            this.playerHealth = 0;
        },
        addLogMessages(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <=0){
                //draw 
                this.winner = 'draw';
            } else if (value <= 0) {
                //player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <=0){
                //draw
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    }
});

app.mount('#game');