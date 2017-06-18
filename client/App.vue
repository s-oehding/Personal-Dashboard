<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex'
import miniToastr from 'mini-toastr'
export default {
  data: function() {
    return {
    }
  },
  created () {
    this.getLocation()
    this.setAuthUser()
  },
  mounted () {
    miniToastr.init()
  },
  methods: {
    ...mapActions([
      'getLocation', 'setAuthUser'
    ])
  }
}
</script>

<style lang="sass">
@import './components/assets/scss/app';
@import url("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css");

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
