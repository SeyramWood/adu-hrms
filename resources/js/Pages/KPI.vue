<template>
  <section class="main__content">
    <tabs stickyTab="main__content__sticky" :tabIndex="0">
      <tab label="Appraisal">
        <Appraisal />
      </tab>
      <tab label="Configurations">
        <ManageAppraisal />
      </tab>
    </tabs>
  </section>
</template>


<script>
import Dashboard from "../components/Dashboard";
import Tab from "../components/Tab";
import Tabs from "../components/Tabs";
import { mapGetters, mapActions } from "vuex";
import ManageAppraisal from "../components/kpi/ManageAppraisal";
import Appraisal from "../components/kpi/Appraisal";
export default {
  name: "KPI",
  metaInfo() {
    return {
      title: `Key Performance Idicators`,
    };
  },
  components: {
    Tab,
    Tabs,
    ManageAppraisal,
    Appraisal,
  },
  layout: Dashboard,
  props: {
    branches: Array,
    departments: Array,
    jobTitles: Array,
    rolePermissions: Object,
  },
  created() {
    this.dispatchKPI({ payload: 1 });
    this.dispatchBranch({ payload: this.branches });
    this.dispatchDepartment({ payload: this.departments });
    this.dispatchUserAccount({
      type: "ADD_ROLE_PERMISSION",
      payload: JSON.parse(this.rolePermissions.role_permission),
    });
    this.dispatchJobTitle({ payload: this.jobTitles });
  },
  methods: {
    ...mapActions([
      "dispatchKPI",
      "dispatchUserAccount",
      "dispatchBranch",
      "dispatchDepartment",
      "dispatchJobTitle",
    ]),
  },
};
</script>

<style lang="sass" scoped>
</style>