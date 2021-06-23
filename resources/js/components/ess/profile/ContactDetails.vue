<template>
  <section class="b__collapse__section">
    <div class="card">
      <header class="card-header">
        <!-- <p class="card-header-title">Contact Details</p> -->
      </header>
      <div class="profile-detail-bar">
        <p class="p-text">Employee Contact Details</p>
      </div>
      <div class="card-content">
        <div class="content">
          <fieldset :disabled="isEditContactDetails">
            <form @submit.prevent="updateContactDetails()">
              <div class="columns">
                <div class="column is-6">
                  <b-field
                    label="Address (1)"
                    :type="{
                      'is-danger': contactDetailsErrors.address1.length > 0,
                    }"
                    :message="contactDetailsErrors.address1"
                  >
                    <b-input
                      type="textarea"
                      maxlength="150"
                      placeholder="Type your address(1)"
                      v-model="contactDetails.address1"
                      size=""
                    ></b-input>
                  </b-field>
                </div>
                <div class="column is-6">
                  <b-field
                    label="Address (2)"
                    :type="{
                      'is-danger': contactDetailsErrors.address2.length > 0,
                    }"
                    :message="contactDetailsErrors.address2"
                  >
                    <b-input
                      type="textarea"
                      maxlength="150"
                      placeholder="Type your address(2)"
                      v-model="contactDetails.address2"
                      size=""
                    ></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4">
                  <b-field
                    label="City"
                    expanded
                    :type="{
                      'is-danger': contactDetailsErrors.city.length > 0,
                    }"
                    :message="contactDetailsErrors.city"
                  >
                    <b-input size="" v-model="contactDetails.city"></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label="State/Region"
                    expanded
                    :type="{
                      'is-danger': contactDetailsErrors.region.length > 0,
                    }"
                    :message="contactDetailsErrors.region"
                  >
                    <b-input size="" v-model="contactDetails.region"></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label="Country"
                    expanded
                    :type="{
                      'is-danger': contactDetailsErrors.country.length > 0,
                    }"
                    :message="contactDetailsErrors.country"
                  >
                    <b-select size="" expanded v-model="contactDetails.country">
                      <option value="Ghana">Ghana</option>
                      <option value="Nigeria">Nigeria</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4">
                  <b-field
                    label="Mobile"
                    expanded
                    :type="{
                      'is-danger': contactDetailsErrors.mobile.length > 0,
                    }"
                    :message="contactDetailsErrors.mobile"
                  >
                    <b-input size="" v-model="contactDetails.mobile"></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label="Work Telephone"
                    expanded
                    :type="{
                      'is-danger':
                        contactDetailsErrors.workTelephone.length > 0,
                    }"
                    :message="contactDetailsErrors.workTelephone"
                  >
                    <b-input
                      size=""
                      v-model="contactDetails.workTelephone"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field
                    label="Home Telephone"
                    expanded
                    :type="{
                      'is-danger':
                        contactDetailsErrors.homeTelephone.length > 0,
                    }"
                    :message="contactDetailsErrors.homeTelephone"
                  >
                    <b-input
                      size=""
                      v-model="contactDetails.homeTelephone"
                    ></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column is-6">
                  <b-field
                    label="Work Email"
                    expanded
                    :type="{
                      'is-danger': contactDetailsErrors.workEmail.length > 0,
                    }"
                    :message="contactDetailsErrors.workEmail"
                  >
                    <b-input
                      size=""
                      v-model="contactDetails.workEmail"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column is-6">
                  <b-field
                    label="Other Email"
                    expanded
                    :type="{
                      'is-danger': contactDetailsErrors.otherEmail.length > 0,
                    }"
                    :message="contactDetailsErrors.otherEmail"
                  >
                    <b-input
                      size=""
                      v-model="contactDetails.otherEmail"
                    ></b-input>
                  </b-field>
                </div>
              </div>
              <hr />
              <b-field v-if="!isEditContactDetails">
                <div class="buttons">
                  <button
                    class="button is-success is-light"
                    type="submit"
                    :disabled="isSubmittingContactDetails"
                  >
                    {{ isSubmittingContactDetails ? "Saving..." : "Save" }}
                  </button>

                  <b-button
                    class="is-danger is-light"
                    @click="cancelContactDetailsForm()"
                    >Cancel</b-button
                  >
                </div>
              </b-field>
            </form>
          </fieldset>
          <template v-if="roleOrUserPermission('Admin', getProfile.user_id)">
            <b-field v-if="isEditContactDetails">
              <b-button
                class="is-info is-light"
                icon-left="pen"
                @click="isEditContactDetails = !isEditContactDetails"
                >Edit</b-button
              >
            </b-field>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ContactDetails",
  computed: {
    ...mapGetters(["getProfile"]),
  },
  created() {},
  beforeMount() {
    this.setContactDetails(this.getProfile.contact_details);
  },
  data() {
    return {
      isEditContactDetails: true,
      isSubmittingContactDetails: false,
      contactDetails: {
        address1: "",
        address2: "",
        city: "",
        region: "",
        country: "",
        mobile: "",
        homeTelephone: "",
        workTelephone: "",
        workEmail: "",
        otherEmail: "",
      },
      contactDetailsErrors: {
        address1: [],
        address2: [],
        city: [],
        region: [],
        country: [],
        mobile: [],
        homeTelephone: [],
        workTelephone: [],
        workEmail: [],
        otherEmail: [],
      },
    };
  },
  methods: {
    ...mapActions(["dispatchProfile"]),
    deleteContractDetails(index) {
      this.job.contractDetails.splice(index, 1);
    },
    updateContactDetails() {
      this.setContactDetailsErrors();
      this.isSubmittingContactDetails = true;
      this.$axios
        .put(
          `/dashboard/ess/update-contact-details/${this.getProfile.user_id}`,
          this.contactDetails
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.isSubmittingContactDetails = false;
            this.dispatchProfile({
              type: "UPDATE_CONTACT_DETAILS",
              payload: this.contactDetails,
            });
            this.snackbar("Contact details updated successfully", "is-dark");
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.isSubmittingContactDetails = false;
              this.setContactDetailsErrors(err.response.data.errors);
            }, 1000);
          }
        });
    },
    setContactDetailsErrors(error = {}) {
      this.contactDetailsErrors.address1 = error.address1 ? error.address1 : [];
      this.contactDetailsErrors.address2 = error.address2 ? error.address2 : [];
      this.contactDetailsErrors.city = error.city ? error.city : [];
      this.contactDetailsErrors.region = error.region ? error.region : [];
      this.contactDetailsErrors.country = error.country ? error.country : [];
      this.contactDetailsErrors.mobile = error.mobile ? error.mobile : [];
      this.contactDetailsErrors.homeTelephone = error.homeTelephone
        ? error.homeTelephone
        : [];
      this.contactDetailsErrors.workTelephone = error.workTelephone
        ? error.workTelephone
        : [];
      this.contactDetailsErrors.workEmail = error.workEmail
        ? error.workEmail
        : [];
      this.contactDetailsErrors.otherEmail = error.otherEmail
        ? error.otherEmail
        : [];
    },
    cancelContactDetailsForm() {
      this.contactDetailsErrors.address1 = [];
      this.contactDetailsErrors.address2 = [];
      this.contactDetailsErrors.city = [];
      this.contactDetailsErrors.region = [];
      this.contactDetailsErrors.country = [];
      this.contactDetailsErrors.mobile = [];
      this.contactDetailsErrors.homeTelephone = [];
      this.contactDetailsErrors.workTelephone = [];
      this.contactDetailsErrors.workEmail = [];
      this.contactDetailsErrors.otherEmail = [];
      this.isEditContactDetails = !this.isEditContactDetails;
      this.setContactDetails();
    },
    setEmergencyContactErrors(error = {}) {
      this.emergencyContactErrors.name = error.name ? error.name : [];
      this.emergencyContactErrors.relationship = error.relationship
        ? error.relationship
        : [];
      this.emergencyContactErrors.mobile = error.mobile ? error.mobile : [];
      this.emergencyContactErrors.homeTelephone = error.homeTelephone
        ? error.homeTelephone
        : [];
      this.emergencyContactErrors.workTelephone = error.workTelephone
        ? error.workTelephone
        : [];
    },
    setContactDetails(contact) {
      if (contact !== null) {
        this.contactDetails = {
          address1: contact.address1,
          address2: contact.address2,
          city: contact.city,
          region: contact.region,
          country: contact.country,
          mobile: contact.mobile,
          homeTelephone: contact.homeTelephone,
          workTelephone: contact.workTelephone,
          workEmail: contact.workEmail,
          otherEmail: contact.otherEmail,
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>