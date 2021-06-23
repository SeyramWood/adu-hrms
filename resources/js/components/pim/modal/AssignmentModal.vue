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
          class="is-flex is-justify-content-space-between is-align-items-flex-end"
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
          class="is-flex is-justify-content-space-between is-align-items-flex-end"
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
          class="is-flex is-justify-content-space-between is-align-items-flex-end"
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
      <form @submit.prevent="updateAssignment('department')" class="mb-5">
        <div
          class="is-flex is-justify-content-space-between is-align-items-flex-end"
          style="width: 35rem"
        >
          <b-field
            label="Assign Department"
            class="expand-input"
            :type="{
              'is-danger': deparment.errors.length > 0,
            }"
            :message="deparment.errors"
          >
            <b-select type="is-info" expanded v-model="deparment.value">
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
      <form @submit.prevent="updateAssignment('position')" class="mb-5">
        <div
          class="is-flex is-justify-content-space-between is-align-items-flex-end"
          style="width: 35rem"
        >
          <b-field
            label="Assign Position"
            class="expand-input"
            :type="{
              'is-danger': position.errors.length > 0,
            }"
            :message="position.errors"
          >
            <b-select type="is-info" expanded v-model="position.value">
              <option :value="p.id" v-for="p in getPositions" :key="p.id">
                {{ p.name }}
              </option>
              <option value="remove">Strip Position</option>
            </b-select>
          </b-field>
          <b-field class="buttons">
            <button
              class="button is-success is-light"
              type="submit"
              :disabled="isSubmittingPosition"
            >
              {{ isSubmittingPosition ? "Assigning..." : "Assign" }}
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
  props: { staffToAssignId: { require: true } },
  computed: {
    ...mapGetters([
      "getPositions",
      "getEmploymentStatus",
      "getBranches",
      "getDepartments",
      "getJobTitles",
      "getJobCategories",
    ]),
  },
  data() {
    return {
      isSubmittingJobTitle: false,
      isSubmittingEmpStatus: false,
      isSubmittingBranch: false,
      isSubmittingDepartment: false,
      isSubmittingPosition: false,
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
      deparment: {
        value: "",
        errors: [],
      },
      position: {
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
        data = { department: this.deparment.value };
      }
      if (type === "position") {
        this.this.isSubmittingPosition = false;
        data = { position: this.position.value };
      }

      this.$axios
        .put(
          `/dashboard/ess/update-job-assignment/${this.staffToAssignId}/${type}`,
          data
        )
        .then((res) => {
          this.isSubmittingJobTitle = false;
          this.isSubmittingEmpStatus = false;
          this.isSubmittingBranch = false;
          this.isSubmittingDepartment = false;
          this.isSubmittingPosition = false;
          if (res.status === 200 && res.data.assigned) {
            this.dispatchStaff({
              type: "UPDATE_JOB",
              payload: { id: this.staffToAssignId, data: res.data.staff },
            });
          }
          if (res.status === 200 && res.data.nodata) {
            this.nodataErr =
              "Assigment failed! Please configure staff job profile.";
            setTimeout(() => {
              this.nodataErr = "";
            }, 5000);
          }

          console.log(res);
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