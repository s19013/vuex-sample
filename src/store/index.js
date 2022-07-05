import { createStore } from 'vuex'

export default createStore({
	state: {
		message: 'Hello Vuex',
		users:[
			{name: 'John', email:'john@example.com', age:22},
			{name: 'Merry', email: 'merry@facebook.com',age:33},
			{name: 'Ken', email: 'ken@amazon.com',age:29}
		],
	},
	mutations: {
  },
  actions: {
  },
  modules: {
  }
})

