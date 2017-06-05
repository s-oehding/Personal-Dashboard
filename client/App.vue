<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex'
import miniToastr from 'mini-toastr'
import auth from './auth'
export default {
  data: function() {
    return {
    }
  },
  created () {
    this.getLocation()
  },
  mounted () {
    miniToastr.init()
    if (auth.checkAuth()) {
      let userStorage = window.localStorage.getItem('authUser')
      let userObject = JSON.parse(userStorage)
      this.$store.commit('SET_AUTH_USER', userObject)
    }
  },
  methods: {
    ...mapActions([
      'getLocation'
    ])
  }
}
</script>

<style lang="sass">
@import './components/assets/scss/app';

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
