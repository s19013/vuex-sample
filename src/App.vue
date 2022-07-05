<template>
	<div id="app">
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
}
</script>

<style>

</style>
