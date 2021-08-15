<template>
  <section class="b__collapse__section">
    <div class="card">
      <header class="card-header">
        <!-- <p class="card-header-title">Contact Details</p> -->
      </header>
      <div class="profile-detail-bar">
        <p class="p-text">{{ $t("app.contact_detail_cta") }}</p>
      </div>
      <div class="card-content">
        <div class="content">
          <template v-if="userOrPermission('update', getProfile.user_id)">
            <b-field v-if="isEditContactDetails" class="mb-4">
              <b-button
                class="is-info is-light"
                icon-left="pen"
                @click="isEditContactDetails = !isEditContactDetails"
                >{{ $t("app.edit") }}</b-button
              >
            </b-field>
          </template>
          <div class="columns">
            <div class="column is-6">
              <h5 class="text-main">Current Address</h5>
              <fieldset :disabled="isEditContactDetails">
                <form @submit.prevent="updateContactDetails()">
                  <div class="columns">
                    <div class="column is-12">
                      <b-field
                        :label="` ${$t('app.address')}`"
                        :type="{
                          'is-danger': contactDetailsErrors.address.length > 0,
                        }"
                        :message="contactDetailsErrors.address"
                      >
                        <b-input
                          type="textarea"
                          :placeholder="` ${$t('app.address_placehoder')}...`"
                          v-model="contactDetails.address"
                          size=""
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-12">
                      <b-field
                        :label="$tc('app.country', 1)"
                        expanded
                        :type="{
                          'is-danger': contactDetailsErrors.country.length > 0,
                        }"
                        :message="contactDetailsErrors.country"
                      >
                        <b-select
                          size=""
                          expanded
                          v-model="contactDetails.country"
                        >
                          <option
                            :value="c.name"
                            v-for="c in getCountries"
                            :key="c.name"
                          >
                            {{
                              locale !== "en"
                                ? c.translations[`${locale}`]
                                : c.name
                            }}
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.city')"
                        expanded
                        :type="{
                          'is-danger': contactDetailsErrors.city.length > 0,
                        }"
                        :message="contactDetailsErrors.city"
                      >
                        <b-input
                          size=""
                          v-model="contactDetails.city"
                        ></b-input>
                      </b-field>
                    </div>
                    <div class="column is-6">
                      <b-field
                        :label="`${$t('app.state')}/${$t('app.region')}`"
                        expanded
                        :type="{
                          'is-danger': contactDetailsErrors.region.length > 0,
                        }"
                        :message="contactDetailsErrors.region"
                      >
                        <b-input
                          size=""
                          v-model="contactDetails.region"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.mobile')"
                        expanded
                        :type="{
                          'is-danger': contactDetailsErrors.mobile.length > 0,
                        }"
                        :message="contactDetailsErrors.mobile"
                      >
                        <b-input
                          size=""
                          v-model="contactDetails.mobile"
                        ></b-input>
                      </b-field>
                    </div>
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.work_tel')"
                        expanded
                        :type="{
                          'is-danger':
                            contactDetailsErrors.telephone.length > 0,
                        }"
                        :message="contactDetailsErrors.telephone"
                      >
                        <b-input
                          size=""
                          v-model="contactDetails.telephone"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.work_email')"
                        expanded
                        :type="{
                          'is-danger': contactDetailsErrors.email.length > 0,
                        }"
                        :message="contactDetailsErrors.email"
                      >
                        <b-input
                          size=""
                          v-model="contactDetails.email"
                        ></b-input>
                      </b-field>
                    </div>
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.other_email')"
                        expanded
                        :type="{
                          'is-danger':
                            contactDetailsErrors.otherEmail.length > 0,
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
                        {{
                          isSubmittingContactDetails
                            ? `${$t("app.saving")}...`
                            : $t("app.save")
                        }}
                      </button>

                      <b-button
                        class="is-danger is-light"
                        @click="cancelContactDetailsForm()"
                        >{{ $t("app.cancel") }}</b-button
                      >
                    </div>
                  </b-field>
                </form>
              </fieldset>
            </div>
            <div class="column is-6">
              <h5 class="text-main">Home Address</h5>
              <fieldset :disabled="isEditContactDetails">
                <form @submit.prevent="updatePContactDetails()">
                  <div class="columns">
                    <div class="column is-12">
                      <b-field
                        :label="` ${$t('app.address')}`"
                        :type="{
                          'is-danger':
                            p_contactDetailsErrors.address.length > 0,
                        }"
                        :message="p_contactDetailsErrors.address"
                      >
                        <b-input
                          type="textarea"
                          :placeholder="` ${$t('app.address_placehoder')}...`"
                          v-model="p_contactDetails.address"
                          size=""
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-12">
                      <b-field
                        :label="$tc('app.country', 1)"
                        expanded
                        :type="{
                          'is-danger':
                            p_contactDetailsErrors.country.length > 0,
                        }"
                        :message="p_contactDetailsErrors.country"
                      >
                        <b-select
                          size=""
                          expanded
                          v-model="p_contactDetails.country"
                        >
                          <option
                            :value="c.name"
                            v-for="c in getCountries"
                            :key="c.name"
                          >
                            {{
                              locale !== "en"
                                ? c.translations[`${locale}`]
                                : c.name
                            }}
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.city')"
                        expanded
                        :type="{
                          'is-danger': p_contactDetailsErrors.city.length > 0,
                        }"
                        :message="p_contactDetailsErrors.city"
                      >
                        <b-input
                          size=""
                          v-model="p_contactDetails.city"
                        ></b-input>
                      </b-field>
                    </div>
                    <div class="column is-6">
                      <b-field
                        :label="`${$t('app.state')}/${$t('app.region')}`"
                        expanded
                        :type="{
                          'is-danger': p_contactDetailsErrors.region.length > 0,
                        }"
                        :message="p_contactDetailsErrors.region"
                      >
                        <b-input
                          size=""
                          v-model="p_contactDetails.region"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.mobile')"
                        expanded
                        :type="{
                          'is-danger': p_contactDetailsErrors.mobile.length > 0,
                        }"
                        :message="p_contactDetailsErrors.mobile"
                      >
                        <b-input
                          size=""
                          v-model="p_contactDetails.mobile"
                        ></b-input>
                      </b-field>
                    </div>
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.work_tel')"
                        expanded
                        :type="{
                          'is-danger':
                            p_contactDetailsErrors.telephone.length > 0,
                        }"
                        :message="p_contactDetailsErrors.telephone"
                      >
                        <b-input
                          size=""
                          v-model="p_contactDetails.telephone"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.work_email')"
                        expanded
                        :type="{
                          'is-danger': p_contactDetailsErrors.email.length > 0,
                        }"
                        :message="p_contactDetailsErrors.email"
                      >
                        <b-input
                          size=""
                          v-model="p_contactDetails.email"
                        ></b-input>
                      </b-field>
                    </div>
                    <div class="column is-6">
                      <b-field
                        :label="$t('app.other_email')"
                        expanded
                        :type="{
                          'is-danger':
                            p_contactDetailsErrors.otherEmail.length > 0,
                        }"
                        :message="p_contactDetailsErrors.otherEmail"
                      >
                        <b-input
                          size=""
                          v-model="p_contactDetails.otherEmail"
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
                        :disabled="isSubmittingPContactDetails"
                      >
                        {{
                          isSubmittingPContactDetails
                            ? `${$t("app.saving")}...`
                            : $t("app.save")
                        }}
                      </button>

                      <b-button
                        class="is-danger is-light"
                        @click="cancelPContactDetailsForm()"
                        >{{ $t("app.cancel") }}</b-button
                      >
                    </div>
                  </b-field>
                </form>
              </fieldset>
            </div>
          </div>

          <template v-if="userOrPermission('update', getProfile.user_id)">
            <b-field v-if="isEditContactDetails">
              <b-button
                class="is-info is-light"
                icon-left="pen"
                @click="isEditContactDetails = !isEditContactDetails"
                >{{ $t("app.edit") }}</b-button
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
    ...mapGetters(["getProfile", "getCountries"]),
  },
  created() {},
  beforeMount() {
    this.setContactDetails(this.getProfile.contact_details);
    this.setPContactDetails(this.getProfile.p_contact_details);
  },
  data() {
    return {
      locale: this.$lang.getLocale(),
      isEditContactDetails: true,
      isSubmittingContactDetails: false,
      isSubmittingPContactDetails: false,
      contactDetails: {
        address: "",
        city: "",
        region: "",
        country: "",
        mobile: "",
        telephone: "",
        email: "",
        otherEmail: "",
      },
      p_contactDetails: {
        address: "",
        city: "",
        region: "",
        country: "",
        mobile: "",
        telephone: "",
        email: "",
        otherEmail: "",
      },
      contactDetailsErrors: {
        address: [],
        city: [],
        region: [],
        country: [],
        mobile: [],
        telephone: [],
        email: [],
        otherEmail: [],
      },
      p_contactDetailsErrors: {
        address: [],
        city: [],
        region: [],
        country: [],
        mobile: [],
        telephone: [],
        email: [],
        otherEmail: [],
      },
    };
  },
  methods: {
    ...mapActions(["dispatchProfile"]),
    updateContactDetails() {
      this.setContactDetailsErrors();
      this.isSubmittingContactDetails = true;
      this.$axios
        .put(
          `/dashboard/ess/update-contact-details/${this.getProfile.user_id}`,
          this.contactDetails,
          { headers: { contactType: "c_contact" } }
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
    updatePContactDetails() {
      this.setPContactDetailsErrors();
      this.isSubmittingPContactDetails = true;
      this.$axios
        .put(
          `/dashboard/ess/update-contact-details/${this.getProfile.user_id}`,
          this.p_contactDetails,
          { headers: { contactType: "p_contact" } }
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.isSubmittingPContactDetails = false;
            this.snackbar("Contact details updated successfully", "is-dark");
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.isSubmittingPContactDetails = false;
              this.setPContactDetailsErrors(err.response.data.errors);
            }, 1000);
          }
        });
    },
    setContactDetailsErrors(error = {}) {
      this.contactDetailsErrors.address = error.address ? error.address : [];
      this.contactDetailsErrors.city = error.city ? error.city : [];
      this.contactDetailsErrors.region = error.region ? error.region : [];
      this.contactDetailsErrors.country = error.country ? error.country : [];
      this.contactDetailsErrors.mobile = error.mobile ? error.mobile : [];
      this.contactDetailsErrors.telephone = error.telephone
        ? error.telephone
        : [];
      this.contactDetailsErrors.email = error.email ? error.email : [];
      this.contactDetailsErrors.otherEmail = error.otherEmail
        ? error.otherEmail
        : [];
    },
    setPContactDetailsErrors(error = {}) {
      this.contactDetailsErrors.address = error.address ? error.address : [];
      this.contactDetailsErrors.city = error.city ? error.city : [];
      this.contactDetailsErrors.region = error.region ? error.region : [];
      this.contactDetailsErrors.country = error.country ? error.country : [];
      this.contactDetailsErrors.mobile = error.mobile ? error.mobile : [];
      this.contactDetailsErrors.telephone = error.telephone
        ? error.telephone
        : [];
      this.contactDetailsErrors.email = error.email ? error.email : [];
      this.contactDetailsErrors.otherEmail = error.otherEmail
        ? error.otherEmail
        : [];
    },
    cancelContactDetailsForm() {
      this.contactDetailsErrors.address = [];
      this.contactDetailsErrors.city = [];
      this.contactDetailsErrors.region = [];
      this.contactDetailsErrors.country = [];
      this.contactDetailsErrors.mobile = [];
      this.contactDetailsErrors.telephone = [];
      this.contactDetailsErrors.email = [];
      this.contactDetailsErrors.otherEmail = [];
      this.isEditContactDetails = !this.isEditContactDetails;
    },
    cancelPContactDetailsForm() {
      this.contactDetailsErrors.address = [];
      this.contactDetailsErrors.city = [];
      this.contactDetailsErrors.region = [];
      this.contactDetailsErrors.country = [];
      this.contactDetailsErrors.mobile = [];
      this.contactDetailsErrors.telephone = [];
      this.contactDetailsErrors.email = [];
      this.contactDetailsErrors.otherEmail = [];
      this.isEditContactDetails = !this.isEditContactDetails;
    },
    setContactDetails(contact) {
      if (contact !== null) {
        this.contactDetails = {
          address: contact.address,
          city: contact.city,
          region: contact.region,
          country: contact.country,
          mobile: contact.mobile,
          telephone: contact.telephone,
          email: contact.email,
          otherEmail: contact.otherEmail,
        };
      }
    },
    setPContactDetails(contact) {
      if (contact !== null) {
        this.p_contactDetails = {
          address: contact.address,
          city: contact.city,
          region: contact.region,
          country: contact.country,
          mobile: contact.mobile,
          telephone: contact.telephone,
          email: contact.email,
          otherEmail: contact.otherEmail,
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>