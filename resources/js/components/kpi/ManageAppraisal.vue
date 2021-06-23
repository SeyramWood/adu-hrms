<template>
  <div>
    <b-tabs type="is-toggle" size="" :animated="false" expanded>
      <b-tab-item label="Appraisal">
        <section class="b__collapse__section">
          <div class="card">
            <header class="card-header" role="button">
              <article class="table__header">
                <h5 class="table__header__title">Appraisal Cycles</h5>
                <section class="table__header__lists">
                  <div
                    class="table__header__lists__item"
                    @click="openQueryForm()"
                  >
                    <b-tooltip
                      label="Search appraisals"
                      type="is-dark"
                      position="is-left"
                    >
                      <b-icon class="icon--wrapper" icon="search"></b-icon>
                    </b-tooltip>
                  </div>
                  <div
                    class="table__header__lists__item"
                    @click="openConfigureAppraisal()"
                  >
                    <b-tooltip
                      label="Configure Appraisal"
                      type="is-dark"
                      position="is-left"
                    >
                      <b-icon class="icon--wrapper" icon="cogs"></b-icon>
                    </b-tooltip>
                  </div>
                </section>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="selectedKPIs.length > 0 ? false : true"
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
                      @click="openAssignRoleForm()"
                      >Assign user role</b-dropdown-item
                    >
                    <b-dropdown-item
                      aria-role="listitem"
                      @click="openAssignStatusForm()"
                      >Assign account status</b-dropdown-item
                    >
                    <b-dropdown-item aria-role="listitem" @click="deleteUsers()"
                      >Delete users</b-dropdown-item
                    >
                  </b-dropdown>
                  <transition name="fade">
                    <form
                      action
                      v-if="showAssignRoleForm && selectedKPIs.length > 0"
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
                      v-if="showAssignStatusForm && selectedKPIs.length > 0"
                    >
                      <b-field label="Choose Status" expanded>
                        <div class="block">
                          <b-radio
                            type="is-info"
                            v-model="statusData"
                            name="status"
                            native-value="1"
                          >
                            Enable
                          </b-radio>
                          <b-radio
                            type="is-info"
                            v-model="statusData"
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
                  </transition>
                </section>
                <b-table
                  :data="getAppraisals.data"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  :checked-rows.sync="selectedKPIs"
                  :loading="isLoading"
                  checkable
                  striped
                  hoverable
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column
                    class="is-info"
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
                    label="Appraisal Name"
                    sortable
                    v-slot="props"
                    >{{ props.row.name }}</b-table-column
                  >
                  <b-table-column
                    field="manage_appraisee"
                    label="Manage Appraisee"
                    centered
                    v-slot="props"
                    ><b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="cogs"
                      @click="openAppraiseListModal(props.row)"
                    ></b-button
                  ></b-table-column>

                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip
                        label="View Appraisal"
                        size="is-small"
                        type="is-dark"
                      >
                        <b-button
                          class="is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="eye"
                          @click="deleteUser(props.row.id)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip
                        label="Edit Appraisal"
                        size="is-small"
                        type="is-dark"
                      >
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                          @click="deleteUser(props.row.id)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="is-small" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deleteUser(props.row.id)"
                        ></b-button>
                      </b-tooltip>
                    </div>
                  </b-table-column>
                  <template #footer>
                    <paginate :state="getAppraisals" :dispatch="dispatchKPI" />
                  </template>
                  <template #empty v-if="noAppraisalFound">
                    <article class="table__data__notfound">
                      <b-icon icon="database" pack="fas"></b-icon>
                      <strong class="pt-3">Ooops! No appraisal found.</strong>
                    </article>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </section>
      </b-tab-item>
      <b-tab-item label="Performnace Metrics">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleRatingForm"
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
                <b-icon type="is-info" pack="fas" icon="plus"></b-icon>
                <span class="has-text-info"> Add New Metric</span>
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
                <form @submit.prevent="addAppraisalCycle()">
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        horizontal
                        label="Metric"
                        :type="{
                          'is-danger': ratingErrors.reference.length > 0,
                        }"
                        :message="ratingErrors.reference"
                        class="is-horizontal-text-left"
                      >
                        <b-input expanded v-model="rating.reference"></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        horizontal
                        label="Description"
                        :type="{
                          'is-danger': ratingErrors.description.length > 0,
                        }"
                        :message="ratingErrors.description"
                        class="is-horizontal-text-left"
                      >
                        <b-input
                          expanded
                          v-model="rating.description"
                          type="textarea"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>

                  <hr />
                  <b-field class="buttons">
                    <button
                      type="submit"
                      class="button is-success is-light"
                      :disabled="isSubmitting"
                    >
                      {{ isSubmitting ? "Submitting..." : "Add" }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="cancelAppraisalForm()"
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
                <h5 class="table__header__title">Metrics</h5>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="selectedRating.length > 0 ? false : true"
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
                  :data="[]"
                  :paginated="true"
                  :per-page="100"
                  :current-page="1"
                  :pagination-simple="true"
                  pagination-position="bottom"
                  default-sort-direction="desc"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  checkable
                  hoverable
                  :checked-rows.sync="selectedRating"
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column
                    field="score"
                    label="Score"
                    sortable
                    v-slot="props"
                    >{{ props.row.name }}</b-table-column
                  >
                  <b-table-column
                    field="reference"
                    label="Reference"
                    sortable
                    v-slot="props"
                    >{{ formatTime(props.row.from) }}</b-table-column
                  >
                  <b-table-column
                    field="description"
                    label="Description"
                    sortable
                    v-slot="props"
                    >{{ formatTime(props.row.to) }}</b-table-column
                  >
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
                  <template #empty v-if="noAppraisalFound">
                    <article class="table__data__notfound">
                      <b-icon icon="database" pack="fas"></b-icon>
                      <strong class="pt-3">Ooops! No rating found.</strong>
                    </article>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </section>
      </b-tab-item>
      <b-tab-item label="Rating">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleRatingForm"
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
                <b-icon type="is-info" pack="fas" icon="plus"></b-icon>
                <span class="has-text-info"> Add New Rating</span>
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
                <form @submit.prevent="addAppraisalCycle()">
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        horizontal
                        label="Reference"
                        :type="{
                          'is-danger': ratingErrors.reference.length > 0,
                        }"
                        :message="ratingErrors.reference"
                        class="is-horizontal-text-left"
                      >
                        <b-input expanded v-model="rating.reference"></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        horizontal
                        label="Score"
                        :type="{ 'is-danger': ratingErrors.score.length > 0 }"
                        :message="ratingErrors.score"
                        class="is-horizontal-text-left"
                      >
                        <b-input expanded v-model="rating.score"></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        horizontal
                        label="Description"
                        :type="{
                          'is-danger': ratingErrors.description.length > 0,
                        }"
                        :message="ratingErrors.description"
                        class="is-horizontal-text-left"
                      >
                        <b-input
                          expanded
                          v-model="rating.description"
                          type="textarea"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>

                  <hr />
                  <b-field class="buttons">
                    <button
                      type="submit"
                      class="button is-success is-light"
                      :disabled="isSubmitting"
                    >
                      {{ isSubmitting ? "Submitting..." : "Add" }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="cancelAppraisalForm()"
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
                <h5 class="table__header__title">Ratings</h5>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="selectedRating.length > 0 ? false : true"
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
                  :data="[]"
                  :paginated="true"
                  :per-page="100"
                  :current-page="1"
                  :pagination-simple="true"
                  pagination-position="bottom"
                  default-sort-direction="desc"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  checkable
                  hoverable
                  :checked-rows.sync="selectedRating"
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column
                    field="score"
                    label="Score"
                    sortable
                    v-slot="props"
                    >{{ props.row.name }}</b-table-column
                  >
                  <b-table-column
                    field="reference"
                    label="Reference"
                    sortable
                    v-slot="props"
                    >{{ formatTime(props.row.from) }}</b-table-column
                  >
                  <b-table-column
                    field="description"
                    label="Description"
                    sortable
                    v-slot="props"
                    >{{ formatTime(props.row.to) }}</b-table-column
                  >
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
                  <template #empty v-if="noAppraisalFound">
                    <article class="table__data__notfound">
                      <b-icon icon="database" pack="fas"></b-icon>
                      <strong class="pt-3">Ooops! No rating found.</strong>
                    </article>
                  </template>
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
import ConfigureAppraisalModal from "./appraisal/ConfigureAppraisalModal";
import AppraiseeListModal from "./appraisal/AppraiseeListModal";
import Paginate from "../Paginate";
export default {
  name: "ManageAppraisal",
  components: {
    Paginate,
    ConfigureAppraisalModal,
    AppraiseeListModal,
  },
  computed: {
    ...mapGetters([
      "getAppraisals",
      "getUsers",
      "getRolePermissions",
      "getBranches",
      "getDepartments",
      "getRolePermissions",
      "getWorkShifts",
    ]),
    getRoles() {
      return this.getRolePermissions.map((r) => {
        return {
          id: r.role,
          label: r.role,
        };
      });
    },
    getBrhs() {
      const data = this.getBranches.map((b) => {
        return {
          id: b.id,
          label: b.name,
        };
      });
      return [
        {
          id: 0,
          label: "All",
        },
        ...data,
      ];
    },
    getDpts() {
      return this.getDepartments.map((d) => {
        return {
          id: d.id,
          label: d.name,
        };
      });
    },
    getShifts() {
      return this.getWorkShifts.map((s) => {
        return {
          id: s.id,
          label: s.name,
        };
      });
    },
  },
  mounted() {
    this.isLoading = true;
    this.$nextTick(() => {
      if (this.getUsers.data.length > 0) {
        this.isLoading = false;
      } else {
        setTimeout(() => {
          this.isLoading = false;
          this.noAppraisalFound = true;
        }, 1000);
      }
    });
  },
  data() {
    return {
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      selectedKPIs: [],
      selectedRating: [],
      isSubmitting: false,
      selected: null,
      noAppraisalFound: false,
      isLoading: false,
      toggleRatingForm: false,
      showAssignRoleForm: false,
      showAssignStatusForm: false,
      rating: {
        reference: "",
        score: "",
        description: "",
      },
      ratingErrors: {
        reference: [],
        score: [],
        description: [],
      },
    };
  },
  methods: {
    ...mapActions(["dispatchUserAccount", "dispatchStaffCount", "dispatchKPI"]),
    openConfigureAppraisal() {
      this.$buefy.modal.open({
        parent: this,
        component: ConfigureAppraisalModal,
        hasModalCard: true,
        trapFocus: true,
        canCancel: ["escape"],
      });
    },
    openAppraiseListModal(appraisal) {
      this.$buefy.modal.open({
        parent: this,
        component: AppraiseeListModal,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: true,
        canCancel: ["escape"],
        props: { appraisal },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>