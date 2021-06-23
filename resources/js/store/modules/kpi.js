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
        if (!data) return state;
        if (data.data.length > 0) {
            state.appraisals = {
                ...data,
                data: data.data.map(a => {
                    a.period = JSON.parse(a.period);
                    a.sap_timestamp = JSON.parse(a.sap_timestamp);
                    a.np_timestamp = JSON.parse(a.np_timestamp);
                    a.staff = JSON.parse(a.staff);
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
                // data: data.data.map(u => {
                //     u.personal_details = JSON.parse(u.personal_details);
                //     return u;
                // })
            };
        } else {
            state.appraisals = data;
        }
    },
    addNewAppraisal: (state, data) => {
        state.appraisals.data = [
            {
                ...data,
                personal_details: JSON.parse(data.personal_details)
            },
            ...state.appraisals.data
        ];
    },
    deleteAppraisal: (state, id) => {
        state.appraisals.data.splice(
            state.appraisals.data.findIndex(u => u.id === id),
            1
        );
    },
    deleteAppraisals: (state, ids) => {
        ids.forEach(id => {
            state.appraisals.data.splice(
                state.appraisals.data.findIndex(u => u.id === id),
                1
            );
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
