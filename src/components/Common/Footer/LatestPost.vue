<script setup>
import LittlePost from '../Components/LittlePost.vue';
</script>
<template>
    <div class="col-md-7">
        <h3>Latest Post</h3>
        <div class="post-entry-sidebar">
        <ul>
            <li v-for="item in items">
                <LittlePost :data="item"/>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
   export default {
        props: {
            items: Object
        }
    }
</script>