<script setup>
import About from './Footer/About.vue';
import RightSide from './Footer/RightSide.vue';

</script>
<template>
    <footer class="site-footer">
        <div class="container">
            <div class="row mb-5">
                <About :about="about"/>
                <RightSide :posts="posts" :quickLinks="quickLinks" :socials="socials"/>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
        data() {
            return {
                about: [
                    {
                        header: 'About Us',
                        img: 'images/img_1.jpg',
                        text: 'Lorem ipsum dolor sit amet sa ksal sk sa, consectetur adipisicing elit. Ipsa harum inventore reiciendis.'
                    }
                ],

                posts: [
                    {   
                        img: 'images/img_6.jpg',
                        title: 'How to Find the Video Games of Your Youth',
                        date: 'March 15, 2018',
                        commentCount: 3 
                    }, 
                    { 
                        img: 'images/img_6.jpg',
                        title: 'How to Find the Video Games of Your Youth',
                        date: 'March 15, 2018',
                        commentCount: 3 
                    }, 
                    { 
                        img: 'images/img_6.jpg',
                        title: 'How to Find the Video Games of Your Youth',
                        date: 'March 15, 2018',
                        commentCount: 3 
                    }, 
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