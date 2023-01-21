import axios from 'axios';

 // Create a new store instance.
const socialMedias = {
    namespaced : true,
    state () {
      return {
        socialMedias : {
            data : [],
            done : false,
            message : null
        },
      }
    },
    mutations: {
        setSocialMedias(state, payload)
        { 
            state.socialMedias.data = payload.data;
            state.socialMedias.done = true;
        }
    },
    getters: {
        getSocialMedias(state)
        {
            return state.socialMedias
        }
    },
    actions: {
        async fetchSocialMedias ({ commit, state }) {
            if(!state.socialMedias.done) {
                var response = await axios.get('http://myblog.test:90/api/social-medias')
                commit('setSocialMedias', {data:  response.data})    
            }
        }
      }
  }

  export default socialMedias
