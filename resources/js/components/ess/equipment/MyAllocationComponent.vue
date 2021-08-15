<template>
  <div>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <article class="table__header">
            <h5 class="table__header__title">My Allocations</h5>
          </article>
        </header>
        <div class="card-content">
          <div class="content">
            <b-table
              :data="getMyEquipmentAllocations.data"
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
                      @click="viewRequestForm(props.row)"
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip label="Approve Allocation" size="" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="check"
                      :id="`allocation-id-${
                        props.row.id === getAllocationId ? getAllocationId : ''
                      }`"
                      @click="openApprovalDropper(props.row)"
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
              <template #footer>
                <paginate
                  :state="getMyEquipmentAllocations"
                  :dispatch="dispatchEquipmentAllocation"
                  action="ADD_MY_ALLOCATIONS"
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
      ref="approvalDropper"
      @esc-keydown="closeApprovalDropper"
      @other-area-clicked="closeApprovalDropper"
      class="dropper"
      align="left"
      :z-index="9999"
    >
      <form @submit.prevent="approveAllocation()">
        <h5 class="text-main pb-3">Approve Allocation</h5>

        <div class="columns">
          <div class="column is-4">
            <b-field
              label="Initials"
              :type="{
                'is-danger': staffApprovalErrors.initials.length,
              }"
              :message="staffApprovalErrors.initials"
            >
              <b-input
                size=""
                expanded
                v-model="staffApproval.initials"
              ></b-input>
            </b-field>
          </div>

          <div class="column is-4">
            <b-field
              label="Director/VP"
              :type="{
                'is-danger': staffApprovalErrors.name.length,
              }"
              :message="staffApprovalErrors.name"
            >
              <b-input
                size=""
                expanded
                v-model="staffApproval.name"
                :disabled="true"
              ></b-input>
            </b-field>
          </div>
          <div class="column is-4">
            <b-field
              label="Date"
              :type="{
                'is-danger': staffApprovalErrors.date.length,
              }"
              :message="staffApprovalErrors.date"
            >
              <b-input
                size=""
                expanded
                v-model="staffApproval.date"
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
  </div>
</template>

<script>
import AllocationFormModal from "./AllocationFormModal";
import Paginate from "../../Paginate";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MyAllocationComponent",
  components: { Paginate, AllocationFormModal },
  props: {
    equipmentRequests: Array,
  },
  computed: {
    ...mapGetters(["getMyEquipmentAllocations"]),
    getAllocationId() {
      return this.allocationId;
    },
  },
  mounted() {
    this.isLoading = true;
    this.$nextTick(() => {
      if (this.getMyEquipmentAllocations.data.length) {
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

      isSubmitting: false,

      allocationId: "",

      staffApproval: {
        name: "",
        initials: "",
        date: null,
      },
      staffApprovalErrors: {
        name: [],
        initials: [],
        date: [],
      },
    };
  },

  methods: {
    ...mapActions(["dispatchEquipmentAllocation"]),
    openApprovalDropper(data) {
      const dropper = this.$refs.approvalDropper;
      this.allocationId = data.id;
      if (dropper) {
        if (data.staff_approval) {
          this.staffApproval.date = this.formatDateTime2(
            data.staff_approval.date
          );
          this.staffApproval.initials = data.staff_approval.initials;
        } else {
          this.staffApproval.date = this.formatDateTime2(new Date().toJSON());
        }
        this.staffApproval.name = this.getFullName(this.$page.props.authUser);
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
        });
      }
    },
    approveAllocation() {
      this.isSubmitting = true;
      this.setApproveAllocationErrors();
      this.$axios
        .put(
          `/dashboard/approve-equipment-allocation/${this.getAllocationId}`,
          {
            ...this.staffApproval,
            date: new Date().toISOString(),
          },
          {
            headers: {
              permissionType: "staff",
            },
          }
        )
        .then((res) => {
          this.isSubmitting = false;
          if (res.status === 200 && res.data.approved) {
            this.closeApprovalDropper();
            this.dispatchEquipmentAllocation({
              type: "UPDATE_MY_ALLOCATION",
              payload: res.data.allocation,
            });
            this.snackbar("Allocation approved successfully", "is-dark");
          }
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (err.response.status === 422) {
            this.setApproveAllocationErrors(err.response.data.errors);
          }
        });
    },
    cancelApproveAllocation() {
      this.staffApproval = {
        name: "",
        initials: "",
        date: null,
      };
    },
    setApproveAllocationErrors(err = {}) {
      this.staffApprovalErrors = {
        name: err.name || [],
        initials: err.initials || [],
        date: err.date || [],
      };
    },
    viewAllocationForm() {
      this.$buefy.modal.open({
        parent: this,
        component: AllocationFormModal,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: true,
        canCancel: ["escape"],
        // props: { appraisal },
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