import { createStore } from 'vuex'
// import axios from 'axios'

export default createStore({
	state: {
		message: 'Hello Vuex',
		users:[
			{name: 'John', email:'john@example.com', age:22},
			{name: 'Merry', email: 'merry@facebook.com',age:33},
			{name: 'Ken', email: 'ken@amazon.com',age:29}
		],
		count:0,
		dogImage:'',
	},
	mutations: {
		increment : function(state) {state.count++},
		decrement : function(state) {state.count--},
		changeMessage:function(state,message){state.message = message},
		async getDogImage(state){
			const response = await fetch("https://dog.ceo/api/breeds/image/random", {method:'get'})
			.then(response => response.json())
			console.log(response);
			state.dogImage = response.message
		}
  },
  actions: {
		runGetDogImage:function(context){context.commit('getDogImage')}
  },
  modules: {
  },
	getters:{
		teenAger:function(state){
			return state.users.filter(user => user.age < 30)
		}
	}
})

