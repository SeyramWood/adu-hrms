<template>
  <div>
    <section class="b__collapse__section">
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
            <span class="has-text-info">Add New Request</span>
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
            <form @submit.prevent="addRequest()">
              <div style="width: 50%">
                <b-field label="Category" horizontal>
                  <b-field
                    :type="{
                      'is-danger': requestErrors.category.length,
                    }"
                    :message="requestErrors.category"
                  >
                    <b-radio
                      name="category"
                      type="is-info"
                      native-value="New Equipment"
                      size=""
                      v-model="request.category"
                      >New Equipment</b-radio
                    >
                    <b-radio
                      name="category"
                      type="is-info"
                      native-value="Upgrade Existing"
                      size=""
                      v-model="request.category"
                      >Upgrade Existing</b-radio
                    >
                    <b-radio
                      name="category"
                      type="is-info"
                      native-value="Replacement"
                      size=""
                      v-model="request.category"
                      >Replacement</b-radio
                    >
                  </b-field>
                </b-field>
                <b-field label="Type" horizontal>
                  <b-field
                    :type="{
                      'is-danger': requestErrors.type.length,
                    }"
                    :message="requestErrors.type"
                  >
                    <b-radio
                      name="type"
                      type="is-info"
                      native-value="Hardware"
                      size=""
                      v-model="request.type"
                      >Hardware</b-radio
                    >
                    <b-radio
                      name="type"
                      type="is-info"
                      native-value="Software"
                      size=""
                      v-model="request.type"
                      >Software</b-radio
                    >
                    <b-radio
                      name="type"
                      type="is-info"
                      native-value="Infrastructure"
                      size=""
                      v-model="request.type"
                      >Infrastructure</b-radio
                    >
                    <b-radio
                      name="type"
                      type="is-info"
                      native-value="other"
                      size=""
                      v-model="request.type"
                      >Other</b-radio
                    >
                  </b-field>
                </b-field>
                <b-field label="Other Type" horizontal v-if="showOtherType">
                  <b-field
                    :type="{
                      'is-danger': requestErrors.otherType.length,
                    }"
                    :message="requestErrors.otherType"
                  >
                    <b-input
                      size=""
                      expanded
                      v-model="request.otherType"
                    ></b-input>
                  </b-field>
                </b-field>
                <b-field label="Item" horizontal>
                  <b-field
                    :type="{
                      'is-danger': requestErrors.item.length,
                    }"
                    :message="requestErrors.item"
                  >
                    <b-radio
                      name="item"
                      type="is-info"
                      native-value="Laptop"
                      size=""
                      v-model="request.item"
                      >Laptop</b-radio
                    >
                    <b-radio
                      name="item"
                      type="is-info"
                      native-value="Extension Cord"
                      size=""
                      v-model="request.item"
                      >Extension Cord</b-radio
                    >
                    <b-radio
                      name="item"
                      type="is-info"
                      native-value="Projector"
                      size=""
                      v-model="request.item"
                      >Projector</b-radio
                    >
                    <b-radio
                      name="item"
                      type="is-info"
                      native-value="other"
                      size=""
                      v-model="request.item"
                      >Other</b-radio
                    >
                  </b-field>
                </b-field>
                <b-field label="Other Item" horizontal v-if="showOtherItem">
                  <b-field
                    :type="{
                      'is-danger': requestErrors.otherItem.length,
                    }"
                    :message="requestErrors.otherItem"
                  >
                    <b-input
                      size=""
                      expanded
                      v-model="request.otherItem"
                    ></b-input>
                  </b-field>
                </b-field>
                <b-field label="Quantity" horizontal>
                  <b-field
                    :type="{
                      'is-danger': requestErrors.quantity.length,
                    }"
                    :message="requestErrors.quantity"
                  >
                    <b-numberinput
                      controls-alignment="right"
                      controls-position="compact"
                      :min="1"
                      type="is-light"
                      expanded
                      v-model="request.quantity"
                    ></b-numberinput>
                  </b-field>
                </b-field>
                <b-field label="Purpose" horizontal>
                  <b-field
                    :type="{
                      'is-danger': requestErrors.purpose.length,
                    }"
                    :message="requestErrors.purpose"
                  >
                    <b-input
                      type="textarea"
                      v-model="request.purpose"
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
                  {{ isSubmitting ? "Submitting..." : "Submit" }}
                </button>
                <b-button
                  class="is-danger is-light"
                  @click="cancelRequestForm()"
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
            <h5 class="table__header__title">My Requests</h5>
          </article>
        </header>
        <div class="card-content">
          <div class="content">
            <b-table
              :data="getMyEquipmentRequests.data"
              :default-sort-direction="defaultSortDirection"
              :sort-icon="sortIcon"
              :sort-icon-size="sortIconSize"
              :loading="isLoading"
              :checked-rows.sync="checkedRequests"
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
              >
                {{
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
                ><template v-if="props.row.it_approval">
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
                  <b-tooltip label="Edit" size="" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="pen"
                      :id="`request-id-${
                        props.row.id === getRequestId ? getRequestId : ''
                      }`"
                      @click="openEditRequestDropper(props.row)"
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
              <template #footer>
                <paginate
                  :state="getMyEquipmentRequests"
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
      ref="requestDropper"
      @esc-keydown="closeEditRequestDropper"
      @other-area-clicked="closeEditRequestDropper"
      class="dropper"
      align="left"
      :z-index="9999"
    >
      <h5 class="text-main pb-3">Edit Request</h5>
      <form @submit.prevent="updateRequest()">
        <b-field
          label="Category"
          :type="{
            'is-danger': requestErrors.category.length,
          }"
          :message="requestErrors.category"
        >
          <b-radio
            name="category"
            type="is-info"
            native-value="New Equipment"
            size=""
            v-model="request.category"
            >New Equipment</b-radio
          >
          <b-radio
            name="category"
            type="is-info"
            native-value="Upgrade Existing"
            size=""
            v-model="request.category"
            >Upgrade Existing</b-radio
          >
          <b-radio
            name="category"
            type="is-info"
            native-value="Replacement"
            size=""
            v-model="request.category"
            >Replacement</b-radio
          >
        </b-field>

        <b-field
          label="Type"
          :type="{
            'is-danger': requestErrors.type.length,
          }"
          :message="requestErrors.type"
        >
          <b-radio
            name="type"
            type="is-info"
            native-value="Hardware"
            size=""
            v-model="request.type"
            >Hardware</b-radio
          >
          <b-radio
            name="type"
            type="is-info"
            native-value="Software"
            size=""
            v-model="request.type"
            >Software</b-radio
          >
          <b-radio
            name="type"
            type="is-info"
            native-value="Infrastructure"
            size=""
            v-model="request.type"
            >Infrastructure</b-radio
          >
          <b-radio
            name="type"
            type="is-info"
            native-value="other"
            size=""
            v-model="request.type"
            >Other</b-radio
          >
        </b-field>

        <b-field
          v-if="showOtherType"
          label="Other Type"
          :type="{
            'is-danger': requestErrors.otherType.length,
          }"
          :message="requestErrors.otherType"
        >
          <b-input size="" expanded v-model="request.otherType"></b-input>
        </b-field>

        <b-field
          label="Item"
          :type="{
            'is-danger': requestErrors.item.length,
          }"
          :message="requestErrors.item"
        >
          <b-radio
            name="item"
            type="is-info"
            native-value="Laptop"
            size=""
            v-model="request.item"
            >Laptop</b-radio
          >
          <b-radio
            name="item"
            type="is-info"
            native-value="Extension Cord"
            size=""
            v-model="request.item"
            >Extension Cord</b-radio
          >
          <b-radio
            name="item"
            type="is-info"
            native-value="Projector"
            size=""
            v-model="request.item"
            >Projector</b-radio
          >
          <b-radio
            name="item"
            type="is-info"
            native-value="other"
            size=""
            v-model="request.item"
            >Other</b-radio
          >
        </b-field>

        <b-field
          label="Other Item"
          v-if="showOtherItem"
          :type="{
            'is-danger': requestErrors.otherItem.length,
          }"
          :message="requestErrors.otherItem"
        >
          <b-input size="" expanded v-model="request.otherItem"></b-input>
        </b-field>

        <b-field
          label="Quantity"
          :type="{
            'is-danger': requestErrors.quantity.length,
          }"
          :message="requestErrors.quantity"
        >
          <b-numberinput
            controls-alignment="right"
            controls-position="compact"
            :min="1"
            type="is-light"
            expanded
            v-model="request.quantity"
          ></b-numberinput>
        </b-field>

        <b-field
          label="Purpose"
          :type="{
            'is-danger': requestErrors.purpose.length,
          }"
          :message="requestErrors.purpose"
        >
          <b-input type="textarea" v-model="request.purpose"></b-input>
        </b-field>

        <hr />
        <b-field class="buttons">
          <button class="button is-success is-light" :disabled="isSubmitting">
            {{ isSubmitting ? "Saving..." : "Save" }}
          </button>
          <b-button
            class="is-danger is-light"
            @click="closeEditRequestDropper()"
            >Cancel</b-button
          >
        </b-field>
      </form>
    </dropper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Paginate from "../../Paginate";
import RequestFormModal from "./RequestFormModal";
export default {
  name: "MyRequestComponent",
  components: { Paginate, RequestFormModal },
  computed: {
    ...mapGetters(["getMyEquipmentRequests"]),
    getRequestId() {
      return this.requestId;
    },
  },
  mounted() {
    this.isLoading = true;
    this.$nextTick(() => {
      if (this.getMyEquipmentRequests.data.length > 0) {
        this.isLoading = false;
      } else {
        setTimeout(() => {
          this.isLoading = false;
          this.noRequestFound = true;
        }, 1000);
      }
    });
    this.$watch(
      () => this.request.type,
      (type) => {
        if (type && type === "other") {
          this.showOtherType = true;
        } else {
          this.showOtherType = false;
        }
      }
    );
    this.$watch(
      () => this.request.item,
      (item) => {
        if (item && item === "other") {
          this.showOtherItem = true;
        } else {
          this.showOtherItem = false;
        }
      }
    );
  },
  data() {
    return {
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      noRequestFound: false,
      isLoading: false,
      requestId: "",

      showOtherType: false,
      showOtherItem: false,

      toggleRequestForm: false,
      isSubmitting: false,
      checkedRequests: [],

      request: {
        category: "",
        type: "",
        otherType: "",
        item: "",
        otherItem: "",
        quantity: 1,
        purpose: "",
      },
      requestErrors: {
        category: [],
        type: [],
        otherType: [],
        item: [],
        otherItem: [],
        quantity: [],
        purpose: [],
      },
    };
  },
  methods: {
    ...mapActions(["dispatchEquipmentRequest"]),
    openEditRequestDropper(data) {
      const dropper = this.$refs.requestDropper;
      this.requestId = data.id;
      if (dropper) {
        this.request = {
          category: data.details.category,
          type: data.details.type,
          otherType: data.details.otherType,
          item: data.details.item,
          otherItem: data.details.otherItem,
          quantity: data.details.quantity,
          purpose: data.details.purpose,
        };
        dropper.open();
      }
    },
    closeEditRequestDropper() {
      const dropper = this.$refs.requestDropper;
      if (dropper) {
        dropper.close();
        this.$nextTick(() => {
          this.cancelRequestForm();
        });
      }
    },
    addRequest() {
      this.isSubmitting = true;
      this.setRequestErrors();
      this.$axios
        .post(`/dashboard/add-equipment-request`, this.request)
        .then((res) => {
          this.isSubmitting = false;
          if (res.status === 201) {
            this.clearRequestForm();
            this.dispatchEquipmentRequest({
              type: "ADD_MY_REQUEST",
              payload: res.data,
            });
            this.snackbar("Request sumitted successfully", "is-dark");
          }
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (err.response.status === 422) {
            this.setRequestErrors(err.response.data.errors);
          }
        });
    },
    updateRequest() {
      this.isSubmitting = true;
      this.setRequestErrors();
      this.$axios
        .put(
          `/dashboard/edit-equipment-request/${this.getRequestId}`,
          this.request
        )
        .then((res) => {
          this.isSubmitting = false;
          if (res.status === 200 && res.data.updated) {
            this.closeEditRequestDropper();
            this.dispatchEquipmentRequest({
              type: "UPDATE_MY_REQUEST",
              payload: res.data.request,
            });
            this.snackbar("Request updated successfully", "is-dark");
          }
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (err.response.status === 422) {
            this.setRequestErrors(err.response.data.errors);
          }
        });
    },
    setRequestErrors(err = {}) {
      this.requestErrors = {
        category: err.category || [],
        type: err.type || [],
        otherType: err.otherType || [],
        item: err.item || [],
        otherItem: err.otherItem || [],
        quantity: err.quantity || [],
        purpose: err.purpose || [],
      };
    },
    clearRequestForm() {
      this.request = {
        category: "",
        type: "",
        otherType: "",
        item: "",
        otherItem: "",
        quantity: 1,
        purpose: "",
      };
    },
    cancelRequestForm() {
      this.toggleRequestForm = false;
      this.$nextTick(() => {
        this.setRequestErrors();
        this.clearRequestForm();
      });
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
  },
};
</script>

<style lang="scss" scoped>
</style>