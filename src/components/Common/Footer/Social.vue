<template>
    <div class="mb-5">
    <h3>Social</h3>
    <ul class="list-unstyled footer-social">
        <li v-for="item in socials">
            <a :href="[item.link]"><span :class="[item.icon]"></span> {{item.title}}</a>
        </li>
    </ul>
    </div>
</template>

<script>
    export default {
        props: {
            socials: Object
        }
    }
</script>