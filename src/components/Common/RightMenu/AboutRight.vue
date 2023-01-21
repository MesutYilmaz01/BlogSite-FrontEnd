<template>
    <div class="sidebar-box">
        <div class="bio text-center">
            <img v-if="aboutMe.data.image" :src="[aboutMe.data.image]" alt="Image Placeholder" class="img-fluid">
            <div class="bio-body">
            <h2>{{ aboutMe.data.title}}</h2>
            <p>{{ aboutMe.data.content}}</p>
            <p><router-link :to="{name:'about'}" class="btn btn-primary btn-sm rounded" >{{ staticKeys.staticKeys.rightMenuAboutButtonText }}</router-link></p>
            <p class="social">
                <!-- <a v-for="item in about.links" :href="[item.link]" class="p-2"><span :class="['fa fa-' + item.media]"></span></a> -->
            </p>
            </div>
        </div>
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
        },     
}
</script>