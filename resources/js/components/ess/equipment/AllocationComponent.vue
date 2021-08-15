<template>
  <div>
    <section
      class="b__collapse__section"
      v-if="isPermission('approve_it_equipment')"
    >
      <b-collapse
        class="card"
        v-model="toggleRequestForm"
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
            <span class="has-text-info">Add New Allocation</span>
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
            <form @submit.prevent="assignAllocation()">
              <div style="width: 55%">
                <b-field label="Request" horizontal>
                  <b-field
                    :type="{
                      'is-danger': allocationErrors.equipmentRequest.length,
                    }"
                    :message="allocationErrors.equipmentRequest"
                  >
                    <treeselect
                      :multiple="false"
                      :options="getFormatedRequests"
                      placeholder="Select request..."
                      v-model="allocation.equipmentRequest"
                      :max-height="200"
                    />
                  </b-field>
                </b-field>
                <b-field label="Equipment" horizontal>
                  <b-field
                    :type="{
                      'is-danger': allocationErrors.equipment.length,
                    }"
                    :message="allocationErrors.equipment"
                  >
                    <b-input
                      size=""
                      expanded
                      v-model="allocation.equipment"
                    ></b-input>
                  </b-field>
                </b-field>
                <b-field label="Quantity" horizontal>
                  <b-field
                    :type="{
                      'is-danger': allocationErrors.quantity.length,
                    }"
                    :message="allocationErrors.quantity"
                  >
                    <b-input
                      size=""
                      expanded
                      v-model="allocation.quantity"
                    ></b-input>
                  </b-field>
                </b-field>
                <b-field label="Model" horizontal>
                  <b-field
                    :type="{
                      'is-danger': allocationErrors.model.length,
                    }"
                    :message="allocationErrors.model"
                  >
                    <b-input
                      size=""
                      expanded
                      v-model="allocation.model"
                    ></b-input>
                  </b-field>
                </b-field>
                <b-field label="Serial No." horizontal>
                  <b-field
                    :type="{
                      'is-danger': allocationErrors.serialNumber.length,
                    }"
                    :message="allocationErrors.serialNumber"
                  >
                    <b-input
                      size=""
                      expanded
                      v-model="allocation.serialNumber"
                    ></b-input>
                  </b-field>
                </b-field>
                <b-field label="Manufacturer" horizontal>
                  <b-field
                    :type="{
                      'is-danger': allocationErrors.manufacturer.length,
                    }"
                    :message="allocationErrors.manufacturer"
                  >
                    <b-input
                      size=""
                      expanded
                      v-model="allocation.manufacturer"
                    ></b-input>
                  </b-field>
                </b-field>
                <h6 class="text-main">Approve Allocation</h6>
                <b-field label="Initials" horizontal>
                  <b-field
                    :type="{
                      'is-danger': allocationErrors.approverInitials.length,
                    }"
                    :message="allocationErrors.approverInitials"
                  >
                    <b-input
                      size=""
                      expanded
                      v-model="allocation.approverInitials"
                    ></b-input>
                  </b-field>
                </b-field>
              </div>

              <hr />
              <b-field class="buttons">
                <button
                  class="button is-success is-light"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? "Allocating..." : "Allocate" }}
                </button>
                <b-button class="is-danger is-light" @click="cancelAllocation()"
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
            <h5 class="table__header__title">All Allocations</h5>
          </article>
        </header>
        <div class="card-content">
          <div class="content">
            <section class="py-4 multiples-actions">
              <b-dropdown
                aria-role="list"
                :disabled="checkedAllocations.length > 0 ? false : true"
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
                  @click="deleteAllocations()"
                  >Delete allocations</b-dropdown-item
                >
              </b-dropdown>
            </section>
            <b-table
              :data="getEquipmentAllocations.data"
              :default-sort-direction="defaultSortDirection"
              :sort-icon="sortIcon"
              :sort-icon-size="sortIconSize"
              :loading="isLoading"
              :checked-rows.sync="checkedAllocations"
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
                field="request_name"
                label="Request"
                sortable
                v-slot="props"
                >{{ props.row.request_name }}</b-table-column
              >
              <b-table-column
                field="equipment"
                label="Equipment"
                sortable
                v-slot="props"
                >{{ props.row.equipment }}</b-table-column
              >
              <b-table-column
                field="quantity"
                label="Quantity"
                sortable
                v-slot="props"
                >{{ props.row.quantity }}</b-table-column
              >
              <b-table-column
                field="approval_initials"
                label="Digital & IT"
                sortable
              >
                <b-tag type="is-success">Approved</b-tag></b-table-column
              >
              <b-table-column
                field="dpt_unit_approval.date"
                label="Director/VP"
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
                field="staff_approval.date"
                label="Staff"
                sortable
                v-slot="props"
              >
                <b-tag type="is-success" v-if="props.row.staff_approval"
                  >Approved</b-tag
                >
                <b-tag type="is-danger" v-if="!props.row.staff_approval"
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
                      @click="viewAllocationForm(props.row)"
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip label="Approve Allocation" size="" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="check"
                      v-if="isPermission('hod')"
                      :id="`allocation-id-${
                        props.row.id === getAllocationId ? getAllocationId : ''
                      }`"
                      @click="openApprovalDropper(props.row)"
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip label="Edit" size="" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="pen"
                      v-if="isPermission('approve_it_equipment')"
                      :id="`allocation-id-${
                        props.row.id === getAllocationId ? getAllocationId : ''
                      }`"
                      :disabled="$page.props.authUser.id !== props.row.user_id"
                      @click="openEditAllocationDropper(props.row)"
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip label="Delete" size="" type="is-dark">
                    <b-button
                      class="is-danger is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="trash"
                      v-if="isPermission('approve_it_equipment')"
                      @click="deleteAllocation(props.row.id)"
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
              <template #footer>
                <paginate
                  :state="getEquipmentAllocations"
                  :dispatch="dispatchEquipmentAllocation"
                />
              </template>
              <template #empty v-if="noAllocationFound">
                <article class="table__data__notfound">
                  <b-icon icon="database" pack="fas"></b-icon>
                  <strong class="pt-3">Ooops! No allocation found.</strong>
                </article>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </section>

    <dropper
      :join="`#allocation-id-${getAllocationId}`.toString()"
      ref="allocationDropper"
      @esc-keydown="closeEditAllocationDropper"
      @other-area-clicked="closeEditAllocationDropper"
      class="dropper"
      align="left"
      :z-index="9999"
    >
      <h5 class="text-main pb-3">Edit Allocation</h5>
      <form @submit.prevent="updateAllocation()">
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Request"
              :type="{
                'is-danger': allocationErrors.equipmentRequest.length,
              }"
              :message="allocationErrors.equipmentRequest"
            >
              <treeselect
                :multiple="false"
                :options="getFormatedRequests"
                placeholder="Select request..."
                v-model="allocation.equipmentRequest"
                :max-height="200"
              />
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Equipment"
              :type="{
                'is-danger': allocationErrors.equipment.length,
              }"
              :message="allocationErrors.equipment"
            >
              <b-input
                size=""
                expanded
                v-model="allocation.equipment"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Quantity"
              :type="{
                'is-danger': allocationErrors.quantity.length,
              }"
              :message="allocationErrors.quantity"
            >
              <b-input size="" expanded v-model="allocation.quantity"></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Model"
              :type="{
                'is-danger': allocationErrors.model.length,
              }"
              :message="allocationErrors.model"
            >
              <b-input size="" expanded v-model="allocation.model"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Serial No."
              :type="{
                'is-danger': allocationErrors.serialNumber.length,
              }"
              :message="allocationErrors.serialNumber"
            >
              <b-input
                size=""
                expanded
                v-model="allocation.serialNumber"
              ></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Manufacturer"
              :type="{
                'is-danger': allocationErrors.manufacturer.length,
              }"
              :message="allocationErrors.manufacturer"
            >
              <b-input
                size=""
                expanded
                v-model="allocation.manufacturer"
              ></b-input>
            </b-field>
          </div>
        </div>

        <h6 class="text-main">Approve Allocation</h6>

        <b-field
          label="Initials"
          :type="{
            'is-danger': allocationErrors.approverInitials.length,
          }"
          :message="allocationErrors.approverInitials"
        >
          <b-input
            size=""
            expanded
            v-model="allocation.approverInitials"
          ></b-input>
        </b-field>

        <hr />
        <b-field class="buttons">
          <button class="button is-success is-light" :disabled="isSubmitting">
            {{ isSubmitting ? "Saving..." : "Save" }}
          </button>
          <b-button
            class="is-danger is-light"
            @click="closeEditAllocationDropper()"
            >Cancel</b-button
          >
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#allocation-id-${getAllocationId}`.toString()"
      ref="approvalDropper"
      @esc-keydown="closeApprovalDropper"
      @other-area-clicked="closeApprovalDropper"
      class="dropper"
      align="left"
      :z-index="9999"
    >
      <fieldset :disabled="alreadyAproved">
        <form @submit.prevent="approveAllocation()">
          <h5 class="text-main pb-3">Approve Allocation</h5>

          <div class="columns">
            <div class="column is-4">
              <b-field
                label="Initials"
                :type="{
                  'is-danger': dptUnitApprovalErrors.initials.length,
                }"
                :message="dptUnitApprovalErrors.initials"
              >
                <b-input
                  size=""
                  expanded
                  v-model="dptUnitApproval.initials"
                ></b-input>
              </b-field>
            </div>

            <div class="column is-4">
              <b-field
                label="Director/VP"
                :type="{
                  'is-danger': dptUnitApprovalErrors.name.length,
                }"
                :message="dptUnitApprovalErrors.name"
              >
                <b-input
                  size=""
                  expanded
                  v-model="dptUnitApproval.name"
                  :disabled="true"
                ></b-input>
              </b-field>
            </div>
            <div class="column is-4">
              <b-field
                label="Date"
                :type="{
                  'is-danger': dptUnitApprovalErrors.date.length,
                }"
                :message="dptUnitApprovalErrors.date"
              >
                <b-input
                  size=""
                  expanded
                  v-model="dptUnitApproval.date"
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
      </fieldset>
    </dropper>
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import AllocationFormModal from "./AllocationFormModal";
import Paginate from "../../Paginate";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AllocationComponent",
  components: { Paginate, Treeselect, AllocationFormModal },
  computed: {
    ...mapGetters(["getGrantedEquipmentRequests", "getEquipmentAllocations"]),
    getAllocationId() {
      return this.allocationId;
    },
    getFormatedRequests() {
      return this.getGrantedEquipmentRequests.map((r) => {
        return {
          id: r.id,
          label: `${
            this.isNull(r.otherItem) ? r.otherItem : r.item
          } - Requester - ${this.getFullName(r)}`,
        };
      });
    },
  },
  mounted() {
    this.$watch(
      () => this.allocation.equipmentRequest,
      (id) => {
        if (id) {
          const req = this.getGrantedEquipmentRequests.find((r) => r.id === id);
          console.log(req);
          this.allocation.equipment = this.isNull(req.otherItem)
            ? req.otherItem
            : req.item;
          this.allocation.quantity = req.quantity;
          this.allocation.requesterDptId = req.department_id;
          this.allocation.requestName = `${
            this.isNull(req.otherItem) ? req.otherItem : req.item
          } - Requester - ${this.getFullName(req)}`;
        }
      }
    );
    this.isLoading = true;
    this.$nextTick(() => {
      if (this.getEquipmentAllocations.data.length) {
        this.isLoading = false;
      } else {
        setTimeout(() => {
          this.isLoading = false;
          this.noAllocationFound = true;
        }, 1000);
      }
    });
  },
  data() {
    return {
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      noAllocationFound: false,
      isLoading: false,
      checkedAllocations: [],

      toggleRequestForm: false,
      isSubmitting: false,

      allocationId: "",
      alreadyAproved: false,

      allocation: {
        equipment: "",
        model: "",
        serialNumber: "",
        manufacturer: "",
        quantity: "",
        equipmentRequest: "",
        approverInitials: "",
        requestName: "",
        requesterDptId: "",
      },
      dptUnitApproval: {
        name: "",
        initials: "",
        date: null,
      },
      dptUnitApprovalErrors: {
        name: [],
        initials: [],
        date: [],
      },
      allocationErrors: {
        equipment: [],
        model: [],
        serialNumber: [],
        manufacturer: [],
        quantity: [],
        equipmentRequest: [],
        approverInitials: [],
      },
    };
  },

  methods: {
    ...mapActions(["dispatchEquipmentAllocation"]),
    openEditAllocationDropper(data) {
      const dropper = this.$refs.allocationDropper;
      this.allocationId = data.id;
      if (dropper) {
        this.allocation = {
          equipment: data.equipment,
          model: data.model,
          serialNumber: data.serial_number,
          manufacturer: data.manufacturer,
          quantity: data.quantity,
          equipmentRequest: data.equipment_request_id,
          requestName: data.request_name,
          approverInitials: data.approver_initials,
        };
        dropper.open();
      }
    },
    closeEditAllocationDropper() {
      const dropper = this.$refs.allocationDropper;
      if (dropper) {
        dropper.close();
        this.$nextTick(() => {
          this.cancelAllocation();
        });
      }
    },
    openApprovalDropper(data) {
      const dropper = this.$refs.approvalDropper;
      this.allocationId = data.id;
      if (dropper) {
        if (data.dpt_unit_approval) {
          if (data.approver_initials) {
            this.alreadyAproved = true;
            this.$axios
              .get(`/dashboard/get-request-approval-name/${data.user_id}`)
              .then(({ data }) => {
                this.dptUnitApproval.name = this.getFullName(data.name);
              });
          } else {
            this.dptUnitApproval.name = this.getFullName(
              this.$page.props.authUser
            );
          }
          this.dptUnitApproval.date = this.formatDateTime2(
            data.dpt_unit_approval.date
          );
          this.dptUnitApproval.initials = data.dpt_unit_approval.initials;
        } else {
          this.dptUnitApproval.name = this.getFullName(
            this.$page.props.authUser
          );
          this.dptUnitApproval.date = this.formatDateTime2(new Date().toJSON());
        }

        dropper.open();
      }
    },
    closeApprovalDropper() {
      const dropper = this.$refs.approvalDropper;
      if (dropper) {
        dropper.close();
        this.$nextTick(() => {
          this.setApproveAllocationErrors();
          this.cancelApproveAllocation();
          this.alreadyAproved = false;
        });
      }
    },
    assignAllocation() {
      this.isSubmitting = true;
      this.setAllocationErrors();
      this.$axios
        .post(`/dashboard/allocate-equipment`, this.allocation)
        .then((res) => {
          this.isSubmitting = false;
          if (res.status === 201) {
            this.clearAllocationForm();
            this.dispatchEquipmentAllocation({
              type: "ADD_ALLOCATION",
              payload: res.data,
            });
            this.snackbar("Allocation assigned successfully", "is-dark");
          }
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (err.response.status === 422) {
            this.setAllocationErrors(err.response.data.errors);
          }
        });
    },
    updateAllocation() {
      this.isSubmitting = true;
      this.setAllocationErrors();
      this.$axios
        .put(
          `/dashboard/edit-equipment-allocation/${this.getAllocationId}`,
          this.allocation
        )
        .then((res) => {
          this.isSubmitting = false;
          if (res.status === 200 && res.data.updated) {
            this.closeEditAllocationDropper();
            this.dispatchEquipmentAllocation({
              type: "UPDATE_ALLOCATION",
              payload: res.data.allocation,
            });
            this.snackbar("Allocation updated successfully", "is-dark");
          }
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (err.response.status === 422) {
            this.setAllocationErrors(err.response.data.errors);
          }
        });
    },
    approveAllocation() {
      this.isSubmitting = true;
      this.setApproveAllocationErrors();
      this.$axios
        .put(
          `/dashboard/approve-equipment-allocation/${this.getAllocationId}`,
          {
            ...this.dptUnitApproval,
            date: new Date().toISOString(),
          },
          {
            headers: {
              permissionType: "department",
            },
          }
        )
        .then((res) => {
          this.isSubmitting = false;
          if (res.status === 200 && res.data.approved) {
            this.closeApprovalDropper();
            this.dispatchEquipmentAllocation({
              type: "UPDATE_ALLOCATION",
              payload: res.data.allocation,
            });
            this.snackbar("Allocation approved successfully", "is-dark");
            if (this.isPermission("hod")) {
              this.$nextTick(() => {
                this.dispatchEquipmentAllocation({
                  type: "ADD_MY_ALLOCATIONS",
                  payload: 1,
                });
              });
            }
          }
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (err.response.status === 422) {
            this.setApproveAllocationErrors(err.response.data.errors);
          }
        });
    },
    deleteAllocation(id) {
      this.$axios
        .delete(`/dashboard/delete-equipment-allocation/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchEquipmentAllocation({
              type: "DELETE_ALLOCATION",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Allocation deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteAllocations() {
      const ids = this.checkedAllocations.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-equipment-allocations/${ids}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchEquipmentAllocation({
              type: "DELETE_ALLOCATIONS",
              payload: ids,
            });
            this.checkedAllocations = [];
            setTimeout(() => {
              this.snackbar("Allocations deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cancelAllocation() {
      this.toggleRequestForm = false;
      this.$nextTick(() => {
        this.clearAllocationForm();
        this.setAllocationErrors();
      });
    },
    clearAllocationForm() {
      this.allocation = {
        equipment: "",
        model: "",
        serialNumber: "",
        manufacturer: "",
        quantity: "",
        equipmentRequest: "",
        approverInitials: "",
      };
    },
    setAllocationErrors(err = {}) {
      this.allocationErrors = {
        equipment: err.equipment || [],
        model: err.model || [],
        serialNumber: err.serialNumber || [],
        manufacturer: err.manufacturer || [],
        quantity: err.quantity || [],
        equipmentRequest: err.equipmentRequest || [],
        approverInitials: err.approverInitials || [],
      };
    },
    cancelApproveAllocation() {
      this.dptUnitApproval = {
        name: "",
        initials: "",
        date: null,
      };
    },
    setApproveAllocationErrors(err = {}) {
      this.dptUnitApprovalErrors = {
        name: err.name || [],
        initials: err.initials || [],
        date: err.date || [],
      };
    },

    viewAllocationForm(allocation) {
      this.$buefy.modal.open({
        parent: this,
        component: AllocationFormModal,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: true,
        canCancel: ["escape"],
        props: { allocation },
      });
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