<template>
  <b-container>
    <b-jumbotron bg-variant="dark" text-variant="white">
      <template slot="header">
        <span class="d-none d-md-block">Crypto News</span>
      </template>

      <template slot="lead">
        Latest articles from the world of cryptocurrencies. Read what is
        happening with <em>Bitcoin</em>, <em>Ethereum</em> and other altcoins.
      </template>
    </b-jumbotron>

    <ArticleList class="mb-5" />
  </b-container>
</template>

<script>
import ArticleList from '@/components/articles/ArticleList';

export default {
  name: 'NewsItem',
  components: {
    ArticleList,
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  position: relative;

  &::before {
    position: absolute;
    left: 15px;
    top: 0px;

    background-image: url('../../public/images/map.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;

    width: 450px;
    height: 300px;

    content: '';

    @media screen and (max-width: 480px) {
      left: 0;

      width: 100%;
      height: 200px;
    }
  }

  .display-3,
  .lead {
    max-width: 600px;

    @media screen and (max-width: 820px) {
      margin: 0 auto;

      text-align: center;
    }
  }
}
</style>
