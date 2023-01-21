<template>
    <div class="col-md-4">
        <h3>{{ staticKeys.staticKeys.footerAboutMeHeader }}</h3>
        <p class="mb-4">
            <img v-if="aboutMe.data.image" :src="[aboutMe.data.image]" alt="Image placeholder" class="img-fluid w-50">
        </p>
        <p>{{ aboutMe.data.content }} <router-link :to="{name:'about'}" >{{ staticKeys.staticKeys.footerAboutMeReadMore }}</router-link></p>
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
            { aboutMe : 'aboutMe/getAboutMe'}
            )
        }
    }
</script>

