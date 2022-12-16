<template>
  <div class="app">
    <GlobalHeader></GlobalHeader>

    <router-view></router-view>

    <GlobalFooter></GlobalFooter>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';

export default {
  name: 'App',

  components: {
    GlobalHeader,
    GlobalFooter,
  },

  created() {
    this.$store.dispatch('coins/getAllCoins');
  },
};
</script>

<style>
.app {
  position: relative;
  min-height: 100vh;
  max-width: 100vw;

  background-image: url('../public/images/bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 700px;
  background-attachment: local;
  background-color: #323639;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

.border-transparent {
  border-color: transparent;
}

.btn-transparent {
  background-color: transparent;
  color: #ffffff;

  padding: 0 0 0.375rem;

  font-size: inherit;
  line-height: 1.5;
}

.bg-card {
  background-color: #41464a;
}

.bg-dark {
  background-color: #323639 !important;
}

@media screen and (max-width: 600px) {
  .app {
    background-image: none;
  }
}
</style>
