<script setup>
import About from './Footer/About.vue';
import RightSide from './Footer/RightSide.vue';

</script>
<template>
    <footer class="site-footer">
        <div class="container">
            <div class="row mb-5">
                <About :about="about"/>
                <RightSide :quickLinks="quickLinks" :socials="socials"/>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            showPosts: false,
            about: [
                {
                    header: 'About Us',
                    img: 'images/img_1.jpg',
                    text: 'Lorem ipsum dolor sit amet sa ksal sk sa, consectetur adipisicing elit. Ipsa harum inventore reiciendis.'
                }
            ],

            quickLinks: [
                {   
                    title: 'About Us',
                    link: 'asdasda.com'
                }, 
                { 
                    title: 'About Us',
                    link: 'asdasda.com'
                }, 
                { 
                    title: 'About Us',
                    link: 'asdasda.com'
                }, 
            ],

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