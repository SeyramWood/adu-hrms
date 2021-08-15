<template>
  <div>
    <b-tabs type="is-toggle" size="" :animated="false" expanded>
      <b-tab-item label="My Requests">
        <my-request-component></my-request-component>
      </b-tab-item>
      <b-tab-item label="My Allocations">
        <my-allocation-component></my-allocation-component>
      </b-tab-item>
      <b-tab-item
        label="Requests"
        v-if="anyPermission('hod', 'approve_it_equipment')"
      >
        <request-component></request-component>
      </b-tab-item>
      <b-tab-item
        label="Allocations"
        v-if="anyPermission('hod', 'approve_it_equipment')"
      >
        <allocation-component></allocation-component>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import MyRequestComponent from "./equipment/MyRequestComponent";
import MyAllocationComponent from "./equipment/MyAllocationComponent";
import RequestComponent from "./equipment/RequestComponent";
import AllocationComponent from "./equipment/AllocationComponent";
export default {
  name: "EquipmentComponent",
  components: {
    MyRequestComponent,
    MyAllocationComponent,
    RequestComponent,
    AllocationComponent,
  },
  mounted() {
    this.$watch(
      () => this.request.details.type,
      (type) => {
        if (type && type === "other") {
          this.showOtherType = true;
        } else {
          this.showOtherType = false;
        }
      }
    );
    this.$watch(
      () => this.request.details.item,
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
      isPaginated: true,
      isPaginationSimple: true,
      paginationPosition: "bottom",
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 50,

      showOtherType: false,
      showOtherItem: false,

      toggleRequestForm: false,
      isSubmitting: false,
      checkedJobCats: [],

      request: {
        details: {
          title: "",
          category: "",
          type: "",
          otherType: "",
          item: "",
          otherItem: "",
          quantity: 1,
          purpose: "",
        },
        approval: {
          name: "",
          initials: "",
          date: null,
        },
        itDpt: {
          status: "",
          reason: "",
          availability: "",
          supplier: "",
          staff: "",
          initials: "",
          date: null,
        },
      },
      requestErrors: {
        other: {
          type: "",
          item: "",
        },
        details: {
          title: [],
          category: [],
          type: [],
          otherType: [],
          item: [],
          otherItem: [],
          quantity: [],
          purpose: [],
        },
        approval: {
          name: [],
          initials: [],
          date: [],
        },
        itDpt: {
          status: [],
          reason: [],
          availability: [],
          supplier: [],
          staff: [],
          initials: [],
          date: [],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>