<template>
    <div class="sidebar-box">
        <h3 class="heading">Categories</h3>
        <ul class="categories">
            <li v-for="category in categories">
                <a :href="[category.link]">{{category.name}} <span>({{category.count}})</span></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
        props: {
            categories: Object
        }
    }
</script>