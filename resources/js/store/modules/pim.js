import axios from "axios";

const state = {
    staffList: { data: [] },
    staffDirectory: []
};

const getters = {
    getStaffList: state => state.staffList,
    getStaffDirectory: state => state.staffDirectory
};

const actions = {
    async dispatchStaff({ state, commit }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_USER":
                    commit("addNewUser", payload);
                    break;
                case "ADD_DIRECTORY":
                    commit("addStaffDirectory", payload);
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
                    try {
                        const result = await axios.get(
                            `/dashboard/get-staff?page=${payload}`
                        );
                        commit("addStaff", result.data);
                    } catch (error) {
                        console.log(error);
                    }
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    }
};

const mutations = {
    addStaff: (state, data) => {
        if (!data) return state.staffList;
        if (data.data.length) {
            state.staffList = {
                ...data,
                data: data.data.map(u => {
                    u.personal_details = JSON.parse(u.personal_details);
                    u.job = u.job ? JSON.parse(u.job) : u.job;
                    return u;
                })
            };
        } else {
            state.staffList = data;
        }
    },
    updateJob: (state, data) => {
        let staff = {
            ...data.data,
            personal_details: JSON.parse(data.data.personal_details),
            job: data.data.job ? JSON.parse(data.data.job) : data.data.job
        };
        state.staffList.data.splice(
            state.staffList.data.findIndex(p => p.id === data.id),
            1,
            staff
        );
    },
    addStaffDirectory: (state, data) => {
        state.staffDirectory = [
            ...state.staffDirectory,
            ...data.map(u => {
                u.personal_details = JSON.parse(u.personal_details);
                u.job = u.job ? JSON.parse(u.job) : u.job;
                return u;
            })
        ];
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
