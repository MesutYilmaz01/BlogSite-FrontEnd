<script setup>
import LittlePostRight from '../Components/LittlePost.vue';
</script>

<template>
    <div class="sidebar-box">

        <h3 class="heading">Popular Posts</h3>
        <div class="post-entry-sidebar">
            <ul>
                <li v-for="item in posts">
                    <LittlePostRight :data="item"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
 export default {
        props: {
            posts: Object
        }
}
</script>