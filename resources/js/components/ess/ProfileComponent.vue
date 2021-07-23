<template>
  <div class="staff__profile">
    <b-tabs type="is-toggle" size="" :animated="false" expanded>
      <b-tab-item :label="$t('app.personal_details')">
        <PersonalDetails />
      </b-tab-item>
      <b-tab-item :label="$t('app.contact_details')">
        <ContactDetails />
      </b-tab-item>
      <b-tab-item :label="$t('app.emergency_contacts')">
        <EmergencyContactDetails />
      </b-tab-item>
      <b-tab-item :label="$t('app.job')">
        <JobDetails />
      </b-tab-item>
      <b-tab-item :label="$tc('app.qualification', 2)">
        <QualificationDetails />
      </b-tab-item>
      <b-tab-item :label="$t('app.report_to1')">
        <ReportToDetails />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PersonalDetails from "./profile/PersonalDetails";
import ContactDetails from "./profile/ContactDetails";
import EmergencyContactDetails from "./profile/EmergencyContactDetails";
import JobDetails from "./profile/JobDetails";
import QualificationDetails from "./profile/QualificationDetails";
import ReportToDetails from "./profile/ReportToDetails";
export default {
  name: "ProfileComponent",
  components: {
    PersonalDetails,
    ContactDetails,
    EmergencyContactDetails,
    JobDetails,
    QualificationDetails,
    ReportToDetails,
  },
  computed: {},
  beforeMount() {},
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
$datepicker-today-border: red !important;
</style>
