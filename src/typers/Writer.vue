<template>
	<div>
		<label for="name">Your name:</label>
		<input type="text" name="name" v-focus v-model="name" />
	</div>
</template>

<script>
export default {
	computed: {
		name: { // allows us to use two-way binding straight from/to the store
			get()    { return this.$store.getters['typers/getName']; },
			set(val) { this.$store.commit('typers/setName', val); } // mutate the state
		}
	}
};
</script>

<style scoped>
label {
	margin-right: 10px;
}
</style>
