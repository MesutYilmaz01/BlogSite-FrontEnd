<template>
        <a :href="[data.link]">
        <div class="image" style="background-image: url(images/img_8.jpg);"></div>
        <span class="text">
            <div class="post-meta">
            <span class="author mr-2"><img :src="[data.img]" alt=""> {{ data.author }}</span>•
            <span class="mr-2">{{ data.date }} </span> •
            <span class="ml-2"><span class="fa fa-comments"></span> {{ data.commentCount }}</span>
            </div>
            <h2>{{ data.title }}</h2>
        </span>
        </a>
</template>

<script>
    export default {
        props: {
            data: Object
        }
    }
</script>