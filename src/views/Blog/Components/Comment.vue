<script setup>
import Comment from './Comment.vue';
</script>
<template>
    <li class="comment">
        <div class="vcard">
            <img :src="[data.img]" alt="Image placeholder">
        </div>
        <div class="comment-body">
            <h3>{{ data.name }}</h3>
            <div class="meta">{{ data.date}}</div>
            <p>{{ data.comment }}</p>
            <p><a href="#" class="reply rounded">Reply</a></p>
        </div>
        <ul class="children" v-if="data.subcomments" v-for="subcomments in data.subcomments">
            <Comment :data="subcomments" />
    </ul>
    </li>
</template>

<script>
    export default {
        name: "recursive-comment",
        props: {
            data: Object
        }
    }
</script>