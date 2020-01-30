import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';

import Home from '@/home/Home.vue';
import Typers from '@/typers/Typers.vue';
import Login from '@/login/Login.vue';
import NotFound from '@/NotFound.vue';

Vue.use(VueRouter);

const routeGuards = {
	ifSigned(to, from, next) {
		store.getters['login/isAuth']
			? next()
			: next('/login'); // not signed, redirect to login
	},
	ifNotSigned(to, from, next) {
		!store.getters['login/isAuth']
			? next()
			: next('/home'); // yes signed, redirect to home
	}
};

export default new VueRouter({
	routes: [
		{ path: '/',       redirect: '/home' },
		{ path: '/login',  name: 'login',  component: Login,  beforeEnter: routeGuards.ifNotSigned },
		{ path: '/home',   name: 'home',   component: Home,   beforeEnter: routeGuards.ifSigned },
		{ path: '/typers', name: 'typers', component: Typers, beforeEnter: routeGuards.ifSigned },
		{ path: '*',       component: NotFound }
	]
});
