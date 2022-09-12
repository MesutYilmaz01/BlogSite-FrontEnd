<template>
    <a :href="[data.link]" class="blog-entry element-animate fadeIn element-animated" data-animate-effect="fadeIn">
        <img :src="[data.titleImg]" alt="Image placeholder">
        <div class="blog-content-body">
            <div class="post-meta">
            <span class="author mr-2"><img :src="[data.authorImg]" alt="Colorlib"> {{ data.author }}</span>•
            <span class="mr-2">{{ data.date }} </span> •
            <span class="ml-2"><span class="fa fa-comments"></span> {{ data.commentCount }}</span>
            </div>
            <h2>{{ data.title }}</h2>
        </div>
    </a>
</template>

<script>
    export default {
        props: {
            data: Object
        }
    }
</script>