<template>
  <div class>
    <div class="content__split__right__tabs__myleave">
      <section class="b__collapse__section">
        <b-collapse class="card" animation="slide" aria-id="myentitlements">
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
            aria-controls="myentitlements"
          >
            <p class="card-header-title">My Entitlements</p>
            <a class="card-header-icon">
              <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <b-table
                :data="authUserLeaves"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                default-sort="name"
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
                >{{ props.row.name }}</b-table-column>

                <b-table-column field="type" label="Type" sortable v-slot="props">
                  <span class="is-capitalized">{{ props.row.type }}</span>
                </b-table-column>
                <b-table-column field="accrual" label="Accrual" sortable v-slot="props">
                  <span class="is-capitalized">{{ props.row.accrual }}</span>
                </b-table-column>
              </b-table>
            </div>
          </div>
        </b-collapse>
      </section>
    </div>
    <div class="content__split__right__tabs__myleave">
      <section class="b__collapse__section">
        <b-collapse :open="false" class="card" animation="slide" aria-id="entitlements">
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
            aria-controls="entitlements"
          >
            <p class="card-header-title">Entitlements</p>
            <a class="card-header-icon">
              <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <b-table
                :data="getLeaves"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                default-sort="name"
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
                >{{ props.row.name }}</b-table-column>

                <b-table-column field="type" label="Type" sortable v-slot="props">
                  <span class="is-capitalized">{{ props.row.type }}</span>
                </b-table-column>

                <b-table-column field="count" label="Minimum Leave" sortable v-slot="props">
                  <span>{{ props.row.leave_count +' '+ props.row.unit}}</span>
                </b-table-column>
                <b-table-column field="role" label="Role" sortable v-slot="props">
                  <span class="is-capitalized">{{ props.row.applicable['role'] }}</span>
                </b-table-column>
                <b-table-column field="gender" label="Gender" sortable v-slot="props">
                  <span class="is-capitalized">{{ props.row.applicable['gender'] }}</span>
                </b-table-column>
                <b-table-column
                  field="maritalStatus"
                  label="Marital Status"
                  sortable
                  v-slot="props"
                >
                  <span class="is-capitalized">{{ props.row.applicable['maritalStatus'] }}</span>
                </b-table-column>
              </b-table>
            </div>
          </div>
        </b-collapse>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MyEntitlementComponent",
  computed: {
    ...mapGetters(["getLeaves", "getLeaveBalance", "getAuthUser"]),
    authUserLeaves() {
      let leaves = [];
      this.getLeaveBalance.forEach((leave) => {
        if (leave.user_id === this.getAuthUser.id) {
          leaves = leave.entitlement;
        }
      });
      return leaves;
    },
  },
  created() {
    this.fetchLeaves();
    this.fetchLeaveBalance();
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
      perPage: 5,
    };
  },
  methods: {
    ...mapActions(["fetchLeaves", "fetchLeaveBalance"]),
  },
};
</script>

<style lang="scss" scoped>
.is-capitalized {
  text-transform: capitalize;
}
</style>
