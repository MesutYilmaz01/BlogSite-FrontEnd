<script setup>
import LittlePost from '../Components/LittlePost.vue';
</script>
<template>
    <div class="col-md-6 ml-1">
        <h3 v-if="items.length !== 0">{{ staticKeys.staticKeys.footerLatestPostsHeader }}</h3>
        <div class="post-entry-sidebar" v-if="items.length !== 0">
        <ul>
            <li v-for="item in items">
                <LittlePost :data="item"/>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
   export default {
        computed:{
            ...mapGetters(
                { staticKeys : 'staticKeys/getStaticKeys'}
            )}, 
        props: {
            items: Object
        }
    }
</script>