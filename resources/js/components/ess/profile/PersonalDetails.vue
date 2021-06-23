<template>
  <div>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <!-- <p class="card-header-title">Personal Details</p> -->
        </header>
        <div class="card-content">
          <div class="content">
            <div class="personal__details">
              <div class="personal__details__photo">
                <div class="p-text">
                  <p>Employee Personal Profile</p>
                </div>
                <div class="personal__details__photo__display">
                  <div
                    class="profile__photo__overlay"
                    v-if="roleOrUserPermission('Admin', getProfile.user_id)"
                  >
                    <b-field>
                      <b-tooltip label="Upload profile photo" type="is-dark">
                        <b-upload
                          v-model="personalDetails.avatar"
                          class="file-label"
                        >
                          <span class="file-cta">
                            <b-icon
                              class="file-icon"
                              icon="camera"
                              size="large"
                            ></b-icon>
                          </span>
                        </b-upload>
                      </b-tooltip>
                    </b-field>
                  </div>
                  <div class="photo__wrapper">
                    <b-loading
                      :can-cancel="true"
                      v-model="isUploadingPhoto"
                      :is-full-page="false"
                    ></b-loading>
                    <img
                      :src="`/storage/avatar/${getProfile.personal_details.avatar}`"
                      alt="Profile Photo"
                      srcset
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div class="personal__details__detail">
                <fieldset :disabled="isEditPersonalDetails" class="mb-4">
                  <form @submit.prevent="updatePersonalDetails()">
                    <div class="columns">
                      <div class="column is-3">
                        <b-field
                          label="Title"
                          :type="{
                            'is-danger': personalDetailsErrors.title.length > 0,
                          }"
                          :message="personalDetailsErrors.title"
                        >
                          <b-select
                            size=""
                            expanded
                            v-model="personalDetails.title"
                          >
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Dr.">Dr.</option>
                          </b-select>
                        </b-field>
                      </div>
                      <div class="column is-3">
                        <b-field
                          label="First Name"
                          expanded
                          :type="{
                            'is-danger':
                              personalDetailsErrors.firstName.length > 0,
                          }"
                          :message="personalDetailsErrors.firstName"
                        >
                          <b-input
                            size=""
                            v-model="personalDetails.firstName"
                          ></b-input>
                        </b-field>
                      </div>
                      <div class="column is-3">
                        <b-field
                          label="Middle Name"
                          expanded
                          :type="{
                            'is-danger':
                              personalDetailsErrors.middleName.length > 0,
                          }"
                          :message="personalDetailsErrors.middleName"
                        >
                          <b-input
                            size=""
                            v-model="personalDetails.middleName"
                          ></b-input>
                        </b-field>
                      </div>
                      <div class="column is-3">
                        <b-field
                          label="Last Name"
                          expanded
                          :type="{
                            'is-danger':
                              personalDetailsErrors.lastName.length > 0,
                          }"
                          :message="personalDetailsErrors.lastName"
                        >
                          <b-input
                            size=""
                            v-model="personalDetails.lastName"
                          ></b-input>
                        </b-field>
                      </div>
                    </div>

                    <div class="columns">
                      <div class="column is-3">
                        <b-field
                          label="Birth Date"
                          :type="{
                            'is-danger':
                              personalDetailsErrors.birthDate.length > 0,
                          }"
                          :message="personalDetailsErrors.birthDate"
                        >
                          <b-datepicker
                            v-model="personalDetails.birthDate"
                            placeholder="Click to select..."
                            pack="fas"
                            icon="calendar"
                            trap-focus
                          ></b-datepicker>
                        </b-field>
                      </div>
                      <div class="column is-3">
                        <b-field
                          label="Marital Status"
                          :type="{
                            'is-danger':
                              personalDetailsErrors.maritalStatus.length > 0,
                          }"
                          :message="personalDetailsErrors.maritalStatus"
                        >
                          <b-select
                            size=""
                            expanded
                            v-model="personalDetails.maritalStatus"
                          >
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Other">Other</option>
                          </b-select>
                        </b-field>
                      </div>
                      <div class="column is-3">
                        <b-field
                          label="Nationality"
                          :type="{
                            'is-danger':
                              personalDetailsErrors.nationality.length > 0,
                          }"
                          :message="personalDetailsErrors.nationality"
                        >
                          <b-select
                            size=""
                            expanded
                            v-model="personalDetails.nationality"
                          >
                            <option value="Ghana">Ghana</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="USA">USA</option>
                          </b-select>
                        </b-field>
                      </div>
                      <div class="column is-3">
                        <b-field
                          label="Gender"
                          :type="{
                            'is-danger':
                              personalDetailsErrors.gender.length > 0,
                          }"
                          :message="personalDetailsErrors.gender"
                        >
                          <div class="block" style="margin-bottom: -0.2rem">
                            <b-radio
                              v-model="personalDetails.gender"
                              name="gender"
                              type="is-info"
                              native-value="Male"
                              size=""
                              >Male</b-radio
                            >
                            <b-radio
                              v-model="personalDetails.gender"
                              name="gender"
                              type="is-info"
                              native-value="Female"
                              size=""
                              >Female</b-radio
                            >
                          </div>
                        </b-field>
                      </div>
                    </div>

                    <div class="columns">
                      <div class="column is-6">
                        <b-field
                          label="Staff Id"
                          expanded
                          :type="{
                            'is-danger':
                              personalDetailsErrors.staffId.length > 0,
                          }"
                          :message="personalDetailsErrors.staffId"
                        >
                          <b-input
                            size=""
                            v-model="personalDetails.staffId"
                          ></b-input>
                        </b-field>
                      </div>
                      <div class="column is-6">
                        <b-field
                          label="Other Id"
                          expanded
                          :type="{
                            'is-danger':
                              personalDetailsErrors.otherId.length > 0,
                          }"
                          :message="personalDetailsErrors.otherId"
                        >
                          <b-input
                            size=""
                            v-model="personalDetails.otherId"
                          ></b-input>
                        </b-field>
                      </div>
                    </div>
                    <b-field v-if="!isEditPersonalDetails">
                      <div class="buttons">
                        <button
                          class="button is-success is-light"
                          type="submit"
                          :disabled="isSubmittingPersonalDetails"
                        >
                          {{
                            isSubmittingPersonalDetails ? "Saving..." : "Save"
                          }}
                        </button>
                        <b-button
                          class="is-danger is-light"
                          @click="cancelPersonalDetailsForm()"
                          >Cancel</b-button
                        >
                      </div>
                    </b-field>
                  </form>
                </fieldset>
                <template
                  v-if="roleOrUserPermission('Admin', getProfile.user_id)"
                >
                  <b-field v-if="isEditPersonalDetails">
                    <b-button
                      class="is-info is-light"
                      icon-left="pen"
                      @click="isEditPersonalDetails = !isEditPersonalDetails"
                      >Edit</b-button
                    >
                  </b-field>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Attachments</p>
        </header>
        <div class="card-content">
          <div class="content">
            <section
              class="b__collapse__section"
              v-if="roleOrUserPermission('Admin', getProfile.user_id)"
            >
              <b-collapse
                :open="false"
                class="card"
                animation="slide"
                aria-id="addattachment"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="Add Attachment"
                >
                  <p class="card-header-title has-text-info">Add Attachment</p>
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
                    <fieldset :disabled="isEditPersonalDetailsAttachment">
                      <form @submit.prevent="updatePersonalDetailsAttachment">
                        <div class="columns">
                          <div class="column is-3">
                            <b-field>
                              <b-upload
                                v-model="personalDetails.attachment.file"
                                drag-drop
                                size="is-small"
                              >
                                <section class="section">
                                  <div class="content has-text-centered">
                                    <p>
                                      <b-icon
                                        icon="upload"
                                        size="is-small"
                                      ></b-icon>
                                    </p>
                                    <p>Drop or click to upload attachment</p>
                                  </div>
                                </section>
                              </b-upload>
                            </b-field>
                            <div
                              class="tags"
                              v-if="personalDetails.attachment.file"
                            >
                              <span class="tag is-large is-info is-light">
                                {{ personalDetails.attachment.file.name }}
                                <button
                                  class="delete is-small"
                                  type="button"
                                  @click="
                                    personalDetails.attachment.file = null
                                  "
                                ></button>
                              </span>
                            </div>
                            <b-field
                              :type="{
                                'is-danger':
                                  personalDetailsAttachmentError.file.length >
                                  0,
                              }"
                              :message="personalDetailsAttachmentError.file"
                            >
                            </b-field>
                          </div>
                          <div class="column is-4">
                            <b-field
                              :type="{
                                'is-danger':
                                  personalDetailsAttachmentError.comment
                                    .length > 0,
                              }"
                              :message="personalDetailsAttachmentError.comment"
                            >
                              <b-input
                                type="textarea"
                                placeholder="Type your comment here..."
                                v-model="personalDetails.attachment.comment"
                              ></b-input>
                            </b-field>
                          </div>
                        </div>
                        <hr />
                        <b-field v-if="!isEditPersonalDetailsAttachment">
                          <div class="buttons">
                            <button
                              class="button is-success is-light"
                              type="submit"
                              :disabled="isSubmittingPersonalDetailsAttachment"
                            >
                              {{
                                isSubmittingPersonalDetailsAttachment
                                  ? "Submitting..."
                                  : "Submit"
                              }}
                            </button>

                            <b-button
                              class="is-danger is-light"
                              @click="cancelPersonalDetailsAttachmentForm()"
                              >Cancel</b-button
                            >
                          </div>
                        </b-field>
                      </form>
                    </fieldset>
                    <b-field v-if="isEditPersonalDetailsAttachment">
                      <b-button
                        class="is-info is-light"
                        icon-left="plus"
                        @click="
                          isEditPersonalDetailsAttachment =
                            !isEditPersonalDetailsAttachment
                        "
                        >Add</b-button
                      >
                    </b-field>
                  </div>
                </div>
              </b-collapse>
            </section>
            <b-table
              :data="getPersonalAttachments"
              :paginated="true"
              :per-page="5"
              :current-page="1"
              :pagination-simple="true"
              pagination-position="bottom"
            >
              <b-table-column field="file" label="File" sortable v-slot="props">
                <a
                  @click="
                    viewAttachment(`/attachments/personal/${props.row.file}`)
                  "
                  >{{ props.row.file }}</a
                >
              </b-table-column>
              <b-table-column
                field="comment"
                label="Comment"
                sortable
                v-slot="props"
                >{{ props.row.comment }}</b-table-column
              >
              <b-table-column field="actions" label="Actions" v-slot="props">
                <div class="b-tooltips">
                  <b-tooltip label="Replace attachment" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="upload"
                      @click="openAttachmentDropper(props.row, 'attachment')"
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip label="Edit comment" type="is-dark">
                    <b-button
                      :id="`comment-id${props.row.id}`"
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="pen"
                      @click="openAttachmentDropper(props.row, 'comment')"
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip label="Delete" type="is-dark">
                    <b-button
                      class="is-danger is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="trash"
                      @click="deletePersonalDetailsAttachment(props.row.id)"
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
            </b-table>
          </div>
        </div>
      </div>
    </section>

    <dropper
      :join="`#comment-id${getAttachmentDropperId}`"
      ref="attachmentDropper"
      @esc-keydown="closeAttachmentDropper"
      @other-area-clicked="closeAttachmentDropper"
      class="job-cat-dropper"
      :z-index="1000"
    >
      <form
        @submit.prevent="replacePersonalDetailsAttachment(attachmentUpdateType)"
        v-if="attachmentUpdateType === 'comment'"
      >
        <h3 class="label">Edit Comment</h3>
        <b-field
          :type="{
            'is-danger': personalDetailsAttachmentError.comment.length > 0,
          }"
          :message="personalDetailsAttachmentError.comment"
        >
          <b-input
            type="textarea"
            placeholder="Type your comment here..."
            v-model="personalDetails.attachment.comment"
          ></b-input>
        </b-field>
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isUpdatingFileComment"
          >
            {{ isUpdatingFileComment ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isUpdatingFileComment"
            @click="closeAttachmentDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
      <form
        @submit.prevent="replacePersonalDetailsAttachment(attachmentUpdateType)"
        v-if="attachmentUpdateType === 'attachment'"
      >
        <h3 class="label has-text-info">Replace Attachment</h3>
        <hr />
        <b-field>
          <b-upload
            v-model="personalDetails.attachment.file"
            size="is-small"
            style="cursor: pointer"
          >
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon icon="upload" size="is-small"></b-icon>
                </p>
                <p>Click to replace attachment</p>
              </div>
            </section>
          </b-upload>
        </b-field>
        <div class="tags" v-if="personalDetails.attachment.file">
          <span class="tag is-large is-info is-light">
            {{ personalDetails.attachment.file.name }}
            <button
              class="delete is-small"
              type="button"
              @click="personalDetails.attachment.file = null"
            ></button>
          </span>
        </div>
        <b-field
          :type="{
            'is-danger': personalDetailsAttachmentError.file.length > 0,
          }"
          :message="personalDetailsAttachmentError.file"
        >
        </b-field>
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isUpdatingFileComment"
          >
            {{ isUpdatingFileComment ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isUpdatingFileComment"
            @click="closeAttachmentDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ViewPdf from "../../ViewPdf";
export default {
  name: "PersonalDetails",
  components: { ViewPdf },
  computed: {
    ...mapGetters(["getProfile"]),
    getPersonalAttachments() {
      if (typeof this.getProfile.personal_details.attachments === "string")
        return JSON.parse(this.getProfile.personal_details.attachments);
      return [];
    },
    getAttachmentDropperId() {
      return this.attachmentDropperId;
    },
  },
  created() {
    this.$watch(
      () => this.personalDetails.avatar,
      (avatar) => {
        if (avatar) {
          this.uploadUserAvatar(avatar);
        }
      }
    );
  },
  beforeMount() {
    this.setPersonalDetails(this.getProfile.personal_details);
  },
  data() {
    return {
      isEditPersonalDetails: true,
      isEditPersonalDetailsAttachment: true,
      isSubmittingPersonalDetails: false,
      isSubmittingPersonalDetailsAttachment: false,
      isUploadingPhoto: false,
      isUpdatingFileComment: false,
      attachmentDropperId: "",
      attachmentUpdateType: "",
      personalDetails: {
        avatar: null,
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        staffId: "",
        otherId: "",
        birthDate: new Date(),
        maritalStatus: "",
        nationality: "",
        gender: "",
        attachment: {
          file: null,
          comment: "",
        },
      },
      userAvatarError: [],
      personalDetailsAttachmentError: {
        file: [],
        comment: [],
      },
      personalDetailsErrors: {
        title: [],
        firstName: [],
        middleName: [],
        lastName: [],
        staffId: [],
        otherId: [],
        birthDate: [],
        maritalStatus: [],
        nationality: [],
        gender: [],
      },
    };
  },
  methods: {
    ...mapActions(["dispatchAuthUser", "dispatchProfile"]),
    openAttachmentDropper(data, type) {
      const dropper = this.$refs.attachmentDropper;
      this.attachmentDropperId = data.id;
      this.attachmentUpdateType = type;
      if (dropper) {
        this.personalDetails.attachment.comment = data.comment;
        dropper.open();
      }
    },
    closeAttachmentDropper() {
      const dropper = this.$refs.attachmentDropper;
      this.attachmentUpdateType = "";
      if (dropper) {
        this.personalDetails.attachment.comment = "";
        this.personalDetails.attachment.file = null;
        dropper.close();
      }
    },
    setPersonalDetails(details) {
      this.personalDetails = {
        ...this.personalDetails,
        title: details.title || "",
        firstName: details.firstName || "",
        middleName: details.middleName || "",
        lastName: details.lastName || "",
        staffId: details.staffId || "",
        otherId: details.otherId || "",
        birthDate: details.birthDate ? new Date(details.birthDate) : new Date(),
        maritalStatus: details.maritalStatus || "",
        nationality: details.nationality || "",
        gender: details.gender || "",
      };
    },
    uploadUserAvatar(avatar) {
      this.userAvatarError = [];
      this.isUploadingPhoto = true;
      const data = new FormData();
      data.append("avatar", avatar);
      data.append("id", this.getProfile.user_id);
      this.$axios
        .post(`/dashboard/ess/upload-avatar`, data)
        .then((res) => {
          if (res.status === 200 && res.data.uploaded) {
            this.isUploadingPhoto = false;
            if (this.$page.props.authUser.id === this.getProfile.user_id) {
              this.dispatchAuthUser({
                type: "UPDATE_AVATAR",
                payload: res.data.avatar,
              });
            }
            this.dispatchProfile({
              type: "UPDATE_AVATAR",
              payload: res.data.avatar,
            });
          }
        })
        .catch((err) => {});
    },
    updatePersonalDetails() {
      this.setPersonalDetailsErrors();
      this.isSubmittingPersonalDetails = true;
      this.$axios
        .put(
          `/dashboard/ess/update-personal-details/${this.getProfile.user_id}`,
          {
            ...this.personalDetails,
            birthDate: this.personalDetails.birthDate.toISOString(),
          }
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            if (this.$page.props.authUser.id === this.getProfile.user_id) {
              this.dispatchAuthUser({
                payload: res.data.authUser,
              });
            }
            this.dispatchProfile({
              type: "UPDATE_PERSONAL_DETAILS",
              payload: res.data.profile,
            });
            setTimeout(() => {
              this.snackbar("Personal details updated successfully", "is-dark");
              this.isSubmittingPersonalDetails = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.isSubmittingPersonalDetails = false;
              this.setPersonalDetailsErrors(err.response.data.errors);
            }, 1000);
          }
        });
    },
    updatePersonalDetailsAttachment() {
      this.isSubmittingPersonalDetailsAttachment = true;
      this.personalDetailsAttachmentError = {
        file: [],
        comment: [],
      };
      const data = new FormData();
      data.append(`file`, this.personalDetails.attachment.file);
      data.append("comment", this.personalDetails.attachment.comment);
      this.$axios
        .post(
          `/dashboard/ess/update-personal-details-attachment/${this.getProfile.user_id}`,
          data
        )
        .then((res) => {
          if (res.status === 200) {
            this.dispatchProfile({
              type: "UPDATE_PERSONAL_DETAILS_ATTACHMENT",
              payload: res.data.attachments,
            });
            setTimeout(() => {
              this.snackbar("Attachment updated successfully", "is-dark");
              this.isSubmittingPersonalDetailsAttachment = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status == 422) {
            setTimeout(() => {
              this.setPersonalDetailsAttachmentErrors(err.response.data.errors);
              this.isSubmittingPersonalDetailsAttachment = false;
            }, 1000);
          }
        });
    },
    replacePersonalDetailsAttachment(type) {
      this.isSubmittingPersonalDetailsAttachment = true;
      this.personalDetailsAttachmentError = {
        file: [],
        comment: [],
      };
      const data = new FormData();
      if (type === "comment") {
        data.append(`id`, this.attachmentDropperId);
        data.append("comment", this.personalDetails.attachment.comment);
      }
      if (type === "attachment") {
        data.append(`id`, this.attachmentDropperId);
        data.append(`file`, this.personalDetails.attachment.file);
      }
      this.$axios
        .post(
          `/dashboard/ess/replace-personal-details-attachment/${this.getProfile.user_id}`,
          data
        )
        .then((res) => {
          if (res.status === 200) {
            this.personalDetails.attachment.file = null;
            this.dispatchProfile({
              type: "UPDATE_PERSONAL_DETAILS_ATTACHMENT",
              payload: res.data.attachments,
            });
            setTimeout(() => {
              if (type === "comment") {
                this.snackbar("Comment updated successfully", "is-dark");
              }
              if (type === "attachment") {
                this.snackbar("Attachment updated successfully", "is-dark");
              }
              this.isSubmittingPersonalDetailsAttachment = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status == 422) {
            setTimeout(() => {
              this.setPersonalDetailsAttachmentErrors(err.response.data.errors);
              this.isSubmittingPersonalDetailsAttachment = false;
            }, 1000);
          }
        });
    },
    deletePersonalDetailsAttachment(id) {
      this.$axios
        .delete(
          `/dashboard/ess/delete-personal-details-attachment/${this.getProfile.user_id}/${id}`
        )
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchProfile({
              type: "DELETE_ATTACHMENT",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Attachment deleted successfully", "is-dark");
              this.isSubmittingPersonalDetailsAttachment = false;
            }, 1000);
          }
        })
        .catch((err) => {});
    },
    viewAttachment(file) {
      this.$buefy.modal.open({
        parent: this,
        component: ViewPdf,
        hasModalCard: true,
        trapFocus: true,
        props: { file },
      });
    },
    setPersonalDetailsErrors(error = {}) {
      this.personalDetailsErrors.title = error.title || [];
      this.personalDetailsErrors.firstName = error.firstName || [];
      this.personalDetailsErrors.middleName = error.middleName || [];
      this.personalDetailsErrors.lastName = error.lastName || [];
      this.personalDetailsErrors.staffId = error.staffId || [];
      this.personalDetailsErrors.otherId = error.otherId || [];
      this.personalDetailsErrors.birthDate = error.birthDate || [];
      this.personalDetailsErrors.maritalStatus = error.maritalStatus || [];
      this.personalDetailsErrors.nationality = error.nationality || [];
      this.personalDetailsErrors.gender = error.gender || [];
    },
    cancelPersonalDetailsForm() {
      this.setPersonalDetailsErrors();
      this.isEditPersonalDetails = !this.isEditPersonalDetails;
    },
    setPersonalDetailsAttachmentErrors(obj) {
      this.personalDetailsAttachmentError = {
        file: obj.file || [],
        comment: obj.comment || [],
      };
      this.isSubmittingPersonalDetailsAttachment = false;
    },
    cancelPersonalDetailsAttachmentForm() {
      this.personalDetails.attachment = {
        file: [],
        comment: "",
      };
      this.personalDetailsAttachmentError = {
        file: [],
        comment: [],
      };
      this.isEditPersonalDetailsAttachment =
        !this.isEditPersonalDetailsAttachment;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>