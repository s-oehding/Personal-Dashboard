<template>
  <aside class="aside">
    <div class="logo"></div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </nav>
    <div class="user-info" v-if="authUser">
      <gravatar :email="authUser.user.email"></gravatar>
      <ul>
        <li>username: {{ authUser.user.username }}</li>
        <li>email: {{ authUser.user.email }}</li>
        <li>admin: {{ authUser.user.admin }}</li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  computed: {
    authUser () {
      return this.$store.getters.authUser
    }
  }
}
</script>

<style lang="sass">
aside {
  background: #292b2c;
  color: rgba(255, 255, 255, 0.5);
  width: 300px;
  height: 100vh;
  float: left;
  display: inline-block;
  padding: 2rem;

  li {
    list-style-type: none;
  }
}
</style>
