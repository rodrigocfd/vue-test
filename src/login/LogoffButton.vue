<template>
	<button @click="logoff">Logoff</button>
</template>

<script>
export default {
	methods: {
		logoff() {
			this.$store.dispatch('login/doLogoff')
				.then(() => this.$router.push('/login')); // router won't update itself automatically
		}
	}
};
</script>
