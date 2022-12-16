<template>
  <div class="app">
    <GlobalHeader></GlobalHeader>

    <div class="app-content">
      <router-view></router-view>
    </div>

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
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: black;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-content {
  flex: 1;

  overflow-x: hidden;
  overflow-y: auto;

  background-image: url('../public/images/bg.svg');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 700px;
  background-attachment: fixed;
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

@media screen and (max-width: 600px) {
  .app-content {
    background-image: none;
  }
}
</style>
