import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.directive('focus', { // v-focus custom directive
	inserted: el => el.focus()
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
