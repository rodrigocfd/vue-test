<template>
	<div>
		<h1>Home</h1>
		<input type="text" v-focus v-model="words" />
		<button v-on:click="fire">Fire</button>
	</div>
</template>

<script>
export default {
	data() { // simple local data to be kept
		return {
			words: 'Você está autenticado.'
		};
	},
	methods: {
		fire: function() {
			alert(this.words);
		}
	}
};
</script>
