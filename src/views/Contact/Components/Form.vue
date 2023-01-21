<template>
    <div class="col-md-12 col-lg-8 main-content">
        <form @submit.prevent="submit">
            <div class="row">
                <div class="col-md-12 form-group">
                    <label for="name">{{ staticKeys.staticKeys.contactPageName }}</label>
                    <input type="text" id="name" class="form-control "/>
                </div>
                <div class="col-md-12 form-group">
                    <label for="phone">{{ staticKeys.staticKeys.contactPagePhone }}</label>
                    <input type="text" id="phone" class="form-control "/>
                </div>
                <div class="col-md-12 form-group">
                    <label for="email">{{ staticKeys.staticKeys.contactPageEmail }}</label>
                    <input type="email" id="email" class="form-control "/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <label for="message">{{ staticKeys.staticKeys.contactPageContent }}</label>
                    <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                </div>
            </div>
            <div class="row">
                    <div class="col-md-6 form-group">
                    <input type="submit" :value="[staticKeys.staticKeys.contactPageButtonText]" class="btn btn-primary"/>
                </div>
            </div>
            <div class="messageStatu" id="messageStatu"></div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    methods: {
            submit(){
                this.axios.post('http://myblog.test:90/api/send-message',
                {
                    name : $('#name').val(),
                    phone : $('#phone').val(),
                    email : $('#email').val(),
                    message : $('#message').val(),
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

