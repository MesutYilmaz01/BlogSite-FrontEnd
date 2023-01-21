<script setup>
import Textbox from '../Components/Textbox.vue';
</script>

<template>
    <div class="top-bar">
        <div class="container">
            <div class="row">
                <div class="col-9 social">
                    <a :href="item.link" v-for="item in socialMedias.data"><span :class="item.icon"></span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
            ...mapGetters(
                { socialMedias : 'socialMedias/getSocialMedias'}
            )}, 
    data() {
        return {
            
        };
    }
}
</script>