<template>
	<div class="dashboard-wrapper">
		<sidebar></sidebar>
		<pagecontent class="row">
			<datetime grid="a1"></datetime>
			<div grid="a2:a4" modifiers="padded red"></div>
			<forecast grid="e1:e3" modifiers="padded flex"></forecast>
			<forecast-graph grid="d4:e4" modifiers="padded flex-center"></forecast-graph>
		</pagecontent>
	</div>
</template>

<script>
</script>

<style lang="sass">
</style>