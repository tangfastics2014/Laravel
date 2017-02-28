import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Example from './components/Example.vue';

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/example',
        component: Example
    }
];

export default new VueRouter({
    linkActiveClass: 'active',
    routes
});