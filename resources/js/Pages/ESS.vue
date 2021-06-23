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
                  <span>{{ getBranch(getProfile) }}</span>
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
        <tab label="My Leave" v-if="!regex.test($page.url)">
          <MyLeaveComponent />
        </tab>
        <tab label="Entitlements" v-if="!regex.test($page.url)">
          <MyEntitlementComponent />
        </tab>
        <tab label="Profile">
          <ProfileComponent />
        </tab>
        <tab label="Configurations" v-if="!regex.test($page.url)">
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
  },
  computed: {
    ...mapGetters([
      "getProfile",
      "getJobCategories",
      "getJobTitles",
      "getEmploymentStatus",
      "getBranches",
      "getDepartments",
    ]),
  },
  created() {
    this.dispatchProfile({ payload: this.profile });
    this.dispatchJobCategory({ payload: this.jobCategories });
    this.dispatchJobTitle({ payload: this.jobTitles });
    this.dispatchEmploymentStatus({ payload: this.employmentStatuses });
    this.dispatchBranch({ payload: this.branches });
    this.dispatchDepartment({ payload: this.departments });
  },
  data() {
    return {
      tabIndex: 0,
      regex: new RegExp("^/dashboard/ess/[0-9]+/[a-z-]*$"),
    };
  },
  methods: {
    ...mapActions([
      "dispatchProfile",
      "dispatchJobCategory",
      "dispatchJobTitle",
      "dispatchEmploymentStatus",
      "dispatchBranch",
      "dispatchDepartment",
    ]),
    getBranch(profile) {
      if (profile.job) {
        const branch = this.getDepartments.find(
          (b) => b.id === parseInt(profile.job.department)
        );
        return branch.name;
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
  },
};
</script>

<style lang="sass" scoped>
</style>