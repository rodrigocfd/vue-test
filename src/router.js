import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/NotFound.vue';
import Block from '@/block/Block.vue';
import Home from '@/home/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/block',
			name: 'block',
			component: Block
		},
		{
			path: '*', // will match anything that wasn't matched until now
			component: NotFound
		}
	]
});
