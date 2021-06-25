import axios from "axios";

const state = {
    users: { data: [] },
    jobCategories: [],
    jobTitles: [],
    employmentStatus: [],
    branches: [],
    departments: [],
    positions: [],
    organizationProfile: {},
    rolePermissions: [],
    staffCount: {},

    workShifts: []
};

const getters = {
    getUsers: state => state.users,
    getJobCategories: state => state.jobCategories,
    getJobTitles: state => state.jobTitles,
    getEmploymentStatus: state => state.employmentStatus,
    getBranches: state => state.branches,
    getDepartments: state => state.departments,
    getPositions: state => state.positions,
    getRolePermissions: state => state.rolePermissions,
    getOrganizationProfile: state => state.organizationProfile,
    getStaffCount: state => state.staffCount,
    getWorkShifts: state => state.workShifts
};

const actions = {
    async dispatchUserAccount({ commit, state }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_USER":
                    commit("addNewUser", payload);
                    break;
                case "ADD_ROLE_PERMISSION":
                    state.rolePermissions = payload;
                    break;
                case "ASSIGN_ROLE":
                    commit("assignUserRole", payload);
                    break;
                case "ASSIGN_STATUS":
                    commit("assignUserStatus", payload);
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
                            `/dashboard/get-users?page=${payload}`
                        );
                        commit("addUsers", result.data);
                    } catch (error) {
                        console.log(error);
                    }
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchJobCategory({ commit }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_CATEGORY":
                    commit("addNewJobCategory", payload);
                    break;
                case "UPDATE_CATEGORY":
                    commit("updateJobCategory", payload);
                    break;
                case "DELETE_CATEGORY":
                    commit("deleteJobCategory", payload);
                    break;
                case "DELETE_CATEGORIES":
                    commit("deleteJobCategories", payload);
                    break;
                default:
                    commit("addJobCategories", payload);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchJobTitle({ commit }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_TITLE":
                    commit("addNewJobTitle", payload);
                    break;
                case "UPDATE_TITLE":
                    commit("updateJobTitle", payload);
                    break;
                case "DELETE_TITLE":
                    commit("deleteJobTitle", payload);
                    break;
                case "DELETE_TITLES":
                    commit("deleteJobTitles", payload);
                    break;
                default:
                    commit("addJobTitles", payload);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchEmploymentStatus({ commit }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_EMP_STATUS":
                    commit("addNewEmpStatus", payload);
                    break;
                case "UPDATE_EMP_STATUS":
                    commit("updateEmpStatus", payload);
                    break;
                case "DELETE_EMP_STATUS":
                    commit("deleteEmpStatus", payload);
                    break;
                case "DELETE_EMP_STATUSES":
                    commit("deleteEmpStatuses", payload);
                    break;
                default:
                    commit("addEmpStatus", payload);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchWorkShift({ commit, state }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_SHIFT":
                    state.workShifts = [
                        {
                            ...payload,
                            days: JSON.parse(payload.days)
                        },
                        ...state.workShifts
                    ];
                    break;
                case "UPDATE_SHIFT":
                    state.workShifts.splice(
                        state.workShifts.findIndex(e => e.id === payload.id),
                        1,
                        {
                            ...payload,
                            days: JSON.parse(payload.days)
                        }
                    );
                    break;
                case "DELETE_SHIFT":
                    state.workShifts.splice(
                        state.workShifts.findIndex(e => e.id === payload),
                        1
                    );
                case "DELETE_SHIFTS":
                    commit("deleteShifts", payload);
                    break;
                default:
                    state.workShifts = payload.map(s => {
                        s.days = JSON.parse(s.days);
                        return s;
                    });
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchBranch({ commit }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_BRANCH":
                    commit("addNewBranch", payload);
                    break;
                case "UPDATE_BRANCH":
                    commit("updateBranch", payload);
                    break;
                case "DELETE_BRANCH":
                    commit("deleteBranch", payload);
                    break;
                case "DELETE_BRANCHES":
                    commit("deleteBranches", payload);
                    break;
                default:
                    commit("addBranches", payload);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchDepartment({ commit }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_DEPARTMENT":
                    commit("addNewDepartment", payload);
                    break;
                case "UPDATE_DEPARTMENT":
                    commit("updateDepartment", payload);
                    break;
                case "DELETE_DEPARTMENT":
                    commit("deleteDepartment", payload);
                    break;
                case "DELETE_DEPARTMENTS":
                    commit("deleteDepartments", payload);
                    break;
                default:
                    commit("addDepartments", payload);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchPosition({ commit }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_NEW_POSITION":
                    commit("addNewPosition", payload);
                    break;
                case "UPDATE_POSITION":
                    commit("updatePosition", payload);
                    break;
                case "DELETE_POSITION":
                    commit("deletePosition", payload);
                    break;
                case "DELETE_POSITIONS":
                    commit("deletePositions", payload);
                    break;
                default:
                    commit("addPositions", payload);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchOrgnizationProfile(
        { commit, state },
        { type = "", payload }
    ) {
        try {
            switch (type) {
                case "UPDATE_LOGO":
                    state.organizationProfile.logo = payload;
                    // commit("updateOrgLogo", payload);
                    break;
                case "UPDATE_INFO":
                    state.organizationProfile = payload;
                    // commit("deleteDepartment", payload);
                    break;
                default:
                    state.organizationProfile = payload;
                    // commit("addOrganisationProfile", payload);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchStaffCount({ commit, state }, { type = "", payload }) {
        try {
            switch (type) {
                case "UPDATE_STAFF_COUNT":
                    state.staffCount = payload;
                    break;
                default:
                    state.staffCount = payload;
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    }
};

const mutations = {
    addUsers: (state, data) => {
        if (!data) return state;
        if (data.data.length > 0) {
            state.users = {
                ...data,
                data: data.data.map(u => {
                    u.personal_details = JSON.parse(u.personal_details);
                    return u;
                })
            };
        } else {
            state.users = data;
        }
    },
    addNewUser: (state, data) => {
        state.users.data = [
            {
                ...data,
                personal_details: JSON.parse(data.personal_details)
            },
            ...state.users.data
        ];
    },
    assignUserRole: (state, data) => {
        data.ids.forEach(id => {
            state.users.data.forEach(u => {
                if (u.id === id) {
                    u.role = data.role;
                }
            });
        });
    },
    assignUserStatus: (state, data) => {
        data.ids.forEach(id => {
            state.users.data.forEach(u => {
                if (u.id === id) {
                    u.status = parseInt(data.status);
                }
            });
        });
    },
    deleteUser: (state, id) => {
        state.users.data.splice(
            state.users.data.findIndex(u => u.id === id),
            1
        );
    },
    deleteUsers: (state, ids) => {
        ids.forEach(id => {
            state.users.data.splice(
                state.users.data.findIndex(u => u.id === id),
                1
            );
        });
    },
    addJobCategories: (state, data) => (state.jobCategories = data),
    addNewJobCategory: (state, data) => {
        state.jobCategories = [data, ...state.jobCategories];
    },
    updateJobCategory: (state, data) => {
        state.jobCategories.splice(
            state.jobCategories.findIndex(u => u.id === data.id),
            1,
            data
        );
    },
    deleteJobCategory: (state, id) => {
        state.jobCategories.splice(
            state.jobCategories.findIndex(u => u.id === id),
            1
        );
    },
    deleteJobCategories: (state, ids) => {
        ids.forEach(id => {
            state.jobCategories.splice(
                state.jobCategories.findIndex(u => u.id === id),
                1
            );
        });
    },

    addJobTitles: (state, data) => (state.jobTitles = data),
    addNewJobTitle: (state, data) => {
        state.jobTitles = [data, ...state.jobTitles];
    },
    updateJobTitle: (state, data) => {
        state.jobTitles.splice(
            state.jobTitles.findIndex(u => u.id === data.id),
            1,
            data
        );
    },
    deleteJobTitle: (state, id) => {
        state.jobTitles.splice(
            state.jobTitles.findIndex(u => u.id === id),
            1
        );
    },
    deleteJobTitles: (state, ids) => {
        ids.forEach(id => {
            state.jobTitles.splice(
                state.jobTitles.findIndex(u => u.id === id),
                1
            );
        });
    },

    addEmpStatus: (state, data) => (state.employmentStatus = data),
    addNewEmpStatus: (state, data) => {
        state.employmentStatus = [data, ...state.employmentStatus];
    },
    updateEmpStatus: (state, data) => {
        state.employmentStatus.splice(
            state.employmentStatus.findIndex(u => u.id === data.id),
            1,
            data
        );
    },
    deleteEmpStatus: (state, id) => {
        state.employmentStatus.splice(
            state.employmentStatus.findIndex(u => u.id === id),
            1
        );
    },
    deleteEmpStatuses: (state, ids) => {
        ids.forEach(id => {
            state.employmentStatus.splice(
                state.employmentStatus.findIndex(u => u.id === id),
                1
            );
        });
    },

    addBranches: (state, data) => (state.branches = data),
    addNewBranch: (state, data) => {
        state.branches = [data, ...state.branches];
    },
    updateBranch: (state, data) => {
        state.branches.splice(
            state.branches.findIndex(u => u.id === data.id),
            1,
            data
        );
    },
    deleteBranch: (state, id) => {
        state.branches.splice(
            state.branches.findIndex(u => u.id === id),
            1
        );
    },
    deleteBranches: (state, ids) => {
        ids.forEach(id => {
            state.branches.splice(
                state.branches.findIndex(u => u.id === id),
                1
            );
        });
    },

    addDepartments: (state, data) => (state.departments = data),
    addNewDepartment: (state, data) => {
        state.departments = [data, ...state.departments];
    },
    updateDepartment: (state, data) => {
        state.departments.splice(
            state.departments.findIndex(u => u.id === data.id),
            1,
            data
        );
    },
    deleteDepartment: (state, id) => {
        state.departments.splice(
            state.departments.findIndex(u => u.id === id),
            1
        );
    },
    deleteDepartments: (state, ids) => {
        ids.forEach(id => {
            state.departments.splice(
                state.departments.findIndex(u => u.id === id),
                1
            );
        });
    },
    addPositions: (state, data) => (state.positions = data),
    addNewPosition: (state, data) => {
        state.positions = [data, ...state.positions];
    },
    updatePosition: (state, data) => {
        state.positions.splice(
            state.positions.findIndex(u => u.id === data.id),
            1,
            data
        );
    },
    deletePosition: (state, id) => {
        state.positions.splice(
            state.positions.findIndex(u => u.id === id),
            1
        );
    },
    deletePositions: (state, ids) => {
        ids.forEach(id => {
            state.positions.splice(
                state.positions.findIndex(u => u.id === id),
                1
            );
        });
    },

    deleteShifts: (state, ids) => {
        console.log("====================================");
        console.log(ids);
        console.log("====================================");
        ids.forEach(id => {
            state.workShifts.splice(
                state.workShifts.findIndex(s => s.id === id),
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
