<script setup>
import Comment from './Comment.vue';
</script>
<template>
    <li class="comment">
        <div class="vcard">
            <!-- <img :src="[data.img]" alt="Image placeholder">-->
        </div>
        <div class="comment-body">
            <h3>{{ data.name_surname }}</h3>
            <div class="meta">{{ data.date}}</div>
            <p>{{ data.comment }}</p>
        </div>
        <ul class="children" v-if="data.sub_comment" v-for="sub_comment in data.sub_comment">
            <Comment :data="sub_comment" />
        </ul>
    </li>
</template>

<script>
    export default {
        name: "recursive-comment",
        props: {
            data: Object,
            post: Object
        }
    }
</script>