<template>
	<div>
		<Writer />
		<Reader />
	</div>
</template>

<script>
import Reader from './Reader.vue';
import Writer from './Writer.vue';

export default {
	components: {
		Reader,
		Writer
	}
};
</script>
