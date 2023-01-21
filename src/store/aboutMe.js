import axios from 'axios';

 // Create a new store instance.
const aboutMe = {
    namespaced : true,
    state () {
      return {
        aboutMe : {
            data : [],
            done : false,
            message : null
        },
      }
    },
    mutations: {
        setAboutMe(state, payload)
        { 
            state.aboutMe.data = payload.data;
            state.aboutMe.done = true;
        }
    },
    getters: {
        getAboutMe(state)
        {
            return state.aboutMe
        }
    },
    actions: {
        async fetchAboutMe ({ commit, state }) {
            if(!state.aboutMe.done) {
                var response = await axios.get('http://myblog.test:90/api/about-me')
                commit('setAboutMe', {data:  response.data})    
            }
        }
      }
  }

  export default aboutMe
