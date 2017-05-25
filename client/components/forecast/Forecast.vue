<template>
  <grid :position="grid" :modifiers="modifiers">
    <div v-if="forecast.ready" id="local-weather-wrapper">
    <h4>Local Weather</h4>
    <div class="weather-situation">
      <div class="icon-wrapper current">
        <i class="wi current-icon" :class="'wi-forecast-io-' + forecast.data.currently.icon"></i>
        <span>{{ forecast.data.currently.apparentTemperature }}&deg; C</span><br>
        <span class="weather-summary">{{ forecast.data.currently.summary }}</span>
      </div>
    </div>
    <table class="temp table table-condensed">
      <thead>
        <tr>
          <th>Temp min.</th>
          <th>Temp max.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="wi wi-thermometer-exterior"></i> {{ forecast.data.daily.data[0].apparentTemperatureMin }}&deg;C</td>
          <td><i class="wi wi-thermometer"></i> {{ forecast.data.daily.data[0].apparentTemperatureMax }}&deg;C</td>
        </tr>
      </tbody>
    </table>
    <table class="temp table table-condensed">
      <thead>
        <tr>
          <th>Sunrise</th>
          <th>Sunset</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="wi wi-sunrise"></i> {{ forecast.data.daily.data[0].sunriseTime | toTime }}</td>
          <td><i class="wi wi-sunset"></i> {{ forecast.data.daily.data[0].sunsetTime | toTime }}</td>
        </tr>
      </tbody>
    </table>
    <table class="weather-data table table-condensed">
      <tbody>
          <tr>
              <td><i class="wi wi-windy"></i> Wind</td>
              <td id="weather-widget-wind">{{ forecast.data.currently.windSpeed }} m/s</td>
          </tr>
          <tr>
              <td><i class="wi wi-wind" :class="'towards-' + forecast.data.currently.windBearing + '-deg'" :title="forecast.data.currently.windBearing + '°'"></i> Direction</td>
              <td id="weather-widget-wind">{{ forecast.data.currently.windBearing | degToCompass }} </td>
          </tr>
          <tr>
              <td><i class="wi wi-cloudy"></i> Cloudiness</td>
              <td id="weather-widget-cloudiness">{{ forecast.data.currently.cloudCover }} %</td>
          </tr>
          <tr>
              <td><i class="wi wi-barometer"></i> Pressure</td>
              <td id="weather-widget-pressure">{{ forecast.data.currently.pressure }} hpa</td>
          </tr>
          <tr>
              <td><i class="wi wi-humidity"></i> Humidity</td>
              <td id="weather-widget-humidity">{{ forecast.data.currently.humidity }} %</td>
          </tr>
          <tr>
              <td><i class="wi wi-sunny"></i> Ozone</td>
              <td id="weather-widget-sunrise">{{ forecast.data.currently.ozone }}</td>
          </tr>
      </tbody>
    </table>
    </div>
  </grid>
</template>

<script>
import Grid from '../partials/grid'
import { mapActions } from 'vuex'
import { toTime, degToCompass } from '../../filters'

export default {
  name: 'forecast',
  components: {
    Grid
  },
  props: ['grid', 'modifiers'],
  data () {
    return {
      location: {
        lat: 49.4035106,
        lng: 8.681388
      },
      ready: false
    }
  },
  filters: {
    toTime, degToCompass
  },
  created () {
    if (!this.location.lat === 0 && !this.location.lat === 0) {
      this.getForecast(this.location)
    }
    this.getGeolocation()
  },
  mounted () {
    this.getForecast(this.location)
  },
  computed: {
    forecast () {
      return this.$store.getters.forecast
    }
  },
  methods: {
    getGeolocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          this.location.lng = position.coords.longitude
          this.location.lat = position.coords.latitude
        }.bind(this))
      }
    },
    ...mapActions([
      'getForecast'
    ])
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/weather-icons/sass/weather-icons';
  @import '../assets/weather-icons/sass/weather-icons-wind';

  #local-weather-wrapper {
    // display: flex;
    // flex-direction: column;
    // align-items: stretch;
    // justify-content: space-between;
  }

  .weather-situation {
    i {
      font-size: 2em;
    }
    .current-icon {
      font-size: 5vw;
      float: left;
    }
    span {
      float: right;
      padding-left: .25em;
    }
  }
</style>