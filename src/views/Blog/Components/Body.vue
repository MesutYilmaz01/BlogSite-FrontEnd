<script setup>
import Form from './Form.vue';
import Comment from './Comment.vue';
import RightMenu from '../../../components/Common/RightMenu.vue';

</script>

<template>
    <div v-if="this.show" class="container">
        <div class="row blog-entries element-animate fadeInUp element-animated">
            <div class="col-md-12 col-lg-8 main-content">
                <img src="images/img_10.jpg" alt="Image" class="img-fluid mb-5" />
                <div class="post-meta">
                    <span class="author mr-2"><img src="images/person_1.jpg" alt="Colorlib" class="mr-2"> Colorlib</span>•
                    <span class="mr-2"> {{this.post.date}} </span> •
                    <span class="ml-2"><span class="fa fa-comments"></span> {{this.post.commentCount}}</span>
                    <h1 class="mb-4"> {{ this.post.title }} </h1>
                    <a class="category mb-5" href="#">Food</a>
                    <a class="category mb-5" href="#">Food</a>
                    <div class="post-content-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro.</p>
                        <p>Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum provident id quis quo. Eveniet maiores perferendis officia veniam est laborum, expedita fuga doloribus natus repellendus dolorem ab similique sint eius cupiditate necessitatibus, magni nesciunt ex eos.</p>
                        <p>Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at earum assumenda similique ut? Aperiam vel aut, ex exercitationem eos consequuntur eaque culpa totam, deserunt, aspernatur quae eveniet hic provident ullam tempora error repudiandae sapiente illum rerum itaque voluptatem. Commodi, sequi.</p>
                        <div class="row mb-5">
                        <div class="col-md-12 mb-4">
                            <img src="images/img_7.jpg" alt="Image placeholder" class="img-fluid">
                        </div>
                        <div class="col-md-6 mb-4">
                            <img src="images/img_9.jpg" alt="Image placeholder" class="img-fluid">
                        </div>
                        <div class="col-md-6 mb-4">
                            <img src="images/img_11.jpg" alt="Image placeholder" class="img-fluid">
                        </div>
                        </div>
                        <p>Quibusdam autem, quas molestias recusandae aperiam molestiae modi qui ipsam vel. Placeat tenetur veritatis tempore quos impedit dicta, error autem, quae sint inventore ipsa quidem. Quo voluptate quisquam reiciendis, minus, animi minima eum officia doloremque repellat eos, odio doloribus cum.</p>
                        <p>Temporibus quo dolore veritatis doloribus delectus dolores perspiciatis recusandae ducimus, nisi quod, incidunt ut quaerat, magnam cupiditate. Aut, laboriosam magnam, nobis dolore fugiat impedit necessitatibus nisi cupiditate, quas repellat itaque molestias sit libero voluptas eveniet omnis illo ullam dolorem minima.</p>
                        <p>Porro amet accusantium libero fugit totam, deserunt ipsa, dolorem, vero expedita illo similique saepe nisi deleniti. Cumque, laboriosam, porro! Facilis voluptatem sequi nulla quidem, provident eius quos pariatur maxime sapiente illo nostrum quibusdam aliquid fugiat! Earum quod fuga id officia.</p>
                        <p>Illo magnam at dolore ad enim fugiat ut maxime facilis autem, nulla cumque quis commodi eos nisi unde soluta, ipsa eius aspernatur sint atque! Nihil, eveniet illo ea, mollitia fuga accusamus dolor dolorem perspiciatis rerum hic, consectetur error rem aspernatur!</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus magni explicabo id molestiae, minima quas assumenda consectetur, nobis neque rem, incidunt quam tempore perferendis provident obcaecati sapiente, animi vel expedita omnis quae ipsa! Obcaecati eligendi sed odio labore vero reiciendis facere accusamus molestias eaque impedit, consequuntur quae fuga vitae fugit?</p>
                    </div>
                    <div class="pt-5">
                        <p>Categories:  <a href="#">Food</a>, <a href="#">Travel</a>  Tags: <a href="#">#manila</a>, <a href="#">#asia</a></p>
                    </div>
                    <div class="pt-5">
              <h3 class="mb-5">{{comment_title}}</h3>
              <ul class="comment-list">
                <div v-if="comments.length !== 0" v-for="comment in comments">
                  <Comment :data="comment"/>
                </div>
              </ul>
              <!-- END comment-list -->
              
              <Form :post="this.post"/>
            </div>
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
            show: false,
            temp: null,
            post: null,
            title : "Hi There! I'm Craig David",
            comment_title : '',
            content : "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minima eveniet recusandae suscipit eum laboriosam fugit amet deleniti iste et. Ad dolores, necessitatibus non saepe tenetur impedit commodi quibusdam natus repellat, exercitationem accusantium perferendis officiis. Laboriosam impedit quia minus pariatur!</p>",
            img : "images/img_6.jpg",
            comments: []
        }
    },
    created () {
    this.getDatas().then((result) => {
            this.post = result.data.data
            this.comments = this.post.comments
            this.comment_title= this.post.commentCount === 0 ? 'Bu yazıya henüz yorum yapılmamış' : this.post.commentCount+' Comments',
            this.show = true
        })
    this.getPosts().then((result) => {
        this.posts = result.data.data
        })
    },
    methods : {
      getDatas () {
          return this.axios.get('http://myblog.test:90/api/post/'+this.$route.params.slug)
      },
      getPosts () {
        return this.axios.get('http://myblog.test:90/api/popular-posts')

      }
    }
}

</script>