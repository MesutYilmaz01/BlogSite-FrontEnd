<template>
    <div class="top-bar">
        <div class="container">
            <div class="row">
                <div class="col-9 social">
                    <router-link :to="link.link" v-for="link in links"><span :class="'fa fa-'+link.media"></span></router-link>
                </div>
                <div class="col-3 search-top">
                    <!-- <a href="#"><span class="fa fa-search"></span></a> -->
                    <form action="#" class="search-top-form">
                        <span class="icon fa fa-search"></span>
                        <input type="text" id="s" :placeholder="placeholder">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        data() {
            return {
                links: [
                    {
                        link: '/',
                        media: 'twitter'
                    },
                    {
                        link: '/',
                        media: 'facebook'
                    },
                    {
                        link: '/',
                        media: 'instagram'
                    },
                    {
                        link: '/',
                        media: 'youtube-play'
                    },
                ],
                placeholder: 'Type keyword to search...'
            }
        }
}
</script>