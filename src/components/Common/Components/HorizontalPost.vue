<template>
        <router-link :to="{name:'blog', params:{slug: data.slug}}">
        <div v-if="data.coverPhoto" class="image" style="background-image: url(images/img_8.jpg);"></div>
        <span class="text" style="width:50%">
            <div class="post-meta">
            <span class="author mr-2"><img :style="[data.image ?? 'width:0px;']" :src="[data.img]" alt=""> {{ data.author }}</span>•
            <span class="mr-2">{{ data.date }} </span> •
            <span class="ml-2"><span class="fa fa-comments"></span> {{ data.commentCount }}</span>
            </div>
            <h2>{{ data.title }}</h2>
        </span>
    </router-link>
</template>

<script>
    export default {
        props: {
            data: Object
        }
    }
</script>