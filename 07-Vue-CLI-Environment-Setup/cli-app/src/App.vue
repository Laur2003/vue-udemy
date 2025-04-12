<template>
  <section>
    <header><h1>My Friends</h1></header>

    <new-friend @create-friend="addFriendToList"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"  
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFavourite"
        @delete-friend="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 0,
          name: 'Laur Racovet',
          phone: '123 456 789',
          email: 'laur@example.com',
          isFavourite: true
        },
        {
          id: 1,
          name: 'Ryan Gosling',
          phone: '123 456 788',
          email: 'ryan@example.com',
          isFavourite: false
        },
        {
          id: 2,
          name: 'Iarik Giorgiovich',
          phone: '123 456 788',
          email: 'iarik@example.com',
          isFavourite: false
        }
      ]
    }
  },
  methods: {
    getFriendById(id) {
      return this.friends.find(
        (friend) => friend.id === id
      );
    },
    toggleFavourite(id) {
      const identifiedFriend = this.getFriendById(id);
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },
    addFriendToList(name, phone, email) {
      let newFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavourite: false
      };

      this.friends.push(newFriend);
      console.table(this.friends);
    },
    deleteFriend(id) {
      this.friends = this.friends.filter(
        (friend) => friend.id !== id
      );
    }
  }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
  * {
      box-sizing: border-box;
    }

    html {
      font-family: 'Jost', sans-serif;
    }

    body {
      margin: 0;
    }

    header {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      margin: 3rem auto;
      border-radius: 10px;
      padding: 1rem;
      background-color: #58004d;
      color: white;
      text-align: center;
      width: 90%;
      max-width: 40rem;
    }

    #app ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    #app li {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      margin: 1rem auto;
      border-radius: 10px;
      padding: 1rem;
      text-align: center;
      width: 90%;
      max-width: 40rem;
    }

    #app h2 {
      font-size: 2rem;
      border-bottom: 4px solid #ccc;
      color: #58004d;
      margin: 0 0 1rem 0;
    }

    #app button {
      font: inherit;
      cursor: pointer;
      border: 1px solid #ff0077;
      background-color: #ff0077;
      color: white;
      padding: 0.05rem 1rem;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }

    #app button:hover,
    #app button:active {
      background-color: #ec3169;
      border-color: #ec3169;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }
</style>