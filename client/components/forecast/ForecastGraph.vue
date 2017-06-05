<template>
	<grid :position="grid" :modifiers="modifiers">
    <div id="forecastGraphWrapper" >
      <!-- <h4>Weekly Forecast</h4> -->
      <vue-chart v-if="forecast.ready" type="line" :data="forecastHourly" :options="cahrtOptions" :width="chartWidth" :height="chartHeight"></vue-chart>
    </div>
  </grid>
</template>

<script>
import Grid from '../partials/grid'
import VueChart from 'vue-chart-js'

export default {
  name: 'forecast-graph',
  components: {
    Grid, VueChart
  },
  props: ['grid', 'modifiers'],
  data() {
    return {
      cahrtOptions: {
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
  },
  computed: {
    forecast () {
      return this.$store.getters.forecast
    },
    forecastHourly () {
      return this.$store.getters.forecastHourly
    },
    chartWidth () {
      if (this.forecast.ready) {
        return document.getElementById('forecastGraphWrapper').clientWidth * 0.75
      }
    },
    chartHeight () {
      if (this.forecast.ready) {
        return document.getElementById('forecastGraphWrapper').clientHeight * 0.75
      }
    }
  }
}
</script>

<style lang="sass">
  #forecast-graph-wrapper {
    
  }
</style>