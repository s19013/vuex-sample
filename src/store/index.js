import { createStore } from 'vuex'

export default createStore({
	state: {
		message: 'Hello Vuex',
		users:[
			{name: 'John', email:'john@example.com', age:22},
			{name: 'Merry', email: 'merry@facebook.com',age:33},
			{name: 'Ken', email: 'ken@amazon.com',age:29}
		],
		count:0,
	},
	mutations: {
		increment : function(state) {state.count++},
		decrement : function(state) {state.count--}
  },
  actions: {
  },
  modules: {
  },
	getters:{
		teenAger:function(state){
			return state.users.filter(user => user.age < 30)
		}
	}
})

