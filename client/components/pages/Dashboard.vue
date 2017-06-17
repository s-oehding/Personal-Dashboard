<template>
	<div class="dashboard-wrapper">
		<sidebar></sidebar>
		<pagecontent class="row">
			<g-map grid="a1:d3"></g-map>
			<datetime grid="a4"></datetime>
			<div grid="a2:a4" modifiers="padded red"></div>
			<forecast grid="e1:e4" modifiers="padded flex"></forecast>
			<forecast-graph grid="b4:d4" modifiers="padded flex-center"></forecast-graph>
		</pagecontent>
	</div>
</template>

<script>
</script>

<style lang="sass">
</style>