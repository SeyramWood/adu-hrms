<template>
  <div class="modal-card py-4" style="width: auto">
    <header class="modal-card-head">
      <h4 class="modal-card-title text-main label pt-2">Appraisee List</h4>
      <button class="delete" type="button" @click="cancelModal()" />
    </header>
    <section class="modal-card-body">
      <div class="card">
        <header class="card-header" role="button">
          <article class="table__header">
            <!-- <h5 class="table__header__title">Appraisal Cycles</h5> -->
            <section class="table__header__lists">
              <div
                class="table__header__lists__item"
                @click="openConfigureAppraisal()"
              >
                <b-tooltip
                  label="Include Staff"
                  type="is-dark"
                  position="is-right"
                >
                  <b-icon class="icon--wrapper" icon="plus"></b-icon>
                </b-tooltip>
              </div>
              <div class="table__header__lists__item" @click="openQueryForm()">
                <b-tooltip
                  label="Search staff"
                  type="is-dark"
                  position="is-right"
                >
                  <b-icon class="icon--wrapper" icon="search"></b-icon>
                </b-tooltip>
              </div>
            </section>
          </article>
        </header>
        <div class="card-content">
          <div class="content">
            <section class="appraisal__title">
              <p>{{ appraisal.name }}</p>
              <p>
                {{
                  ` ${formatDate2(appraisal.period.from)} - ${formatDate2(
                    appraisal.period.to
                  )}`
                }}
              </p>
              <b-taglist attached>
                <b-tag type="is-dark" size="is-medium">Total Staff</b-tag>
                <b-tag type="is-info" size="is-medium">{{
                  appraisal.staff.length
                }}</b-tag>
              </b-taglist>
            </section>
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
              :data="getAppraisees.data"
              :default-sort-direction="defaultSortDirection"
              :sort-icon="sortIcon"
              :sort-icon-size="sortIconSize"
              :checked-rows.sync="selectedKPIs"
              :loading="isLoading"
              checkable
              striped
              hoverable
              default-sort="lastName"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page"
            >
              <b-table-column
                field="lastName"
                label="Staff"
                sortable
                v-slot="props"
              >
                <p style="margin-bottom: 0">
                  <strong class="">{{ getFullName(props.row) }}</strong>
                  <span class="format__staff">{{
                    getJobTitle(props.row.jobTitle)
                      ? `- ${getJobTitle(props.row.jobTitle)}`
                      : ""
                  }}</span>
                </p>
                <p
                  style="margin-bottom: 0"
                  class="format__staff"
                  v-if="props.row.department"
                >
                  <strong class="">Department:: </strong>
                  {{ props.row.department }}
                </p>
                <p
                  style="margin-bottom: 0"
                  class="format__staff"
                  v-if="props.row.unit"
                >
                  <strong class="">Unit:: </strong>
                  {{ props.row.unit }}
                </p>
              </b-table-column>
              <b-table-column field="actions" label="Actions" v-slot="props">
                <div class="b-tooltips">
                  <b-tooltip label="Delete" size="is-small" type="is-dark">
                    <b-button
                      class="is-danger is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="trash"
                      @click="deleteUserFromAppraisal(props.row.user_id)"
                      :disabled="!isPermission('delete')"
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
              <template #footer>
                <paginate
                  :state="getAppraisees"
                  :dispatch="dispatchKPI"
                  action="ADD_APPRAISEES"
                />
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
    <footer class="modal-card-foot buttons">
      <b-button class="is-dark is-light" @click="cancelModal()">Close</b-button>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Paginate from "../../Paginate";
export default {
  name: "AppraiseeListModal",
  props: {
    appraisal: { require: true, type: Object },
  },
  components: { Paginate },
  computed: {
    ...mapGetters(["getAppraisees", "getJobTitles"]),
  },
  beforeMount() {
    this.$nextTick(() => {
      this.dispatchKPI({
        type: "ADD_APPRAISEES",
        payload: { id: this.appraisal.id, page: 1 },
      });
    });
  },
  data() {
    return {
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      selectedKPIs: [],
      isSubmitting: false,
      isLoading: false,
      noAppraisalFound: false,
      showAssignRoleForm: false,
      showAssignStatusForm: false,
    };
  },
  methods: {
    ...mapActions(["dispatchKPI"]),
    cancelModal() {
      this.$emit("close");
    },
    deleteUserFromAppraisal(user) {
      console.log(user);
      return;
      this.$axios
        .put(
          `/dashboard/delete-user-from-appraisal/${this.appraisal.id}/${user}`
        )
        .then((res) => {
          if (res.data.deleted) {
            setTimeout(() => {
              this.snackbar("Staff removed successfully.", "is-success");
            }, 1000);
            // this.dispatchKPI({ type: "DELETE_APPRAISAL", payload: id });
          }
        })
        .catch((err) => {
          console.trace(err);
        });
    },
    getJobTitle(id) {
      if (id) {
        const t = this.getJobTitles.find((t) => t.id === parseInt(id));
        return t.title || "";
      }
      return "";
    },
    isNull(el) {
      if (el === "null" || el === null) {
        return "";
      }
      return el;
    },
    getFullName(staff) {
      return `${this.isNull(staff.title)} ${staff.firstName} ${this.isNull(
        staff.middleName
      )} ${staff.lastName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>