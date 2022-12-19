<template>
  <div class="app">
    <transition-group name="fade">
      <GlobalLoader key="app-loader" v-if="!isStateReady" />
      <GlobalHeader key="app-header" v-if="isStateReady" />
      <ContentView key="app-content" v-if="isStateReady" />
      <GlobalFooter key="app-footer" v-if="isStateReady" />
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
    });
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: block;

  min-height: 100vh;
  height: 100%;
}
</style>
