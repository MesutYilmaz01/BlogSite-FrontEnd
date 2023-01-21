import axios from 'axios';

 // Create a new store instance.
const categories = {
    namespaced : true,
    state () {
      return {
        categories : {
            data : [],
            done : false,
            message : null
        },
      }
    },
    mutations: {
        setCategories(state, payload)
        {
            state.categories.data = payload.data.data;
            state.categories.done = true;
        }
    },
    getters: {
        getCategories(state)
        {
            return state.categories
        }
    },
    actions: {
        async fetchCategories ({ commit, state }) {
            if(!state.categories.done) {
                var response = await axios.get('http://myblog.test:90/api/categories')
                commit('setCategories', {data:  response.data})    
            }
        }
      }
  }

  export default categories
