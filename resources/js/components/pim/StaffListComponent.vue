<template>
  <section>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <article class="table__header">
            <h5 class="table__header__title">Staff List</h5>
            <section class="table__header__lists">
              <div class="table__header__lists__item" @click="openQueryForm()">
                <b-tooltip label="Query Staff List." type="is-dark">
                  <b-icon class="icon--wrapper" icon="search"></b-icon>
                </b-tooltip>
              </div>
            </section>
          </article>
        </header>
        <div class="card-content">
          <div class="content">
            <section class="b__collapse__section" v-if="toggleQueryForm">
              <b-collapse
                class="card"
                :open="toggleQueryForm"
                animation="slide"
                aria-id="querystaff"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="querystaff"
                >
                  <p class="card-header-title">
                    <span class="has-text-info">Query Staff</span>
                  </p>

                  <a class="card-header-icon">
                    <b-icon
                      type="is-info"
                      pack="fas"
                      :icon="props.open ? 'angle-down' : 'angle-up'"
                    ></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <form action>
                      <div class="columns">
                        <div class="column is-3">
                          <b-field label="Staff Name" expanded>
                            <b-input size="" expanded></b-input>
                          </b-field>
                        </div>
                        <div class="column is-3">
                          <b-field label="Staff ID" expanded>
                            <b-input size="" expanded></b-input>
                          </b-field>
                        </div>
                        <div class="column is-3">
                          <b-field label="Eployment Status" expanded>
                            <b-select size="is-small" expanded>
                              <option>Full-Time</option>
                              <option>Part-Time</option>
                              <option>Other</option>
                            </b-select>
                          </b-field>
                        </div>
                        <div class="column is-3">
                          <b-field label="Include" expanded>
                            <b-select size="" expanded>
                              <option>Current Staff Only</option>
                              <option>Current and Past Staff Only</option>
                              <option>Past Staff Only</option>
                            </b-select>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-4">
                          <b-field label="Supervisor Name" expanded>
                            <b-select size="" expanded>
                              <option>Ghana</option>
                              <option>Nigeria</option>
                            </b-select>
                          </b-field>
                        </div>
                        <div class="column is-4">
                          <b-field label="Job Title" expanded>
                            <b-select size="" expanded>
                              <option>Ghana</option>
                              <option>Nigeria</option>
                            </b-select>
                          </b-field>
                        </div>
                        <div class="column is-4">
                          <b-field label="Department/Unit" expanded>
                            <b-select size="" expanded>
                              <option>Ghana</option>
                              <option>Nigeria</option>
                            </b-select>
                          </b-field>
                        </div>
                      </div>
                      <hr />
                      <b-field class="buttons">
                        <b-button class="is-success is-light">Search</b-button>
                        <b-button class="is-danger is-light">Cancel</b-button>
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>

            <b-table
              :data="getStaffList"
              :paginated="isPaginated"
              :per-page="perPage"
              :current-page="currentPage"
              :pagination-simple="isPaginationSimple"
              :pagination-position="paginationPosition"
              :default-sort-direction="defaultSortDirection"
              :sort-icon="sortIcon"
              :sort-icon-size="sortIconSize"
              :checked-rows.sync="checkedRows"
              checkable
              hoverable
              default-sort="id"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page"
            >
              <b-table-column
                field="title"
                label="Title"
                sortable
                v-slot="props"
                >{{
                  (props.row.personal_details &&
                    props.row.personal_details.title) ||
                  "N/A"
                }}</b-table-column
              >
              <b-table-column
                field="last_name"
                label="Last Name"
                sortable
                v-slot="props"
                >{{ props.row.personal_details.lastName }}</b-table-column
              >
              <b-table-column
                field="other_name"
                label="Other Names"
                sortable
                v-slot="props"
                >{{
                  `
                  ${
                    (props.row.personal_details &&
                      props.row.personal_details.firstName) ||
                    "N/A"
                  }
                  ${
                    (props.row.personal_details &&
                      props.row.personal_details.middleName) ||
                    ""
                  }
                `
                }}</b-table-column
              >
              <b-table-column
                field="job_title"
                label="Job Title"
                sortable
                v-slot="props"
              >
                <span>{{ getJobTitle(props.row.job) || "N/A" }}</span>
              </b-table-column>

              <b-table-column
                field="employment_status"
                label="Employment Status"
                sortable
                v-slot="props"
              >
                <span>{{ getEmpStatus(props.row.job) || "N/A" }}</span>
              </b-table-column>
              <b-table-column
                field="branch"
                label="Branch"
                sortable
                v-slot="props"
              >
                <span>{{ props.row.branch || "N/A" }}</span>
              </b-table-column>
              <b-table-column
                field="department"
                label="Department"
                sortable
                v-slot="props"
              >
                <span>{{ props.row.department || "N/A" }}</span>
              </b-table-column>
              <b-table-column
                field="supervisor"
                label="Supervisor"
                sortable
                v-slot="props"
              >
                <span>{{ props.row.supervisor || "N/A" }}</span>
              </b-table-column>
              <b-table-column field="actions" label="Actions" v-slot="props">
                <div class="b-tooltips">
                  <b-tooltip label="Assign" size="is-small" type="is-dark">
                    <b-button
                      class="is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="user-cog"
                      @click="openAssignShiftModal(props.row.id)"
                    ></b-button>
                  </b-tooltip>

                  <b-tooltip
                    label="View Profile"
                    size="is-small"
                    type="is-dark"
                  >
                    <inertia-link
                      :href="`/dashboard/ess/${props.row.id}/${props.row.slug}`"
                      preserve-scroll
                      v-if="$page.props.authUser.id !== props.row.id"
                    >
                      <b-button
                        class="is-light"
                        size="is-small"
                        pack="fas"
                        icon-right="eye"
                      ></b-button>
                    </inertia-link>
                    <inertia-link
                      :href="`/dashboard/ess`"
                      preserve-scroll
                      v-else
                    >
                      <b-button
                        class="is-light"
                        size="is-small"
                        pack="fas"
                        icon-right="eye"
                      ></b-button>
                    </inertia-link>
                  </b-tooltip>
                </div>
              </b-table-column>
            </b-table>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AssignmentModal from "./modal/AssignmentModal";
export default {
  name: "StaffListComponent",
  components: { AssignmentModal },
  computed: {
    ...mapGetters([
      "getStaffList",
      "getJobTitles",
      "getEmploymentStatus",
      "getBranches",
      "getDepartments",
    ]),
  },
  mounted() {
    // console.log(this.getStaffList);
  },
  data() {
    return {
      isPaginated: true,
      isPaginationSimple: true,
      paginationPosition: "bottom",
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 50,
      checkedRows: [],

      isModalActive: false,
      staffToAssignId: "",
      toggleQueryForm: false,

      job: {
        title: "",
        specification: "",
        category: "",
        employmentStatus: "",
        department: "",
        branch: "",
        location: "",
        startDate: null,
        endDate: null,
        contractDetails: null,
        contractDetailsAvailable: null,
        contractStatus: null,
        positions: [],
        titleIndex: undefined,
      },
    };
  },
  methods: {
    getStaffToAssign(id) {
      this.staffToAssignId = id;
      this.isModalActive = true;
    },
    openQueryForm() {
      this.toggleQueryForm = !this.toggleQueryForm;
    },
    cancelAddJobTitle() {
      console.log("cancel");
    },
    getEmpStatus(job) {
      if (job) {
        const status = this.getEmploymentStatus.find(
          (s) => s.id === parseInt(job.employmentStatus)
        );
        return status.status || "";
      }
      return "";
    },
    getJobTitle(job) {
      if (job) {
        const t = this.getJobTitles.find((t) => t.id === parseInt(job.title));
        return t.title || "";
      }
      return "";
    },
    openAssignShiftModal(staffToAssignId) {
      this.$buefy.modal.open({
        parent: this,
        component: AssignmentModal,
        hasModalCard: true,
        trapFocus: true,
        canCancel: ["escape"],
        props: { staffToAssignId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>