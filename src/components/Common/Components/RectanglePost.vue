<template>
    <router-link :to="{name:'blog', params:{slug: data.slug}}" class="blog-entry element-animate fadeIn element-animated" data-animate-effect="fadeIn">
        <img v-if="data.titleImg" :src="[data.titleImg]" alt="Image placeholder">
        <div class="blog-content-body">
            <div class="post-meta">
            <span class="author mr-2"><img :src="[data.authorImg]"> {{ data.author }}</span>•
            <span class="mr-2">{{ data.date }} </span> •
            <span class="ml-2"><span class="fa fa-comments"></span> {{ data.commentCount }}</span>
            </div>
            <h2>{{ data.title }}</h2>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            data: Object
        }
    }
</script>
