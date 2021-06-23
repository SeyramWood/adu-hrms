<template>
  <section>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <article class="table__header">
            <h5 class="table__header__title">Shifts</h5>
            <section class="table__header__lists">
              <div
                class="table__header__lists__item"
                @click="openAssignShiftModal()"
              >
                <b-tooltip label="Assign staff to shit." type="is-dark">
                  <b-icon class="icon--wrapper" icon="users"></b-icon>
                </b-tooltip>
              </div>
              <div class="table__header__lists__item" :id="`search-shift`">
                <b-tooltip label="Search shifts" type="is-dark">
                  <b-icon class="icon--wrapper" icon="search"></b-icon>
                </b-tooltip>
              </div>
              <div class="table__header__lists__item" :id="`filter-shift`">
                <b-tooltip label="Filter shifts." type="is-dark">
                  <b-icon class="icon--wrapper" icon="filter"></b-icon>
                </b-tooltip>
              </div>
            </section>
          </article>
        </header>
        <div class="card-content">
          <div class="content">
            <b-table
              :data="[]"
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
                      @click="getStaffToAssign(props.row.id)"
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

    <dropper
      join="#search-shift"
      ref="searchDropper"
      @esc-keydown="closeDropper('searchDropper')"
      @other-area-clicked="closeDropper('searchDropper')"
      class="dropper"
      :z-index="9999"
    >
      <form>
        <b-input
          placeholder="Search..."
          type="search"
          icon="search"
          class="is-info"
          expanded
        >
        </b-input>
      </form>
    </dropper>
    <dropper
      join="#filter-shift"
      ref="filterDropper"
      @esc-keydown="closeDropper('filterDropper')"
      @other-area-clicked="closeDropper('filterDropper')"
      class="dropper"
      :z-index="9999"
    >
      <form>
        <b-input
          placeholder="Search... filter"
          type="search"
          icon="search"
          class="is-info"
          expanded
        >
        </b-input>
      </form>
    </dropper>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AssignShiftModal from "./modal/AssignShiftModal";
export default {
  name: "ShiftListComponent",
  components: { AssignShiftModal },
  computed: {
    ...mapGetters([
      "getStaffList",
      "getJobTitles",
      "getEmploymentStatus",
      "getBranches",
      "getDepartments",
    ]),
  },
  watch: {
    staffToAssignId(v) {
      console.log(v);
    },
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
    openAssignShiftModal() {
      this.$buefy.modal.open({
        parent: this,
        component: AssignShiftModal,
        hasModalCard: true,
        trapFocus: true,
        canCancel: ["escape"],
      });
    },

    abc(a) {
      console.log(a);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>