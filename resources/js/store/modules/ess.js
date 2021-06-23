import axios from "axios";

const state = {
    authUser: {},
    profile: {},
    personalDetails: [],
    personalDetailsAttachments: [],
    contactDetails: [],
    emergencyContacts: [],
    userJob: [],
    workExperience: [],
    education: [],
    skills: [],
    languages: [],
    qualificationAttachments: []
};

const getters = {
    getAuthUser: state => state.authUser,
    getProfile: state => state.profile,
    getPersonalDetails: state => state.personalDetails,
    getPersonalDetailsAttachments: state => state.personalDetailsAttachments,
    getContactDetails: state => state.contactDetails,
    getEmergencyContacts: state => state.emergencyContacts,
    getUserJob: state => state.userJob,
    getWorkExperience: state => state.workExperience,
    getEducation: state => state.education,
    getSkills: state => state.skills,
    getLanguages: state => state.languages,
    getQualificationAttachments: state => state.qualificationAttachments
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
                case "ADD_SKILL":
                    state.profile.qualifications.skills = payload;
                    break;
                case "ADD_LANGUAGE":
                    state.profile.qualifications.languages = payload;
                    break;
                case "ADD_ATTACHMENT":
                    state.profile.qualifications.attachments = payload;
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
    setWorkExperience: (state, data) => (state.workExperience = data),
    setEducation: (state, data) => (state.education = data),
    setSkills: (state, data) => (state.skills = data),
    setLanguages: (state, data) => (state.languages = data),
    setQualificationAttachments: (state, data) =>
        (state.qualificationAttachments = data)
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};
