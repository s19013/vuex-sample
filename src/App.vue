<template>
	<div id="app">
		<button v-on:click="increment">UP</button>
    <h1>Count:{{ count }}</h1>
		<button v-on:click="decrement">down</button>

		<p><input v-model="message"></p>
		<h1>{{$store.state.message}}</h1>
		<UserList></UserList>
		<!-- <img :src="imgpath" >
		<p>{{imgpath}}</p> -->
		<p>{{$store.state.dogImage}}</p>
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
		count : function(){return this.$store.state.count},
		message:{
			get(){return this.$store.state.message},
			set(value){this.$store.commit('changeMessage',value)}
			}
	},
	methods: {
		increment:function(){this.$store.commit('increment')},
		decrement:function(){this.$store.commit('decrement')},
		changeMessage:function(){this.$store.commit('changeMessage')},
	},
	mounted() {
		// this.$store.dispatch('')
	},
}
</script>

<style>

</style>
