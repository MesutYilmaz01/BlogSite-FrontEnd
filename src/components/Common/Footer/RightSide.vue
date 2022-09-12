<script setup>
import LatestPost from './LatestPost.vue';
import QuickLinks from './QuickLinks.vue';
import Social from './Social.vue';
</script>
<template>
    <div class="col-md-6 ml-auto">
        <div class="row">
            <LatestPost :items="posts"/>
            <div class="col-md-1"></div>
            <div class="col-md-4">
                <QuickLinks :quickLinks="quickLinks"/>
                <Social :socials="socials"/>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
        props: {
            posts: Object,
            quickLinks: Object,
            socials: Object,
        }
    }
</script>