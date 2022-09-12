<template>
    <div class="sidebar-box">
        <div class="bio text-center">
            <img :src="[about.img]" alt="Image Placeholder" class="img-fluid">
            <div class="bio-body">
            <h2>{{ about.title}}</h2>
            <p>{{ about.content}}</p>
            <p><a href="#" class="btn btn-primary btn-sm rounded">Read my bio</a></p>
            <p class="social" v-for="item in about.links">
                <a :href="[item.link]" class="p-2"><span :class="['fa fa-' + item.media]"></span></a>
            </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        props: {
            about: Object
        }
}
</script>