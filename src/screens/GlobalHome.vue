<template>
  <b-container>
    <b-jumbotron bg-variant="dark" text-variant="white">
      <template slot="header">
        <span class="d-none d-md-block"> Crypto Conversion </span>
      </template>

      <template slot="lead">
        Compare the latest prices for cryptocurrencies from
        <b-link
          class="text-secondary"
          href="https://min-api.cryptocompare.com/"
        >
          CryptoCurrency API
        </b-link>
      </template>

      <PriceConverter class="mt-5 converter" />
    </b-jumbotron>

    <PriceTrend class="mb-5 px-4" />
  </b-container>
</template>

<script>
import PriceConverter from '@/components/converters/PriceConverter';
import PriceTrend from '@/components/trends/PriceTrend';

export default {
  name: 'GlobalHome',
  components: {
    PriceConverter,
    PriceTrend,
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  position: relative;

  &::before {
    position: absolute;
    left: 15px;
    top: 0;

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
@media screen and (max-width: 820px) {
  .converter {
    margin: 0 auto;
  }
}
</style>
