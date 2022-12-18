<template>
  <b-card class="coin-card">
    <VueSelect
      dir="ltr"
      label="fullName"
      class="custom-v-select"
      placeholder="Select coin to compare"
      :options="coins"
      :onChange="changeSelectedCoin"
    />
    <b-form-group class="my-1" v-if="canCompare">
      <b-form-input
        placeholder="Amount"
        :value="value"
        @input="$emit('input', $event)"
      >
      </b-form-input>
    </b-form-group>

    <div class="coin-card-logo" v-if="coin.imageUrl">
      <img :src="coin.imageUrl" class="coin-card-logo-img" />
    </div>

    <div class="d-flex" v-if="price">
      <p class="my-0 flex-fill text-muted">
        <small>$ {{ price.USD }}</small>
      </p>

      <p class="my-0 flex-fill text-muted text-right">
        <small>₿ {{ price.BTC }}</small>
      </p>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'CoinSelector',

  props: {
    id: String,
    coin: Object,
    coins: Array,
    value: Number,
    price: Object,
    canCompare: Boolean,
  },

  methods: {
    changeSelectedCoin(value) {
      this.$emit('onCoinSelect', {
        index: this.id,
        value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.coin-card {
  position: relative;

  &-logo {
    position: absolute;
    top: 24px;
    left: 7px;

    background-color: #282b2e;
    border-color: #282b2e;
    border-style: solid;
    border-width: 2px;
    border-radius: 100%;

    &-img {
      width: 26px;
      height: 26px;

      border-radius: 100%;
    }
  }
}
</style>
