<template>
    <div class="mb-5">
    <h3 v-if="socials"> {{ staticKeys.staticKeys.footerSocialMediaHeader }}</h3>
    <ul class="list-unstyled footer-social">
        <li v-for="item in socialMedias.data">
            <a :href="[item.link]"><span :class="[item.icon]"></span> {{item.title}}</a>
        </li>
    </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
   export default {
        computed:{
            ...mapGetters(
                { staticKeys : 'staticKeys/getStaticKeys'}
            ),
            ...mapGetters(
                { socialMedias : 'socialMedias/getSocialMedias'}
            )}, 
        props: {
            socials: Object
        }
    }
</script>