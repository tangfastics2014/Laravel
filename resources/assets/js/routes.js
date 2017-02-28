import VueRouter from 'vue-router';

import TopicsIndex from './components/Topics/Index.vue';

let routes = [
    {
        path: '/',
        component: TopicsIndex
    }
];

export default new VueRouter({
    linkActiveClass: 'active',
    routes
});