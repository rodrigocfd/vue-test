import Vue from 'vue';
import VueRouter from 'vue-router';
import Block from '@/components/Block.vue';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: 'helloworld',
			component: HelloWorld
		},
		{
			path: '/block',
			name: 'block',
			component: Block
		}
	]
});
