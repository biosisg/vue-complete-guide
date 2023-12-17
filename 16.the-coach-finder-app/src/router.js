import {createRouter, createWebHistory} from "vue-router";

import NotFound from "@/pages/NotFound";
import RequestsReceived from "@/pages/requests/RequestsReceived";
import CoachRegistration from "@/pages/coaches/CoachRegistration";
import ContactCoach from "@/pages/requests/ContactCoach";
import CoachDetail from "@/pages/coaches/CoachDetail";
import CoachesList from "@/pages/coaches/CoachesList";
import UserAuth from "@/pages/auth/UserAuth";
import store from './store/index';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                {path: 'contact', component: ContactCoach}
            ]
        },
        {path: '/register', component: CoachRegistration, meta: {requiresAuth: true}},
        {path: '/requests', component: RequestsReceived, meta: {requiresAuth: true}},
        {path: '/auth', component: UserAuth, meta: {requiresUnAuth: true}},
        {path: '/:notFound(.*)', component: NotFound},
    ]
});

router.beforeEach(function (to, from, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
        next('/coaches');
    }
    next();
});

export default router;