import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top },
    { path: '/home', component: HelloWorld },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
