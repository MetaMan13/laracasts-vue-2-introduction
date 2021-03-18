import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

let routes = [

    {
        path: '/',
        component: Home,
    },

    {
        path: '/about',
        component: About,
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'font-bold'
});