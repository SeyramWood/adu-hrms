<template>
  <div class>
    <div class="content__split__right__tabs__myleave">
      <section class="b__collapse__section">
        <b-collapse :open="true" class="card" animation="slide" aria-id="myleavelist">
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
            aria-controls="myleavelist"
          >
            <p class="card-header-title">Leave Requests</p>
            <a class="card-header-icon">
              <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="content__split__right__tabs__myleave">
                <section class="b__collapse__section">
                  <b-collapse
                    class="card"
                    v-model="isToggleApplyLeaveForm"
                    animation="slide"
                    aria-id="myleave"
                  >
                    <div
                      slot="trigger"
                      slot-scope="props"
                      class="card-header"
                      role="button"
                      aria-controls="myleave"
                    >
                      <p class="card-header-title">
                        Appy Leave &nbsp;
                        <span
                          class="message is-danger"
                          v-if="insufficientBalanceError"
                        >
                          <span
                            class="message-body"
                            style="padding: .3rem 1rem;"
                          >{{insufficientBalanceError}}</span>
                        </span>
                      </p>
                      <a class="card-header-icon">
                        <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
                      </a>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <div class="columns">
                          <div class="column is-7">
                            <form action @submit.prevent="applyLeave()" class="leave__type__form">
                              <section>
                                <b-field label="Select Leave Type:" horizontal>
                                  <b-select
                                    size="is-small"
                                    expanded
                                    v-model="leaveRequest.leaveType"
                                  >
                                    <option
                                      :value="leave.name"
                                      v-for="(leave) in authUserLeaves"
                                      :key="leave.id"
                                    >{{leave.name}}</option>
                                  </b-select>
                                </b-field>

                                <b-field label="Date:" horizontal>
                                  <div class="columns">
                                    <div class="column is-6">
                                      <b-field label="From">
                                        <b-datepicker
                                          size="is-small"
                                          pack="fas"
                                          icon="calendar"
                                          v-model="leaveRequest.from"
                                        ></b-datepicker>
                                      </b-field>
                                    </div>
                                    <div class="column is-6">
                                      <b-field label="to">
                                        <b-datepicker
                                          size="is-small"
                                          pack="fas"
                                          icon="calendar"
                                          v-model="leaveRequest.to"
                                        ></b-datepicker>
                                      </b-field>
                                    </div>
                                  </div>
                                </b-field>

                                <b-field label="Total:" horizontal>
                                  <div class="columns">
                                    <div class="column is-6">
                                      <b-input
                                        size="is-small"
                                        expanded
                                        value="1"
                                        disabled="true"
                                        v-model="leaveRequest.total"
                                      ></b-input>
                                    </div>
                                    <div class="column is-6">
                                      <p>day(s)</p>
                                    </div>
                                  </div>
                                </b-field>
                                <b-field label="Reason:" horizontal>
                                  <b-input
                                    type="textarea"
                                    size="is-small"
                                    expanded
                                    v-model="leaveRequest.reason"
                                  ></b-input>
                                </b-field>
                              </section>
                              <section class="mt-5">
                                <button
                                  class="button is-success is-light"
                                  type="submit"
                                >{{ isSubmittingApplyLeave? 'Submitting...': 'Add'}}</button>
                                <button
                                  class="button is-danger is-light"
                                  type="button"
                                  @click="cancelApplyLeaveFrom()"
                                >Close</button>
                              </section>
                            </form>
                          </div>
                          <div class="column is-5">
                            <div class="card">
                              <div class="card-content">
                                <div class="content" style="font-size:.75rem">
                                  <div class="columns" style="margin-bottom:-1.2rem">
                                    <div class="column is-10">
                                      <b>As of {{formatDate2(new Date())}}</b>
                                    </div>
                                    <div class="column is-2">
                                      <b>Day(s)</b>
                                    </div>
                                  </div>
                                  <div class="columns" style="margin-bottom:-1.2rem">
                                    <div class="column is-10">
                                      <p>Available balance</p>
                                    </div>
                                    <div class="column is-2">
                                      <p>{{ leaveRequest.availableBalance }}</p>
                                    </div>
                                  </div>
                                  <div class="columns" style="margin-bottom:-1.2rem">
                                    <div class="column is-10">
                                      <p>Currently booked</p>
                                    </div>
                                    <div class="column is-2">
                                      <p>{{leaveRequest.total}}</p>
                                    </div>
                                  </div>
                                  <div class="columns">
                                    <div class="column is-10">
                                      <p>New balance</p>
                                    </div>
                                    <div class="column is-2">
                                      <p>{{newBalance? newBalance: ''}}</p>
                                    </div>
                                  </div>
                                  <!-- <b style="margin-bottom:1rem">As of 31-Dec-2020</b>
                                  <div class="columns">
                                    <div class="column is-10">
                                      <p>Estimated balance</p>
                                    </div>
                                    <div class="column is-2">
                                      <p>6</p>
                                    </div>
                                  </div>-->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-collapse>
                </section>
              </div>

              <section>
                <b-table
                  :data="getMyLeaveRequest"
                  :paginated="isPaginated"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :pagination-simple="isPaginationSimple"
                  :pagination-position="paginationPosition"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  default-sort="date"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column field="date" label="Date" sortable v-slot="props">
                    <span
                      class="tag"
                    >{{`${formatDateShort2(props.row.from)} - ${formatDateShort2(props.row.to)}`}}</span>
                  </b-table-column>

                  <b-table-column field="type" label="Type" sortable v-slot="props">
                    <span class="is-capitalized">{{ props.row.type }}</span>
                  </b-table-column>
                  <b-table-column field="accrual" label="Days" sortable v-slot="props">
                    <span class="is-capitalized">{{ props.row.days }}</span>
                  </b-table-column>
                  <b-table-column field="accrual" label="New Balance" sortable v-slot="props">
                    <span class="is-capitalized">{{ props.row.new_balance }}</span>
                  </b-table-column>
                  <b-table-column field="accrual" label="Old Balance" sortable v-slot="props">
                    <span class="is-capitalized">{{ props.row.prev_balance }}</span>
                  </b-table-column>
                  <b-table-column field="accrual" label="Reason" sortable v-slot="props">
                    <span
                      class="is-capitalized"
                    >{{ `${props.row.reason !== null ? props.row.reason.substring(0,25)+'...' : ''}` }}</span>
                  </b-table-column>
                  <b-table-column field="accrual" label="Status" sortable v-slot="props">
                    <span
                      class="is-capitalized tag"
                      :class="leaveRequestStatus(props.row.status)"
                    >{{ props.row.status }}</span>
                  </b-table-column>
                  <b-table-column field="actions" label="Actions">
                    <div class="b-tooltips">
                      <b-tooltip label="Cancel" type="is-dark">
                        <b-button
                          class="is-default is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="times"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                        ></b-button>
                      </b-tooltip>
                    </div>
                  </b-table-column>
                </b-table>
              </section>
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
  name: "MyLeaveComponent",
  computed: {
    ...mapGetters([
      "getLeaves",
      "getPersonalDetails",
      "getAuthUser",
      "getLeaveBalance",
      "getProfile",
      "getMyLeaveRequest",
    ]),
    authUserLeaves() {
      let leaves = [];
      this.getLeaveBalance.forEach((leave) => {
        if (leave.user_id === this.getAuthUser.id) {
          leaves = leave.entitlement;
        }
      });
      return leaves;
    },
    newBalance() {
      return +(
        Math.round(
          this.leaveRequest.availableBalance - this.leaveRequest.total + "e+2"
        ) + "e-2"
      );
    },
  },
  created() {
    this.fetchLeaves();
    this.fetchLeaveBalance();
    this.fetchMyLeaveRequest();
    this.$watch(
      () => this.leaveRequest.leaveType,
      (value) => {
        const leave = this.authUserLeaves.find((val) => val.name === value);
        this.leaveRequest.availableBalance = +(
          Math.round(leave.accrual + "e+2") + "e-2"
        );
        this.leaveCount = leave.leaveCount;
      }
    );
    this.$watch(
      () => this.leaveRequest.from,
      (value) => {
        this.leaveRequest.total = this.formatDurationInDay(
          value,
          this.leaveRequest.to
        );
      }
    );
    this.$watch(
      () => this.leaveRequest.to,
      (value) => {
        this.leaveRequest.total = this.formatDurationInDay(
          this.leaveRequest.from,
          value
        );
      }
    );
  },
  mounted() {},
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
      isSubmittingApplyLeave: false,
      isToggleApplyLeaveForm: false,
      leaveCount: undefined,
      insufficientBalanceError: "",
      leaveRequest: {
        leaveType: "",
        from: new Date(),
        to: new Date(),
        total: "",
        newBalance: undefined,
        availableBalance: undefined,
        reason: "",
      },
    };
  },
  methods: {
    ...mapActions(["fetchLeaves", "fetchLeaveBalance", "fetchMyLeaveRequest"]),
    applyLeave() {
      this.isSubmittingApplyLeave = true;
      this.leaveRequest.newBalance = this.newBalance;
      //   this.$axios
      //     .post(`/dashboard/add-leave-request`, this.leaveRequest)
      //     .then((res) => {
      //       this.fetchMyLeaveRequest();
      //       setTimeout(() => {
      //         this.toast("Request sent successfully", "is-dark");
      //         this.isSubmittingApplyLeave = false;
      //       }, 1000);
      //     })
      //     .catch((err) => {
      //       if (err.response.status === 422) {
      //         console.log(err.response.data.errors);
      //         this.isSubmittingApplyLeave = false;
      //       }
      //     });
      if (this.leaveRequest.availableBalance >= this.leaveCount) {
        this.leaveRequest.newBalance = this.newBalance;
        this.$axios
          .post(`/dashboard/add-leave-request`, this.leaveRequest)
          .then((res) => {
            this.fetchMyLeaveRequest();
            setTimeout(() => {
              this.toast("Request sent successfully", "is-dark");
            }, 1000);
          })
          .catch((err) => {
            if (err.response.status === 422) {
              console.log(err.response.data.errors);
            }
            this.isSubmittingApplyLeave = false;
          });
      } else {
        this.insufficientBalanceError = `In sufficient leave balance, ${this.leaveCount} days or more is required to make the request`;
        setTimeout(() => {
          this.insufficientBalanceError = "";
          this.isSubmittingApplyLeave = false;
        }, 5000);
      }
    },
    cancelApplyLeaveFrom() {
      this.isToggleApplyLeaveForm = !this.isToggleApplyLeaveForm;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
