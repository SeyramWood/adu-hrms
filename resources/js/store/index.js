import Vue from "vue";
import Vuex from "vuex";

import Admin from "./modules/admin";
import Ess from "./modules/ess";
import Leave from "./modules/leave";
import Pim from "./modules/pim";
import Kpi from "./modules/kpi";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { Admin, Ess, Leave, Pim, Kpi }
});
