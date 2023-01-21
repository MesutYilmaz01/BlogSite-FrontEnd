import { createStore } from 'vuex'
import popularPosts from './popularPosts';
import categories from './categories';
import tags from './tags';
import staticKeys from './staticKeys';
import aboutMe from './aboutMe';
import socialMedias from './socialMedias';

 // Create a new store instance.
const store = createStore({ 
    modules: {
        popularPosts,
        categories,
        tags,
        staticKeys,
        aboutMe,
        socialMedias,
    }

})

export default store