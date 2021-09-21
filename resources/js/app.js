require("./bootstrap");
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

import "../sass/buefy.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { DateTime, Interval, Duration } from "luxon";
// import Interval from "luxon/src/interval.js";
import VueLang from "@eli5/vue-lang-js";
import translations from "./lang.js";
import InfiniteLoading from "vue-infinite-loading";

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

Vue.use(VueLang, {
    messages: translations, // Provide locale file
    locale: "en", // Set locale
    fallback: "en" // Set fallback lacale
});
Vue.use(InfiniteLoading, {
    props: {
        spinner: "spiral"
        /* other props need to configure */
    },
    system: {
        throttleLimit: 30
        /* other settings need to configure */
    }
});
Object.defineProperty(Vue.prototype, "$luxon", { value: DateTime });
Object.defineProperty(Vue.prototype, "$axios", { value: axios });

Vue.mixin({
    computed: {
        getYears() {
            const now = new Date().getUTCFullYear() + 29;
            return Array(now - (now - 99))
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
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help"
            }
        };
    },
    methods: {
        isPermission(permission) {
            return (
                this.$page.props.userPermissions.includes(permission) && true
            );
        },
        userOrPermission(permission = null, profileId = null) {
            if (
                this.isPermission(permission) ||
                profileId === this.$page.props.authUser.id
            ) {
                return true;
            }
            return false;
        },
        anyPermission(...rest) {
            const intersection = rest.filter(x =>
                this.$page.props.userPermissions.includes(x)
            );
            return intersection.length && true;
        },
        arrayIntersec(arr1, arr2) {
            const intersec = arr1.filter(x => arr2.includes(x));
            return intersec.length && true;
        },
        arrayDiff(arr1, arr2) {
            return arr1.filter(x => !arr2.includes(x));
        },
        isNull(el) {
            if (el === "null" || el === null) {
                return "";
            }
            return el;
        },
        formatMonthYear(str) {
            const date = this.$luxon.fromISO(str).toFormat("MMMM, y");
            if (date === "Invalid DateTime") return "";
            return date;
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
        formatDateTime2(str) {
            const d = this.formatDate2(str);
            const t = this.formatTime(str);
            if (d === "Invalid DateTime" || t === "Invalid DateTime") return "";
            return `${d} ${t}`;
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
