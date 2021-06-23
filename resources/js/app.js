require("./bootstrap");
import i18n from "./i18n";
import { App, plugin } from "@inertiajs/inertia-vue";
import Vue from "vue";
import { InertiaProgress } from "@inertiajs/progress";
import dropper from "dropper.mood";
import "dropper.mood/dist/dropper.css";
import axios from "axios";
import store from "./store";
import Buefy from "buefy";
import VueMeta from "vue-meta";
import VueConfirmDialog from "vue-confirm-dialog";

import "buefy/dist/buefy.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { DateTime, Interval, Duration } from "luxon";
// import Interval from "luxon/src/interval.js";

InertiaProgress.init();

Vue.use(plugin);
library.add(fas);
Vue.component("vue-fontawesome", FontAwesomeIcon);
Vue.use(Buefy, {
    defaultIconComponent: "vue-fontawesome",
    defaultIconPack: "fas"
});
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
});
Vue.use(VueConfirmDialog);

Vue.component("vue-confirm-dialog", VueConfirmDialog.default);
Vue.use(dropper);

Object.defineProperty(Vue.prototype, "$luxon", { value: DateTime });
Object.defineProperty(Vue.prototype, "$axios", { value: axios });

Vue.mixin({
    computed: {
        getYears() {
            const now = new Date().getUTCFullYear();
            return Array(now - (now - 91))
                .fill("")
                .map((v, idx) => now - idx);
        }
    },
    data() {
        return {
            axiosConfig: {
                headers: { "content-type": "multipart/form-data" }
            },
            defaultHost: process.env.MIX_APP_URL,
            initEditor: {
                plugins: [
                    "print preview searchreplace autolink lists link image paste help wordcount"
                ],
                toolbar:
                    "undo redo | formatselect | bold italic strikethrough forecolor backcolor link | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help"
            }
        };
    },
    methods: {
        isUserRole(role) {
            return this.$page.props.userRoles.includes(role) && true;
        },
        roleOrUserPermission(role, profileId) {
            if (
                this.isUserRole(role) ||
                profileId === this.$page.props.authUser.id
            ) {
                return true;
            }
            return false;
        },
        formatDate(str) {
            const date = this.$luxon.fromISO(str).toFormat("MMMM dd, y");
            if (date === "Invalid DateTime") return "";
            return date;
        },
        formatDate2(str) {
            const date = this.$luxon.fromISO(str).toFormat("MMM dd, y");
            if (date === "Invalid DateTime") return "";
            return date;
        },
        formatTime(str) {
            const time = this.$luxon.fromISO(str).toFormat("hh:mm a");
            if (time === "Invalid DateTime") return "";
            return time;
        },
        formatDurationInHours(start, end) {
            const duration = Interval.fromDateTimes(
                this.$luxon.fromJSDate(start),
                this.$luxon.fromJSDate(end)
            )
                .toDuration(["hours", "minutes", "seconds"])
                .toObject();
            if (Object.keys(duration).length === 0) return "";
            return `${
                duration.hours !== 0
                    ? duration.hours === 1
                        ? duration.hours + " hour"
                        : duration.hours + " hours"
                    : ""
            } ${
                duration.minutes !== 0
                    ? duration.minutes === 1
                        ? duration.minutes + " minute"
                        : duration.minutes + " minutes"
                    : ""
            }`;
        },
        toast(message, type = "") {
            this.$buefy.toast.open({
                duration: 5000,
                message: message,
                position: "is-top-right",
                type: type
            });
        },
        snackbar(message, type = "") {
            this.$buefy.snackbar.open({
                duration: 5000,
                message: message,
                type: type,
                actionText: null,
                position: "is-top-right"
            });
        },
        leaveRequestStatus(status) {
            switch (status.toLowerCase()) {
                case "approved":
                    return "is-success";
                case "cancel":
                    return "is-danger";
                default:
                    return "is-info";
            }
        },
        openDropper(ref) {
            const dropper = this.$refs[ref];
            if (dropper) {
                dropper.open();
            }
        },
        closeDropper(ref) {
            const dropper = this.$refs[ref];
            if (dropper) {
                dropper.close();
            }
        }
    }
});

const el = document.getElementById("app");

new Vue({
    i18n,
    store,
    render: h =>
        h(App, {
            props: {
                initialPage: JSON.parse(el.dataset.page),
                resolveComponent: name =>
                    import(`./Pages/${name}`).then(module => module.default)
            }
        })
}).$mount(el);
