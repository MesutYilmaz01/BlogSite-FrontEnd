<script setup>
import About from './Footer/About.vue';
import RightSide from './Footer/RightSide.vue';

</script>
<template>
    <footer class="site-footer">
        <div class="container">
            <div class="row mb-5">
                <About :about="about"/>
                <RightSide :socials="socials"/>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            socials: [
                {
                    title: 'Twitter',
                    link: 'asdasda.com',
                    icon: 'fa fa-twitter'
                },
                {
                    title: 'Twitter',
                    link: 'asdasda.com',
                    icon: 'fa fa-twitter'
                },
                {
                    title: 'Twitter',
                    link: 'asdasda.com',
                    icon: 'fa fa-twitter'
                },
                {
                    title: 'Twitter',
                    link: 'asdasda.com',
                    icon: 'fa fa-twitter'
                }
            ]
        }
    }
}
</script>