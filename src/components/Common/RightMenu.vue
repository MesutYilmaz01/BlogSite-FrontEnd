<script setup>
import Textbox from './RightMenu/Textbox.vue';
import AboutRight from './RightMenu/AboutRight.vue';
import Categories from './RightMenu/Categories.vue';
import Tags from './RightMenu/Tags.vue';
import PopularPosts from './RightMenu/PopularPosts.vue';
</script>

<template>
    <div class="col-md-12 col-lg-4 sidebar">
        <Textbox />
        <AboutRight :about="about"/>
        <PopularPosts v-if="showPosts" :posts="posts"/>
        <Categories :categories="categories"/>
        <Tags :tags="tags"/>
    </div>
</template>


<script>
  export default {
    data() {
        return {
            showPosts: false,
            about: [
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
                    ]
                }
            ],
            posts: [],
            categories: [
                {
                    link: "#",
                    name: "Food",
                    count: 25
                },
                {
                    link: "#",
                    name: "Food",
                    count: 25
                },
                {
                    name: "Food",
                    count: 25
                },
                {
                    link: "#",
                    name: "Food",
                    count: 25
                },
                {
                    link: "#",
                    name: "Food",
                    count: 25
                },
            ],

            tags: [
                {
                    link: "#",
                    name: "Travel"
                },
                {
                    link: "#",
                    name: "Travel"
                },
                {
                    link: "#",
                    name: "Travel"
                },
                {
                    link: "#",
                    name: "Travel"
                },
                {
                    link: "#",
                    name: "Travel"
                },
            ]
        };
    },
    created () {
    this.getPosts().then((result) => {
            this.posts = result.data.data
            this.showPosts = true
        })
    },
    methods : {
      getPosts () {
        return this.axios.get('http://myblog.test:90/api/popular-posts')
      }
    }
}
</script>