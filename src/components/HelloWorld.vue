<template>
  <b-col md="6" class="m-3">
    <b-card
      title="Dragon Game"
      img-src="../assets/dragonInBarnOnPaper-min.png"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 40rem;"
      class="mb-2"
    >
      <b-card-text>
        Press the button to start new game
      </b-card-text>

      <b-button href="#" variant="primary" @click="getGame" v-if="!game.gameId"
        >New Game</b-button
      >
      <b-nav-item>
        <router-link v-if="game.gameId" :to="{ name: 'Messages' }">
          <b-button variant="primary">Messages</b-button>
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link v-if="game.gameId" :to="{ name: 'Shop' }">
          <b-button variant="primary">Shop</b-button>
        </router-link>
      </b-nav-item>
    </b-card>
  </b-col>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    getGame() {
      this.$store.dispatch('setGame');
    },
  },
  computed: {
    ...mapGetters(['game']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
