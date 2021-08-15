<template>
  <section class="b__collapse__section">
    <div class="card">
      <header class="card-header">
        <!-- <p class="card-header-title">Emergency Contacts</p> -->
      </header>
      <div class="profile-detail-bar">
        <p class="p-text">{{ $t("app.emergency_contact_cta") }}</p>
      </div>
      <div class="card-content">
        <div class="content">
          <section
            class="b__collapse__section"
            v-if="userOrPermission('create', getProfile.user_id)"
          >
            <b-collapse
              class="card"
              animation="slide"
              aria-id="addreportingmethod"
              v-model="closeEmergencyContactDetailsForm"
            >
              <div
                slot="trigger"
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="addreportingmethod"
              >
                <p class="card-header-title has-text-info">
                  {{ $t("app.add_emergency_contact") }}
                </p>
                <a class="card-header-icon">
                  <b-icon
                    pack="fas"
                    type="is-info"
                    :icon="props.open ? 'angle-down' : 'angle-up'"
                  ></b-icon>
                </a>
              </div>
              <div class="card-content">
                <div class="content">
                  <form @submit.prevent="addEmergencyContact()">
                    <div class="columns">
                      <div class="column is-6">
                        <b-field
                          :label="$t('app.name')"
                          expanded
                          :type="{
                            'is-danger': emergencyContactErrors.name.length > 0,
                          }"
                          :message="emergencyContactErrors.name"
                        >
                          <b-input
                            size=""
                            v-model="emergencyContact.name"
                          ></b-input>
                        </b-field>
                      </div>
                      <div class="column is-6">
                        <b-field
                          :label="$t('app.relationship')"
                          expanded
                          :type="{
                            'is-danger':
                              emergencyContactErrors.relationship.length > 0,
                          }"
                          :message="emergencyContactErrors.relationship"
                        >
                          <b-input
                            size=""
                            v-model="emergencyContact.relationship"
                          ></b-input>
                        </b-field>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column is-4">
                        <b-field
                          :label="$t('app.mobile')"
                          expanded
                          :type="{
                            'is-danger':
                              emergencyContactErrors.mobile.length > 0,
                          }"
                          :message="emergencyContactErrors.mobile"
                        >
                          <b-input
                            size=""
                            v-model="emergencyContact.mobile"
                          ></b-input>
                        </b-field>
                      </div>
                      <div class="column is-4">
                        <b-field
                          :label="$t('app.home_tel')"
                          expanded
                          :type="{
                            'is-danger':
                              emergencyContactErrors.homeTelephone.length > 0,
                          }"
                          :message="emergencyContactErrors.homeTelephone"
                        >
                          <b-input
                            size=""
                            v-model="emergencyContact.homeTelephone"
                          ></b-input>
                        </b-field>
                      </div>
                      <div class="column is-4">
                        <b-field
                          :label="$t('app.work_tel')"
                          expanded
                          :type="{
                            'is-danger':
                              emergencyContactErrors.workTelephone.length > 0,
                          }"
                          :message="emergencyContactErrors.workTelephone"
                        >
                          <b-input
                            size=""
                            v-model="emergencyContact.workTelephone"
                          ></b-input>
                        </b-field>
                      </div>
                    </div>
                    <hr />
                    <div class="buttons">
                      <button
                        class="button is-success is-light"
                        type="submit"
                        :disabled="isSubmittingEmergencyContact"
                      >
                        {{
                          isSubmittingEmergencyContact
                            ? `${$t("app.submitting")}...`
                            : $t("app.submit")
                        }}
                      </button>
                      <b-button
                        class="is-danger is-light"
                        @click="cancelEmergencyContactDetailsForm()"
                        >{{ $t("app.cancel") }}</b-button
                      >
                    </div>
                  </form>
                </div>
              </div>
            </b-collapse>
          </section>
          <b-table
            :data="getProfile.emergency_contacts || []"
            :paginated="true"
            :per-page="10"
            :current-page="1"
            :pagination-simple="true"
            default-sort-direction="desc"
            sort-icon="arrow-up"
            sort-icon-size="is-small"
            striped
            hoverable
            default-sort="id"
            pagination-position="bottom"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
          >
            <b-table-column
              field="name"
              :label="$t('app.name')"
              sortable
              v-slot="props"
              >{{ props.row.name }}</b-table-column
            >
            <b-table-column
              field="relationship"
              :label="$t('app.relationship')"
              sortable
              v-slot="props"
              >{{ props.row.relationship }}</b-table-column
            >
            <b-table-column
              field="mobile"
              :label="$t('app.mobile')"
              sortable
              v-slot="props"
              >{{ props.row.mobile }}</b-table-column
            >

            <b-table-column
              field="worktelephone"
              :label="$t('app.work_tel')"
              sortable
              v-slot="props"
              >{{ props.row.workTelephone }}</b-table-column
            >
            <b-table-column
              field="telephone"
              :label="$t('app.home_tel')"
              sortable
              v-slot="props"
              >{{ props.row.homeTelephone }}</b-table-column
            >
            <b-table-column
              field="actions"
              :label="$tc('app.action', 2)"
              v-slot="props"
            >
              <div class="b-tooltips">
                <b-tooltip :label="$t('app.editContact')" type="is-dark">
                  <b-button
                    class="is-info is-light"
                    size="is-small"
                    pack="fas"
                    icon-right="pen"
                    :id="`contact-id${
                      getContactDropperId === props.row.id
                        ? getContactDropperId
                        : ''
                    }`"
                    @click="openContactDropper(props.row)"
                    :disabled="!userOrPermission('update', getProfile.user_id)"
                  ></b-button>
                </b-tooltip>
                <b-tooltip :label="$t('app.delete')" type="is-dark">
                  <b-button
                    class="is-danger is-light"
                    size="is-small"
                    pack="fas"
                    icon-right="trash"
                    @click="deleteEmergencyContact(props.row.id)"
                    :disabled="!userOrPermission('delete', getProfile.user_id)"
                  ></b-button>
                </b-tooltip>
              </div>
            </b-table-column>
          </b-table>
        </div>
      </div>
    </div>

    <dropper
      :join="`#contact-id${getContactDropperId}`"
      ref="contactDropper"
      @esc-keydown="closeContactDropper"
      @other-area-clicked="closeContactDropper"
      class="dropper"
      :z-index="9999"
    >
      <form @submit.prevent="updateEmergencyContact()">
        <h3 class="label text-main">Edit Emergency Contact</h3>
        <hr />
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Name"
              expanded
              :type="{
                'is-danger': emergencyContactErrors.name.length > 0,
              }"
              :message="emergencyContactErrors.name"
            >
              <b-input size="" v-model="emergencyContact.name"></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Relationship"
              expanded
              :type="{
                'is-danger': emergencyContactErrors.relationship.length > 0,
              }"
              :message="emergencyContactErrors.relationship"
            >
              <b-input
                size=""
                v-model="emergencyContact.relationship"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Mobile"
              expanded
              :type="{
                'is-danger': emergencyContactErrors.mobile.length > 0,
              }"
              :message="emergencyContactErrors.mobile"
            >
              <b-input size="" v-model="emergencyContact.mobile"></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Home Telephone"
              expanded
              :type="{
                'is-danger': emergencyContactErrors.homeTelephone.length > 0,
              }"
              :message="emergencyContactErrors.homeTelephone"
            >
              <b-input
                size=""
                v-model="emergencyContact.homeTelephone"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12">
            <b-field
              label="Work Telephone"
              expanded
              :type="{
                'is-danger': emergencyContactErrors.workTelephone.length > 0,
              }"
              :message="emergencyContactErrors.workTelephone"
            >
              <b-input
                size=""
                v-model="emergencyContact.workTelephone"
              ></b-input>
            </b-field>
          </div>
        </div>
        <hr />
        <div class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingEmergencyContact"
          >
            {{ isSubmittingEmergencyContact ? "Saving..." : "Save" }}
          </button>
          <b-button class="is-danger is-light" @click="closeContactDropper()"
            >Cancel</b-button
          >
        </div>
      </form>
    </dropper>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ContactDetails",
  computed: {
    ...mapGetters(["getProfile"]),
    getContactDropperId() {
      return this.contactDropperId;
    },
  },
  created() {},
  data() {
    return {
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      closeEmergencyContactDetailsForm: false,
      isSubmittingEmergencyContact: false,
      contactDropperId: "",
      emergencyContact: {
        name: "",
        relationship: "",
        mobile: "",
        homeTelephone: "",
        workTelephone: "",
      },
      emergencyContactErrors: {
        name: [],
        relationship: [],
        mobile: [],
        homeTelephone: [],
        workTelephone: [],
      },
    };
  },
  methods: {
    ...mapActions(["dispatchProfile"]),
    openContactDropper(data) {
      this.contactDropperId = data.id;
      const dropper = this.$refs.contactDropper;
      if (dropper) {
        this.emergencyContact = {
          name: data.name,
          relationship: data.relationship,
          mobile: data.mobile,
          homeTelephone: data.homeTelephone,
          workTelephone: data.workTelephone,
        };
        dropper.open();
      }
    },
    closeContactDropper() {
      const dropper = this.$refs.contactDropper;
      if (dropper) {
        this.cancelEmergencyContactDetailsForm();
        dropper.close();
      }
    },
    addEmergencyContact() {
      this.setEmergencyContactErrors();
      this.isSubmittingEmergencyContact = true;
      this.$axios
        .put(
          `/dashboard/ess/add-emergency-contact/${this.getProfile.user_id}`,
          this.emergencyContact
        )
        .then((res) => {
          if (res.status === 200 && res.data.added) {
            this.clearEmergencyForm();
            this.isSubmittingEmergencyContact = false;
            this.dispatchProfile({
              type: "ADD_EMERGENCY_CONTACT_DETAILS",
              payload: JSON.parse(res.data.contacts),
            });
            this.snackbar("Contact added successfully", "is-dark");
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setEmergencyContactErrors(err.response.data.errors);
              this.isSubmittingEmergencyContact = false;
            }, 1000);
          }
        });
    },
    updateEmergencyContact() {
      this.setEmergencyContactErrors();
      this.isSubmittingEmergencyContact = true;
      this.$axios
        .put(
          `/dashboard/ess/update-emergency-contact/${this.getProfile.user_id}/${this.contactDropperId}`,
          this.emergencyContact
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.isSubmittingEmergencyContact = false;
            this.dispatchProfile({
              type: "UPDATE_EMERGENCY_CONTACT_DETAILS",
              payload: { ...this.emergencyContact, id: this.contactDropperId },
            });
            this.closeContactDropper();
            this.snackbar("Contact updated successfully", "is-dark");
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setEmergencyContactErrors(err.response.data.errors);
              this.isSubmittingEmergencyContact = false;
            }, 1000);
          }
        });
    },
    deleteEmergencyContact(id) {
      this.$axios
        .delete(
          `/dashboard/ess/delete-emergency-contact/${this.getProfile.user_id}/${id}`
        )
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchProfile({
              type: "DELETE_EMERGENCY_CONTACT_DETAILS",
              payload: this.contactDropperId,
            });
            this.snackbar("Contact deleted successfully", "is-dark");
          }
        })
        .catch((err) => {});
    },
    cancelEmergencyContactDetailsForm() {
      this.emergencyContactErrors.name = [];
      this.emergencyContactErrors.relationship = [];
      this.emergencyContactErrors.mobile = [];
      this.emergencyContactErrors.homeTelephone = [];
      this.emergencyContactErrors.workTelephone = [];
      this.closeEmergencyContactDetailsForm = false;
      this.clearEmergencyForm();
    },
    clearEmergencyForm() {
      this.emergencyContact.name = "";
      this.emergencyContact.relationship = "";
      this.emergencyContact.mobile = "";
      this.emergencyContact.homeTelephone = "";
      this.emergencyContact.workTelephone = "";
    },
    setEmergencyContactErrors(error = {}) {
      this.emergencyContactErrors = {
        name: error.name || [],
        relationship: error.relationship || [],
        mobile: error.mobile || [],
        homeTelephone: error.homeTelephone || [],
        workTelephone: error.workTelephone || [],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>