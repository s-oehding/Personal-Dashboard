<template>
	<div :class="gridClass">
		<div :class="tileClass">
         <slot></slot>
      </div>
	</div>
</template>

<script>
import { addClassModifiers } from '../../filters'

export default {
  name: 'grid',
  props: ['modifiers', 'position'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  computed: {
    gridClass() {
      const [from, to = from] = this.position.toLowerCase().split(':')
      return addClassModifiers('grid', [`from-${from}`, `to-${to}`])
    },
    tileClass() {
      return addClassModifiers('grid__tile', this.modifiers)
    }
  }
}
</script>

<style lang="sass">
</style>