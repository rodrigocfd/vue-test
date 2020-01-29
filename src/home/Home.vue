<template>
	<div>
		<Prompt />
		<h1>Home</h1>
		<input type="text" v-focus v-model="words" />
		<button v-on:click="fire">Fire</button>
	</div>
</template>

<script>
import Prompt from './Prompt.vue';

export default {
	components: {
		Prompt
	},
	data() {
		return {
			words: 'Você está autenticado.'
		};
	},
	methods: {
		fire: function() {
			this.$modal.show('Prompt', {
				words: this.words,
				onOk: data => console.log(data)
			});
		}
	}
};
</script>
