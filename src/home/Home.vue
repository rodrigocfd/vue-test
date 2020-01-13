<template>
	<div>
		<h1>Home</h1>
		<input v-model="words" />
		<button v-on:click="fire">Fire</button>
	</div>
</template>

<script>
export default {
	data() { // simple local data to be kept
		return {
			words: 'foo'
		};
	},
	methods: {
		fire: function() {
			alert(this.words);
		}
	}
};
</script>

<style scoped>
h1 {
	color: #888;
}
</style>
