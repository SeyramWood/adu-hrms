<template>
  <section class="content__split">
    <div class="content__split__left">
      <div class="content__split__left__panel">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="profile__sidebar">
                <p>
                  <b-icon pack="fas" icon="phone"></b-icon>
                  <span>{{
                    getProfile.contact_details
                      ? getProfile.contact_details.mobile
                      : ""
                  }}</span>
                </p>
                <p>
                  <b-icon pack="fas" icon="envelope"></b-icon>
                  <span>{{
                    getProfile.contact_details
                      ? getProfile.contact_details.workEmail
                      : ""
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="profile__sidebar">
                <p>
                  <b-icon pack="fas" icon="id-card"></b-icon>
                  <span>{{
                    getProfile.personal_details
                      ? getProfile.personal_details.staffId
                      : ""
                  }}</span>
                </p>
                <p>
                  <b-icon pack="fas" icon="umbrella"></b-icon>
                  <span>{{ getUserDepartment(getProfile) }}</span>
                </p>
                <p>
                  <b-icon pack="fas" icon="briefcase"></b-icon>
                  <span>{{ getEmpStatus(getProfile) }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="profile__sidebar">
                <p><strong>Hire Date</strong></p>
                <p>
                  <b-icon pack="fas" icon="calendar-alt"></b-icon>
                  <span>{{
                    formatDate(getProfile.job ? getProfile.job.startDate : "")
                  }}</span>
                </p>
                <p>
                  <b-icon pack="fas" icon="clock"></b-icon>
                  <span>{{
                    formatTime(getProfile.job ? getProfile.job.startDate : "")
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content__split__right">
      <tabs stickyTab="content__split__right__sticky" :tabIndex="tabIndex">
        <tab :label="$t('app.profile')">
          <ProfileComponent />
        </tab>
        <!-- <tab label="My Leave" v-if="!regex.test($page.url)">
          <MyLeaveComponent />
        </tab>
        <tab label="Entitlements" v-if="!regex.test($page.url)">
          <MyEntitlementComponent />
        </tab> -->
        <tab :label="$tc('app.configuration', 2)" v-if="!regex.test($page.url)">
          <ConfigurationComponent />
        </tab>
      </tabs>
    </div>
  </section>
</template>

<script>
import Dashboard from "../components/Dashboard";
import Tab from "../components/Tab";
import Tabs from "../components/Tabs";
import ProfileComponent from "../components/ess/ProfileComponent";
import MyLeaveComponent from "../components/ess/MyLeaveComponent";
import MyEntitlementComponent from "../components/ess/MyEntitlementComponent";
import ConfigurationComponent from "../components/ess/ConfigurationComponent";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ESS",
  metaInfo() {
    return {
      title: `Employee Self Service`,
    };
  },
  components: {
    Tab,
    Tabs,
    ProfileComponent,
    MyLeaveComponent,
    MyEntitlementComponent,
    ConfigurationComponent,
  },
  layout: Dashboard,
  props: {
    profile: { require: true, type: Object },
    jobCategories: Array,
    jobTitles: Array,
    employmentStatuses: Array,
    branches: Array,
    departments: Array,
    units: Array,
    positions: Array,
    supervisors: Array,
    hods: Array,
    managers: Array,
    reportTo: Array,
    reportToMe: Array,
    directorates: Array,
  },
  computed: {
    ...mapGetters([
      "getProfile",
      "getJobCategories",
      "getJobTitles",
      "getEmploymentStatus",
      "getDepartments",
      "getUnits",
      "getCountries",
    ]),
  },
  beforeMount() {},
  created() {
    this.dispatchProfile({ payload: this.profile });
    this.dispatchJobCategory({ payload: this.jobCategories });
    this.dispatchJobTitle({ payload: this.jobTitles });
    this.dispatchEmploymentStatus({ payload: this.employmentStatuses });
    this.dispatchDepartment({ payload: this.departments });
    this.dispatchUnit({ payload: this.units });
    this.dispatchPosition({ payload: this.positions });
    this.dispatchProfile({
      type: "ADD_MY_LEADERS",
      payload: {
        supervisors: this.supervisors,
        hods: this.hods,
        reportTo: this.reportTo,
        reportToMe: this.reportToMe,
        directorates: this.directorates,
      },
    });
    this.getAllCountries();
  },
  data() {
    return {
      tabIndex: 0,
      regex: new RegExp("^/dashboard/ess/[0-9]+/[a-z-]*$"),
      countries: [],
    };
  },
  methods: {
    ...mapActions([
      "dispatchProfile",
      "dispatchJobCategory",
      "dispatchJobTitle",
      "dispatchEmploymentStatus",
      "dispatchDepartment",
      "dispatchUnit",
      "dispatchPosition",
      "dispatchMyLeaders",
      "dispatchCountry",
    ]),
    getUserDepartment(profile) {
      if (profile.job && profile.job.department) {
        const result = this.getDepartments.find(
          (b) => b.id === parseInt(profile.job.department)
        );
        return result.name;
      }
      if (profile.job && profile.job.unit) {
        const result = this.getUnits.find(
          (b) => b.id === parseInt(profile.job.unit)
        );
        return result.name;
      }
      return "";
    },
    getEmpStatus(profile) {
      if (profile.job) {
        const status = this.getEmploymentStatus.find(
          (b) => b.id === parseInt(profile.job.employmentStatus)
        );
        return status.status;
      }
      return "";
    },
    async getAllCountries() {
      if (!localStorage.getItem("countries")) {
        localStorage.setItem("countries", JSON.stringify([]));
      }
      if (JSON.parse(localStorage.getItem("countries")).length === 0) {
        try {
          const data = await this.$axios.get(
            `https://restcountries.eu/rest/v2/all`
          );
          localStorage.setItem("countries", JSON.stringify(data.data));
        } catch (error) {}
      } else {
        this.dispatchCountry({
          payload: JSON.parse(localStorage.getItem("countries")),
        });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
</style>