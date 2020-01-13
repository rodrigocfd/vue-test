<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<input v-model="words" />
		<button v-on:click="fire">Fire</button>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
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
}
</script>

<style scoped>
h1 {
	color: #888;
}
</style>
