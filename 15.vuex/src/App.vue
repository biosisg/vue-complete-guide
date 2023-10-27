<template>
    <base-container title="Vuex" v-if="isAuth">
        <the-counter></the-counter>
        <favorite-value></favorite-value>
        <button @click="addOne">Add 2</button>
        <change-counter></change-counter>
    </base-container>
    <base-container title="Auth">
        <user-auth></user-auth>
    </base-container>
</template>

<script>
    import BaseContainer from './components/BaseContainer.vue';
    import ChangeCounter from "./components/ChangeCounter";
    import FavoriteValue from "./components/FavoriteValue";
    import TheCounter from "./components/TheCounter";
    import UserAuth from "./components/UserAuth";

    export default {
        components: {
            BaseContainer,
            ChangeCounter,
            FavoriteValue,
            TheCounter,
            UserAuth,
        },
        computed: {
            isAuth() {
                return this.$store.getters.userIsAuthenticated;
            }
        },
        methods: {
            addOne() {
                // this.$store.commit('increment');
                this.$store.dispatch('numbers/increment');
            }
        }
    };
</script>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        font-family: sans-serif;
    }

    body {
        margin: 0;
    }
</style>