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
      <b-card bg-variant="card">
        <PriceChart :data="generateChartData(row.item.fsym)" />
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
      error: state => state.news.error,
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

<style scoped>
.trend {
  background-color: #323639;
  box-shadow: 0 0 15px 10px #323639;
}

.trend .border,
.trend-thead-tr th {
  border-color: transparent !important;
}

.trend-tbody-tr td {
  border-color: #6c757d !important;
}

.trend-thead-tr th:last-child,
.trend-tbody-tr td:last-child {
  text-align: right;
}

.trend-tbody,
.trend-thead {
}

.trend-thead-tr {
  font-size: 0.85em;
  text-transform: uppercase;
}

.trend-tbody-tr {
}
</style>
