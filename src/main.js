import Vue from 'vue';
import VModal from 'vue-js-modal';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VModal); // register plugin for modal component

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
