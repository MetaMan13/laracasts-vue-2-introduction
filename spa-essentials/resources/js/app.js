const { default: axios } = require('axios');

require('./bootstrap');

window.Vue = require('vue').default;
window.axios = axios;

const app = new Vue({
    el: '#app',
});
