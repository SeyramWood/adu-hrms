import axios from "axios";

const state = {
    appraisals: { data: [] },
    appraisees: { data: [] }
};

const getters = {
    getAppraisals: state => state.appraisals,
    getAppraisees: state => state.appraisees
};

const actions = {
    async dispatchKPI({ commit, state }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_APPRAISAL":
                    commit("addNewAppraisal", payload);
                    break;
                case "UPDATE_APPRAISAL":
                    commit("updateAppraisal", payload);
                    break;
                case "ADD_APPRAISEES":
                    try {
                        const result = await axios.get(
                            `/dashboard/get-appraisees/${payload.id}/?page=${payload.page}`
                        );
                        commit("addAppraisees", result.data);
                    } catch (error) {
                        console.log(error);
                    }
                    break;
                case "DELETE_APPRAISEE":
                    commit("deleteAppraisee", payload);
                    break;
                case "DELETE_APPRAISEES":
                    commit("deleteAppraisees", payload);
                    break;
                case "DELETE_APPRAISAL":
                    commit("deleteAppraisal", payload);
                    break;
                case "DELETE_APPRAISALS":
                    commit("deleteAppraisals", payload);
                    break;
                default:
                    try {
                        const result = await axios.get(
                            `/dashboard/get-appraisals?page=${payload}`
                        );

                        commit("addAppraisals", result.data);
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
    addAppraisals: (state, data) => {
        if (data.data.length) {
            state.appraisals = {
                ...data,
                data: data.data.map(a => {
                    a.period = JSON.parse(a.period);
                    a.sap_timestamp = JSON.parse(a.sap_timestamp);
                    a.np_timestamp = JSON.parse(a.np_timestamp);
                    a.staff = JSON.parse(a.staff);
                    a.departments = JSON.parse(a.departments);
                    a.units = JSON.parse(a.units);
                    a.roles = JSON.parse(a.roles);
                    return a;
                })
            };
        } else {
            state.appraisals = data;
        }
    },
    addAppraisees: (state, data) => {
        if (!data) return state;
        if (data.data.length > 0) {
            state.appraisees = {
                ...data
            };
        } else {
            state.appraisals = data;
        }
    },

    addNewAppraisal: (state, data) => {
        state.appraisals.data = [
            {
                ...data,
                period: data.period ? JSON.parse(data.period) : data.period,
                sap_timestamp: data.sap_timestamp
                    ? JSON.parse(data.sap_timestamp)
                    : data.sap_timestamp,
                np_timestamp: data.np_timestamp
                    ? JSON.parse(data.np_timestamp)
                    : data.np_timestamp,
                staff: data.staff ? JSON.parse(data.staff) : data.staff,
                departments: data.departments
                    ? JSON.parse(data.departments)
                    : data.departments,
                units: data.units ? JSON.parse(data.units) : data.units,
                roles: data.roles ? JSON.parse(data.roles) : data.roles
            },
            ...state.appraisals.data
        ];
        state.appraisals.to = state.appraisals.to + 1;
        state.appraisals.total = state.appraisals.total + 1;
    },
    updateAppraisal: (state, data) => {
        state.appraisals.data.splice(
            state.appraisals.data.findIndex(a => a.id === data.id),
            1,
            {
                ...data,
                period: data.period ? JSON.parse(data.period) : data.period,
                sap_timestamp: data.sap_timestamp
                    ? JSON.parse(data.sap_timestamp)
                    : data.sap_timestamp,
                np_timestamp: data.np_timestamp
                    ? JSON.parse(data.np_timestamp)
                    : data.np_timestamp,
                staff: data.staff ? JSON.parse(data.staff) : data.staff,
                departments: data.departments
                    ? JSON.parse(data.departments)
                    : data.departments,
                units: data.units ? JSON.parse(data.units) : data.units,
                roles: data.roles ? JSON.parse(data.roles) : data.roles
            }
        );
    },
    deleteAppraisee: (state, id) => {
        state.appraisees.data.splice(
            state.appraisees.data.findIndex(a => a.user_id === id),
            1
        );
        state.appraisees.to = state.appraisees.to - 1;
        state.appraisees.total = state.appraisees.total - 1;
    },
    deleteAppraisees: (state, ids) => {
        ids.forEach(id => {
            state.appraisees.data.splice(
                state.appraisees.data.findIndex(a => a.user_id === id),
                1
            );
            state.appraisees.to = state.appraisees.to - 1;
            state.appraisees.total = state.appraisees.total - 1;
        });
    },
    deleteAppraisal: (state, id) => {
        state.appraisals.data.splice(
            state.appraisals.data.findIndex(a => a.id === id),
            1
        );
        state.appraisals.to = state.appraisals.to - 1;
        state.appraisals.total = state.appraisals.total - 1;
    },
    deleteAppraisals: (state, ids) => {
        ids.forEach(id => {
            state.appraisals.data.splice(
                state.appraisals.data.findIndex(a => a.id === id),
                1
            );
            state.appraisals.to = state.appraisals.to - 1;
            state.appraisals.total = state.appraisals.total - 1;
        });
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
