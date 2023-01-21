<script setup>
import AboutRight from './RightMenu/AboutRight.vue';
import Categories from './RightMenu/Categories.vue';
import Tags from './RightMenu/Tags.vue';
import PopularPosts from './RightMenu/PopularPosts.vue';
import Textbox from './Components/Textbox.vue'
</script>

<template>
    <div class="col-md-12 col-lg-4 sidebar">
        <AboutRight/>
        <PopularPosts/>
        <Categories/>
        <Tags/>
    </div>
</template>


<script>
  export default {
    data() {
        return {
            about:
                {
                    img: "images/person_1.jpg",
                    title: "David Craig",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.",
                    links: [
                        {
                            link: '#',
                            media: 'facebook'
                        },
                        {
                            link: '#',
                            media: 'twitter'
                        },
                        {
                            link: '#',
                            media: 'instagram'
                        },
                        {
                            link: '#',
                            media: 'youtube-play'
                        },
                    ],
                }
        };
    },
    created () {  
            this.$store.dispatch('popularPosts/fetchPosts')
            this.$store.dispatch('categories/fetchCategories')
            this.$store.dispatch('tags/fetchTags')
    }
}
</script>