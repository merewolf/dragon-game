<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">Dragon Game</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item v-if="isGame">
            <router-link to="/messages">Messages</router-link>
          </b-nav-item>
          <b-nav-item v-if="isGame">
            <router-link to="/shop">Shop</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item>
            <b-nav-text>Lives: {{ game.lives }}</b-nav-text>
          </b-nav-item>
          <b-nav-item>
            <b-nav-text>Gold: {{ game.gold }}</b-nav-text>
          </b-nav-item>
          <b-nav-item>
            <b-nav-text>Level: {{ game.level }}</b-nav-text>
          </b-nav-item>
          <b-nav-item>
            <b-nav-text>Score: {{ game.score }}</b-nav-text>
          </b-nav-item>
          <b-nav-item>
            <b-nav-text>High Score: {{ game.highScore }}</b-nav-text>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['game']),
    isGame() {
      return this.game.gameId;
    },
  },
};
</script>

<style></style>
