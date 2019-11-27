/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.6
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import Vue from 'vue'
import App from './App.vue'
//import store_login from './_store/store.js';
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueI18Next from '@panter/vue-i18next';

import './vendor.js'

import i18next from './i18n.js';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

//Componentes globales
/*import VModal from 'vue-js-modal'*/
import Datepicker from 'vuejs-datepicker'

Vue.component('Datepicker', Datepicker);


import {utility} from '@/utility';

Vue.prototype.$utility = utility;

//************************** */

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueI18Next);

Vue.use(VueAxios, axios);

const i18n = new VueI18Next(i18next);

new Vue({
    i18n,
    router,
    //store_login,
    render: h => h(App)
}).$mount('#app')