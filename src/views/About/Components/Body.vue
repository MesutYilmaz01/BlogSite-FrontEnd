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
                            <h2 class="mb-4"> {{ aboutMe.title }}</h2>
                            <p class="mb-5"><img v-if="aboutMe.image" :src="[aboutMe.image]" alt="Image placeholder" class="w-50 p-3"></p>
                            {{ aboutMe.content }}
                        </div>
                    </div>
                    <div class="row mb-5 mt-5">
                        <div class="col-md-12 mb-5">
                            <h2 v-if="staticKeys.staticKeys.aboutMeLatestPosts"> {{ staticKeys.staticKeys.aboutMeLatestPosts }}</h2>
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
 import { mapGetters } from 'vuex';
  export default {
    data() {
        return {
            posts: [],
            counter: 0,
            showLoader: false,
            isEmptyPost: false,
            aboutMe : [],
        }
    },
    created () {
            this.getCategories().then((result) => {
                this.aboutMe = result.data
            })
    },
    methods: {
        getCategories () {
                return this.axios.get('http://myblog.test:90/api/about-me')
        },
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(this.counter <= this.posts.length) {
                        if(entry.intersectionRatio > 0 ) {
                        this.showLoader = true;
                        this.axios
                        .get('http://myblog.test:90/api/latest-posts/'+this.counter+'/10')
                        .then(
                            (response) => {
                                this.posts = this.posts.concat(response.data.data)
                            this.counter+=10
                            this.showLoader = false
                            this.isEmptyPost = this.posts.length === 0 ? true : false
                            }
                            )
                    }
                    }
                })
            })
            observer.observe(this.$refs.infiniteScrollTrigger);
        }
    },
    computed:{
        ...mapGetters(
            { staticKeys : 'staticKeys/getStaticKeys'}
        ),
        ...mapGetters(
                { aboutMe : 'aboutMe/getAboutMe'}
            )
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