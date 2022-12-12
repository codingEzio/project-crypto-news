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
.jumbotron {
  position: relative;
}

.jumbotron::before {
  position: absolute;
  left: 15px;
  top: 0;

  background-image: url('../../../public/images/map.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center left;

  width: 450px;
  height: 300px;

  content: '';
}

.jumbotron-lead {
  max-width: 600px;
}
</style>
