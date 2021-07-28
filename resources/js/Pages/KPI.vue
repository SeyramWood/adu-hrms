<template>
  <section class="main__content">
    <tabs stickyTab="main__content__sticky" :tabIndex="0">
      <tab label="Appraisal">
        <Appraisal />
      </tab>
      <tab label="Configurations" v-if="isPermission('kpi_configuration')">
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
    departments: Array,
    units: Array,
    jobTitles: Array,
    roles: Array,
  },
  created() {
    this.dispatchKPI({ payload: 1 });
    this.dispatchRole({ payload: this.roles });
    this.dispatchUnit({ payload: this.units });
    this.dispatchDepartment({ payload: this.departments });
    this.dispatchJobTitle({ payload: this.jobTitles });
  },
  methods: {
    ...mapActions([
      "dispatchKPI",
      "dispatchUserAccount",
      "dispatchUnit",
      "dispatchDepartment",
      "dispatchJobTitle",
      "dispatchRole",
    ]),
  },
};
</script>

<style lang="sass" scoped>
</style>