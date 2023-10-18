import {createRouter, createWebHistory} from "vue-router";

import TeamsList from "./components/teams/TeamsList";
import UsersList from "./components/users/UsersList";
import TeamMembers from "./components/teams/TeamMembers";
import NotFound from "./components/nav/NotFound";
import TeamsFooter from "./components/teams/TeamsFooter";
import UsersFooter from "./components/users/UsersFooter";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true },
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                {name: 'team-members', path: '/teams/:teamId', component: TeamMembers, props: true}
            ]
        },
        // { path: '/teams', component: TeamsList, alias: '/' },
        {
            name: 'users',
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('Users beforeEnter');
                console.log(to, from);
                next();
            }
        },
        // { path: '/teams/:teamId', component: TeamMembers, props: true },
        {path: '/:notFound(.*)', component: NotFound}
        // { path: '/:notFound(.*)', redirect: '/' }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return {left: 0, top: 0};
    }
});

router.beforeEach((to, from, next) => {
    console.log('Global beforeEach');
    console.log(to, from);

    if (to.meta.needsAuth) {
        console.log('Needs Auth!');
        next();
    } else {
        next();
    }
    /*if (to.name === 'team-members') {
        next();
    } else {
        next({name: 'team-members', params: {teamId: 't2'}});
    }*/
    // next();
});

router.afterEach((to, from) => {
    console.log('Global afterEach');
    console.log(to, from);
});

export default router;