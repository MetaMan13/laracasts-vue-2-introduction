const { default: axios } = require('axios');

require('./bootstrap');

window.Vue = require('vue').default;
window.axios = axios;
import router from './routes';



const app = new Vue({
    el: '#app',
    router
});
