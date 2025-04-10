<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
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
    id: Number,
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
      detailsAreVisible: false
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
}
</script>

<style>
  .favouriteWrapper {
    margin-top: 10px;
    font-size: 20px;
  }
</style>