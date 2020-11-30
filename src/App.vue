<template>
  <div id="app">
    <app-header class="position: sticky-top"></app-header>
    <b-container>
      <b-row class="justify-content-center">
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
