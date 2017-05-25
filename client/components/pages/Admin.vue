<template>
	<div class="admin-wrapper">
		<sidebar></sidebar>
		<pagecontent class="row">
		<userlist></userlist>
		</pagecontent>
	</div>
</template>

<script>
import UserList from '../user/UserList'
export default {
  components: {
    userlist: UserList
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="sass">
</style>