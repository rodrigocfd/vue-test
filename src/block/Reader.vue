<template>
	<div id="main">
		<template v-if="$store.state.block.name.length > 0">
			Your name is <span class="theName">{{$store.state.block.name}}</span>.
		</template>
		<template v-else>
			(No name kept on the Vuex store.)
		</template>
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
