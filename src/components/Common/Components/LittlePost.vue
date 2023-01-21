<template>
    <router-link v-if="data.slug" :to="{name:'blog', params:{slug: data.slug}}">
        <img v-if="data.coverImage" :src="[data.coverImage]" alt="Image placeholder" class="mr-4">
        <div class="text">
            <h4>{{data.title}}</h4>
            <div class="post-meta" v-if="data.comment">
                <span class="mr-2">{{date}} </span> •
                <span class="ml-2"><span class="fa fa-comments"></span> {{data.commentCount}}</span>
            </div>
            <div class="post-meta" v-else="data.comment">
                <span class="mr-2">{{data.date}} </span>
            </div>
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