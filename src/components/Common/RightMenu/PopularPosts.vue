<script setup>
import LittlePostRight from '../Components/LittlePost.vue';

</script>

<template>
    <div class="sidebar-box">
        <h3 class="heading" v-if="staticKeys.staticKeys.rightMenuPopulerPostsHeader">{{ staticKeys.staticKeys.rightMenuPopulerPostsHeader }}</h3>
        <div class="post-entry-sidebar" v-if="posts">
            <ul>
                <li v-for="item in posts.data">
                    <LittlePostRight :data="item"/>
                </li>
            </ul>
        </div>
        <div v-else> {{ staticKeys.staticKeys.rightMenuPopularPostsDoesntExists }}</div>
    </div>
</template>

<script>
 import { mapGetters } from 'vuex';
 export default {
    computed:{
        ...mapGetters(
            { posts : 'popularPosts/getPost'}
        ),
        ...mapGetters(
            { staticKeys : 'staticKeys/getStaticKeys'}
        )},
    props: {
            data: Object
        }
}
</script>