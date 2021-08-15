<template>
  <main>
    <b-tabs type="is-toggle" size="" :animated="false" expanded>
      <b-tab-item label="Job Categories">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleAddJobCategory"
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
                <span class="has-text-info"> Add New Job Category</span>
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
                <form @submit.prevent="addJobCategory()">
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Category Name</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger': jobCategoryErrors.name.length > 0,
                        }"
                        :message="jobCategoryErrors.name"
                      >
                        <b-input
                          size=""
                          expanded
                          v-model="jobCategory.name"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <hr />
                  <b-field class="buttons">
                    <button
                      class="button is-success is-light"
                      :disabled="isSubmittingJobCategory"
                    >
                      {{ isSubmittingJobCategory ? "Submitting..." : "Add" }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="cancelAddJobCategory()"
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
                <h5 class="table__header__title">Job Categories</h5>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="checkedJobCats.length > 0 ? false : true"
                  >
                    <template #trigger="{ active }">
                      <b-button
                        type="is-info is-light"
                        label="Actions"
                        pack="fas"
                        :icon-right="active ? 'angle-up' : 'angle-down'"
                      />
                    </template>
                    <b-dropdown-item
                      aria-role="listitem"
                      @click="deleteJobCategories()"
                      >Delete job categories</b-dropdown-item
                    >
                  </b-dropdown>
                </section>
                <b-table
                  :data="getJobCategories"
                  :paginated="isPaginated"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :pagination-simple="isPaginationSimple"
                  :pagination-position="paginationPosition"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  :checked-rows.sync="checkedJobCats"
                  checkable
                  striped
                  hoverable
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column
                    field="id"
                    label="ID"
                    width="40"
                    sortable
                    numeric
                    v-slot="props"
                    >{{ props.row.id }}</b-table-column
                  >
                  <b-table-column
                    field="name"
                    label="Name"
                    sortable
                    v-slot="props"
                    >{{ props.row.category }}</b-table-column
                  >
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip label="Edit" size="" type="is-dark">
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                          :id="
                            `job-cat-id${
                              props.row.id === getDropperId ? getDropperId : ''
                            }`.toString()
                          "
                          @click="openJobCatDropper(props.row)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deleteJobCategory(props.row.id)"
                        ></b-button>
                      </b-tooltip>
                    </div>
                  </b-table-column>
                </b-table>
              </div>
            </div>
          </div>
        </section>
      </b-tab-item>
      <b-tab-item label="Job Titles">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleAddJobTitle"
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
                <span class="has-text-info"> Add New Job Title</span>
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
                <form @submit.prevent="addJobTitle()">
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Job Category</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger': jobTitleErrors.category.length > 0,
                        }"
                        :message="jobTitleErrors.category"
                      >
                        <b-select size="" expanded v-model="jobTitle.category">
                          <option
                            :value="cat.id"
                            v-for="(cat, index) in getJobCategories"
                            :key="index"
                          >
                            {{ cat.category }}
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Job Title</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger': jobTitleErrors.title.length > 0,
                        }"
                        :message="jobTitleErrors.title"
                      >
                        <b-input
                          size=""
                          expanded
                          v-model="jobTitle.title"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Job Description</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger': jobTitleErrors.description.length > 0,
                        }"
                        :message="jobTitleErrors.description"
                      >
                        <b-input
                          size=""
                          type="textarea"
                          placeholder="Job Description..."
                          expanded
                          v-model="jobTitle.description"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Job Specification</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger': jobTitleErrors.specification.length > 0,
                        }"
                        :message="jobTitleErrors.specification"
                      >
                        <b-field class="file is-dark" expanded>
                          <b-upload
                            size=""
                            v-model="jobTitle.specification"
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
                            <span
                              class="file-name"
                              v-if="jobTitle.specification"
                              >{{ jobTitle.specification.name }}</span
                            >
                          </b-upload>
                        </b-field>
                      </b-field>
                    </div>
                  </div>
                  <hr />
                  <b-field class="buttons">
                    <button
                      class="button is-success is-light"
                      :disabled="isSubmittingJobTitle"
                    >
                      {{ isSubmittingJobTitle ? "Submitting..." : "Add" }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="cancelAddJobTitle()"
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
                <h5 class="table__header__title">Job Titles</h5>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="checkedJobTitles.length > 0 ? false : true"
                  >
                    <template #trigger="{ active }">
                      <b-button
                        type="is-info is-light"
                        label="Actions"
                        pack="fas"
                        :icon-right="active ? 'angle-up' : 'angle-down'"
                      />
                    </template>
                    <b-dropdown-item
                      aria-role="listitem"
                      @click="deleteJobTitles()"
                      >Delete job titles</b-dropdown-item
                    >
                  </b-dropdown>
                </section>

                <b-table
                  :data="getJobTitles"
                  :paginated="isPaginated"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :pagination-simple="isPaginationSimple"
                  :pagination-position="paginationPosition"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  :checked-rows.sync="checkedJobTitles"
                  detailed
                  detail-key="id"
                  :show-detail-icon="false"
                  checkable
                  striped
                  hoverable
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column
                    field="id"
                    label="ID"
                    width="40"
                    sortable
                    numeric
                    v-slot="props"
                    >{{ props.row.id }}</b-table-column
                  >
                  <b-table-column
                    field="title"
                    label="Title"
                    sortable
                    v-slot="props"
                    >{{ props.row.title }}</b-table-column
                  >
                  <b-table-column
                    field="specification"
                    label="Specification"
                    sortable
                    v-slot="props"
                    ><a
                      @click="
                        viewSpecification(
                          `/job-specifications/${props.row.specification}`
                        )
                      "
                      >{{ props.row.specification }}</a
                    ></b-table-column
                  >
                  <b-table-column
                    field="dsecription"
                    label="Description"
                    sortable
                    v-slot="props"
                  >
                    <span
                      v-if="
                        openJobTitleDesc !== props.row.id &&
                        props.row.description
                      "
                    >
                      {{ `${props.row.description.substring(0, 130)}...` }}
                    </span>
                    <b-collapse
                      :open="openJobTitleDesc === props.row.id"
                      @open="openJobTitleDesc = props.row.id"
                      @close="openJobTitleDesc = !props.row.id"
                      position="is-bottom"
                      aria-id="contentIdForA11y1"
                      animation="slide"
                    >
                      <template #trigger="props" v-if="props.row.description">
                        <a aria-controls="contentIdForA11y1">
                          {{ !props.open ? "view more" : "view less" }}
                        </a>
                      </template>
                      <span>
                        {{ props.row.description }}
                      </span>
                    </b-collapse>
                  </b-table-column>
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip label="Edit" size="is-small" type="is-dark">
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                          @click="getJobTitleToEdit(props.row)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="is-small" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deleteJobTitle(props.row.id)"
                        ></b-button>
                      </b-tooltip>
                    </div>
                  </b-table-column>
                  <template #detail="props">
                    <article>
                      <p>
                        <strong>Detail Description </strong>
                        <br />
                        {{ props.row.description }}
                      </p>
                    </article>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </section>
      </b-tab-item>
      <b-tab-item label="Employment Status">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleAddEmploymentStatus"
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
                <span class="has-text-info"> Add New Eployment Status</span>
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
                <form @submit.prevent="addEmploymentStatus()">
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Eployment Status</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger': employmentStatusErrors.status.length > 0,
                        }"
                        :message="employmentStatusErrors.status"
                      >
                        <b-input
                          size=""
                          expanded
                          v-model="employmentStatus.status"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <hr />
                  <b-field class="buttons">
                    <button
                      class="button is-success is-light"
                      :disabled="isSubmittingEmploymentStatus"
                    >
                      {{
                        isSubmittingEmploymentStatus ? "Submitting..." : "Add"
                      }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="cancelAddEmploymentStatus()"
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
                <h5 class="table__header__title">Employment Status</h5>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="checkedEmpStatus.length > 0 ? false : true"
                  >
                    <template #trigger="{ active }">
                      <b-button
                        type="is-info is-light"
                        label="Actions"
                        pack="fas"
                        :icon-right="active ? 'angle-up' : 'angle-down'"
                      />
                    </template>
                    <b-dropdown-item
                      aria-role="listitem"
                      @click="deleteEmploymentStatuses()"
                      >Delete employment statuses</b-dropdown-item
                    >
                  </b-dropdown>
                </section>
                <b-table
                  :data="getEmploymentStatus"
                  :paginated="isPaginated"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :pagination-simple="isPaginationSimple"
                  :pagination-position="paginationPosition"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  :checked-rows.sync="checkedEmpStatus"
                  checkable
                  striped
                  hoverable
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column
                    field="id"
                    label="ID"
                    width="40"
                    sortable
                    numeric
                    v-slot="props"
                    >{{ props.row.id }}</b-table-column
                  >
                  <b-table-column
                    field="status"
                    label="Status"
                    sortable
                    v-slot="props"
                    >{{ props.row.status }}</b-table-column
                  >
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip label="Edit" size="is-small" type="is-dark">
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                          :id="`emp-status-id${
                            props.row.id === getEmpStatusDropperId
                              ? getEmpStatusDropperId
                              : ''.toString()
                          }`"
                          @click="openEmpStatusDropper(props.row)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="is-small" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deleteEmploymentStatus(props.row.id)"
                        ></b-button>
                      </b-tooltip>
                    </div>
                  </b-table-column>
                </b-table>
              </div>
            </div>
          </div>
        </section>
      </b-tab-item>
    </b-tabs>
    <dropper
      :join="`#job-cat-id${getDropperId}`"
      ref="jobCatDropper"
      @esc-keydown="closeJobCatDropper"
      @other-area-clicked="closeJobCatDropper"
      class="dropper"
      :z-index="1000"
    >
      <form @submit.prevent="updateJobCategory()">
        <b-field
          label="Update Category Name"
          expanded
          :type="{
            'is-danger': jobCategoryErrors.name.length > 0,
          }"
          :message="jobCategoryErrors.name"
        >
          <b-input type="is-info" v-model="jobCategory.name"> </b-input>
        </b-field>
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingJobCategory"
          >
            {{ isSubmittingJobCategory ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isSubmittingJobCategory"
            @click="closeJobCatDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#emp-status-id${getEmpStatusDropperId}`"
      ref="empStatusDropper"
      @esc-keydown="closeEmpStatusDropper"
      @other-area-clicked="closeEmpStatusDropper"
      class="dropper"
      :z-index="1000"
    >
      <form @submit.prevent="updateEmploymentStatus()">
        <b-field
          label="Update Employment Status"
          expanded
          :type="{
            'is-danger': employmentStatusErrors.status.length > 0,
          }"
          :message="employmentStatusErrors.status"
        >
          <b-input type="is-info" v-model="employmentStatus.status"> </b-input>
        </b-field>
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingEmploymentStatus"
          >
            {{ isSubmittingEmploymentStatus ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isSubmittingEmploymentStatus"
            @click="closeEmpStatusDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
    <b-modal
      v-model="isUpdateJobTitleModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
      :can-cancel="['escape']"
      :on-cancel="cancelAddJobTitle"
    >
      <template #default="props">
        <UpdateJobTitleModal
          v-bind="{
            jobId,
            jobTitle,
            jobTitleErrors,
            isSubmittingJobTitle,
            getJobCategories,
            cancelAddJobTitle,
            updateJobTitle,
          }"
          @close="props.close"
        />
      </template>
    </b-modal>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ViewPdf from "../ViewPdf";
import UpdateJobTitleModal from "./organization/UpdateJobTitleModal";
export default {
  name: "JobComponent",
  components: {
    ViewPdf,
    UpdateJobTitleModal,
  },
  props: {},
  computed: {
    ...mapGetters([
      "getUsers",
      "getJobCategories",
      "getJobTitles",
      "getEmploymentStatus",
    ]),
    getDropperId() {
      return this.dropperId;
    },
    getEmpStatusDropperId() {
      return this.empStatusDropperId;
    },
  },
  data() {
    return {
      openJobTitleDesc: undefined,
      isPaginated: true,
      isPaginationSimple: true,
      paginationPosition: "bottom",
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 50,
      checkedJobCats: [],
      checkedJobTitles: [],
      checkedEmpStatus: [],

      jobConfigurationsDta: [],

      toggleAddJobTitle: false,
      toggleAddJobCategory: false,
      toggleAddEmploymentStatus: false,
      isviewSpecification: false,

      isSubmittingJobCategory: false,
      isSubmittingEmploymentStatus: false,
      isSubmittingJobTitle: false,
      isUpdateJobTitleModalActive: false,

      dropperId: "",
      empStatusDropperId: "",

      jobCategory: { name: "", id: "" },
      employmentStatus: { status: "", id: "" },
      jobTitle: {
        category: "",
        title: "",
        description: "",
        specification: null,
      },
      jobId: null,
      jobCategoryErrors: { name: [] },
      employmentStatusErrors: { status: [] },
      jobTitleErrors: {
        category: [],
        title: [],
        description: [],
        specification: [],
      },
    };
  },
  methods: {
    ...mapActions([
      "dispatchJobCategory",
      "dispatchJobTitle",
      "dispatchEmploymentStatus",
    ]),
    openJobCatDropper(data) {
      const dropper = this.$refs.jobCatDropper;
      this.dropperId = data.id;
      if (dropper) {
        this.jobCategory = { name: data.category, id: data.id };
        dropper.open();
      }
    },
    closeJobCatDropper() {
      const dropper = this.$refs.jobCatDropper;
      if (dropper) {
        this.jobCategory.id = "";
        this.jobCategory.name = "";
        this.jobCategoryErrors.name = [];
        dropper.close();
      }
    },
    openEmpStatusDropper(data) {
      const dropper = this.$refs.empStatusDropper;
      this.empStatusDropperId = data.id;
      if (dropper) {
        this.employmentStatus = { status: data.status, id: data.id };
        dropper.open();
      }
    },
    closeEmpStatusDropper() {
      const dropper = this.$refs.empStatusDropper;
      if (dropper) {
        this.employmentStatus.id = "";
        this.employmentStatus.status = "";
        this.employmentStatusErrors.status = [];
        dropper.close();
      }
    },
    getFullName() {},
    addJobCategory() {
      this.isSubmittingJobCategory = true;
      this.jobCategoryErrors.name = [];
      this.$axios
        .post("/dashboard/create-job-catgory", {
          categoryName: this.jobCategory.name,
        })
        .then((res) => {
          this.jobCategory.name = "";
          if (res.status === 201) {
            this.dispatchJobCategory({
              type: "ADD_NEW_CATEGORY",
              payload: res.data,
            });
            setTimeout(() => {
              this.snackbar("Category added successfully", "is-dark");
              this.isSubmittingJobCategory = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.jobCategoryErrors.name = err.response.data.errors
                .categoryName
                ? err.response.data.errors.categoryName
                : [];
              this.isSubmittingJobCategory = false;
            }, 1000);
          }
        });
    },
    updateJobCategory() {
      this.isSubmittingJobCategory = true;
      this.jobCategoryErrors.name = [];
      this.$axios
        .put(`/dashboard/edit-job-catgory/${this.jobCategory.id}`, {
          categoryName: this.jobCategory.name,
        })
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchJobCategory({
              type: "UPDATE_CATEGORY",
              payload: res.data.category,
            });
            setTimeout(() => {
              this.snackbar("Category updated successfully", "is-dark");
              this.isSubmittingJobCategory = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.jobCategoryErrors.name = err.response.data.errors
                .categoryName
                ? err.response.data.errors.categoryName
                : [];
              this.isSubmittingJobCategory = false;
            }, 1000);
          }
        });
    },
    deleteJobCategory(id) {
      this.$axios
        .delete(`/dashboard/delete-job-catgory/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchJobCategory({
              type: "DELETE_CATEGORY",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Category deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteJobCategories() {
      const ids = this.checkedJobCats.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-job-catgories/${JSON.stringify(ids)}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchJobCategory({
              type: "DELETE_CATEGORIES",
              payload: ids,
            });
            this.checkedJobCats = [];
            setTimeout(() => {
              this.snackbar("Category deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addJobTitle() {
      this.isSubmittingJobTitle = true;
      this.setAddJobTitleErrors();
      const data = new FormData();
      data.append("category", this.jobTitle.category);
      data.append("title", this.jobTitle.title);
      data.append("description", this.jobTitle.description);
      data.append("specification", this.jobTitle.specification || "");
      this.$axios
        .post("/dashboard/create-job-title", data)
        .then((res) => {
          this.cancelAddJobTitle();
          this.dispatchJobTitle({
            type: "ADD_NEW_TITLE",
            payload: res.data,
          });
          setTimeout(() => {
            this.snackbar("Title successfully", "is-dark");
            this.isSubmittingJobTitle = false;
          }, 1000);
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setAddJobTitleErrors(err.response.data.errors);
              this.isSubmittingJobTitle = false;
            }, 1000);
          }
        });
    },
    getJobTitleToEdit(jobTitle) {
      this.jobId = jobTitle.id;
      this.jobTitle.category = jobTitle.job_category_id;
      this.jobTitle.title = jobTitle.title;
      this.jobTitle.description = jobTitle.description;
      this.isUpdateJobTitleModalActive = true;
    },
    updateJobTitle(id) {
      this.isSubmittingJobTitle = true;
      this.setAddJobTitleErrors();
      const data = new FormData();
      data.append("_method", "put");
      data.append("category", this.jobTitle.category);
      data.append("title", this.jobTitle.title);
      data.append("description", this.jobTitle.description);
      if (this.jobTitle.specification !== null) {
        data.append("specification", this.jobTitle.specification);
      }
      this.$axios
        .post(`/dashboard/edit-job-title/${id}`, data)
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.isUpdateJobTitleModalActive = false;
            this.cancelAddJobTitle("modal");
            this.dispatchJobTitle({
              type: "UPDATE_TITLE",
              payload: res.data.job,
            });
            setTimeout(() => {
              this.snackbar("Status updated successfully", "is-dark");
              this.isSubmittingJobTitle = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setAddJobTitleErrors(err.response.data.errors);
              this.isSubmittingJobTitle = false;
            }, 1000);
          }
        });
    },
    deleteJobTitle(id) {
      this.$axios
        .delete(`/dashboard/delete-job-title/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchJobTitle({
              type: "DELETE_TITLE",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Job title deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteJobTitles() {
      const ids = this.checkedJobTitles.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-job-titles/${JSON.stringify(ids)}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchJobTitle({
              type: "DELETE_TITLES",
              payload: ids,
            });
            this.checkedJobTitles = [];
            setTimeout(() => {
              this.snackbar("Job title deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addEmploymentStatus() {
      this.isSubmittingEmploymentStatus = true;
      this.employmentStatusErrors.status = [];
      this.$axios
        .post("/dashboard/create-employment-status", this.employmentStatus)
        .then((res) => {
          if (res.status === 201) {
            this.dispatchEmploymentStatus({
              type: "ADD_NEW_EMP_STATUS",
              payload: res.data,
            });
            this.employmentStatus.status = "";
            setTimeout(() => {
              this.snackbar("Status added successfully", "is-dark");
              this.isSubmittingEmploymentStatus = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.employmentStatusErrors.status = err.response.data.errors
                .status
                ? err.response.data.errors.status
                : [];
              this.isSubmittingEmploymentStatus = false;
            }, 1000);
          }
        });
    },
    updateEmploymentStatus() {
      this.isSubmittingEmploymentStatus = true;
      this.employmentStatusErrors.status = [];
      this.$axios
        .put(
          `/dashboard/edit-employment-status/${this.employmentStatus.id}`,
          this.employmentStatus
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchEmploymentStatus({
              type: "UPDATE_EMP_STATUS",
              payload: res.data.status,
            });
            setTimeout(() => {
              this.snackbar("Status updated successfully", "is-dark");
              this.isSubmittingEmploymentStatus = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.employmentStatusErrors.status = err.response.data.errors
                .status
                ? err.response.data.errors.status
                : [];
              this.isSubmittingEmploymentStatus = false;
            }, 1000);
          }
        });
    },
    deleteEmploymentStatus(id) {
      this.$axios
        .delete(`/dashboard/delete-employment-status/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchEmploymentStatus({
              type: "DELETE_EMP_STATUS",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Status deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteEmploymentStatuses() {
      const ids = this.checkedEmpStatus.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-employment-statuses/${JSON.stringify(ids)}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchEmploymentStatus({
              type: "DELETE_EMP_STATUSES",
              payload: ids,
            });
            this.checkedEmpStatus = [];
            setTimeout(() => {
              this.snackbar("Status deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setAddJobTitleErrors(errors = {}) {
      this.jobTitleErrors.category = errors.category || [];
      this.jobTitleErrors.title = errors.title || [];
      this.jobTitleErrors.description = errors.description || [];
      this.jobTitleErrors.specification = errors.specification || [];
    },
    cancelAddJobCategory() {
      this.jobCategoryErrors.name = [];
      this.toggleAddJobCategory = !this.toggleAddJobCategory;
    },
    cancelAddJobTitle(modal) {
      this.clearAddJobTitle();
      this.setAddJobTitleErrors();
      if (!modal) {
        this.toggleAddJobTitle = !this.toggleAddJobTitle;
      }
    },
    cancelAddEmploymentStatus() {
      this.employmentStatusErrors.status = [];
      this.toggleAddEmploymentStatus = !this.toggleAddEmploymentStatus;
    },
    clearAddJobTitle() {
      this.jobTitle.category = "";
      this.jobTitle.title = "";
      this.jobTitle.description = "";
      this.jobTitle.specification = null;
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
  },
};
</script>

<style lang="scss" scoped>
</style>