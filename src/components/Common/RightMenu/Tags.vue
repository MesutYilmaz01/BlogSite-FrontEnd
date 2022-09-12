<template>
    <div class="sidebar-box">
        <h3 class="heading">Tags</h3>
        <ul class="tags">
            <li v-for="tag in tags">
                <a :href="[tag.link]">{{ tag.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
        props: {
            tags: Object
        }
}
</script>