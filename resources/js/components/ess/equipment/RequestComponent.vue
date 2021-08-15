<template>
  <div>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <article class="table__header">
            <h5 class="table__header__title">All Requests</h5>
          </article>
        </header>
        <div class="card-content">
          <div class="content">
            <section
              class="py-4 multiples-actions"
              v-if="isPermission('approve_it_equipment')"
            >
              <b-dropdown
                aria-role="list"
                :disabled="checkedRequests.length > 0 ? false : true"
              >
                <template #trigger="{ active }">
                  <b-button
                    type="is-info is-light"
                    label="Actions"
                    pack="fas"
                    :icon-right="active ? 'angle-up' : 'angle-down'"
                  />
                </template>
                <b-dropdown-item aria-role="listitem" @click="deleteRequests()"
                  >Delete requests</b-dropdown-item
                >
              </b-dropdown>
            </section>
            <b-table
              :data="getEquipmentRequests.data"
              :default-sort-direction="defaultSortDirection"
              :sort-icon="sortIcon"
              :sort-icon-size="sortIconSize"
              :loading="isLoading"
              :checked-rows.sync="checkedRequests"
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
                field="details.item"
                label="Requested Item"
                sortable
                v-slot="props"
                >{{
                  props.row.details.otherItem
                    ? props.row.details.otherItem
                    : props.row.details.item
                }}</b-table-column
              >
              <b-table-column
                field="details.quantity"
                label="Quantity"
                sortable
                v-slot="props"
                >{{ props.row.details.quantity }}</b-table-column
              >
              <b-table-column
                field="details.category"
                label="Category"
                sortable
                v-slot="props"
                >{{ props.row.details.category }}</b-table-column
              >
              <b-table-column
                field="dpt_unit_approval.date"
                label="Director/VP Approval"
                sortable
                v-slot="props"
              >
                <b-tag type="is-success" v-if="props.row.dpt_unit_approval"
                  >Approved</b-tag
                >
                <b-tag type="is-danger" v-if="!props.row.dpt_unit_approval"
                  >Pending</b-tag
                ></b-table-column
              >
              <b-table-column
                field="it_approval.date"
                label="Request Status"
                sortable
                v-slot="props"
              >
                <template v-if="props.row.it_approval">
                  <b-tag
                    type="is-success"
                    v-if="props.row.it_approval.status === 'Granted'"
                    >{{ props.row.it_approval.status }}</b-tag
                  >
                  <b-tag
                    type="is-danger"
                    v-if="props.row.it_approval.status === 'Pending'"
                    >{{ props.row.it_approval.status }}</b-tag
                  >
                  <b-tag
                    type="is-dark"
                    v-if="props.row.it_approval.status === 'Denied'"
                    >{{ props.row.it_approval.status }}</b-tag
                  >
                </template>

                <b-tag type="is-danger" v-if="!props.row.it_approval"
                  >Pending</b-tag
                ></b-table-column
              >
              <b-table-column field="actions" label="Actions" v-slot="props">
                <div class="b-tooltips">
                  <b-tooltip label="View Form" size="" type="is-dark">
                    <b-button
                      class="is-default is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="eye"
                      @click="viewRequestForm(props.row)"
                    ></b-button>
                  </b-tooltip>
                  <fragment v-if="isPermission('approve_it_equipment')">
                    <fragment v-if="isPermission('hod')">
                      <b-tooltip
                        label="Approve Request (Director/VP)"
                        size=""
                        type="is-dark"
                      >
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="check"
                          :id="`request-id-${
                            props.row.id === getRequestId ? getRequestId : ''
                          }`"
                          :disabled="
                            props.row.department_id !==
                            $page.props.authUser.department_id
                          "
                          @click="openApprovalDropper(props.row)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip
                        label="Approve Request (Digital & IT)"
                        size=""
                        type="is-dark"
                      >
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="check"
                          :id="`request-id-it${
                            props.row.id === getRequestId ? getRequestId : ''
                          }`"
                          :disabled="!props.row.dpt_unit_approval"
                          @click="openApprovalDropperIT(props.row)"
                        ></b-button>
                      </b-tooltip>
                    </fragment>
                    <fragment v-else>
                      <b-tooltip label="Approve Request" size="" type="is-dark">
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="check"
                          :id="`request-id-it${
                            props.row.id === getRequestId ? getRequestId : ''
                          }`"
                          @click="openApprovalDropperIT(props.row)"
                        ></b-button>
                      </b-tooltip>
                    </fragment>
                  </fragment>
                  <fragment v-else>
                    <b-tooltip label="Approve Request" size="" type="is-dark">
                      <b-button
                        class="is-info is-light"
                        size="is-small"
                        pack="fas"
                        icon-right="check"
                        :id="`request-id-${
                          props.row.id === getRequestId ? getRequestId : ''
                        }`"
                        @click="openApprovalDropper(props.row)"
                      ></b-button>
                    </b-tooltip>
                  </fragment>

                  <b-tooltip label="Delete" size="" type="is-dark">
                    <b-button
                      class="is-danger is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="trash"
                      v-if="isPermission('approve_it_equipment')"
                      @click="deleteRequest(props.row.id)"
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
              <template #footer>
                <paginate
                  :state="getEquipmentRequests"
                  :dispatch="dispatchEquipmentRequest"
                />
              </template>
              <template #empty v-if="noRequestFound">
                <article class="table__data__notfound">
                  <b-icon icon="database" pack="fas"></b-icon>
                  <strong class="pt-3">Ooops! No request found.</strong>
                </article>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </section>

    <dropper
      :join="`#request-id-${getRequestId}`.toString()"
      ref="approvalDropper"
      @esc-keydown="closeApprovalDropper"
      @other-area-clicked="closeApprovalDropper"
      class="dropper"
      align="left"
      :z-index="9999"
    >
      <form @submit.prevent="approveRequest()">
        <h5 class="text-main pb-3">Approve Request</h5>
        <div class="columns">
          <div class="column is-4">
            <b-field
              label="Initials"
              :type="{
                'is-danger': requestErrors.dpt_unit_approval.initials.length,
              }"
              :message="requestErrors.dpt_unit_approval.initials"
            >
              <b-input
                size=""
                expanded
                v-model="request.dpt_unit_approval.initials"
              ></b-input>
            </b-field>
          </div>

          <div class="column is-4">
            <b-field
              label="Director/VP"
              :type="{
                'is-danger': requestErrors.dpt_unit_approval.name.length,
              }"
              :message="requestErrors.dpt_unit_approval.name"
            >
              <b-input
                size=""
                expanded
                v-model="request.dpt_unit_approval.name"
                :disabled="true"
              ></b-input>
            </b-field>
          </div>
          <div class="column is-4">
            <b-field
              label="Date"
              :type="{
                'is-danger': requestErrors.dpt_unit_approval.date.length,
              }"
              :message="requestErrors.dpt_unit_approval.date"
            >
              <b-input
                size=""
                expanded
                v-model="request.dpt_unit_approval.date"
                :disabled="true"
              ></b-input>
            </b-field>
          </div>
        </div>
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? "Saving..." : "Approve" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isSubmitting"
            @click="closeApprovalDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#request-id-it${getRequestId}`.toString()"
      ref="approvalDropperIT"
      @esc-keydown="closeApprovalDropperIT"
      @other-area-clicked="closeApprovalDropperIT"
      class="dropper"
      align="left"
      :z-index="9999"
    >
      <form @submit.prevent="approveRequest()">
        <h5 class="text-main pb-3">Approve Request</h5>
        <template v-if="!showItApproval">
          <fieldset :disabled="alreadyAproved">
            <b-field
              label="Status"
              :type="{
                'is-danger': requestErrors.it_approval.status.length,
              }"
              :message="requestErrors.it_approval.status"
            >
              <b-radio
                name="status"
                type="is-info"
                native-value="Granted"
                size=""
                v-model="request.it_approval.status"
                >Granted</b-radio
              >
              <b-radio
                name="status"
                type="is-info"
                native-value="Pending"
                size=""
                v-model="request.it_approval.status"
                >Pending</b-radio
              >
              <b-radio
                name="status"
                type="is-info"
                native-value="Denied"
                size=""
                v-model="request.it_approval.status"
                >Denied</b-radio
              >
            </b-field>
            <b-field
              label="Reason"
              :type="{
                'is-danger': requestErrors.it_approval.reason.length,
              }"
              :message="requestErrors.it_approval.reason"
            >
              <b-input
                size=""
                expanded
                v-model="request.it_approval.reason"
              ></b-input>
            </b-field>
            <b-field
              label="Equipment Availability"
              :type="{
                'is-danger': requestErrors.it_approval.availability.length,
              }"
              :message="requestErrors.it_approval.availability"
            >
              <b-radio
                name="availability"
                type="is-info"
                native-value="In Stock"
                size=""
                v-model="request.it_approval.availability"
                >In Stock</b-radio
              >
              <b-radio
                name="availability"
                type="is-info"
                native-value="To be Procured"
                size=""
                v-model="request.it_approval.availability"
                >To be Procured</b-radio
              >
            </b-field>
            <b-field
              label="LPO/Supplier"
              :type="{
                'is-danger': requestErrors.it_approval.supplier.length,
              }"
              :message="requestErrors.it_approval.supplier"
            >
              <b-input
                size=""
                expanded
                v-model="request.it_approval.supplier"
              ></b-input>
            </b-field>
            <div class="columns">
              <div class="column is-4">
                <b-field
                  label="Initials"
                  :type="{
                    'is-danger': requestErrors.it_approval.initials.length,
                  }"
                  :message="requestErrors.it_approval.initials"
                >
                  <b-input
                    size=""
                    expanded
                    v-model="request.it_approval.initials"
                  ></b-input>
                </b-field>
              </div>

              <div class="column is-4">
                <b-field
                  label="Director/VP"
                  :type="{
                    'is-danger': requestErrors.it_approval.name.length,
                  }"
                  :message="requestErrors.it_approval.name"
                >
                  <b-input
                    size=""
                    expanded
                    v-model="request.it_approval.name"
                    :disabled="true"
                  ></b-input>
                </b-field>
              </div>
              <div class="column is-4">
                <b-field
                  label="Date"
                  :type="{
                    'is-danger': requestErrors.it_approval.date.length,
                  }"
                  :message="requestErrors.it_approval.date"
                >
                  <b-input
                    size=""
                    expanded
                    v-model="request.it_approval.date"
                    :disabled="true"
                  ></b-input>
                </b-field>
              </div>
            </div>
            <b-field class="buttons">
              <button
                class="button is-success is-light"
                type="submit"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? "Saving..." : "Approve" }}
              </button>
              <button
                class="button is-danger is-light"
                type="button"
                :disabled="isSubmitting"
                @click="closeApprovalDropperIT()"
              >
                Cancel
              </button>
            </b-field>
          </fieldset>
        </template>
        <template v-else>
          <p>Sorry! You cannot approve your own request.</p>
        </template>
      </form>
    </dropper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Paginate from "../../Paginate";
import RequestFormModal from "./RequestFormModal";
import { Fragment } from "vue-fragment";
export default {
  name: "RequestComponent",
  components: { Fragment, Paginate, RequestFormModal },
  computed: {
    ...mapGetters(["getEquipmentRequests"]),
    getRequestId() {
      return this.requestId;
    },
  },
  mounted() {
    this.isLoading = true;
    this.$nextTick(() => {
      if (this.getEquipmentRequests.data.length) {
        this.isLoading = false;
      } else {
        setTimeout(() => {
          this.isLoading = false;
          this.noRequestFound = true;
        }, 1000);
      }
    });
  },
  data() {
    return {
      isSubmitting: false,
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      noRequestFound: false,
      isLoading: false,
      checkedRequests: [],

      requestId: "",
      showItApproval: false,
      formType: "",
      leaderName: "",
      itDptName: "",
      alreadyAproved: false,
      request: {
        dpt_unit_approval: {
          name: "",
          initials: "",
          date: "",
        },
        it_approval: {
          status: "",
          reason: "",
          availability: "",
          supplier: "",
          name: "",
          initials: "",
          date: null,
        },
      },
      requestErrors: {
        dpt_unit_approval: {
          name: [],
          initials: [],
          date: [],
        },
        it_approval: {
          status: [],
          reason: [],
          availability: [],
          supplier: [],
          name: [],
          initials: [],
          date: [],
        },
      },
    };
  },

  methods: {
    ...mapActions(["dispatchEquipmentRequest"]),
    openApprovalDropper(data) {
      const dropper = this.$refs.approvalDropper;
      this.requestId = data.id;
      this.formType = "hod";
      if (dropper) {
        if (data.dpt_unit_approval) {
          this.request.dpt_unit_approval.date = this.formatDateTime2(
            data.dpt_unit_approval.date
          );
          this.request.dpt_unit_approval.initials =
            data.dpt_unit_approval.initials;
        } else {
          this.request.dpt_unit_approval.date = this.formatDateTime2(
            new Date().toJSON()
          );
        }
        this.request.dpt_unit_approval.name = this.getFullName(
          this.$page.props.authUser
        );
        dropper.open();
      }
    },
    closeApprovalDropper() {
      const dropper = this.$refs.approvalDropper;

      if (dropper) {
        dropper.close();
        this.$nextTick(() => {
          this.setApproveRequestErrors();
          this.cancelApproveRequest();
          this.formType = "";
        });
      }
    },
    openApprovalDropperIT(data) {
      const dropper = this.$refs.approvalDropperIT;
      this.requestId = data.id;
      this.formType = "IT";

      if (dropper) {
        if (data.user_id === this.$page.props.authUser.id) {
          this.showItApproval = true;
          dropper.open();
        } else {
          this.showItApproval = false;
        }
        if (data.it_approval) {
          this.request.it_approval.status = data.it_approval.status;
          this.request.it_approval.reason = data.it_approval.reason;
          this.request.it_approval.availability = data.it_approval.availability;
          this.request.it_approval.supplier = data.it_approval.supplier;
          this.request.it_approval.initials = data.it_approval.initials;
          this.request.it_approval.date = this.formatDateTime2(
            data.it_approval.date
          );
          if (data.it_approval.name !== this.$page.props.authUser.id) {
            this.alreadyAproved = true;
            this.$axios
              .get(
                `/dashboard/get-request-approval-name/${data.it_approval.name}`
              )
              .then(({ data }) => {
                this.request.it_approval.name = this.getFullName(data.name);
              });
          } else {
            this.request.it_approval.name = this.getFullName(
              this.$page.props.authUser
            );
          }
        } else {
          this.request.it_approval.date = this.formatDateTime2(
            new Date().toJSON()
          );
          this.request.it_approval.name = this.getFullName(
            this.$page.props.authUser
          );
        }

        this.$nextTick(() => {
          dropper.open();
        });
      }
    },
    closeApprovalDropperIT() {
      const dropper = this.$refs.approvalDropperIT;

      if (dropper) {
        dropper.close();
        this.$nextTick(() => {
          this.setApproveRequestErrors();
          this.cancelApproveRequest();
          this.formType = "";
          this.alreadyAproved = false;
        });
      }
    },
    approveRequest() {
      this.isSubmitting = true;
      this.setApproveRequestErrors();
      let data;
      let header;

      if (this.formType === "hod") {
        data = this.request.dpt_unit_approval;
        header = {
          headers: {
            permissionType: "hod",
          },
        };
      } else {
        data = this.request.it_approval;
        header = {
          headers: {
            permissionType: "IT",
          },
        };
      }

      this.$axios
        .put(
          `/dashboard/approve-equipment-request/${this.getRequestId}`,
          {
            ...data,
            date: new Date().toISOString(),
          },
          header
        )
        .then((res) => {
          this.isSubmitting = false;
          if (res.status === 200 && res.data.approved) {
            this.closeApprovalDropperIT();
            this.closeApprovalDropper();
            this.dispatchEquipmentRequest({
              type: "UPDATE_REQUEST",
              payload: res.data.request,
            });
            this.snackbar("Request approved successfully", "is-dark");

            this.$nextTick(() => {
              if (this.isPermission("approve_it_equipment")) {
                this.getGrantedRequests();
              }
            });
          }
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (err.response.status === 422) {
            this.setApproveRequestErrors(err.response.data.errors);
          }
        });
    },

    deleteRequest(id) {
      this.$axios
        .delete(`/dashboard/delete-equipment-request/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchEquipmentRequest({
              type: "DELETE_REQUEST",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Request deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteRequests() {
      const ids = this.checkedRequests.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-equipment-requests/${ids}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchEquipmentRequest({
              type: "DELETE_REQUESTS",
              payload: ids,
            });
            this.checkedRequests = [];
            setTimeout(() => {
              this.snackbar("Requests deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    cancelApproveRequest() {
      if (this.formType === "IT") {
        this.request.it_approval = {
          status: "",
          reason: "",
          availability: "",
          supplier: "",
          name: "",
          date: null,
          initials: "",
        };
      } else {
        this.request.dpt_unit_approval = {
          name: "",
          initials: "",
          date: null,
        };
      }
    },
    setApproveRequestErrors(err = {}) {
      if (this.formType === "IT") {
        this.requestErrors.it_approval = {
          status: err.status || [],
          reason: err.reason || [],
          availability: err.availability || [],
          supplier: err.supplier || [],
          name: err.name || [],
          date: err.date || [],
          initials: err.initials || [],
        };
      } else {
        this.requestErrors.dpt_unit_approval = {
          name: err.name || [],
          initials: err.initials || [],
          date: err.date || [],
        };
      }
    },
    viewRequestForm(request) {
      this.$buefy.modal.open({
        parent: this,
        component: RequestFormModal,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: true,
        canCancel: ["escape"],
        props: { request },
      });
    },
    getFullName(staff) {
      return `${this.isNull(staff.title)} ${staff.firstName} ${this.isNull(
        staff.middleName
      )} ${staff.lastName}`;
    },
    async getGrantedRequests() {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/get-granted-requests`
        );
        this.dispatchEquipmentRequest({
          type: "ADD_GRANTED_REQUEST",
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getRquestApproval(id) {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/get-request-approval-name/${id}`
        );
        this.leaderName = this.getFullName(data.name);
      } catch (error) {}
    },
    getRquestApprovalIT(id) {
      this.$axios
        .get(`/dashboard/get-request-approval-name/${id}`)
        .then(({ data }) => {
          this.itDptName = this.getFullName(data.name);
          console.log(this.itDptName);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>