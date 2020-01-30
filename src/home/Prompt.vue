<template>
	<modal name="Prompt" :classes="['v--modal', 'Prompt']"
		:height="'auto'" :width="'350px'"
		@before-open="modalBeforeOpen" @closed="modalClosed">
		<Prompt2 />
		<form @submit="doSubmit">
			<div class="caption">
				{{caption}}
			</div>
			<div class="txt">
				<input type="text" name="text" v-focus v-model="text" />
			</div>
			<div class="buttons">
				<input type="submit" value="Ok" />
				<input type="button" value="Cancel" @click="btnCancel" />
				<input type="button" value="Stacked" @click="btnStacked" />
			</div>
		</form>
	</modal>
</template>

<script>
import Prompt2 from './Prompt2.vue';

export default {
	components: {
		Prompt2
	},
	data() {
		return {
			caption: '',
			text: '',
			onOk: () => { },
			onCancel: () => { },
			okWasClicked: false
		};
	},
	methods: {
		modalBeforeOpen(ev) { // reset all data, since the component keeps its state while parent is loaded
			this.caption = ev.params.caption || '';
			this.text = ev.params.text || '';
			this.onOk = ev.params.onOk || (() => { });
			this.onCancel = ev.params.onCancel || (() => { });
			this.okWasClicked = false;
		},
		modalClosed() {
			this.okWasClicked
				? this.onOk(this.text) // invoke user callback
				: this.onCancel();
		},
		doSubmit(ev) {
			this.okWasClicked = true;
			this.$modal.hide('Prompt');
			ev.preventDefault();
			return true;
		},
		btnCancel() {
			this.$modal.hide('Prompt');
		},
		btnStacked() {
			this.$modal.show('Prompt2');
		}
	}
};
</script>

<style>/* for the modal to work, must NOT be scoped */
.Prompt {
	background-color: floralwhite;
	padding: 20px;
}
.caption {
	margin-bottom: 16px;
}
.txt > input {
	width: 300px;
}
.buttons {
	margin-top: 16px;
	text-align: right;
}
.buttons > input {
	margin-right: 10px;
}
</style>
