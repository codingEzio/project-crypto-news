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

<style lang="scss">
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

  @media screen and (max-width: 600px) {
    background-image: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
