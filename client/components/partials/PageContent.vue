<template>
 <div id="page-content">
   <slot></slot>
 </div>
</template>

<script>
export default {
  name: 'pagecontent',
  props: [],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="sass">
  #page-content {
    background: gray;
    height: 100vh;
    width: calc(100% - 60px);
    z-index: 0;
  }
</style>
