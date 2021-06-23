<template>
  <div class>
    <div class="content__split__right__tabs__myleave">
      <div class="columns">
        <div class="column is-6">
          <section class="b__collapse__section">
            <b-collapse
              v-model="openChangePassword"
              class="card"
              animation="slide"
              aria-id="myleavelist"
            >
              <div
                slot="trigger"
                class="card-header"
                role="button"
                aria-controls="myleavelist"
              >
                <p class="card-header-title has-text-info">Change Password</p>
                <a class="card-header-icon">
                  <b-icon
                    type="is-info"
                    pack="fas"
                    :icon="openChangePassword ? 'angle-down' : 'angle-up'"
                  ></b-icon>
                </a>
              </div>
              <div class="card-content">
                <div class="content">
                  <form @submit.prevent="changePassword()">
                    <b-field
                      label="Current Password"
                      :type="{
                        'is-danger':
                          credentialErrors.current_password.length > 0,
                      }"
                      :message="credentialErrors.current_password"
                    >
                      <b-input
                        placeholder="Current password"
                        type="password"
                        value=""
                        icon-pack="fas"
                        icon="lock"
                        v-model="credentials.current_password"
                      >
                      </b-input>
                    </b-field>
                    <b-field
                      label="New Password"
                      :type="{
                        'is-danger': credentialErrors.new_password.length > 0,
                      }"
                      :message="credentialErrors.new_password"
                    >
                      <b-input
                        placeholder="New password"
                        type="password"
                        value=""
                        icon-pack="fas"
                        icon="key"
                        v-model="credentials.new_password"
                      >
                      </b-input>
                    </b-field>
                    <b-field
                      label="Confirm New Password"
                      :type="{
                        'is-danger':
                          credentialErrors.confirm_new_password.length > 0,
                      }"
                      :message="credentialErrors.confirm_new_password"
                    >
                      <b-input
                        placeholder="Confirm new password"
                        type="password"
                        value=""
                        icon-pack="fas"
                        icon="key"
                        v-model="credentials.confirm_new_password"
                      >
                      </b-input>
                    </b-field>
                    <hr />
                    <div class="change-password-btns">
                      <div class="buttons">
                        <button
                          class="button is-success is-light"
                          type="submit"
                          :disabled="isUpdatingPassword"
                        >
                          {{ isUpdatingPassword ? "Updating..." : "Update" }}
                        </button>

                        <b-button
                          class="is-danger is-light"
                          @click="cancelChangePassword()"
                          >Cancel</b-button
                        >
                      </div>
                      <p class="login-forget-password">
                        <inertia-link href="/password-reset-link"
                          >I forget my password</inertia-link
                        >
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </b-collapse>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ConfigurationComponent",
  computed: {
    ...mapGetters([]),
  },
  created() {},
  beforeMount() {
    this.authUser = this.$page.props.authUser;
  },
  mounted() {},
  data() {
    return {
      isUpdatingPassword: false,
      openChangePassword: true,
      authUser: null,
      credentials: {
        current_password: "",
        new_password: "",
        confirm_new_password: "",
      },
      credentialErrors: {
        current_password: [],
        new_password: [],
        confirm_new_password: [],
      },
    };
  },
  methods: {
    ...mapActions([]),
    changePassword() {
      this.setCredentialErrors();
      this.isUpdatingPassword = true;
      this.$axios
        .put(`/change-password`, this.credentials)
        .then((res) => {
          this.isUpdatingPassword = false;
          if (res.status === 200 && res.data.changed) {
            this.clearCredentials();
            this.snackbar("Your password was successfuly changed.", "is-dark");
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            (this.isUpdatingPassword = false),
              this.setCredentialErrors(err.response.data.errors);
          }
        });
    },
    cancelChangePassword() {
      this.openChangePassword = false;
      this.clearCredentials();
      this.setCredentialErrors();
    },
    clearCredentials() {
      this.credentials = {
        current_password: "",
        new_password: "",
        confirm_new_password: "",
      };
    },
    setCredentialErrors(obj = {}) {
      this.credentialErrors = {
        current_password: obj.current_password || [],
        new_password: obj.new_password || [],
        confirm_new_password: obj.confirm_new_password || [],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.change-password-btns {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
