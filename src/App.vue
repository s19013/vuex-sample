<template>
	<div id="app">
		<button v-on:click="increment">UP</button>
    <h1>Count:{{ count }}</h1>
		<button v-on:click="decrement">down</button>
		<h1>{{$store.state.message}}</h1>
		<UserList></UserList>
	</div>
</template>

<script>
import  UserList  from "./components/UserList.vue";

export default {
  name: 'App',
  components: {
		UserList
  },
  data() {
		return {

		}
  },
	computed : {
		count : function(){return this.$store.state.count}
	},
	methods: {
		increment:function(){this.$store.commit('increment')},
		decrement:function(){this.$store.commit('decrement')}
	},
}
</script>

<style>

</style>
