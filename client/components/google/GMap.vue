<template>
	<grid :position="grid" :modifiers="modifiers">
    <gmap-map
      v-if="location.ready"
      :center="center"
      :zoom="7"
      style="width: 100%; height: 100%"
    >
      <gmap-marker
        :position="center"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </grid>
</template>

<script>
import Grid from '../partials/grid'
import { mapGetters } from 'vuex'
export default {
  name: 'g-map',
  components: {
    Grid
  },
  props: ['grid', 'modifiers'],
  data() {
    return {
      center: {
        lat: 0,
        lng: 0
      }
    }
  },
  mounted () {
    setTimeout(function() {
      this.center = {
        lat: parseFloat(this.location.data.latt),
        lng: parseFloat(this.location.data.longt)
      }
    }.bind(this), 1000)
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      location: 'location'
    })
  }
}
</script>

<style lang="sass">
</style>