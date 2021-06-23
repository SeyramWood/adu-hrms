use Inertia\Inertia;
<template>
  <section class="main__content">
    <tabs stickyTab="main__content__sticky">
      <tab label="User Management">
        {{ test }}
        <b-button @click="changeLang('fr')">French</b-button
        ><b-button @click="changeLang('ar')">Arabic</b-button>
        <ManageUserComponent />
      </tab>
      <tab label="Job">
        <JobComponent />
      </tab>
      <tab label="Shift Management">
        <WorkShiftComponent />
      </tab>
      <tab label="Organization">
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
    branches: Array,
    departments: Array,
    positions: Array,
    rolePermissions: Object,
    staffCount: Object,
    workShifts: Array,
  },
  computed: {},
  created() {
    this.dispatchUserAccount({ payload: 1 });
    this.dispatchUserAccount({
      type: "ADD_ROLE_PERMISSION",
      payload: JSON.parse(this.rolePermissions.role_permission),
    });
    this.dispatchJobCategory({ payload: this.jobCategories });
    this.dispatchJobTitle({ payload: this.jobTitles });
    this.dispatchEmploymentStatus({ payload: this.employmentStatuses });
    this.dispatchBranch({ payload: this.branches });
    this.dispatchDepartment({ payload: this.departments });
    this.dispatchPosition({ payload: this.positions });
    this.dispatchStaffCount({ payload: this.staffCount });
    this.dispatchWorkShift({ payload: this.workShifts });

    this.$axios.get("/api/bio").then((res) => {
      this.test = res.data.data;
      // window.location.reload();
      // console.log(res.data);
    });
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
      "dispatchJobCategory",
      "dispatchJobTitle",
      "dispatchEmploymentStatus",
      "dispatchBranch",
      "dispatchDepartment",
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