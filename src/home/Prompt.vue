<template>
	<modal name="Prompt" :classes="['v--modal', 'Prompt']" :height="'auto'"
		@before-open="modalBeforeOpen" @closed="modalClosed">
		<div>
			This is the prompt: <b>{{words}}</b>
		</div>
		<div class="btnOk">
			<button @click="btnOk">OK</button>
		</div>
	</modal>
</template>

<script>
export default {
	data() {
		return {
			words: '',
			onOk: () => { }
		};
	},
	methods: {
		modalBeforeOpen(ev) {
			this.words = ev.params.words;
			this.onOk = ev.params.onOk;
		},
		modalClosed() {
			this.onOk({foo: 'bar'}); // invoke user callback
		},
		btnOk() {
			this.$modal.hide('Prompt');
		}
	}
};
</script>

<style>/* for the modal to work, must NOT be scoped */
.Prompt {
	background-color: floralwhite;
	padding: 20px;
}
.btnOk {
	margin-top: 20px;
}
</style>
