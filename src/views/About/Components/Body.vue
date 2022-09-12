<script setup>
import RightMenu from '../../../components/Common/RightMenu.vue';
import HorizontalPost from '../../../components/Common/Components/HorizontalPost.vue';

</script>

<template>
    <div class="container">
            <div class="row blog-entries">
                <div class="col-md-12 col-lg-8 main-content">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="mb-4"> {{ title }}</h2>
                            <p class="mb-5"><img :src="[img]" alt="Image placeholder" class="img-fluid"></p>
                            {{ content }}
                        </div>
                    </div>
                    <div class="row mb-5 mt-5">
                        <div class="col-md-12 mb-5">
                            <h2> {{ postTitle }}</h2>
                        </div>
                        <div class="col-md-12">
                            <div class="post-entry-horzontal" v-for="post in posts">
                                <HorizontalPost :data="post" />
                            </div>
                        </div>
                        <!--Loading circle-->
                        <footer>
                            <div ref="infiniteScrollTrigger" id="scroll-trigger"></div>
                            <div class="circle-loader" v-if="showLoader"></div>
                        </footer>
                    </div>
                </div>
                <RightMenu />
            </div>
        </div>
</template>

<script>
  export default {
    data() {
        return {
            postTitle: 'My Latest Posts',
            title : "Hi There! I'm Craig David",
            content : "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minima eveniet recusandae suscipit eum laboriosam fugit amet deleniti iste et. Ad dolores, necessitatibus non saepe tenetur impedit commodi quibusdam natus repellat, exercitationem accusantium perferendis officiis. Laboriosam impedit quia minus pariatur!</p>",
            img : "images/img_6.jpg",
            posts: [
                {
                    link: "asdasd.com",
                    author: "Mesut Yılmaz",
                    title: "How to Find the Video Games of Your Youth",
                    date: "March 15, 2018",
                    commentCount: 3,
                    img: "images/img_6.jpg",
                },
                {
                    link: "asdasd.com",
                    author: "Mesut Yılmaz",
                    title: "How to Find the Video Games of Your Youth",
                    date: "March 15, 2018",
                    commentCount: 3,
                    img: "images/img_6.jpg",
                },
                {
                    link: "asdasd.com",
                    author: "Mesut Yılmaz",
                    title: "How to Find the Video Games of Your Youth",
                    date: "March 15, 2018",
                    commentCount: 3,
                    img: "images/img_6.jpg",
                },
                {
                    link: "asdasd.com",
                    author: "Mesut Yılmaz",
                    title: "How to Find the Video Games of Your Youth",
                    date: "March 15, 2018",
                    commentCount: 3,
                    img: "images/img_6.jpg",
                },
                {
                    link: "asdasd.com",
                    author: "Mesut Yılmaz",
                    title: "How to Find the Video Games of Your Youth",
                    date: "March 15, 2018",
                    commentCount: 3,
                    img: "images/img_6.jpg",
                },
                
            ],
        }
    },
    methods: {
        scrollTrigger() {
            //this.post = this.getPosts;
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.intersectionRatio > 0 ) {
                        this.showLoader = true;
                        this.posts = this.posts.concat( [{
                            link: "asdasd.com",
                            author: "Mesut Yılmaz - ",
                            title: "How to Find the Video Games of Your Youth",
                            date: "March 15, 2018",
                            commentCount: this.posts.length,
                            img: "images/img_6.jpg",
                        }])
                        setTimeout( () => {
                            this.showLoader = false;
                        }, 2000)
                    }
                })
            })
            observer.observe(this.$refs.infiniteScrollTrigger);
        }
    },
    mounted: function() {
        this.scrollTrigger();
    }
}
</script>

<style scoped>
    footer {
        position: relative;
        width: 100%;
        height: 100px;
    }

    #scroll-trigger {
        height: 50px;
    }

    .circle-loader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 5px solid black;
            border-top: 5px solid #fff;
            animation: animate 1.5s infinite linear;
    }

    @keyframes animate {
        0% {
            transform:  translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform:  translate(-50%, -50%) rotate(360deg);
        }
    }

</style>