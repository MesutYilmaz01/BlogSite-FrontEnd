<script setup>
import Form from './Components/Form.vue';
import RightMenu from '../../components/Common/RightMenu.vue';
</script>

<template>
    <div>
        <section class="site-section">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h1> {{ staticKeys.staticKeys.contactPageHeader }}</h1>
                    </div>
                </div>
                <div class="row blog-entries">
                    <Form />
                    <RightMenu />
                </div>
            </div>
        </section>
    </div>/>
</template>

<script>
import { mapGetters } from 'vuex';
   export default {
        computed:{
            ...mapGetters(
                { staticKeys : 'staticKeys/getStaticKeys'}
            )
        }
    }
</script>

