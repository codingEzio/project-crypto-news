<template>
  <div id="app">
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
