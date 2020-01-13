import Vue from 'vue';
import VueRouter from 'vue-router';
import Block from '@/block/Block.vue';
import Home from '@/home/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/block',
			name: 'block',
			component: Block
		}
	]
});
