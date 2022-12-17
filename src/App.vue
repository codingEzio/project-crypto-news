<template>
  <div class="app">
    <transition-group name="fade">
      <GlobalLoader key="app-loader" v-if="!isStateReady" />
      <GlobalHeader key="app-header" v-if="!isStateReady" />
      <ContentView key="app-content" v-if="!isStateReady" />
      <GlobalFooter key="app-footer" v-if="!isStateReady" />
    </transition-group>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import GlobalLoader from '@/components/GlobalLoader';
import ContentView from '@/components/ContentView';

export default {
  name: 'App',

  components: {
    GlobalHeader,
    GlobalFooter,
    GlobalLoader,
    ContentView,
  },

  data: () => ({
    isStateReady: false,
  }),

  created() {
    this.$store._vm.$root.$on('storageReady', () => {
      this.isStateReady = true;

      this.$store.dispatch('coins/getAllCoins');
    });
  },
};
</script>

<style>
body {
  background-color: #323639;
}

.app {
  position: relative;

  min-height: 100vh;
  height: 100%;
  width: 100vw;

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .app {
    background-image: none;
  }
}
</style>
