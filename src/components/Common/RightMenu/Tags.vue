<template>
    <div class="sidebar-box">
        <h3 class="heading" v-if="staticKeys.staticKeys.rightMenuTagsHeader"> {{ staticKeys.staticKeys.rightMenuTagsHeader }}</h3>
        <ul class="tags" v-if="tags">
            <li v-for="tag in tags.data">
                <a :href="[tag.link]">{{ tag.name }}</a>
            </li>
        </ul>
        <ul v-else>
            {{ staticKeys.staticKeys.rightMenuTagsDoesntExists }}
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
       computed:{
           ...mapGetters({
                   tags : 'tags/getTags'
               }),
               ...mapGetters(
                { staticKeys : 'staticKeys/getStaticKeys'}
            )},             
           }
   </script>