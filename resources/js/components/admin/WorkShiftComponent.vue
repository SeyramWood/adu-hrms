<template>
  <main>
    <b-tabs type="is-toggle" size="" :animated="false" expanded>
      <b-tab-item label="Shifts">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleWorkShift"
            animation="slide"
            aria-id="addreason"
          >
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
              aria-controls="addreason"
            >
              <p class="card-header-title">
                <b-icon type="is-info" pack="fas" icon="plus"></b-icon>
                <span class="has-text-info"> Add New Add Shift</span>
              </p>
              <a class="card-header-icon">
                <b-icon
                  type="is-info"
                  pack="fas"
                  :icon="props.open ? 'angle-up' : 'angle-down'"
                ></b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <form @submit.prevent="addWorkShift()">
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Shift Name</label>
                    </div>
                    <div class="column is-5">
                      <b-field
                        :type="{
                          'is-danger': workShiftErrors.name.length > 0,
                        }"
                        :message="workShiftErrors.name"
                      >
                        <b-input
                          size=""
                          expanded
                          v-model="workShift.name"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Work Hours</label>
                    </div>
                    <div class="column is-5">
                      <div class="columns">
                        <div class="column is-4">
                          <b-field
                            label="From"
                            :type="{
                              'is-danger': workShiftErrors.from.length > 0,
                            }"
                            :message="workShiftErrors.from"
                          >
                            <b-timepicker
                              size=""
                              v-model="workShift.from"
                              hour-format="12"
                              inline
                              expanded
                            ></b-timepicker>
                          </b-field>
                        </div>
                        <div class="column is-4">
                          <b-field
                            label="To"
                            :type="{
                              'is-danger': workShiftErrors.to.length > 0,
                            }"
                            :message="workShiftErrors.to"
                          >
                            <b-timepicker
                              size=""
                              v-model="workShift.to"
                              hour-format="12"
                              inline
                            ></b-timepicker>
                          </b-field>
                        </div>
                        <div class="column is-4">
                          <b-field
                            label="Duration"
                            :type="{
                              'is-danger': workShiftErrors.duration.length > 0,
                            }"
                            :message="workShiftErrors.duration"
                          >
                            <div class="card">
                              <div class="card-content">
                                <div class="content">
                                  {{ workShift.duration }}
                                </div>
                              </div>
                            </div>
                          </b-field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Week Definition</label>
                    </div>
                    <div class="column is-5">
                      <div class="columns">
                        <div class="column is-12">
                          <div class="workshift__card">
                            <div class="workshift__card__header">
                              <strong>Days</strong>
                              <p
                                class="has-text-danger"
                                v-if="workShiftErrors.days.length > 0"
                              >
                                <span
                                  v-for="(e, i) in workShiftErrors.days"
                                  :key="i"
                                  >{{ e }}</span
                                >
                              </p>
                            </div>
                            <div class="workshift__card__content">
                              <div class="checkbox__lists">
                                <div
                                  class="checkbox__lists__list"
                                  :key="day"
                                  v-for="day in weekDefinitions"
                                >
                                  <label>
                                    <input
                                      type="checkbox"
                                      :value="day"
                                      v-model="workShift.days"
                                    />
                                    <span>{{ day }} </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="columns">
                    <div class="column is-2">
                      <label class="label">Select Staff</label>
                    </div>
                    <div class="column is-3">
                      <b-field label="Available Staff">
                        <div class="workshift__card">
                          <div class="workshift__card__header">
                            <span
                              ><b-checkbox
                                :indeterminate="availableStaff.length > 0"
                                type="is-info"
                              >
                              </b-checkbox
                            ></span>
                            <p>
                              {{ `${availableStaff.length}/20 selected` }}
                            </p>
                          </div>

                          <div class="workshift__card__content">
                            <div class="workshift__card__content__search">
                              <b-input
                                placeholder="Search..."
                                type="search"
                                icon-right="search"
                                icon-pack="fas"
                              >
                              </b-input>
                            </div>

                            <div class="checkbox__lists">
                              <div
                                class="checkbox__lists__list"
                                :key="`${user.id}-a`"
                                v-for="user in getUsers.data"
                              >
                                <label>
                                  <input
                                    type="checkbox"
                                    :value="user"
                                    v-model="availableStaff"
                                  />
                                  <span>{{
                                    `${user.personal_details.title || ""} ${
                                      user.personal_details.firstName
                                    } ${
                                      user.personal_details.middleName || ""
                                    } ${user.personal_details.lastName}`
                                  }}</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-field>
                    </div>
                    <div class="column is-1">
                      <div class="workshift__card__buttons">
                        <b-button
                          class="is-info is-light"
                          pack="fas"
                          icon-right="angle-right"
                          expanded
                          :disabled="availableStaff.length === 0"
                          @click="assignStaff()"
                        ></b-button>

                        <b-button
                          class="is-info is-light"
                          pack="fas"
                          icon-left="angle-left"
                          expanded
                          :disabled="selectedStaff.length === 0"
                          @click="removeStaff()"
                        ></b-button>
                      </div>
                    </div>
                    <div class="column is-3">
                      <b-field label="Selcted Staff">
                        <div class="workshift__card">
                          <div class="workshift__card__header">
                            <span
                              ><b-checkbox
                                :indeterminate="indeterminate"
                                type="is-info"
                                v-model="selectAllSectedStaff"
                              >
                              </b-checkbox
                            ></span>
                            <p>
                              {{
                                ` ${removedStaff.length}/${selectedStaff.length} selected`
                              }}
                            </p>
                          </div>

                          <div class="workshift__card__content">
                            <div class="workshift__card__content__search">
                              <b-input
                                placeholder="Search..."
                                type="search"
                                icon-right="search"
                                icon-pack="fas"
                              >
                              </b-input>
                            </div>

                            <div class="checkbox__lists">
                              <div
                                class="checkbox__lists__list"
                                v-for="user in selectedStaff"
                                :key="`${user.id}-r`"
                              >
                                <label>
                                  <input
                                    type="checkbox"
                                    :value="user"
                                    v-model="removedStaff"
                                  />
                                  <span>{{
                                    `${user.personal_details.title || ""}${
                                      user.personal_details.firstName
                                    } ${
                                      user.personal_details.middleName || ""
                                    } ${user.personal_details.lastName}`
                                  }}</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-field>
                    </div>
                  </div> -->
                  <hr />
                  <b-field class="buttons">
                    <button class="button is-success is-light">
                      {{ isSubmittingWorkShift ? "Submitting..." : "Add" }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="cancelWorkShiftForm()"
                      >Cancel</b-button
                    >
                  </b-field>
                </form>
              </div>
            </div>
          </b-collapse>
        </section>
        <section class="b__collapse__section">
          <div class="card">
            <header class="card-header">
              <article class="table__header">
                <h5 class="table__header__title">Shift List</h5>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="selectedWorkShifts.length > 0 ? false : true"
                  >
                    <template #trigger="{ active }">
                      <b-button
                        type="is-info is-light"
                        label="Actions"
                        pack="fas"
                        :icon-right="active ? 'angle-up' : 'angle-down'"
                      />
                    </template>
                    <b-dropdown-item
                      aria-role="listitem"
                      @click="deleteWorkShifts()"
                      >Delete shifts</b-dropdown-item
                    >
                  </b-dropdown>
                  <!-- <transition name="fade">
                  <form
                    action
                    v-if="showAssignRoleForm && selectedUsers.length > 0"
                  >
                    <b-field label="Choose Role" expanded>
                      <div class="block">
                        <b-checkbox
                          v-model="roleData"
                          :native-value="r.role"
                          v-for="(r, i) in getRolePermissions"
                          :key="i"
                          :disabled="r.role === 'ESS'"
                        >
                          {{ r.role }}
                        </b-checkbox>
                      </div>
                    </b-field>
                    <b-field class="buttons">
                      <b-button
                        class="is-success is-light"
                        @click="assignUserRole()"
                        >Save</b-button
                      >
                      <b-button
                        class="is-danger is-light"
                        @click="cancelAssignForm()"
                        >Cancel</b-button
                      >
                    </b-field>
                  </form>
                  <form
                    action
                    v-if="showAssignStatusForm && selectedUsers.length > 0"
                  >
                    <b-field label="Choose Status" expanded>
                      <div class="block">
                        <b-radio
                          type="is-info"
                          
                          name="status"
                          native-value="1"
                        >
                          Enable
                        </b-radio>
                        <b-radio
                          type="is-info"
                          
                          name="status"
                          native-value="0"
                        >
                          Disable
                        </b-radio>
                      </div>
                    </b-field>
                    <b-field class="buttons">
                      <b-button
                        class="is-success is-light"
                        @click="assignUserStatus()"
                        >Save</b-button
                      >
                      <b-button
                        class="is-danger is-light"
                        @click="cancelAssignForm()"
                        >Cancel</b-button
                      >
                    </b-field>
                  </form>
                </transition> -->
                </section>
                <b-table
                  :data="getWorkShifts"
                  :paginated="isPaginated"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :pagination-simple="isPaginationSimple"
                  :pagination-position="paginationPosition"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  checkable
                  hoverable
                  :checked-rows.sync="selectedWorkShifts"
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column
                    field="name"
                    label="Name"
                    sortable
                    v-slot="props"
                    >{{ props.row.name }}</b-table-column
                  >
                  <b-table-column
                    field="from"
                    label="From"
                    sortable
                    v-slot="props"
                    >{{ formatTime(props.row.from) }}</b-table-column
                  >
                  <b-table-column
                    field="to"
                    label="To"
                    sortable
                    v-slot="props"
                    >{{ formatTime(props.row.to) }}</b-table-column
                  >
                  <b-table-column
                    field="hours"
                    label="Hours"
                    sortable
                    v-slot="props"
                    >{{ props.row.duration }}</b-table-column
                  >
                  <b-table-column
                    field="days"
                    label="Days"
                    sortable
                    v-slot="props"
                  >
                    {{ props.row.days.join(" | ") }}
                  </b-table-column>
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip label="Edit" type=" is-dark">
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                          :id="`shift-id${props.row.id}`"
                          @click="setShiftToEdit(props.row)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" type=" is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deleteWorkShift(props.row.id)"
                        ></b-button>
                      </b-tooltip>
                    </div>
                  </b-table-column>
                </b-table>
              </div>
            </div>
          </div>
        </section>
      </b-tab-item>
      <b-tab-item label="Shift Rotation"> </b-tab-item>
    </b-tabs>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EditShiftModal from "./shift/EditShiftModal";
export default {
  name: "WorkShiftComponent",

  components: {
    EditShiftModal,
  },
  computed: {
    ...mapGetters(["getUsers", "getWorkShifts"]),
    indeterminate() {
      if (this.removedStaff.length === this.selectedStaff.length) {
        if (this.removedStaff.length > 0 && this.selectedStaff.length > 0) {
          this.selectAllSectedStaff = true;
        }
        return false;
      }
      if (this.removedStaff.length === 0) {
        this.selectAllSectedStaff = false;
        return false;
      }
      if (this.removedStaff.length > 0) {
        return true;
      }
    },
  },
  watch: {
    selectAllSectedStaff(v) {
      if (v) {
        this.removedStaff = [...this.selectedStaff];
      }
    },
  },
  mounted() {
    this.$watch(
      () => this.workShift.from,
      (value) => {
        const duration = this.formatDurationInHours(value, this.workShift.to);
        this.workShift.duration = duration;
      }
    );
    this.$watch(
      () => this.workShift.to,
      (value) => {
        const duration = this.formatDurationInHours(this.workShift.from, value);
        this.workShift.duration = duration;
      }
    );
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

      toggleWorkShift: false,
      isSubmittingWorkShift: false,
      viewWorkShiftModal: false,

      availableStaff: [],
      selectedStaff: [],
      removedStaff: [],
      selectAllSectedStaff: false,
      shiftDropperId: "",
      selectedWorkShifts: [],

      weekDefinitions: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturay",
        "Sunday",
        "Weekdays",
        "Weekend",
        "All",
      ],

      workShift: {
        assignedStaff: [],
        name: "",
        from: new Date(),
        to: new Date(),
        duration: "",
        days: [],
      },

      workShiftErrors: {
        assignedStaff: [],
        name: [],
        from: [],
        to: [],
        duration: [],
        days: [],
      },
    };
  },
  methods: {
    ...mapActions(["dispatchWorkShift"]),
    assignStaff() {
      this.selectedStaff = [...this.availableStaff];
      this.selectAllSectedStaff = false;
    },
    removeStaff() {
      this.selectedStaff = this.selectedStaff.filter((s) => {
        if (!this.removedStaff.includes(s)) return s;
      });
      this.removedStaff = [];
      if (this.selectedStaff.length === 0) {
        this.selectAllSectedStaff = false;
      }
    },
    addWorkShift() {
      this.isSubmittingWorkShift = true;
      this.$axios
        .post("/dashboard/add-work-shift", {
          ...this.workShift,
          from: this.workShift.from.toISOString(),
          to: this.workShift.to.toISOString(),
        })
        .then((res) => {
          this.clearWorkShiftForm();
          if (res.status === 200 && res.data.created) {
            this.dispatchWorkShift({
              type: "ADD_NEW_SHIFT",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Shift added successfully", "is-dark");
              this.isSubmittingWorkShift = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setWorkShiftErrors(err.response.data.errors);
              this.isSubmittingWorkShift = false;
            }, 1000);
          }
        });
    },
    deleteWorkShift(id) {
      this.$axios.delete(`/dashboard/delete-work-shift/${id}`).then((res) => {
        if (res.status === 200 && res.data.deleted) {
          this.dispatchWorkShift({
            type: "DELETE_SHIFT",
            payload: id,
          });
          setTimeout(() => {
            this.snackbar("Shift deleted successfully", "is-dark");
          }, 1000);
        }
      });
    },
    deleteWorkShifts() {
      const ids = this.selectedWorkShifts.map((s) => s.id);
      this.$axios.delete(`/dashboard/delete-work-shifts/${ids}`).then((res) => {
        if (res.status === 200 && res.data.deleted) {
          this.dispatchWorkShift({
            type: "DELETE_SHIFTS",
            payload: ids,
          });
          setTimeout(() => {
            this.snackbar("Shift deleted successfully", "is-dark");
          }, 1000);
        }
      });
    },
    setShiftToEdit(shift) {
      this.$buefy.modal.open({
        parent: this,
        component: EditShiftModal,
        hasModalCard: true,
        trapFocus: true,
        canCancel: ["escape"],
        props: { shift },
      });
    },
    cancelWorkShiftForm() {
      this.clearWorkShiftForm();
      this.toggleWorkShift = !this.toggleWorkShift;
    },
    setWorkShiftErrors(error = {}) {
      this.workShiftErrors.name = error.name || [];
      this.workShiftErrors.days = error.days || [];
      this.workShiftErrors.duration = error.duration || [];
    },

    clearWorkShiftForm() {
      this.setWorkShiftErrors();
      this.workShift.name = "";
      this.workShift.from = new Date();
      this.workShift.to = new Date();
      this.workShift.duration = "";
      this.workShift.days = [];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>