<template>
  <section class="b__collapse__section">
    <div class="card">
      <header class="card-header">
        <!-- <p class="card-header-title">Job Details</p> -->
      </header>
      <div class="profile-detail-bar">
        <p class="p-text">{{ $t("app.job_details_cta") }}</p>
      </div>
      <div class="card-content">
        <div class="content">
          <template v-if="isPermission('update')">
            <div class="buttons mb-4" v-if="isEditJob">
              <b-button
                class="is-info is-light"
                @click="isEditJob = !isEditJob"
                icon-left="pen"
                >{{ $t("app.edit") }}</b-button
              >
            </div>
          </template>
          <fieldset :disabled="isEditJob">
            <form @submit.prevent="updateJob()">
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.jobCategory')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    expanded
                    :type="{ 'is-danger': jobErrors.category.length > 0 }"
                    :message="jobErrors.category"
                  >
                    <b-select size="" expanded v-model="job.category">
                      <option
                        :value="el.id"
                        v-for="(el, index) in getJobCategories"
                        :key="index"
                      >
                        {{ el.category }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.jobTitle')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label
                    expanded
                    :type="{ 'is-danger': jobErrors.title.length > 0 }"
                    :message="jobErrors.title"
                  >
                    <b-select size="" expanded v-model="job.title">
                      <option
                        :value="title.id"
                        v-for="(title, index) in filteredJobTitles"
                        :key="index"
                      >
                        {{ title.title }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.jobSpec')" expanded></b-field>
                </div>
                <div class="column is-8">
                  <b-field label expanded>
                    <p>
                      <span v-if="job.specification === ''">{{
                        $t("app.notDefined")
                      }}</span>
                      <a
                        v-else-if="!jobSpecification && job.specification"
                        @click="
                          viewSpecification(
                            `/job-specifications/${job.specification}`
                          )
                        "
                        >{{ job.specification }}</a
                      >
                    </p>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.empStatus')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label
                    expanded
                    :type="{
                      'is-danger': jobErrors.employmentStatus.length > 0,
                    }"
                    :message="jobErrors.employmentStatus"
                  >
                    <b-select size="" expanded v-model="job.employmentStatus">
                      <option
                        :value="status.id"
                        v-for="(status, index) in getEmploymentStatus"
                        :key="index"
                      >
                        {{ status.status }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <h5 class="text-main">{{ $t("app.organization") }}</h5>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.department')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label
                    expanded
                    :type="{
                      'is-danger': jobErrors.department.length > 0,
                    }"
                    :message="jobErrors.department"
                  >
                    <b-select size="" expanded v-model="job.department">
                      <option value="none">None</option>
                      <option
                        :value="dept.id"
                        v-for="(dept, index) in getDepartments"
                        :key="index"
                      >
                        {{ dept.name }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.unit')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label
                    expanded
                    :type="{
                      'is-danger': jobErrors.unit.length > 0,
                    }"
                    :message="jobErrors.unit"
                  >
                    <b-select size="" expanded v-model="job.unit">
                      <option value="">None</option>
                      <option
                        :value="u.id"
                        v-for="(u, index) in departmentUnits"
                        :key="u + index"
                      >
                        {{ u.name }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.position')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label
                    expanded
                    :type="{
                      'is-danger': jobErrors.position.length > 0,
                    }"
                    :message="jobErrors.position"
                  >
                    <b-select size="" expanded v-model="job.position">
                      <option value="">None</option>
                      <option
                        :value="p.id"
                        v-for="(p, index) in getPositions"
                        :key="p + index"
                      >
                        {{ p.name }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>

              <h5 class="text-main">{{ $t("app.empContract") }}</h5>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.sDate')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label
                    expanded
                    :type="{
                      'is-danger': jobErrors.startDate.length > 0,
                    }"
                    :message="jobErrors.startDate"
                  >
                    <b-datetimepicker
                      v-model="job.startDate"
                      :timepicker="{ hourFormat: '12' }"
                      horizontal-time-picker
                      placeholder="Click to select..."
                      pack="fas"
                      icon="calendar"
                      trap-focus
                      size=""
                    ></b-datetimepicker>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.eDate')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    expanded
                    :type="{ 'is-danger': jobErrors.endDate.length > 0 }"
                    :message="jobErrors.endDate"
                  >
                    <b-datetimepicker
                      v-model="job.endDate"
                      :timepicker="{ hourFormat: '12' }"
                      horizontal-time-picker
                      placeholder="Click to select..."
                      pack="fas"
                      icon="calendar"
                      trap-focus
                      size=""
                    ></b-datetimepicker>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.conStatus')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field label expanded>
                    <p>
                      {{
                        job.contractStatus === "award"
                          ? $t("app.active")
                          : job.contractStatus === "terminate"
                          ? $t("app.terminated")
                          : $t("app.notDefined")
                      }}
                    </p>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <b-field :label="$t('app.conDetails')" expanded></b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    expanded
                    v-if="!isNull(job.contractDetailsAvailable)"
                  >
                    <p>{{ $t("app.notDefined") }}</p>
                  </b-field>
                  <b-field expanded v-if="isNull(job.contractDetailsAvailable)">
                    <p>
                      <a
                        @click="
                          viewSpecification(
                            `/job-contracts/${job.contractDetailsAvailable}`
                          )
                        "
                        >{{ job.contractDetailsAvailable }}</a
                      >
                    </p>
                  </b-field>
                  <b-field
                    :type="{
                      'is-danger': jobErrors.contractDetails.length > 0,
                    }"
                    :message="jobErrors.contractDetails"
                    v-if="!job.contractDetailsAvailable"
                  >
                    <b-field class="file is-dark" expanded>
                      <b-upload
                        size="is-small"
                        v-model="job.contractDetails"
                        class="file-label"
                      >
                        <span class="file-cta">
                          <b-icon
                            class="file-icon"
                            icon="upload"
                            size="is-small"
                          ></b-icon>
                          <span class="file-label">Upload</span>
                        </span>
                        <span class="file-name" v-if="job.contractDetails">{{
                          job.contractDetails.name
                        }}</span>
                      </b-upload>
                    </b-field>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-3"></div>
                <div class="column is-5">
                  <div class="block" v-if="job.contractDetailsAvailable">
                    <b-radio
                      size=""
                      type="is-info"
                      name="contractDetailsControl"
                      native-value="kc"
                      v-model="contractDetailsControl"
                      >{{ $t("app.keepCurrent") }}</b-radio
                    >
                    <b-radio
                      size=""
                      type="is-info"
                      name="contractDetailsControl"
                      native-value="dc"
                      v-model="contractDetailsControl"
                      >{{ $t("app.deleteCurrent") }}</b-radio
                    >
                    <b-radio
                      size=""
                      type="is-info"
                      name="contractDetailsControl"
                      native-value="rc"
                      v-model="contractDetailsControl"
                      >{{ $t("app.replaceCurrent") }}</b-radio
                    >
                  </div>
                  <b-field
                    :type="{
                      'is-danger': jobErrors.contractDetails.length > 0,
                    }"
                    :message="jobErrors.contractDetails"
                    v-if="contractDetailsControl === 'rc'"
                  >
                    <b-field class="file is-dark" expanded>
                      <b-upload
                        size="is-small"
                        v-model="job.contractDetails"
                        class="file-label"
                      >
                        <span class="file-cta">
                          <b-icon
                            class="file-icon"
                            icon="upload"
                            size="is-small"
                          ></b-icon>
                          <span class="file-label">{{ $t("app.upload") }}</span>
                        </span>
                        <span class="file-name" v-if="job.contractDetails">{{
                          job.contractDetails.name
                        }}</span>
                      </b-upload>
                    </b-field>
                  </b-field>
                </div>
              </div>
              <hr />
              <div class="buttons" v-if="!isEditJob">
                <button
                  class="button is-success is-light"
                  :disabled="isSubmittingJob"
                >
                  {{
                    isSubmittingJob
                      ? `${$t("app.submitting")}...`
                      : $t("app.save")
                  }}
                </button>
                <b-button class="is-danger is-light" @click="cancelJobForm()">{{
                  $t("app.cancel")
                }}</b-button>
                <template v-if="isPermission('update')">
                  <b-button
                    class="is-dark is-light"
                    v-if="job.contractStatus === 'award'"
                    @click="awardContract('terminate')"
                  >
                    {{
                      isAwardingContract
                        ? $t("app.terminatingContract")
                        : $t("app.terminateContract")
                    }}
                  </b-button>
                  <b-button
                    class="is-info is-light"
                    v-if="
                      job.contractStatus === 'terminate' ||
                      job.contractStatus === null
                    "
                    @click="awardContract('award')"
                  >
                    {{
                      isAwardingContract
                        ? $t("app.awardingContract")
                        : $t("app.awardContract")
                    }}
                  </b-button>
                </template>
              </div>
            </form>
          </fieldset>
          <template v-if="isPermission('update')">
            <div class="buttons" v-if="isEditJob">
              <b-button
                class="is-info is-light"
                @click="isEditJob = !isEditJob"
                icon-left="pen"
                >{{ $t("app.edit") }}</b-button
              >
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ViewPdf from "../../ViewPdf";
export default {
  name: "JobDetails",
  components: { ViewPdf },
  computed: {
    ...mapGetters([
      "getProfile",
      "getJobCategories",
      "getJobTitles",
      "getEmploymentStatus",
      "getDepartments",
      "getUnits",
      "getPositions",
    ]),
    filteredJobTitles() {
      return this.jTitles;
    },
  },
  created() {},
  mounted() {
    this.setJob(this.getProfile.job);
    this.$watch(
      () => this.job.category,
      (value) => {
        this.job.specification = "";
        this.jTitles = this.getJobTitles.filter(
          (el) => el.job_category_id === parseInt(value)
        );
      },
      { immediate: true }
    );
    this.$watch(
      () => this.job.title,
      (value) => {
        const title = this.getJobTitles.find(
          (title) => title.id === parseInt(value)
        );
        if (title) {
          this.job.specification = title.specification;
        }
      },
      { immediate: true }
    );
    this.$watch(
      () => this.job.department,
      (value) => {
        this.departmentUnits = this.getUnits.filter(
          (u) => u.department_id === parseInt(value)
        );
        if (this.getProfile.job.unit) {
          if (this.departmentUnits.length === 0) {
            this.departmentUnits = this.getUnits.filter(
              (u) => u.id === parseInt(this.getProfile.job.unit)
            );
          }
          this.job.unit = parseInt(this.getProfile.job.unit);
        }
        if (this.departmentUnits.length === 0) {
          this.job.unit = "";
        }
      },
      { immediate: true }
    );
  },
  data() {
    return {
      showUserUnit: true,
      jTitles: [],
      departmentUnits: [],
      jobSpecification: "",
      contractDetailsControl: "kc",
      isEditJob: true,
      isSubmittingJob: false,
      isAwardingContract: false,
      job: {
        category: "",
        title: "",
        specification: "",
        employmentStatus: "",
        department: "",
        unit: "",
        position: "",
        startDate: null,
        endDate: null,
        contractDetails: null,
        contractDetailsAvailable: "",
        contractStatus: null,
      },
      jobErrors: {
        title: [],
        specification: [],
        category: [],
        employmentStatus: [],
        department: [],
        unit: [],
        position: [],
        startDate: [],
        endDate: [],
        contractDetails: [],
      },
    };
  },
  methods: {
    ...mapActions(["dispatchProfile"]),
    setJob(jobDetails) {
      if (jobDetails) {
        this.job = {
          ...this.job,
          title: jobDetails.title,
          category: jobDetails.category,
          employmentStatus: jobDetails.employmentStatus,
          department: jobDetails.department || "none",
          unit: jobDetails.unit || "",
          position: jobDetails.position || "",
          startDate: new Date(jobDetails.startDate),
          endDate: new Date(jobDetails.endDate),
          contractDetailsAvailable: jobDetails.contractDetails,
          contractStatus: jobDetails.contractStatus
            ? jobDetails.contractStatus
            : null,
        };
      }
    },

    updateJob() {
      this.setJobErrors();
      this.isSubmittingJob = true;
      const data = new FormData();
      data.append("category", this.job.category);
      data.append("title", this.job.title);
      data.append("employmentStatus", this.job.employmentStatus);
      data.append("department", this.job.department);
      data.append("unit", this.job.unit);
      data.append("position", this.job.position);

      data.append(
        "startDate",
        this.job.startDate ? this.job.startDate.toISOString() : ""
      );
      data.append(
        "endDate",
        this.job.endDate ? this.job.endDate.toISOString() : ""
      );
      data.append("contractStatus", this.job.contractStatus);
      data.append("contractDetailsControl", this.contractDetailsControl);
      if (this.job.contractDetailsAvailable) {
        data.append("contractDetails", this.job.contractDetailsAvailable);
      }
      if (
        this.contractDetailsControl === "rc" ||
        !this.job.contractDetailsAvailable
      ) {
        data.append("contractDetails", this.job.contractDetails);
      }

      this.$axios
        .post(
          `/dashboard/ess/update-job/${this.getProfile.user_id}`,
          data,
          this.axiosConfig
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchProfile({ type: "ADD_JOB", payload: res.data.data });
            this.setJob(this.getProfile.job);
            this.contractDetailsControl = "kc";
            this.job.contractDetails = null;
            setTimeout(() => {
              this.snackbar("Job updated successfully", "is-dark");
              this.isSubmittingJob = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.isSubmittingJob = false;
              this.setJobErrors(err.response.data.errors);
            }, 1000);
          }
        });
    },
    awardContract(status) {
      this.isAwardingContract = true;
      this.$axios
        .put(
          `/dashboard/ess/award-job-contract/${this.getProfile.user_id}/${status}`
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchProfile({ type: "ADD_JOB", payload: res.data.data });
            this.setJob(this.getProfile.job);
            setTimeout(() => {
              this.snackbar(
                `Contract ${status ? "termindated" : "awarded"} successfully`,
                "is-dark"
              );
              this.isAwardingContract = false;
            }, 1000);
          }
        })
        .catch((err) => {
          this.isAwardingContract = false;
        });
    },
    viewSpecification(file) {
      this.$buefy.modal.open({
        parent: this,
        component: ViewPdf,
        hasModalCard: true,
        trapFocus: true,
        props: { file },
      });
    },
    clearJobForm() {
      this.job.title = "";
      this.job.specification = "";
      this.job.category = "";
      this.job.employmentStatus = "";
      this.job.department = "";
      this.job.unit = "";
      this.job.position = "";
      this.job.startDate = null;
      this.job.endDate = null;
      this.job.contractDetails = null;
      this.job.contractDetailsAvailable = "";
      this.job.contractStatus = null;
    },
    setJobErrors(error = {}) {
      this.jobErrors.title = error.title || [];
      this.jobErrors.specification = error.specification || [];
      this.jobErrors.category = error.category || [];
      this.jobErrors.employmentStatus = error.employmentStatus || [];
      this.jobErrors.department = error.department || [];
      this.jobErrors.unit = error.unit || [];
      this.jobErrors.position = error.position || [];
      this.jobErrors.startDate = error.startDate || [];
      this.jobErrors.endDate = error.endDate || [];
      this.jobErrors.contractDetails = error.contractDetails || [];
    },
    cancelJobForm() {
      // this.clearJobForm();
      this.setJobErrors();
      this.isEditJob = !this.isEditJob;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>