<template>
    <nav class="navbar navbar-expand-md  navbar-light bg-light">
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link :to="{name:'index'}" class="nav-link" active-class="active" >{{ staticKeys.staticKeys.navBarMenuItem1 }}</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link :to="{name:'category', params:{category: 'all'}}" active-class="active" class="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {{ staticKeys.staticKeys.navBarMenuItem2 }}</router-link>
                            <div class="dropdown-menu" aria-labelledby="dropdown04">
                               <router-link :to="{name:'category', params:{category: category.name}}" class="dropdown-item" v-for="category in categories" > {{category.name}} </router-link>
                            </div>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'about'}" class="nav-link" active-class="active">{{ staticKeys.staticKeys.navBarMenuItem3 }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'contact'}" class="nav-link" active-class="active">{{ staticKeys.staticKeys.navBarMenuItem4 }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
            ...mapGetters(
                { staticKeys : 'staticKeys/getStaticKeys'}
            )},   
        data() {
            return {
                categories: []
            }
        },
        created () {
            this.getCategories().then((result) => {
                this.categories = result.data.data
            })
        },
        methods : {
            getCategories () {
                return this.axios.get('http://myblog.test:90/api/categories')
        },
    }
}
</script>