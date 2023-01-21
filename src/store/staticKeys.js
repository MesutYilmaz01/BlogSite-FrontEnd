import axios from 'axios';

 // Create a new store instance.
const staticKeys = {
    namespaced : true,
    state () {
      return {
        keys : {
            staticKeys : [],
            done : false,
            message : null
        },
      }
    },
    mutations: {
        setStaticKeys(state, payload)
        { 
            state.keys.staticKeys = payload.data;
            state.keys.done = true;
        }
    },
    getters: {
        getStaticKeys(state)
        {
            return state.keys
        }
    },
    actions: {
        async fetchStaticKeys ({ commit, state }) {
            if(!state.keys.done) {
                var response = await axios.get('http://myblog.test:90/api/static-keys')
                commit('setStaticKeys', {data:  response.data})    
            }
        }
      }
  }

  export default staticKeys
