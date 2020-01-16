<template>
	<div class="nav">
		<router-link to="/home">Home</router-link> |
		<router-link to="/inputters">Inputters</router-link>
		<div class="logoff">
			<LogoffButton />
		</div>
	</div>
</template>

<script>
import LogoffButton from '@/login/LogoffButton.vue';

export default {
	components: {
		LogoffButton
	}
};
</script>

<style scoped>
.nav {
	border-bottom: 1px solid #eee;
	padding: 10px;
	background-image: url(./assets/spikes-pattern.png);
	background-repeat: repeat;
}
.logoff {
	display: inline-block;
	margin-left: 12px;
}
</style>
