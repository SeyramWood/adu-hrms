
<template>
  <section class="main__content">
    <tabs stickyTab="main__content__sticky">
      <tab label="User Management" v-if="isPermission('user_management')">
        <ManageUserComponent />
      </tab>
      <tab label="Job" v-if="isPermission('job')">
        <JobComponent />
      </tab>
      <!-- <tab label="Shift Management" v-if="isPermission('shift_management')">
        <WorkShiftComponent />
      </tab> -->
      <tab label="Organization" v-if="isPermission('organization')">
        <OrganizationComponent />
      </tab>
    </tabs>
  </section>
</template>

<script>
import Dashboard from "../components/Dashboard";
import Tab from "../components/Tab";
import Tabs from "../components/Tabs";
import { mapGetters, mapActions } from "vuex";
import ManageUserComponent from "../components/admin/ManageUserComponent";
import JobComponent from "../components/admin/JobComponent";
import WorkShiftComponent from "../components/admin/WorkShiftComponent";
import OrganizationComponent from "../components/admin/OrganizationComponent";
import { Inertia } from "@inertiajs/inertia";
export default {
  name: "Administration",
  metaInfo() {
    return {
      title: `Admin`,
    };
  },
  components: {
    Tab,
    Tabs,
    ManageUserComponent,
    JobComponent,
    WorkShiftComponent,
    OrganizationComponent,
  },
  layout: Dashboard,
  props: {
    authUser: Object,
    userRoles: Array,
    users: Object,
    jobCategories: Array,
    jobTitles: Array,
    employmentStatuses: Array,
    departments: Array,
    units: Array,
    positions: Array,
    staffCount: Object,
    workShifts: Array,
    roles: Array,
    permissions: Object,
  },
  computed: {},
  created() {
    this.dispatchUserAccount({ payload: 1 });
    this.dispatchRole({ payload: this.roles });
    this.dispatchRole({ type: "ADD_PERMISSIONS", payload: this.permissions });
    this.dispatchJobCategory({ payload: this.jobCategories });
    this.dispatchJobTitle({ payload: this.jobTitles });
    this.dispatchEmploymentStatus({ payload: this.employmentStatuses });
    this.dispatchDepartment({ payload: this.departments });
    this.dispatchUnit({ payload: this.units });
    this.dispatchPosition({ payload: this.positions });
    this.dispatchStaffCount({ payload: this.staffCount });
    this.dispatchWorkShift({ payload: this.workShifts });
  },
  data() {
    return {
      tabIndex: 0,
      test: "",
    };
  },
  methods: {
    ...mapActions([
      "dispatchUserAccount",
      "dispatchRole",
      "dispatchJobCategory",
      "dispatchJobTitle",
      "dispatchEmploymentStatus",
      "dispatchBranch",
      "dispatchDepartment",
      "dispatchUnit",
      "dispatchPosition",
      "dispatchOrgnizationProfile",
      "dispatchStaffCount",
      "dispatchWorkShift",
    ]),

    changeLang(lang) {
      localStorage.setItem("lang", lang);
      window.location.reload();
    },
  },
};
</script>