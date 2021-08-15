import axios from "axios";

const state = {
    authUser: {},
    profile: {},
    personalDetails: [],
    personalDetailsAttachments: [],
    contactDetails: [],
    emergencyContacts: [],
    userJob: [],
    education: [],
    expertise: [],
    languages: [],
    qualificationAttachments: [],
    myLeaders: {
        supervisors: [],
        hods: [],
        reportTo: [],
        reportToMe: [],
        directorates: []
    },
    countries: [],
    myEquipmentRequests: { data: [] },
    equipmentRequests: { data: [] },
    grantedEquipmentRequests: [],
    myEquipmentAllocations: { data: [] },
    equipmentAllocations: { data: [] }
};

const getters = {
    getAuthUser: state => state.authUser,
    getProfile: state => state.profile,
    getPersonalDetails: state => state.personalDetails,
    getPersonalDetailsAttachments: state => state.personalDetailsAttachments,
    getContactDetails: state => state.contactDetails,
    getEmergencyContacts: state => state.emergencyContacts,
    getUserJob: state => state.userJob,
    getEducation: state => state.education,
    getExpertise: state => state.expertise,
    getLanguages: state => state.languages,
    getQualificationAttachments: state => state.qualificationAttachments,
    getMyLeaders: state => state.myLeaders,
    getCountries: state => state.countries,
    getMyEquipmentRequests: state => state.myEquipmentRequests,
    getEquipmentRequests: state => state.equipmentRequests,
    getGrantedEquipmentRequests: state => state.grantedEquipmentRequests,
    getMyEquipmentAllocations: state => state.myEquipmentAllocations,
    getEquipmentAllocations: state => state.equipmentAllocations
};

const actions = {
    async dispatchProfile({ commit, state }, { type = "", payload }) {
        try {
            switch (type) {
                case "UPDATE_AVATAR":
                    state.profile.personal_details.avatar = payload;
                    break;
                case "UPDATE_PERSONAL_DETAILS":
                    state.profile.personal_details = payload;
                    break;
                case "UPDATE_PERSONAL_DETAILS_ATTACHMENT":
                    state.profile.personal_details.attachments = payload;
                    break;
                case "UPDATE_CONTACT_DETAILS":
                    state.profile.contact_details = payload;
                    break;
                case "ADD_EMERGENCY_CONTACT_DETAILS":
                    state.profile.emergency_contacts = payload;
                    break;
                case "UPDATE_EMERGENCY_CONTACT_DETAILS":
                    state.profile.emergency_contacts.splice(
                        state.profile.emergency_contacts.findIndex(
                            el => el.id === payload.id
                        ),
                        1,
                        payload
                    );
                    break;
                case "ADD_JOB":
                    state.profile.job = payload;
                    break;
                case "DELETE_EMERGENCY_CONTACT_DETAILS":
                    state.profile.emergency_contacts.splice(
                        state.profile.emergency_contacts.findIndex(
                            el => el.id === payload
                        ),
                        1
                    );
                    break;
                case "DELETE_ATTACHMENT":
                    commit("deletePersonalAttachment", payload);
                    break;
                case "ADD_WORK_EXPERIENCE":
                    state.profile.qualifications.workExperience = payload;
                    break;
                case "ADD_EDUCATION":
                    state.profile.qualifications.education = payload;
                    break;
                case "ADD_CONTINUOUS_DEV":
                    state.profile.qualifications.continuousDev = payload;
                    break;
                case "ADD_EXPERTISE":
                    state.profile.qualifications.expertise = payload;
                    break;
                case "ADD_LANGUAGE":
                    state.profile.qualifications.languages = payload;
                    break;
                case "UDATE_QUALIFICATION":
                    state.profile.qualifications[payload.type] = payload.data;
                    break;
                case "DELETE_USER":
                    commit("deleteUser", payload);
                    break;
                case "DELETE_USERS":
                    commit("deleteUsers", payload);
                    break;
                case "ADD_MY_LEADERS":
                    state.myLeaders = payload;
                    break;
                default:
                    commit("addProfile", payload);
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchAuthUser({ commit, state }, { type = "", payload }) {
        try {
            switch (type) {
                case "UPDATE_AVATAR":
                    state.authUser.avatar = payload;
                    break;
                default:
                    state.authUser = payload;
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchCountry({ commit, state }, { type = "", payload }) {
        try {
            switch (type) {
                default:
                    state.countries = payload;
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchEquipmentRequest({ commit, state }, { type = "", payload }) {
        try {
            switch (type) {
                case "ADD_MY_REQUEST":
                    commit("addMyEquipmentRequest", payload);
                    break;
                case "ADD_GRANTED_REQUEST":
                    state.grantedEquipmentRequests = [...payload];
                    break;
                case "UPDATE_MY_REQUEST":
                    commit("updateMyEquipmentRequest", payload);
                    break;
                case "UPDATE_REQUEST":
                    commit("updateEquipmentRequest", payload);
                    break;
                case "DELETE_REQUEST":
                    commit("deleteEquipmentRequest", payload);
                    break;
                case "DELETE_REQUESTS":
                    commit("deleteEquipmentRequests", payload);
                    break;
                case "ADD_REQUESTS":
                    try {
                        const result = await axios.get(
                            `/dashboard/get-requests?page=${payload}`
                        );
                        commit("addEquipmentRequests", result.data);
                    } catch (error) {
                        console.log(error);
                    }
                    break;
                default:
                    try {
                        const result = await axios.get(
                            `/dashboard/get-my-requests?page=${payload}`
                        );
                        commit("addMyEquipmentRequests", result.data);
                    } catch (error) {
                        console.log(error);
                    }
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async dispatchEquipmentAllocation(
        { commit, state },
        { type = "", payload }
    ) {
        try {
            switch (type) {
                case "ADD_ALLOCATION":
                    commit("addEquipmentAllocation", payload);
                    break;
                case "UPDATE_MY_ALLOCATION":
                    commit("updateMyEquipmentAllocation", payload);
                    break;
                case "UPDATE_ALLOCATION":
                    commit("updateEquipmentAllocation", payload);
                    break;
                case "DELETE_ALLOCATION":
                    commit("deleteEquipmentAllocation", payload);
                    break;
                case "DELETE_ALLOCATIONS":
                    commit("deleteEquipmentAllocations", payload);
                    break;
                case "ADD_MY_ALLOCATIONS":
                    try {
                        const result = await axios.get(
                            `/dashboard/get-my-allocations?page=${payload}`
                        );
                        commit("addMyEquipmentAllocations", result.data);
                    } catch (error) {
                        console.log(error);
                    }
                    break;
                default:
                    try {
                        const result = await axios.get(
                            `/dashboard/get-allocations?page=${payload}`
                        );
                        commit("addEquipmentAllocations", result.data);
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
    setAuthUser: (state, data) => (state.authUser = data),
    addProfile: (state, data) => {
        state.profile = {
            ...data,
            personal_details: JSON.parse(data.personal_details),
            qualifications: JSON.parse(data.qualifications),
            contact_details: data.contact_details
                ? JSON.parse(data.contact_details)
                : data.contact_details,
            p_contact_details: data.p_contact_details
                ? JSON.parse(data.p_contact_details)
                : data.p_contact_details,
            emergency_contacts: data.emergency_contacts
                ? JSON.parse(data.emergency_contacts)
                : data.emergency_contacts,
            job: data.job ? JSON.parse(data.job) : data.job
        };
    },
    setPersonalDetailsAttachments: (state, data) =>
        (state.personalDetailsAttachments = data),
    deletePersonalAttachment: (state, id) => {
        const attachments = JSON.parse(
            state.profile.personal_details.attachments
        );
        attachments.splice(
            attachments.findIndex(el => el.id === id),
            1
        );
        state.profile.personal_details.attachments = JSON.stringify(
            attachments
        );
    },
    setContactDetails: (state, data) => (state.contactDetails = data),
    setEmergencyContacts: (state, data) => (state.emergencyContacts = data),
    setUserJob: (state, data) => (state.userJob = data),
    setEducation: (state, data) => (state.education = data),
    setExpertise: (state, data) => (state.expertise = data),
    setLanguages: (state, data) => (state.languages = data),

    addMyEquipmentRequests: (state, data) => {
        if (!data) return state.myEquipmentRequests;
        if (data.data.length) {
            state.myEquipmentRequests = {
                ...data,
                data: data.data.map(r => {
                    r.details = JSON.parse(r.details);
                    r.dpt_unit_approval = r.dpt_unit_approval
                        ? JSON.parse(r.dpt_unit_approval)
                        : r.dpt_unit_approval;
                    r.it_approval = r.it_approval
                        ? JSON.parse(r.it_approval)
                        : r.it_approval;
                    return r;
                })
            };
        } else {
            state.myEquipmentRequests = data;
        }
    },
    addMyEquipmentRequest: (state, data) => {
        state.myEquipmentRequests.data = [
            {
                ...data,
                details: JSON.parse(data.details),
                dpt_unit_approval: data.details
                    ? JSON.parse(data.dpt_unit_approval)
                    : data.dpt_unit_approval,
                it_approval: data.it_approval
                    ? JSON.parse(data.it_approval)
                    : data.it_approval
            },
            ...state.myEquipmentRequests.data
        ];
        state.myEquipmentRequests.to = state.myEquipmentRequests.to + 1;
        state.myEquipmentRequests.total = state.myEquipmentRequests.total + 1;
    },
    updateMyEquipmentRequest: (state, data) => {
        state.myEquipmentRequests.data.splice(
            state.myEquipmentRequests.data.findIndex(r => r.id === data.id),
            1,
            {
                ...data,
                details: JSON.parse(data.details),
                dpt_unit_approval: data.details
                    ? JSON.parse(data.dpt_unit_approval)
                    : data.dpt_unit_approval,
                it_approval: data.it_approval
                    ? JSON.parse(data.it_approval)
                    : data.it_approval
            }
        );
    },
    addEquipmentRequests: (state, data) => {
        if (!data) return state.equipmentRequests;
        if (data.data.length) {
            state.equipmentRequests = {
                ...data,
                data: data.data.map(r => {
                    r.details = JSON.parse(r.details);
                    r.dpt_unit_approval = r.dpt_unit_approval
                        ? JSON.parse(r.dpt_unit_approval)
                        : r.dpt_unit_approval;
                    r.it_approval = r.it_approval
                        ? JSON.parse(r.it_approval)
                        : r.it_approval;
                    return r;
                })
            };
        } else {
            state.equipmentRequests = data;
        }
    },
    updateEquipmentRequest: (state, data) => {
        state.equipmentRequests.data.splice(
            state.equipmentRequests.data.findIndex(r => r.id === data.id),
            1,
            {
                ...data,
                details: JSON.parse(data.details),
                dpt_unit_approval: data.details
                    ? JSON.parse(data.dpt_unit_approval)
                    : data.dpt_unit_approval,
                it_approval: data.it_approval
                    ? JSON.parse(data.it_approval)
                    : data.it_approval
            }
        );
    },
    deleteEquipmentRequest: (state, id) => {
        state.equipmentRequests.data.splice(
            state.equipmentRequests.data.findIndex(r => r.id === id),
            1
        );
        state.equipmentRequests.to = state.equipmentRequests.to - 1;
        state.equipmentRequests.total = state.equipmentRequests.total - 1;
    },
    deleteEquipmentRequests: (state, ids) => {
        ids.forEach(id => {
            state.equipmentRequests.data.splice(
                state.equipmentRequests.data.findIndex(r => r.id === id),
                1
            );
            state.equipmentRequests.to = state.equipmentRequests.to - 1;
            state.equipmentRequests.total = state.equipmentRequests.total - 1;
        });
    },

    addEquipmentAllocations: (state, data) => {
        if (!data) return state.equipmentAllocations;
        if (data.data.length) {
            state.equipmentAllocations = {
                ...data,
                data: data.data.map(a => {
                    a.dpt_unit_approval = a.dpt_unit_approval
                        ? JSON.parse(a.dpt_unit_approval)
                        : a.dpt_unit_approval;
                    a.staff_approval = a.staff_approval
                        ? JSON.parse(a.staff_approval)
                        : a.staff_approval;
                    return a;
                })
            };
        } else {
            state.equipmentAllocations = data;
        }
    },
    addMyEquipmentAllocations: (state, data) => {
        if (!data) return state.myEquipmentAllocations;
        if (data.data.length) {
            state.myEquipmentAllocations = {
                ...data,
                data: data.data.map(a => {
                    a.dpt_unit_approval = a.dpt_unit_approval
                        ? JSON.parse(a.dpt_unit_approval)
                        : a.dpt_unit_approval;
                    a.staff_approval = a.staff_approval
                        ? JSON.parse(a.staff_approval)
                        : a.staff_approval;
                    return a;
                })
            };
        } else {
            state.myEquipmentAllocations = data;
        }
    },

    addEquipmentAllocation: (state, data) => {
        state.equipmentAllocations.data = [
            {
                ...data,
                dpt_unit_approval: data.dpt_unit_approval
                    ? JSON.parse(data.dpt_unit_approval)
                    : data.dpt_unit_approval,
                staff_approval: data.staff_approval
                    ? JSON.parse(data.staff_approval)
                    : data.staff_approval
            },
            ...state.equipmentAllocations.data
        ];
        state.equipmentAllocations.to = state.equipmentAllocations.to + 1;
        state.equipmentAllocations.total = state.equipmentAllocations.total + 1;
    },

    updateMyEquipmentAllocation: (state, data) => {
        state.myEquipmentAllocations.data.splice(
            state.myEquipmentAllocations.data.findIndex(r => r.id === data.id),
            1,
            {
                ...data,
                dpt_unit_approval: data.details
                    ? JSON.parse(data.dpt_unit_approval)
                    : data.dpt_unit_approval,
                staff_approval: data.staff_approval
                    ? JSON.parse(data.staff_approval)
                    : data.staff_approval
            }
        );
    },
    updateEquipmentAllocation: (state, data) => {
        state.equipmentAllocations.data.splice(
            state.equipmentAllocations.data.findIndex(r => r.id === data.id),
            1,
            {
                ...data,
                dpt_unit_approval: data.details
                    ? JSON.parse(data.dpt_unit_approval)
                    : data.dpt_unit_approval,
                staff_approval: data.staff_approval
                    ? JSON.parse(data.staff_approval)
                    : data.staff_approval
            }
        );
    },
    deleteEquipmentAllocation: (state, id) => {
        state.equipmentAllocations.data.splice(
            state.equipmentAllocations.data.findIndex(r => r.id === id),
            1
        );
        state.equipmentAllocations.to = state.equipmentAllocations.to - 1;
        state.equipmentAllocations.total = state.equipmentAllocations.total - 1;
    },
    deleteEquipmentAllocations: (state, ids) => {
        ids.forEach(id => {
            state.equipmentAllocations.data.splice(
                state.equipmentAllocations.data.findIndex(r => r.id === id),
                1
            );
            state.equipmentAllocations.to = state.equipmentAllocations.to - 1;
            state.equipmentAllocations.total =
                state.equipmentAllocations.total - 1;
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
