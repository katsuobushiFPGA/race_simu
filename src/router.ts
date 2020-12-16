import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
