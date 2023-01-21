import { createApp } from 'vue'


import App from './App.vue'
import router from "./router/router.js";


import './assets/css/bootstrap.css'
import './assets/css/animate.css'
import './assets/css/owl.carousel.min.css'

import './assets/fonts/ionicons/css/ionicons.min.css'
import './assets/fonts/fontawesome/css/font-awesome.min.css'
import './assets/fonts/flaticon/font/flaticon.css'

import './assets/css/style.css'

import 'jquery-migrate'
import 'popper.js'
import 'bootstrap'
import 'owl.carousel'


import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store.js'



createApp(App).use(router).use(VueAxios, axios).use(store).mount('#app')
