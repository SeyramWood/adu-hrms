<template>
  <form>
    <div class="modal-card" style="width: 700px">
      <header class="modal-card-head">
        <p class="modal-card-title text-main label pt-2">Assign Shift</p>
        <button type="button" class="delete" @click="cancelAssignmentForm()" />
      </header>
      <section class="modal-card-body">
        <b-field horizontal label="Applicable for::" type="is-info">
          <b-field>
            <b-radio
              v-model="applicableFor"
              native-value="staff"
              type="is-info"
              expanded
              name="usertype"
            >
              Staff
            </b-radio>
            <b-radio
              v-model="applicableFor"
              native-value="group"
              type="is-info"
              expanded
              name="usertype"
            >
              Group
            </b-radio>
          </b-field>
        </b-field>
        <template v-if="applicableFor === 'group'">
          <b-field horizontal label="Branch">
            <treeselect
              :multiple="true"
              :options="getBrhs"
              placeholder="Select branch(es)..."
              v-model="shift.branches"
            />
          </b-field>
          <b-field horizontal label="Department">
            <treeselect
              :multiple="true"
              :options="getDpts"
              placeholder="Select department(s)..."
              v-model="shift.departments"
            />
          </b-field>
          <b-field horizontal label="Role">
            <treeselect
              :multiple="true"
              :options="getRoles"
              placeholder="Select role(s)..."
              v-model="shift.roles"
            />
          </b-field>
        </template>
        <template v-if="applicableFor === 'staff'">
          <b-field horizontal label="Staff">
            <div class="workshift">
              <div class="workshift__card">
                <div class="workshift__card__header">
                  <span
                    ><b-checkbox
                      :indeterminate="availableStaff.length > 0"
                      type="is-info"
                    >
                    </b-checkbox
                  ></span>
                  <p>
                    {{ `${availableStaff.length}/20 selected` }}
                  </p>
                </div>

                <div class="workshift__card__content">
                  <div class="workshift__card__content__search">
                    <b-input
                      placeholder="Search..."
                      type="search"
                      icon-right="search"
                      icon-pack="fas"
                    >
                    </b-input>
                  </div>

                  <div class="checkbox__lists">
                    <div
                      class="checkbox__lists__list"
                      :key="`${user}-a`"
                      v-for="user in 20"
                    >
                      <label>
                        <input
                          type="checkbox"
                          :value="user"
                          v-model="availableStaff"
                        />
                        <span>{{ `hiogoigoigoig` }}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="workshift__card__buttons">
                <b-button
                  class="is-info is-light"
                  pack="fas"
                  icon-right="angle-right"
                  expanded
                  :disabled="availableStaff.length === 0"
                  @click="assignStaff()"
                ></b-button>

                <b-button
                  class="is-info is-light"
                  pack="fas"
                  icon-left="angle-left"
                  expanded
                  :disabled="selectedStaff.length === 0"
                  @click="removeStaff()"
                ></b-button>
              </div>
              <div class="workshift__card">
                <div class="workshift__card__header">
                  <span
                    ><b-checkbox
                      :indeterminate="indeterminate"
                      type="is-info"
                      v-model="selectAllSectedStaff"
                    >
                    </b-checkbox
                  ></span>
                  <p>
                    {{
                      ` ${removedStaff.length}/${selectedStaff.length} selected`
                    }}
                  </p>
                </div>

                <div class="workshift__card__content">
                  <div class="workshift__card__content__search">
                    <b-input
                      placeholder="Search..."
                      type="search"
                      icon-right="search"
                      icon-pack="fas"
                    >
                    </b-input>
                  </div>

                  <div class="checkbox__lists">
                    <div
                      class="checkbox__lists__list"
                      v-for="user in selectedStaff"
                      :key="`${user}-r`"
                    >
                      <label>
                        <input
                          type="checkbox"
                          :value="user"
                          v-model="removedStaff"
                        />
                        <span>{{ user }}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-field>
        </template>
        <b-field horizontal label="Select Shift">
          <treeselect
            placeholder="Select shift..."
            :multiple="false"
            :options="getShifts"
            v-model="shift.shift"
          />
        </b-field>
      </section>
      <footer class="modal-card-foot justify-content-end">
        <b-field class="buttons">
          <button class="button is-success is-light">
            {{ isSubmittingWorkShift ? "Saving..." : "Save" }}
          </button>
          <b-button class="is-danger is-light" @click="cancelAssignmentForm()"
            >Cancel</b-button
          >
        </b-field>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MultiSelect from "../../MultiSeclect";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "AssignShiftModal",
  components: { MultiSelect, Treeselect },
  // props: { staffToAssignId: { require: true } },
  computed: {
    ...mapGetters([
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
    indeterminate() {
      if (this.removedStaff.length === this.selectedStaff.length) {
        if (this.removedStaff.length > 0 && this.selectedStaff.length > 0) {
          this.selectAllSectedStaff = true;
        }
        return false;
      }
      if (this.removedStaff.length === 0) {
        this.selectAllSectedStaff = false;
        return false;
      }
      if (this.removedStaff.length > 0) {
        return true;
      }
    },
  },
  data() {
    return {
      isSubmittingJobTitle: false,
      isSubmittingEmpStatus: false,
      isSubmittingBranch: false,
      isSubmittingDepartment: false,
      isSubmittingPosition: false,
      isSubmittingWorkShift: false,
      applicableFor: "staff",
      workShiftErrors: [],
      workShift: [],
      weekDefinitions: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturay",
        "Sunday",
        "Weekdays",
        "Weekend",
        "All",
      ],
      availableStaff: [],
      selectedStaff: [],
      removedStaff: [],
      selectAllSectedStaff: false,
      shiftDropperId: "",
      selectedWorkShifts: [],
      shift: {
        branches: [],
        departments: [],
        roles: [],
        staff: [],
        shift: "",
      },
      nodataErr: "",
    };
  },
  methods: {
    ...mapActions(["dispatchStaff"]),
    assignStaff() {
      this.selectedStaff = [...this.availableStaff];
      this.selectAllSectedStaff = false;
    },
    removeStaff() {
      this.selectedStaff = this.selectedStaff.filter((s) => {
        if (!this.removedStaff.includes(s)) return s;
      });
      this.removedStaff = [];
      if (this.selectedStaff.length === 0) {
        this.selectAllSectedStaff = false;
      }
    },
    cancelAssignmentForm() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.expand-input {
  width: 100%;
  margin-right: 1rem;
  margin-bottom: -0.4rem !important;
}
</style>