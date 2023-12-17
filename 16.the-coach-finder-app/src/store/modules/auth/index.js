import actions from './actions';
import getters from "@/store/modules/auth/getters";
import mutations from "@/store/modules/auth/mutations";

export default {
    state() {
        return {
            userId: null,
            token: null,
            didAutoLogout: false
        };
    },
    actions,
    mutations,
    getters
};