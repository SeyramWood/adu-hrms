<template>
  <form @submit.prevent="updateJobTitle(jobId)">
    <div class="modal-card py-4" style="width: 50rem">
      <header class="modal-card-head">
        <h4 class="modal-card-title text-main label pt-2">Update job title</h4>
        <button class="delete" type="button" @click="cancelModal()" />
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column is-3">
            <label class="label">Job Category</label>
          </div>
          <div class="column is-9">
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
          <div class="column is-3">
            <label class="label">Job Title</label>
          </div>
          <div class="column is-9">
            <b-field
              :type="{
                'is-danger': jobTitleErrors.title.length > 0,
              }"
              :message="jobTitleErrors.title"
            >
              <b-input size="" expanded v-model="jobTitle.title"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3">
            <label class="label">Job Description</label>
          </div>
          <div class="column is-9">
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
          <div class="column is-3">
            <label class="label">Job Specification</label>
          </div>
          <div class="column is-9">
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
                  <span class="file-name" v-if="jobTitle.specification">{{
                    jobTitle.specification.name
                  }}</span>
                </b-upload>
              </b-field>
            </b-field>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot buttons">
        <button
          class="button is-success is-light"
          :disabled="isSubmittingJobTitle"
        >
          {{ isSubmittingJobTitle ? "Saving..." : "Save" }}
        </button>
        <b-button class="is-danger is-light" @click="cancelModal()"
          >Cancel</b-button
        >
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: "UpdateJobTitleModal",
  computed: {},
  props: {
    jobId: { required: true, type: Number },
    jobTitle: { required: true, type: Object },
    jobTitleErrors: { required: true, type: Object },
    getJobCategories: { required: true, type: Array },
    isSubmittingJobTitle: { required: true, type: Boolean },
    cancelAddJobTitle: { required: true, type: Function },
    updateJobTitle: { required: true, type: Function },
  },
  data() {
    return {};
  },
  methods: {
    cancelModal() {
      this.$emit("close");
      this.cancelAddJobTitle("modal");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>