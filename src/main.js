import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.config.productionTip = false

Vue.use(Vuex);

	const moduleA = {
		namespaced: false,
		state: () => ({
			count: 1,
			name: "moduleA"
		}),
		mutations: {
			increment(state) {
				state.count++;
			}
		},
		actions: {},
		getters: {
			doubleCount(state, getters, rootState) {
				console.log("getter",getters['b/getName']);	
				return state.count * 2;
			},
		}
	};

	const moduleB = {
		namespaced: true,
		state: () => ({
			count: 2
		}),
		mutations: {},
		actions: {},
		getters: {
			getName: (state) => {
				return "From ModuleB";
			},
			doubleCount2: (state) => {
				return "in moduleB";
			}
		}
	};

	const store = new Vuex.Store({
		modules: {
			a: moduleA,
			b: moduleB
		},
		state: {
			phoneNumber: 555
		},
		mutations: {
			UpdateNumber(state,payload) {
				state.phoneNumber = payload;
			}
		},
		actions: {},
		getters: {}
	});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
