<script setup>
import RectanglePost from "../../../components/Common/Components/RectanglePost.vue";
import RightMenu from "../../../components/Common/RightMenu.vue";
</script>

<template>
    <section class="site-section py-sm">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="mb-4">{{ title }}</h2>
                </div>
            </div>
            <div class="row blog-entries">
                <div class="col-md-12 col-lg-8 main-content">
                    <div class="row">
                        <h2 v-if="isEmptyPost">{{emptyPost}}</h2>
                        <div class="col-md-6" v-if="posts.length !== 0" v-for="item in posts">
                            <RectanglePost :data="item" />
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
    </section>
</template>

<script>
  export default {
    data() {
        return {
            posts: [],
            title: 'Latest Posts',
            counter: 0,
            showLoader: false,
            isEmptyPost: false,
            emptyPost: 'Henüz hiçbir yazı yazılmamış.'
        }
    },
    methods: {
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(this.counter <= this.posts.length) {
                        if(entry.intersectionRatio > 0 ) {
                        this.showLoader = true;
                        this.axios
                        .get('http://myblog.test:90/api/posts/'+this.counter)
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