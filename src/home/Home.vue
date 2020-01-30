<template>
	<div>
		<Prompt />
		<h1>Home</h1>
		<input type="text" ref="words" v-focus v-model="words" />
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
			words: ''
		};
	},
	methods: {
		fire: function() {
			this.$modal.show('Prompt', {
				caption: 'Type your name:',
				text: this.words,
				onOk: text => {
					this.words = text;
					this.$refs.words.focus();
				}
			});
		}
	}
};
</script>
