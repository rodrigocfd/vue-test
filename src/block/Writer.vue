<template>
	<div>
		<label for="name">Your name:</label>
		<input type="text" name="name" v-model="name" />
	</div>
</template>

<script>
export default {
	computed: {
		name: { // allows us to use two-way binding straight to the store
			get()    { return this.$store.state.name; },
			set(val) { this.$store.commit('change', val); }
		}
	}
};
</script>

<style scoped>
label {
	margin-right: 10px;
}
</style>
