import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/countdown_page.css'
import Notifications from '@kyvg/vue3-notification'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


createApp(App).use(Notifications).use(store).use(router).use(BootstrapVue3).mount('#app')
