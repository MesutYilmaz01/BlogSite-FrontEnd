<script setup>
import LatestPost from './LatestPost.vue';
import QuickLinks from './QuickLinks.vue';
import Social from './Social.vue';
</script>
<template>
    <div class="col-md-8 ml-auto ">
        <div class="row justify-content-end">
            <LatestPost v-if="showPosts" :items="posts"/>
            <div class="col-md-1"></div>
            <div class="col-md-4">
                <QuickLinks/>
                <Social :socials="socials"/>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
    data () {
        return {
            posts : [],
            showPosts : false
        }
    },
    props: {
        socials: Object,
    },
    created () {
        this.getPosts().then((result) => {
                this.posts = result.data.data
                this.showPosts = true
            })
    },
    methods : {
      getPosts () {
        return this.axios.get('http://myblog.test:90/api/latest-posts/0/3')
      }
    }
}
</script>