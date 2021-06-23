<template>
  <div class="staff__profile">
    <b-tabs type="is-toggle" size="" :animated="false" expanded>
      <b-tab-item label="Personal Details">
        <PersonalDetails />
      </b-tab-item>
      <b-tab-item label="Contact Details">
        <ContactDetails />
      </b-tab-item>
      <b-tab-item label="Emergency Contacts">
        <EmergencyContactDetails />
      </b-tab-item>
      <b-tab-item label="Job">
        <JobDetails />
      </b-tab-item>
      <b-tab-item label="Qualifications">
        <QualificationDetails />
      </b-tab-item>
      <b-tab-item label="Report-to">
        <section class="b__collapse__section">
          <div class="card">
            <!-- <header class="card-header">
              <p class="card-header-title">Assigned Supervisors</p>
            </header> -->
            <div class="profile-detail-bar">
              <p class="p-text">Assigned Supervisors</p>
            </div>
            <div class="card-content">
              <div class="content">
                <b-table :data="reports">
                  <b-table-column
                    field="id"
                    label="ID"
                    width="40"
                    sortable
                    numeric
                    v-slot="props"
                    >{{ props.row.id }}</b-table-column
                  >
                  <b-table-column
                    field="name"
                    label="Name"
                    sortable
                    v-slot="props"
                    >{{ props.row.name }}</b-table-column
                  >
                  <b-table-column field="actions" label="Actions">
                    <div class="buttons">
                      <b-button
                        class="is-info is-light"
                        size="is-small"
                        pack="fas"
                        icon-right="pen"
                        >Edit</b-button
                      >
                      <b-button
                        class="is-danger is-light"
                        size="is-small"
                        pack="fas"
                        icon-right="trash"
                        >Delete</b-button
                      >
                    </div>
                  </b-table-column>
                </b-table>
              </div>
            </div>
          </div>
        </section>
        <section class="b__collapse__section">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Assigned Assintant Supervisors</p>
            </header>
            <div class="card-content">
              <div class="content">
                <b-table :data="reports">
                  <b-table-column
                    field="id"
                    label="ID"
                    width="40"
                    sortable
                    numeric
                    v-slot="props"
                    >{{ props.row.id }}</b-table-column
                  >
                  <b-table-column
                    field="name"
                    label="Name"
                    sortable
                    v-slot="props"
                    >{{ props.row.name }}</b-table-column
                  >
                  <b-table-column field="actions" label="Actions">
                    <div class="buttons">
                      <b-button
                        class="is-info is-light"
                        size="is-small"
                        pack="fas"
                        icon-right="pen"
                        >Edit</b-button
                      >
                      <b-button
                        class="is-danger is-light"
                        size="is-small"
                        pack="fas"
                        icon-right="trash"
                        >Delete</b-button
                      >
                    </div>
                  </b-table-column>
                </b-table>
              </div>
            </div>
          </div>
        </section>
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
export default {
  name: "ProfileComponent",
  components: {
    PersonalDetails,
    ContactDetails,
    EmergencyContactDetails,
    JobDetails,
    QualificationDetails,
  },
  computed: {
    ...mapGetters(["getProfile"]),
    // jobCategories() {
    //   let cats = [];
    //   this.getJobs.forEach((job) => (cats = JSON.parse(job.categories)));
    //   return cats;
    // },
    // jobTitles() {
    //   let titles = [];
    //   this.getJobs.forEach((job) => (titles = JSON.parse(job.titles)));
    //   return titles;
    // },
    // jobEmpStatus() {
    //   let status = [];
    //   this.getJobs.forEach(
    //     (job) => (status = JSON.parse(job.employment_status))
    //   );
    //   return status;
    // },
  },
  created() {
    // this.fetchJobs();
    // this.fetchBranches();
    // this.fetchDepartments();
    // this.setPersonalDetails();
    // this.setContactDetails();
    // this.setJob();
  },
  data() {
    return {
      reports: [{ id: "1", name: "PIM Report" }],
    };
  },
  methods: {
    ...mapActions([
      "dispatchAuthUser",
      "dispatchProfile",
      "fetchJobs",
      "fetchBranches",
      "fetchDepartments",
      "fetchAuthUser",
      "fetchProfile",
    ]),
  },
};
</script>

<style lang="scss" scoped>
$datepicker-today-border: red !important;
</style>
