<template>
	<div id="main">
		Your name is <span class="theName">{{$store.state.name}}</span>.
	</div>
</template>

<style scoped>
#main {
	margin-top: 10px;
}
.theName {
	font-weight: bold;
}
</style>
