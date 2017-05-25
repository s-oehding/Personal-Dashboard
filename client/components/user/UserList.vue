<template>
  <div class="column user-list">
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>e-mail</th>
          <th>admin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userlist">
          <td>{{ user._id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.admin }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'userlist',
  data() {
    return {
    }
  },
  mounted () {
    this.getUsers()
  },
  computed: {
    userlist () {
      return this.$store.getters.users
    }
  },
  methods: {
    ...mapActions([
      'getUsers'
    ])
  }
}
</script>

<style lang="sass">
</style>