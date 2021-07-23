import axios from "axios";

const state = {
    staffList: []
};

const getters = {
    getStaffList: state => state.staffList
};

const actions = {
    async dispatchStaff({ commit }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_USER":
                    commit("addNewUser", payload);
                    break;
                case "ASSIGN_ROLE":
                    commit("assignUserRole", payload);
                    break;
                case "ASSIGN_STATUS":
                    commit("assignUserStatus", payload);
                    break;
                case "UPDATE_JOB":
                    commit("updateJob", payload);
                    break;
                case "DELETE_USER":
                    commit("deleteUser", payload);
                    break;
                case "DELETE_USERS":
                    commit("deleteUsers", payload);
                    break;
                default:
                    commit("addStaff", payload);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    }
};

const mutations = {
    addStaff: (state, data) => {
        state.staffList = data.map(u => {
            u.personal_details = JSON.parse(u.personal_details);
            u.job = u.job ? JSON.parse(u.job) : u.job;
            return u;
        });
        if (data && data.length > 0) {
        }
    },
    updateJob: (state, data) => {
        let staff = {
            ...data.data,
            personal_details: JSON.parse(data.data.personal_details),
            job: data.data.job ? JSON.parse(data.data.job) : data.data.job
        };
        state.staffList.splice(
            state.staffList.findIndex(p => p.id === data.id),
            1,
            staff
        );
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
