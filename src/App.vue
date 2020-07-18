<template>
	<div id="app">
		<img
			alt="Vue logo"
			src="./assets/logo.png"
		>
		<label for="phoneNumber">Phone number</label>
		<input
			id="phoneNumber"
			type="tel"
			placeholder="Phone number"
			v-model="getNumber"
		>
		{{ getNumber }}
		<!-- <child-component>Content..</child-component> -->
		<button type="button" @click="getTheValue()">get the value</button>

	</div>
</template>

<script>
	import ChildComponent from "./components/ChildComponent.vue";

	export default {
		components: {
			childComponent: ChildComponent
		},
		methods: {
			changePhoneNumber: function(event) {
				console.log(event.target.value);
				// this.$store.commit('UpdateNumber',event.target.value);
			},
			getTheValue: function() {
				console.log(this.$store.getters.doubleCount);
			}
		},
		computed: {
			getNumber: {
				get() {
					return this.$store.state.phoneNumber;
				},
				set(value) {
					this.$store.commit("UpdateNumber", value);
				}
			}
		}
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
