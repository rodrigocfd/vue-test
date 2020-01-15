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
	padding-bottom: 10px;
	margin-bottom: 10px;
}
.logoff {
	display: inline-block;
	margin-left: 12px;
}
</style>
