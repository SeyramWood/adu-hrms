<template>
  <form @submit.prevent="updateBranch(branchId)">
    <div class="modal-card py-4" style="width: 50rem">
      <header class="modal-card-head">
        <h4 class="modal-card-title text-main label pt-2">Update branch</h4>
        <button class="delete" type="button" @click="cancelModal()" />
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column is-3">
            <label class="label">Branch Name</label>
          </div>
          <div class="column is-9">
            <b-field
              :type="{
                'is-danger': organizationBranchErrors.name.length > 0,
              }"
              :message="organizationBranchErrors.name"
            >
              <b-input
                size=""
                expanded
                v-model="organizationBranch.name"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3">
            <label class="label">City</label>
          </div>
          <div class="column is-9">
            <b-field
              :type="{
                'is-danger': organizationBranchErrors.city.length > 0,
              }"
              :message="organizationBranchErrors.city"
            >
              <b-input
                size=""
                expanded
                v-model="organizationBranch.city"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3">
            <label class="label">Telephone</label>
          </div>
          <div class="column is-9">
            <b-field
              :type="{
                'is-danger': organizationBranchErrors.telephone.length > 0,
              }"
              :message="organizationBranchErrors.telephone"
            >
              <b-input
                size=""
                expanded
                v-model="organizationBranch.telephone"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3">
            <label class="label">Landmark/Location</label>
          </div>
          <div class="column is-9">
            <b-field
              :type="{
                'is-danger': organizationBranchErrors.landmark.length > 0,
              }"
              :message="organizationBranchErrors.landmark"
            >
              <b-input
                size=""
                expanded
                v-model="organizationBranch.landmark"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3">
            <label class="label">Official Email</label>
          </div>
          <div class="column is-9">
            <b-field
              :type="{
                'is-danger': organizationBranchErrors.email.length > 0,
              }"
              :message="organizationBranchErrors.email"
            >
              <b-input
                size=""
                expanded
                v-model="organizationBranch.email"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3">
            <label class="label">Postal Address</label>
          </div>
          <div class="column is-9">
            <b-field
              :type="{
                'is-danger': organizationBranchErrors.address.length > 0,
              }"
              :message="organizationBranchErrors.address"
            >
              <b-input
                size=""
                expanded
                v-model="organizationBranch.address"
              ></b-input>
            </b-field>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot buttons">
        <button
          class="button is-success is-light"
          :disabled="isSubmittingNewBranch"
        >
          {{ isSubmittingNewBranch ? "Saving..." : "Save" }}
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
  name: "UpdateBranchModal",
  computed: {},
  props: {
    branchId: { required: true, type: Number },
    organizationBranch: { required: true, type: Object },
    organizationBranchErrors: { required: true, type: Object },
    isSubmittingNewBranch: { required: true, type: Boolean },
    cancelAddOrganizationBranch: { required: true, type: Function },
    updateBranch: { required: true, type: Function },
  },
  data() {
    return {};
  },
  methods: {
    cancelModal() {
      this.$emit("close");
      this.cancelAddOrganizationBranch("modal");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>