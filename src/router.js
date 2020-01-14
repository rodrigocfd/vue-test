import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import NotFound from '@/NotFound.vue';
import Login from '@/login/Login.vue';
import Block from '@/block/Block.vue';
import Home from '@/home/Home.vue';

Vue.use(VueRouter);

const routeGuards = {
	ifSigned(to, from, next) {
		store.state.isAuth
			? next()
			: next('/login'); // not signed, redirect to login
	},
	ifNotSigned(to, from, next) {
		!store.state.isAuth
			? next()
			: next('/home'); // yes signed, redirect to home
	}
};

export default new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			beforeEnter: routeGuards.ifNotSigned
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			beforeEnter: routeGuards.ifSigned
		},
		{
			path: '/block',
			name: 'block',
			component: Block,
			beforeEnter: routeGuards.ifSigned
		},
		{
			path: '*', // will match anything that wasn't matched until now
			component: NotFound
		}
	]
});
