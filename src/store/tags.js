import axios from 'axios';

 // Create a new store instance.
const tags = {
    namespaced : true,
    state () {
      return {
        tags : {
            data : [],
            done : false,
            message : null
        },
      }
    },
    mutations: {
        setTags(state, payload)
        {
            state.tags.data = payload.data.data;
            state.tags.done = true;
        }
    },
    getters: {
        getTags(state)
        {
            return state.tags
        }
    },
    actions: {
        async fetchTags ({ commit, state }) {
            if(!state.tags.done) {
                var response = await axios.get('http://myblog.test:90/api/tags')
                commit('setTags', {data:  response.data})    
            }
        }
      }
  }

  export default tags
