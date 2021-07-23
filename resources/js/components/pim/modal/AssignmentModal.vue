<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title has-text-info">More Actions</p>
      <button type="button" class="delete" @click="cancelModal()" />
    </header>
    <section class="modal-card-body">
      <p v-if="nodataErr" class="has-text-danger mb-2">{{ nodataErr }}</p>
      <form @submit.prevent="updateAssignment('title')" class="mb-5">
        <div
          class="
            is-flex is-justify-content-space-between is-align-items-flex-end
          "
          style="width: 35rem"
        >
          <b-field
            label="Assign Job Title"
            class="expand-input"
            :type="{
              'is-danger': jobTitle.errors.length > 0,
            }"
            :message="jobTitle.errors"
          >
            <b-select type="is-info" expanded v-model="jobTitle.value">
              <option :value="t.id" v-for="t in getJobTitles" :key="t.id">
                {{ t.title }}
              </option>
            </b-select>
          </b-field>
          <b-field class="buttons">
            <button
              class="button is-success is-light"
              type="submit"
              :disabled="isSubmittingJobTitle"
            >
              {{ isSubmittingJobTitle ? "Assigning..." : "Assign" }}
            </button>
          </b-field>
        </div>
      </form>
      <form @submit.prevent="updateAssignment('employmentStatus')" class="mb-5">
        <div
          class="
            is-flex is-justify-content-space-between is-align-items-flex-end
          "
          style="width: 35rem"
        >
          <b-field
            label="Assign Employment Status"
            class="expand-input"
            :type="{
              'is-danger': empStatus.errors.length > 0,
            }"
            :message="empStatus.errors"
          >
            <b-select type="is-info" expanded v-model="empStatus.value">
              <option
                :value="s.id"
                v-for="(s, i) in getEmploymentStatus"
                :key="i"
              >
                {{ s.status }}
              </option>
            </b-select>
          </b-field>
          <b-field class="buttons">
            <button
              class="button is-success is-light"
              type="submit"
              :disabled="isSubmittingEmpStatus"
            >
              {{ isSubmittingEmpStatus ? "Assigning..." : "Assign" }}
            </button>
          </b-field>
        </div>
      </form>
      <form @submit.prevent="updateAssignment('branch')" class="mb-5">
        <div
          class="
            is-flex is-justify-content-space-between is-align-items-flex-end
          "
          style="width: 35rem"
        >
          <b-field
            label="Assign Branch"
            class="expand-input"
            :type="{
              'is-danger': branch.errors.length > 0,
            }"
            :message="branch.errors"
          >
            <b-select type="is-info" expanded v-model="branch.value">
              <option :value="b.id" v-for="(b, i) in getBranches" :key="i">
                {{ b.name }}
              </option>
            </b-select>
          </b-field>
          <b-field class="buttons">
            <button
              class="button is-success is-light"
              type="submit"
              :disabled="isSubmittingBranch"
            >
              {{ isSubmittingBranch ? "Assigning..." : "Assign" }}
            </button>
          </b-field>
        </div>
      </form>
      <form
        @submit.prevent="updateAssignment('department')"
        class="mb-5"
        v-if="staffToAssign.department_id"
      >
        <div
          class="
            is-flex is-justify-content-space-between is-align-items-flex-end
          "
          style="width: 35rem"
        >
          <b-field
            label="Assign Department"
            class="expand-input"
            :type="{
              'is-danger': department.errors.length > 0,
            }"
            :message="department.errors"
          >
            <b-select type="is-info" expanded v-model="department.value">
              <option :value="b.id" v-for="(b, i) in getDepartments" :key="i">
                {{ b.name }}
              </option>
            </b-select>
          </b-field>
          <b-field class="buttons">
            <button
              class="button is-success is-light"
              type="submit"
              :disabled="isSubmittingDepartment"
            >
              {{ isSubmittingDepartment ? "Assigning..." : "Assign" }}
            </button>
          </b-field>
        </div>
      </form>
      <form
        @submit.prevent="updateAssignment('unit')"
        class="mb-5"
        v-if="staffToAssign.unit_id"
      >
        <div
          class="
            is-flex is-justify-content-space-between is-align-items-flex-end
          "
          style="width: 35rem"
        >
          <b-field
            label="Assign Unit"
            class="expand-input"
            :type="{
              'is-danger': unit.errors.length > 0,
            }"
            :message="unit.errors"
          >
            <b-select type="is-info" expanded v-model="unit.value">
              <option :value="u.id" v-for="(u, i) in getUnits" :key="i">
                {{ u.name }}
              </option>
            </b-select>
          </b-field>
          <b-field class="buttons">
            <button
              class="button is-success is-light"
              type="submit"
              :disabled="isSubmittingUnit"
            >
              {{ isSubmittingUnit ? "Assigning..." : "Assign" }}
            </button>
          </b-field>
        </div>
      </form>
    </section>
    <footer class="modal-card-foot buttons is-flex is-justify-content-flex-end">
      <b-button class="is-dark is-light" @click="cancelModal()">Close</b-button>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AssignmentModal",
  props: { staffToAssign: { require: true } },
  computed: {
    ...mapGetters([
      "getPositions",
      "getEmploymentStatus",
      "getBranches",
      "getDepartments",
      "getUnits",
      "getJobTitles",
      "getJobCategories",
    ]),
  },
  beforeMount() {
    this.empStatus.value = this.staffToAssign.employmentStatusId;
    this.jobTitle.value = this.staffToAssign.jobTitleId;
    this.department.value = this.staffToAssign.department_id;
    this.unit.value = this.staffToAssign.unit_id;
    this.branch.value = this.staffToAssign.branch_id;
  },
  data() {
    return {
      isSubmittingJobTitle: false,
      isSubmittingEmpStatus: false,
      isSubmittingBranch: false,
      isSubmittingDepartment: false,
      isSubmittingUnit: false,
      isSubmittingPosition: false,
      departmentUnits: [],
      jobTitle: {
        value: "",
        errors: [],
      },
      empStatus: {
        value: "",
        errors: [],
      },
      branch: {
        value: "",
        errors: [],
      },
      department: {
        value: "",
        errors: [],
      },
      unit: {
        value: "",
        errors: [],
      },
      nodataErr: "",
    };
  },
  methods: {
    ...mapActions(["dispatchStaff"]),
    cancelModal() {
      this.$emit("close");
    },
    getStaffDepartmentUnits(id) {
      if (this.isNull(id)) {
        return this.getUnits.map((u) => u.deparment_id === id);
      }
      return [];
    },
    updateAssignment(type) {
      let data;
      if (type === "title") {
        this.isSubmittingJobTitle = true;
        data = { title: this.jobTitle.value };
      }
      if (type === "employmentStatus") {
        this.isSubmittingEmpStatus = true;
        data = { employmentStatus: this.empStatus.value };
      }
      if (type === "branch") {
        this.isSubmittingBranch = true;
        data = { branch: this.branch.value };
      }
      if (type === "department") {
        this.isSubmittingDepartment = true;
        data = { department: this.department.value };
      }
      if (type === "unit") {
        this.isSubmittingUnit = true;
        data = { unit: this.unit.value };
      }
      this.$axios
        .put(
          `/dashboard/ess/update-job-assignment/${this.staffToAssign.id}/${type}`,
          data
        )
        .then((res) => {
          this.isSubmittingJobTitle = false;
          this.isSubmittingEmpStatus = false;
          this.isSubmittingBranch = false;
          this.isSubmittingDepartment = false;
          this.isSubmittingUnit = false;
          this.isSubmittingPosition = false;
          if (res.status === 200 && res.data.assigned) {
            this.dispatchStaff({
              type: "UPDATE_JOB",
              payload: { id: this.staffToAssign.id, data: res.data.staff },
            });
          }
          if (res.status === 200 && res.data.nodata) {
            this.nodataErr =
              "Assigment failed! Please configure staff job profile.";
            setTimeout(() => {
              this.nodataErr = "";
            }, 5000);
          }
        })
        .catch((err) => {});
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