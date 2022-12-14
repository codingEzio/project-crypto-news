<template>
  <b-table
    outlined
    responsive
    caption="Data provided in real-time from APIs"
    class="trend"
    thead-class="trend-thead"
    thead-tr-class="trend-thead-tr"
    tbody-class="trend-tbody"
    tbody-tr-class="trend-tbody-tr"
    tfoot-class="trend-tfoot"
    tfoot-tr-class="trend-tfoot-tr"
    :items="items"
    :fields="fields"
  >
    <template slot="show_details" slot-scope="row">
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
        {{ row.detailsShowing ? 'Hide' : 'Show' }} details
      </b-button>
    </template>

    <template slot="row-details" slot-scope="row">
      <b-card>
        <PriceChart :data="generateChartData(row.item.fsym)" :height="100" />
      </b-card>
    </template>
  </b-table>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import PriceChart from '@/components/trends/PriceChart';

export default {
  name: 'PriceTrend',
  components: { PriceChart },
  data() {
    return {
      fields: [
        {
          key: 'fsym',
          label: 'Name',
        },
        {
          key: 'current.low',
          label: 'Min.',
        },
        {
          key: 'current.high',
          label: 'Max.',
        },
        {
          key: 'current.open',
          label: 'Open',
        },
        {
          key: 'current.close',
          label: 'Close',
        },
        {
          key: 'show_details',
        },
      ],
    };
  },

  computed: {
    ...mapState({
      items: state => state.trends.exchangeRates,
      error: state => state.trends.error,
    }),

    ...mapGetters({
      generateChartData: 'trends/generateChartData',
    }),
  },

  created() {
    this.$store.dispatch('trends/getCoinExchangeRate', { coin: 'BTC' });
    this.$store.dispatch('trends/getCoinExchangeRate', { coin: 'ETH' });
    this.$store.dispatch('trends/getCoinExchangeRate', { coin: 'LSK' });
    this.$store.dispatch('trends/getCoinExchangeRate', { coin: 'LTC' });
    this.$store.dispatch('trends/getCoinExchangeRate', { coin: 'DASH' });
    this.$store.dispatch('trends/getCoinExchangeRate', { coin: 'DOGE' });
  },
};
</script>

<style lang="scss">
.trend {
  box-shadow: 0 0 15px 10px #323639;

  &-thead-tr th:last-child,
  &-tbody-tr td:last-child {
    text-align: right;
  }

  &-thead-tr {
    font-size: 0.85em;
    text-transform: uppercase;
  }
}

.table {
  border-color: transparent !important;

  &-row-entered {
    animation-name: addedRow;
    animation-duration: 1s;

    @keyframes addedRow {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
}
</style>
