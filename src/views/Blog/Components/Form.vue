<template>
    <div class="comment-form-wrap pt-5">
        <h3 class="mb-5">{{ staticKeys.staticKeys.blogSingleLeaveComment }}</h3>
        <form @submit.prevent="submit" class="p-5 bg-light">
            <div class="form-group">
            <label for="name">{{ staticKeys.staticKeys.blogSingleName }}</label>
            <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
            <label for="email">{{ staticKeys.staticKeys.blogSingleEmail }}</label>
            <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
            <label for="website">{{ staticKeys.staticKeys.blogSingleWebSite }}</label>
            <input type="url" class="form-control" id="website">
            </div>

            <div class="form-group">
            <label for="message">{{ staticKeys.staticKeys.blogSingleComment }}</label>
            <textarea name="" id="message" cols="30" rows="10" class="form-control"></textarea>
            </div>
            <div class="form-group">
            <input type="submit" :value="[ staticKeys.staticKeys.blogSingleButtonText ]" class="btn btn-primary">
            </div>
            <div class="messageStatu" id="messageStatu"></div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: "recursive-comment",
        props: {
            post: Object
        },
        methods: {
            submit(){
                this.axios.post('http://myblog.test:90/api/send-comment',
                {
                    post_id : this.post.id,
                    name_surname : $('#name').val(),
                    website : $('#website').val(),
                    email : $('#email').val(),
                    comment : $('#message').val(),
                })
                .then(function (response) {
                    var x = document.getElementById("messageStatu");
                    $('div.messageStatu').text(response.data.message);
                    x.style.color = 'green';
                })
                .catch(function (error) {
                    var x = document.getElementById("messageStatu");
                    x.style.color = 'red';
                    $('div.messageStatu').text(error.response.data.message);
                });
            }
        },
        computed: {
        ...mapGetters(
            { staticKeys : 'staticKeys/getStaticKeys'}
        )
    }
    }
</script>