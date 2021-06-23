<template>
  <div class="modal-card" style="width:900px">
    <header class="modal-card-head">
      <p class="modal-card-title">New Leave Type</p>
      <button class="delete" type="button" @click="closeModal()" />
    </header>
    <section class="modal-card-body">
      <b-tabs :animated="false" expanded>
        <b-tab-item label="Leave Entitlement">
          <form
            action
            @submit.prevent="setMethods? updateLeavetype() : addLeaveType()"
            class="leave__type__form"
          >
            <section>
              <b-field
                label="Name:"
                horizontal
                :type="{'is-danger': leaveTypeErrors.name.length > 0}"
                :message="leaveTypeErrors.name"
              >
                <b-input size="is-small" v-model="leaveType.name"></b-input>
              </b-field>
              <b-field label="Type:" horizontal>
                <div style="width:50%">
                  <b-radio
                    size="is-small"
                    name="type"
                    v-model="leaveType.type"
                    native-value="paid"
                  >Paid</b-radio>
                  <b-radio
                    size="is-small"
                    name="type"
                    v-model="leaveType.type"
                    native-value="unpaid"
                  >Unpaid</b-radio>
                  <b-radio
                    size="is-small"
                    name="type"
                    v-model="leaveType.type"
                    native-value="on duty"
                  >On Duty</b-radio>
                </div>
              </b-field>
              <b-field label="Leave Unit:" horizontal>
                <div style="width:50%">
                  <b-radio
                    size="is-small"
                    name="unit"
                    v-model="leaveType.unit"
                    native-value="days"
                  >Days</b-radio>
                  <b-radio
                    size="is-small"
                    name="unit"
                    v-model="leaveType.unit"
                    native-value="hours"
                  >Hours</b-radio>
                </div>
              </b-field>
              <b-field
                label="Description:"
                horizontal
                :type="{'is-danger': leaveTypeErrors.description.length > 0}"
                :message="leaveTypeErrors.description"
              >
                <b-input type="textarea" v-model="leaveType.description" size="is-small"></b-input>
              </b-field>
              <h5>Applicable For::</h5>
              <b-field label="For:" horizontal>
                <div style="width:50%">
                  <b-radio
                    size="is-small"
                    v-model="leaveType.applicableFor.for"
                    name="for"
                    native-value="role"
                  >Role</b-radio>
                  <b-radio
                    size="is-small"
                    v-model="leaveType.applicableFor.for"
                    name="for"
                    native-value="staff"
                  >Staff</b-radio>
                </div>
              </b-field>
              <section style="width:100%">
                <b-field
                  label="Role:"
                  horizontal
                  :type="{'is-danger': leaveTypeErrors.applicableFor.role.length > 0}"
                  :message="leaveTypeErrors.applicableFor.role"
                >
                  <b-select size="is-small" expanded v-model="leaveType.applicableFor.role">
                    <option value="all">All</option>
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                  </b-select>
                </b-field>
                <b-field label="Gender:" horizontal>
                  <div style="width:50%">
                    <b-radio
                      size="is-small"
                      name="gender"
                      v-model="leaveType.applicableFor.gender"
                      native-value="all"
                    >All</b-radio>
                    <b-radio
                      size="is-small"
                      name="gender"
                      v-model="leaveType.applicableFor.gender"
                      native-value="male"
                    >Male</b-radio>
                    <b-radio
                      size="is-small"
                      name="gender"
                      v-model="leaveType.applicableFor.gender"
                      native-value="female"
                    >Female</b-radio>
                  </div>
                </b-field>
                <b-field label="Marital Status:" horizontal>
                  <div style="width:70%">
                    <b-radio
                      size="is-small"
                      name="maritalStatus"
                      v-model="leaveType.applicableFor.maritalStatus"
                      native-value="all"
                    >All</b-radio>
                    <b-radio
                      size="is-small"
                      name="maritalStatus"
                      v-model="leaveType.applicableFor.maritalStatus"
                      native-value="single"
                    >Single</b-radio>
                    <b-radio
                      size="is-small"
                      name="maritalStatus"
                      v-model="leaveType.applicableFor.maritalStatus"
                      native-value="married"
                    >Married</b-radio>
                  </div>
                </b-field>
              </section>
              <h5>Entitlement::</h5>
              <b-field
                label="Period:"
                horizontal
                :type="{'is-danger': leaveTypeErrors.entitlement.period.length > 0}"
                :message="leaveTypeErrors.entitlement.period"
              >
                <b-select size="is-small" v-model="leaveType.entitlement.period" expanded>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quaterly</option>
                  <option value="annually">Annually</option>
                </b-select>
                <div style="width:10%">Accrual</div>
              </b-field>
              <b-field
                label="On:"
                horizontal
                :type="{'is-danger': leaveTypeErrors.entitlement.on.length > 0}"
                :message="leaveTypeErrors.entitlement.on"
              >
                <b-select size="is-small" v-model="leaveType.entitlement.on" expanded>
                  <option value="0">Beginning of accrual period</option>
                  <option value="1">End of accrual period</option>
                  <option value="2">Base on Date of joining</option>
                </b-select>
              </b-field>
              <b-field label="For:" horizontal>
                <div style="width:70%">
                  <b-radio
                    size="is-small"
                    name="entitlementfor"
                    v-model="leaveType.entitlement.for"
                    native-value="all"
                  >All Staff</b-radio>
                  <b-radio
                    size="is-small"
                    name="entitlementfor"
                    v-model="leaveType.entitlement.for"
                    native-value="experinced"
                  >Experinced Based</b-radio>
                </div>
              </b-field>
              <b-field
                label="Leave Count:"
                horizontal
                :type="{'is-danger': leaveTypeErrors.entitlement.leaveCount.length > 0}"
                :message="leaveTypeErrors.entitlement.leaveCount"
              >
                <b-input
                  size="is-small"
                  v-model="leaveType.entitlement.leaveCount"
                  expanded
                  value="0"
                ></b-input>
                <div>day(s)</div>
              </b-field>
            </section>
            <footer class="modal-card-foot">
              <button
                class="button is-success is-light"
                type="submit"
              >{{ isSubmittingLeaveType? 'Submitting...': setMethods? 'Save' : 'Add'}}</button>
              <button class="button is-danger is-light" type="button" @click="closeModal()">Close</button>
            </footer>
          </form>
        </b-tab-item>
        <b-tab-item label="Advance Configurations">
          <form action class="leave__type__form___advance">
            <section>
              <div class="field">
                <b-checkbox size="is-small">Do not allow beyond the permitted limit</b-checkbox>
              </div>
              <div class="field">
                <b-checkbox size="is-small">Round-off permitted Leave count</b-checkbox>
              </div>
              <div class="field">
                <b-checkbox size="is-small">Exclude holidays for Leave</b-checkbox>
              </div>
              <div class="field">
                <b-checkbox size="is-small">Exclude weekeds for Leave</b-checkbox>
              </div>
              <div class="field">
                <div class="columns">
                  <div class="column is-1">
                    <b-checkbox size="is-small">Include</b-checkbox>
                  </div>
                  <div class="column is-11">
                    <div style="display:flex; justify-content:flex-start; align-items:center">
                      <div style="width:30%;margin-left:0">
                        <b-select size="is-small" expanded>
                          <option value>All</option>
                          <option value>Ess</option>
                          <option value>Adenta</option>
                        </b-select>
                      </div>
                      <span
                        style="margin:0 .5rem; font-size:0.75rem"
                      >, if the number of consecutive days applied for Leave exceeds</span>
                      <b-input size="is-small"></b-input>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="columns">
                  <div class="column is-5">
                    <b-checkbox
                      size="is-small"
                    >Maximum number of consecutive day(s) of Leave allowed</b-checkbox>
                  </div>
                  <div class="column is-7">
                    <div style="display:flex; justify-content:flex-start; align-items:center;">
                      <b-input size="is-small"></b-input>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="columns">
                  <div class="column is-5">
                    <b-checkbox size="is-small">Leave application should be submitted before</b-checkbox>
                  </div>
                  <div class="column is-7">
                    <div style="display:flex; justify-content:flex-start; align-items:center;">
                      <b-input size="is-small"></b-input>
                      <span style="margin-left:.5rem; font-size:0.75rem">day(s)</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 style="margin:1rem 0; font-weight:bold;">New joinee Leave entitlement details::</h3>
              <b-field label="Consider Date of joining:" horizontal>
                <b-checkbox size="is-small"></b-checkbox>
              </b-field>
              <b-field label="Probation period:" horizontal>
                <div style="width:50%">
                  <b-radio size="is-small" name="pp" native-value="Paid">Calendar days</b-radio>
                  <b-radio size="is-small" name="pp" native-value="Unpaid">Bussiness days</b-radio>
                </div>
              </b-field>
              <b-field label="No. of waiting periods day(s):" horizontal>
                <b-input size="is-small"></b-input>
              </b-field>
              <b-field label="Initial value during probation period:" horizontal>
                <b-input size="is-small"></b-input>
              </b-field>
              <b-field label="Joining month Leave count:" horizontal>
                <span style="font-size:0.75rem">If the date of joining is after</span>
                <b-input size="is-small"></b-input>
                <span
                  style="font-size:0.75rem"
                >of the month, then the Leave count for the month should be</span>
                <b-input size="is-small"></b-input>
              </b-field>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success is-light">Save</button>
              <button class="button is-danger is-light" type="button" @click="$emit('close')">Close</button>
            </footer>
          </form>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LeavePolicyModalComponent",
  props: {
    leaveType: { type: Object },
    setLeaveTypeSubmitMethod: { type: Boolean },
  },
  computed: {
    setMethods() {
      return (this.toggleLeaveTypeSubmitMethod = this.setLeaveTypeSubmitMethod);
    },
  },
  data() {
    return {
      isSubmittingLeaveType: false,
      toggleLeaveTypeSubmitMethod: false,
      leaveTypeErrors: {
        name: [],
        type: [],
        unit: [],
        description: [],
        applicableFor: {
          for: [],
          role: [],
          gender: [],
          maritalStatus: [],
        },
        entitlement: {
          period: [],
          on: [],
          for: [],
          leaveCount: [],
        },
      },
    };
  },
  methods: {
    ...mapActions(["fetchLeaves"]),
    closeModal() {
      this.cancelLeaveTypeForm();
      this.toggleLeaveTypeSubmitMethod = false;
      this.$emit("close");
      this.$emit("toggleMethods", this.toggleLeaveTypeSubmitMethod);
    },
    addLeaveType() {
      this.setLeaveTypeErrors();
      this.isSubmittingLeaveType = true;
      this.$axios
        .post("/dashboard/add-leave-type", this.leaveType)
        .then((res) => {
          this.cancelLeaveTypeForm();
          this.fetchLeaves();
          setTimeout(() => {
            this.toast("Leave type added successfully", "is-dark");
            this.isSubmittingLeaveType = false;
          }, 1000);
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setLeaveTypeErrors(err.response.data.errors);
              this.isSubmittingLeaveType = false;
            }, 1000);
          }
        });
    },
    updateLeavetype() {
      this.setLeaveTypeErrors();
      this.isSubmittingLeaveType = true;
      this.$axios
        .post("/dashboard/update-leave-type", this.leaveType)
        .then((res) => {
          this.fetchLeaves();
          setTimeout(() => {
            this.toast("Leave type updated successfully", "is-dark");
            this.isSubmittingLeaveType = false;
            this.closeModal();
          }, 1000);
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setLeaveTypeErrors(err.response.data.errors);
              this.isSubmittingLeaveType = false;
            }, 1000);
          }
        });
    },
    setLeaveTypeErrors(error = {}) {
      this.leaveTypeErrors.name = error.name ? error.name : [];
      this.leaveTypeErrors.description = error.description
        ? error.description
        : [];
      this.leaveTypeErrors.applicableFor.role = error["applicableFor.role"]
        ? error["applicableFor.role"]
        : [];
      this.leaveTypeErrors.entitlement.period = error["entitlement.period"]
        ? error["entitlement.period"]
        : [];
      this.leaveTypeErrors.entitlement.leaveCount = error[
        "entitlement.leaveCount"
      ]
        ? error["entitlement.leaveCount"]
        : [];
    },
    cancelLeaveTypeForm() {
      this.leaveType.name = "";
      this.leaveType.description = "";
      this.leaveType.applicableFor.role = "";
      this.leaveType.applicableFor.for = "role";
      this.leaveType.applicableFor.gender = "all";
      this.leaveType.applicableFor.maritalStatus = "all";

      this.leaveType.entitlement.period = "";
      this.leaveType.entitlement.on = "";
      this.leaveType.entitlement.leaveCount = "";
      this.leaveType.entitlement.for = "all";
      this.setLeaveTypeErrors();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
