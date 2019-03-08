import Vue from "vue"
import vuex, { Store } from "vuex"
import state from "./state"
import actions from "./actions"
import mutations from "./mutations"
Vue.use(vuex)

export default new Store({
    state,
    actions,
    mutations
})