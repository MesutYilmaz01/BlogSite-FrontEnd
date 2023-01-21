import axios from 'axios';

 // Create a new store instance.
const popularPosts = {
    namespaced : true,
    state () {
      return {
        posts : {
            data : [],
            done : false,
            message : null
        },
      }
    },
    mutations: {
        setPosts(state, payload)
        {
            state.posts.data = payload.data.data;
            state.posts.done = true;
        }
    },
    getters: {
        getPost(state)
        {
            return state.posts
        }
    },
    actions: {
        async fetchPosts ({ commit, state }) {
            if(!state.posts.done) {
                var response = await axios.get('http://myblog.test:90/api/popular-posts')
                commit('setPosts', {data:  response.data})    
            }
        }
      }
  }

  export default popularPosts
