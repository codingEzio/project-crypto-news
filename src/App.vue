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
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: aliceblue;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-content {
  flex: 1;

  overflow-x: hidden;
  overflow-y: auto;
}

.btn-transparent {
  background-color: transparent;
  color: #ffffff;

  padding: 0;
  padding-bottom: 0.375rem;

  font-size: inherit;
  line-height: 1.5;
}

.bg-card {
  background-color: #41464a;
}
</style>
