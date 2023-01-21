<template>
    <div class="container logo-wrap">
        <div class="row pt-5">
            <div class="col-12 text-center">
                <a class="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button"
                    aria-expanded="false" aria-controls="navbarMenu"><span class="burger-lines"></span></a>
                <h1 class="site-logo"><router-link :to="{name:'index'}">{{ staticKeys.staticKeys.headerMenuHeader }}</router-link></h1>
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
            )}
}
</script>