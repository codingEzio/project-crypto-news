<template>
  <b-navbar toggleable="sm" type="dark" variant="transparent" sticky>
    <b-container>
      <b-navbar-brand to="/">Crypto News</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/home">Home</b-nav-item>
          <b-nav-item to="/news">News</b-nav-item>
          <b-nav-item
            class="mx-3 py-0 btn btn-outline-primary"
            href="https://github.com/codingezio"
            >Source
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'GlobalHeader',
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 15px 15px -2px #323639;
  z-index: 1;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
}
</style>
