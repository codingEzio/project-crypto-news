<template>
  <b-container>
    <b-jumbotron bg-variant="transparent" text-variant="white">
      <template slot="header">
        <span class="d-none d-md-block">Crypto News</span>
      </template>

      <template slot="lead">
        <p class="jumbotron-lead">
          Latest articles from the world of cryptocurrencies. Read what is
          happening with <em>Bitcoin</em>, <em>Ethereum</em> and other altcoins.
        </p>
      </template>
    </b-jumbotron>

    <ArticleList />
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
