<template>
    <div class="sidebar-box">
        <h3 v-if="staticKeys.staticKeys.rightMenuCategoriesHeader" class="heading" >{{ staticKeys.staticKeys.rightMenuCategoriesHeader}}</h3>
        <ul class="categories" v-if="categories">
            <li v-for="category in categories.data">
                <router-link :to="{name:'category', params:{category: category.name}}">{{category.name}} <span>({{category.count}})</span></router-link>
            </li>
        </ul>
        <ul v-else> {{ staticKeys.staticKeys.rightMenuCategoryDoesntExists }}</ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
       computed:{
           ...mapGetters(
                { categories : 'categories/getCategories'}),
            ...mapGetters(
                { staticKeys : 'staticKeys/getStaticKeys'}
            )},     
       }
   </script>
