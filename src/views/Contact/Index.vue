<script setup>
import Form from './Components/Form.vue';
import RightMenu from '../../components/Common/RightMenu.vue';
import Header from '../../components/Common/Header.vue';
import Footer from '../../components/Common/Footer.vue';
</script>

<template>
    <div class="wrap">
        <Header />
        <section class="site-section">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h1> {{ title }}</h1>
                    </div>
                </div>
                <div class="row blog-entries">
                    <Form />
                    <RightMenu />
                </div>
            </div>
        </section>
        <Footer />
    </div>/>
</template>

<script>
export default {
        data() {
            return {
                title: 'Contact Me'
            }
        }
}
</script>