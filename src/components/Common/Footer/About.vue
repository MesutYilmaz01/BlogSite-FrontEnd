<template>
    <div class="col-md-4">
        <h3>{{ about[0].header }}</h3>
        <p class="mb-4">
            <img :src="[about[0].img]" alt="Image placeholder" class="img-fluid">
        </p>
        <p>{{ about[0].text }} <a href="#">Read More</a></p>
    </div>
</template>

<script>
export default {
        props: {
            about: Object
        },
} 
</script>