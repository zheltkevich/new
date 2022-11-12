import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@views/AboutView.vue'),
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('@views/NotFoundView.vue'),
        props: { errorNumber: true },
    },
    // {
    //     path: '*',
    //     component: () => import('@views/NotFoundView.vue'),
    // },
    // {
    //     path: '/*',
    //     redirect: () => ({
    //         name: 'error',
    //         params: { errorNumber: '404' },
    //     }),
    // },
    // {
    //     path: '/:pathMatch(.*)*',
    //     redirect: '/',
    // },
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory('/'), // TODO /vue-template/' for gh-deploy
    linkActiveClass: 'link-active',
    routes,

});

export default router;
