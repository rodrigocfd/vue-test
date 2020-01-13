<template>
	<div class="hello">
		<input v-model="words" />
		<button v-on:click="fire">Fire</button>
	</div>
</template>

<script>
export default {
	data: function() {
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
