<template>
  <div v-if="geoImages.ready" id="slider-wrapper">
    <!-- <img src="'https://farm' + {{ geoImages[0].farm }} + '.staticflickr.com/' + {{ geoImages[0].server }} + '/' + {{ geoImages[0].id }} + '_' + {{ geoImages[0].secret }} + '.jpg" alt=""> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'forecast',
  data () {
    return {
      location: {
        lat: 49.4035106,
        lng: 8.681388
      }
    }
  },
  created () {
    if (!this.location.lat === 0 && !this.location.lat === 0) {
      this.getForecast(this.location)
    }
    this.getGeolocation()
  },
  mounted () {
    this.getImages(this.location)
  },
  computed: {
    geoImages () {
      return this.$store.getters.geoImages
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
      'getImages'
    ])
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/weather-icons/sass/weather-icons';
#slider-wrapper {
  background: #fbfbfb;
}
</style>