<template>
    <form action="#" :class="[searchText.formClass]">
            <div class="form-group" v-if="searchText.isFormGroup">
            <span class="icon fa fa-search"></span>
            <input type="text" class="form-control" id="search" :placeholder="[staticKeys.staticKeys.placeHolderForSearchText]">
            </div>
        </form>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        props: {
            searchText: Object
        },
        computed:{
            ...mapGetters(
                { staticKeys : 'staticKeys/getStaticKeys'}
            )},          
    }
</script>

