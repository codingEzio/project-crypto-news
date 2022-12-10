<template>
  <b-container>
    <b-jumbotron bg-variant="transparent" text-variant="white">
      <template slot="header">
        <span class="d-none d-md-block"> Crypto Conversion </span>
      </template>

      <template slot="lead">
        <p class="jumbotron-lead">
          Compare the latest prices for cryptocurrencies from
          <b-link
            class="text-secondary"
            href="https://min-api.cryptocompare.com/"
          >
            CryptoCurrency API
          </b-link>
        </p>
      </template>

      <PriceConverter class="mt-5" />
    </b-jumbotron>
  </b-container>
</template>

<script>
import PriceConverter from '@/components/converters/PriceConverter';

export default {
  name: 'GlobalHome',
  components: {
    PriceConverter,
  },
};
</script>

<style scoped>
.jumbotron-lead {
  max-width: 600px;
}
</style>
