<template>
    <a href="">
        <img :src="[img]" alt="Image placeholder" class="mr-4">
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
    </a>
</template>

<script>
    export default {
        props: {
            data: Object
        }
    }
</script>