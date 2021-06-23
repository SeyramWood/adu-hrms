import axios from "axios";

const state = {
    leaves: [],
    leaveBalance: [],
    adminLeaveBalance: [],
    myLeaveRequest: []
};

const getters = {
    getLeaves: state => state.leaves,
    getLeaveBalance: state => state.leaveBalance,
    getAdminLeaveBalance: state => state.adminLeaveBalance,
    getMyLeaveRequest: state => state.myLeaveRequest
};

const actions = {
    // async fetchLeaves({ commit }) {
    //     try {
    //         const leaves = await axios.get("/dashboard/get-leaves");
    //         const data = leaves.data.map(data => {
    //             data.applicable = JSON.parse(data.applicable);
    //             data.entitlement = JSON.parse(data.entitlement);
    //             return data;
    //         });
    //         commit(
    //             "setLeaves",
    //             data.sort((a, b) => a - b)
    //         );
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    // async fetchLeaveBalance({ commit }) {
    //     try {
    //         const balances = await axios.get("/dashboard/get-leave-balance");
    //         const data = balances.data.map(balance => {
    //             balance.leave_type_id = JSON.parse(balance.leave_type_id);
    //             balance.entitlement = JSON.parse(balance.entitlement);
    //             return balance;
    //         });
    //         commit("setLeaveBalance", data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    // async fetchAdminLeaveBalance({ commit }) {
    //     try {
    //         const balances = await axios.get(
    //             "/dashboard/get-admin-leave-balance"
    //         );
    //         const data = balances.data.map(balance => {
    //             balance.entitlement = JSON.parse(balance.entitlement);
    //             return balance;
    //         });
    //         console.log(data);
    //         commit("setAdminLeaveBalance", data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    // async fetchMyLeaveRequest({ commit }) {
    //     try {
    //         const requests = await axios.get("/dashboard/get-leave-request");
    //         commit("setMyLeaveRequest", requests.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
};

const mutations = {
    setLeaves: (state, data) => (state.leaves = data),
    setLeaveBalance: (state, data) => (state.leaveBalance = data),
    setAdminLeaveBalance: (state, data) => (state.adminLeaveBalance = data),
    setMyLeaveRequest: (state, data) => (state.myLeaveRequest = data)
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
