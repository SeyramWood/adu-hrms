<template>
  <form @submit.prevent="addAppraisalCycle()">
    <div class="modal-card py-4" style="width: 700px">
      <header class="modal-card-head">
        <h4 class="modal-card-title text-main label pt-2">Appraisal Cycle</h4>
        <button class="delete" type="button" @click="cancelAppraisalForm()" />
      </header>
      <section class="modal-card-body">
        <h5 class="text-main pb-3">Add New Appraisal</h5>
        <b-field
          horizontal
          label="Name"
          :type="{ 'is-danger': appraisalErrors.name.length > 0 }"
          :message="appraisalErrors.name"
        >
          <b-input expanded v-model="appraisal.name"></b-input>
        </b-field>
        <b-field horizontal label="Period">
          <b-field
            label="From"
            :type="{
              'is-danger': appraisalErrors.period.from.length > 0,
            }"
            :message="appraisalErrors.period.from"
          >
            <b-datepicker
              v-model="appraisal.period.from"
              placeholder="Click to select..."
              icon="calendar"
              trap-focus
            >
            </b-datepicker>
          </b-field>
          <b-field
            label="To"
            :type="{
              'is-danger': appraisalErrors.period.to.length > 0,
            }"
            :message="appraisalErrors.period.to"
          >
            <b-datepicker
              v-model="appraisal.period.to"
              placeholder="Click to select..."
              icon="calendar"
              trap-focus
            >
            </b-datepicker>
          </b-field>
        </b-field>
        <b-field horizontal label="Self Appraisal Period">
          <b-field
            label="Open on"
            :type="{
              'is-danger': appraisalErrors.sap.open.length > 0,
            }"
            :message="appraisalErrors.sap.open"
          >
            <b-datepicker
              v-model="appraisal.sap.open"
              placeholder="Click to select..."
              icon="calendar"
              trap-focus
            >
            </b-datepicker>
          </b-field>
          <b-field
            label="Close on"
            :type="{
              'is-danger': appraisalErrors.sap.close.length > 0,
            }"
            :message="appraisalErrors.sap.close"
          >
            <b-datepicker
              v-model="appraisal.sap.close"
              placeholder="Click to select..."
              icon="calendar"
              trap-focus
            >
            </b-datepicker>
          </b-field>
        </b-field>
        <b-field horizontal label="Nomalizationn Period">
          <b-field
            label="Open on"
            :type="{
              'is-danger': appraisalErrors.np.open.length > 0,
            }"
            :message="appraisalErrors.np.open"
          >
            <b-datepicker
              v-model="appraisal.np.open"
              placeholder="Click to select..."
              icon="calendar"
              trap-focus
            >
            </b-datepicker>
          </b-field>
          <b-field
            label="Close on"
            :type="{
              'is-danger': appraisalErrors.np.close.length > 0,
            }"
            :message="appraisalErrors.np.close"
          >
            <b-datepicker
              v-model="appraisal.np.close"
              placeholder="Click to select..."
              icon="calendar"
              trap-focus
            >
            </b-datepicker>
          </b-field>
        </b-field>
        <b-field
          horizontal
          label="Description"
          :type="{
            'is-danger': appraisalErrors.description.length > 0,
          }"
          :message="appraisalErrors.description"
        >
          <b-input
            expanded
            v-model="appraisal.description"
            type="textarea"
          ></b-input>
        </b-field>
        <h5 class="text-main pb-3">Applicable For</h5>
        <!-- <b-field
          horizontal
          label="Branch"
          :type="{
            'is-danger': appraisalErrors.applicableFor.branch.length > 0,
          }"
          :message="appraisalErrors.applicableFor.branch"
        >
          <treeselect
            :multiple="true"
            :options="getBrhs"
            placeholder="Select branch(es)..."
            v-model="appraisal.applicableFor.branch"
          />
        </b-field> -->
        <b-field
          horizontal
          label="Department"
          :type="{
            'is-danger': appraisalErrors.applicableFor.department.length > 0,
          }"
          :message="appraisalErrors.applicableFor.department"
        >
          <treeselect
            :multiple="true"
            :options="getDpts"
            placeholder="Select department(s)..."
            v-model="appraisal.applicableFor.department"
          />
        </b-field>
        <b-field
          horizontal
          label="Unit"
          :type="{
            'is-danger': appraisalErrors.applicableFor.unit.length > 0,
          }"
          :message="appraisalErrors.applicableFor.unit"
        >
          <treeselect
            :multiple="true"
            :options="getUnitss"
            placeholder="Select unit(s)..."
            v-model="appraisal.applicableFor.unit"
          />
        </b-field>
        <b-field
          horizontal
          label="Role"
          :type="{
            'is-danger': appraisalErrors.applicableFor.role.length > 0,
          }"
          :message="appraisalErrors.applicableFor.role"
        >
          <treeselect
            :multiple="true"
            :options="getAllRoles"
            placeholder="Select role(s)..."
            v-model="appraisal.applicableFor.role"
          />
        </b-field>
      </section>
      <footer class="modal-card-foot buttons">
        <button
          type="submit"
          class="button is-success is-light"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? "Submitting..." : "Add" }}
        </button>
        <b-button class="is-danger is-light" @click="cancelAppraisalForm()"
          >Cancel</b-button
        >
      </footer>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "ConfigureAppraisalModal",
  components: {
    Treeselect,
  },
  computed: {
    ...mapGetters([
      "getUsers",
      "getRoles",
      "getDepartments",
      "getUnits",
      "getWorkShifts",
    ]),
    getDpts() {
      const data = this.getDepartments.map((d) => {
        return {
          id: d.id,
          label: d.name,
        };
      });
      return [
        {
          id: "none",
          label: "None",
        },
        {
          id: "all",
          label: "All",
        },
        ...data,
      ];
    },
    getUnitss() {
      const data = this.getUnits.map((d) => {
        return {
          id: d.id,
          label: d.name,
        };
      });
      return [
        {
          id: "none",
          label: "None",
        },
        {
          id: "all",
          label: "All",
        },
        ...data,
      ];
    },
    getAllRoles() {
      const data = this.getRoles.map((r) => {
        return {
          id: r.id,
          label: r.role,
        };
      });
      return [
        {
          id: "none",
          label: "None",
        },
        {
          id: "all",
          label: "All",
        },
        ...data,
      ];
    },
  },
  mounted() {},
  data() {
    return {
      isSubmitting: false,
      appraisal: {
        name: "",
        period: {
          from: null,
          to: null,
        },
        sap: {
          open: null,
          close: null,
        },
        np: {
          open: null,
          close: null,
        },
        description: "",
        applicableFor: {
          department: [],
          unit: [],
          role: [],
        },
      },
      appraisalErrors: {
        name: [],
        period: {
          from: [],
          to: [],
        },
        sap: {
          open: [],
          close: [],
        },
        np: {
          open: [],
          close: [],
        },
        description: [],
        applicableFor: {
          department: [],
          unit: [],
          role: [],
        },
      },
    };
  },
  methods: {
    ...mapActions(["dispatchUserAccount", "dispatchStaffCount"]),
    cancelModal() {
      this.$emit("close");
    },
    contentLoader() {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$refs.loadUsers.$el,
      });
      return loadingComponent;
    },
    addAppraisalCycle() {
      this.setAppraisalErrors();
      this.isSubmitting = true;
      this.$axios
        .post(`/dashboard/add-appraisal`, this.appraisal)
        .then((res) => {
          if (res.status === 200 && res.data.created) {
            this.clearAppraisalForm();
            setTimeout(() => {
              this.snackbar("Appraisal added successfully.", "is-success");
            }, 1000);
          }

          this.isSubmitting = false;
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (err.response.status === 422) {
            this.setAppraisalErrors(err.response.data.errors);
          }
        });
    },
    cancelAppraisalForm() {
      this.$emit("close");
      this.$nextTick(() => {
        this.clearAppraisalForm();
        this.setAppraisalErrors();
      });
    },
    clearAppraisalForm() {
      this.appraisal = {
        name: "",
        period: {
          from: null,
          to: null,
        },
        sap: {
          open: null,
          close: null,
        },
        np: {
          open: null,
          close: null,
        },
        description: "",
        applicableFor: {
          branch: [],
          department: [],
          unit: [],
          role: [],
        },
      };
    },
    setAppraisalErrors(err = {}) {
      this.appraisalErrors = {
        name: err["name"] || [],
        period: {
          from: err["period.from"] || [],
          to: err["period.to"] || [],
        },
        sap: {
          open: err["sap.open"] || [],
          close: err["sap.close"] || [],
        },
        np: {
          open: err["np.open"] || [],
          close: err["np.close"] || [],
        },
        description: err["description"] || [],
        applicableFor: {
          branch: err["applicableFor.branch"] || [],
          department: err["applicableFor.department"] || [],
          unit: err["applicableFor.unit"] || [],
          role: err["applicableFor.role"] || [],
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>