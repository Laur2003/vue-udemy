<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavourite">{{ isFavouriteText }}</button>

    <div class="favouriteWrapper" v-if="isFavourite"><strong>Favourite friend!</strong></div>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true,
      default: 'Friend'
    },
    phoneNumber: String,
    emailAddress: String,
    isFavourite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      isFavouriteText: 'Is Favourite?'
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.$emit('toggle-favourite', this.id);
    }
  }
}
</script>

<style>
  .favouriteWrapper {
    margin-top: 10px;
    font-size: 20px;
  }

  button {
    margin: 0 20px;
  }
</style>