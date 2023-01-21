<template>
    <div class="mb-5">
        <h3 v-if="staticKeys.staticKeys.footerQuickLinksHeader">{{ staticKeys.staticKeys.footerQuickLinksHeader }}</h3>
        <ul class="list-unstyled">
            <li class="nav-item">
                        <router-link :to="{name:'index'}" class="nav-link" active-class="active" >{{ staticKeys.staticKeys.navBarMenuItem1 }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'about'}" class="nav-link" active-class="active">{{ staticKeys.staticKeys.navBarMenuItem3 }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'contact'}" class="nav-link" active-class="active">{{ staticKeys.staticKeys.navBarMenuItem4 }}</router-link>
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
            )}, 
    }
</script>
