import {createRouter, createWebHistory} from "vue-router";

import NotFound from "@/pages/NotFound";
import RequestsReceived from "@/pages/requests/RequestsReceived";
import CoachRegistration from "@/pages/coaches/CoachRegistration";
import ContactCoach from "@/pages/requests/ContactCoach";
import CoachDetail from "@/pages/coaches/CoachDetail";
import CoachesList from "@/pages/coaches/CoachesList";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                {path: 'contact', component: ContactCoach}
            ]
        },
        {path: '/register', component: CoachRegistration},
        {path: '/requests', component: RequestsReceived},
        {path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;