import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Custom directive: v-focus
// Will set focus on input then component loads.
Vue.directive('focus', {
	inserted: el => el.focus()
});

// Create Vue instance and run application.
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
