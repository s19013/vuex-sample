<template>
	<div>
		<p>全員</p>
		<ul>
			<li v-for="user in users"  v-bind:key="user.name">
				{{ user.name }} ({{ user.email }})
			</li>
		</ul>
		<p>30以下</p>
		<ul>
			<li v-for="user in teenAger"  v-bind:key="user.name">
				{{ user.name }} ({{ user.email }})
			</li>
		</ul>
	</div>
</template>

<script>
export default {
computed:{
		users:function(){return this.$store.state.users},
		teenAger:function(){return this.$store.getters.teenAger}
	}
}
</script>