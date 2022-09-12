<template>
    <div class="mb-5">
        <h3>Quick Links</h3>
        <ul class="list-unstyled">
            <li v-for="item in quickLinks">
                <a :href="[item.link]">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            quickLinks: Object
        }
    }
</script>