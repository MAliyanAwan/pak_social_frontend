import { createRouter, createWebHistory } from "vue-router";

import TheLogin from './components/Auth/TheLogin.vue'
import TheSignUp from './components/Auth/TheSignUp.vue'
import LandingPage from './pages/LandingPage.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: LandingPage
        },
        {
            path: '/login',
            component: TheLogin,
        },
        {
            path: '/signup',
            component: TheSignUp,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})

export default router;