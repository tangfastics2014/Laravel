import VueRouter from 'vue-router';

import TopicsIndex from './components/Topics/Index.vue';
import TopicsShow from './components/Topics/Show.vue';

let routes = [
    {
        path: '/',
        name: 'topics.index',
        component: TopicsIndex
    },
    {
        path: '/topics/:topic',
        name: 'topics.show',
        component: TopicsShow
    }
];

export default new VueRouter({
    linkActiveClass: 'active',
    routes
});