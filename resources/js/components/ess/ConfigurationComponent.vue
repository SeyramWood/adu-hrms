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
                <p class="card-header-title has-text-info">
                  {{ $t("app.change_password") }}
                </p>
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
                      :label="$t('app.current_password')"
                      :type="{
                        'is-danger':
                          credentialErrors.current_password.length > 0,
                      }"
                      :message="credentialErrors.current_password"
                    >
                      <b-input
                        :placeholder="$t('app.current_password')"
                        type="password"
                        value=""
                        icon-pack="fas"
                        icon="lock"
                        v-model="credentials.current_password"
                      >
                      </b-input>
                    </b-field>
                    <b-field
                      :label="$t('app.new_password')"
                      :type="{
                        'is-danger': credentialErrors.new_password.length > 0,
                      }"
                      :message="credentialErrors.new_password"
                    >
                      <b-input
                        :placeholder="$t('app.new_password')"
                        type="password"
                        value=""
                        icon-pack="fas"
                        icon="key"
                        v-model="credentials.new_password"
                      >
                      </b-input>
                    </b-field>
                    <b-field
                      :label="$t('app.confirm_password')"
                      :type="{
                        'is-danger':
                          credentialErrors.confirm_new_password.length > 0,
                      }"
                      :message="credentialErrors.confirm_new_password"
                    >
                      <b-input
                        :placeholder="$t('app.confirm_password')"
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
                          {{
                            isUpdatingPassword
                              ? `${$t("app.updating")}...`
                              : $t("app.update")
                          }}
                        </button>

                        <b-button
                          class="is-danger is-light"
                          @click="cancelChangePassword()"
                          >{{ $t("app.cancel") }}</b-button
                        >
                      </div>
                      <p class="login-forget-password">
                        <inertia-link href="/password-reset-link">{{
                          $t("app.forget_pass_text")
                        }}</inertia-link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </b-collapse>
          </section>
        </div>
        <div class="column is-3">
          <section class="b__collapse__section">
            <b-collapse
              v-model="openChangeLanguage"
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
                <p class="card-header-title has-text-info">
                  {{ $t("app.change_language") }}
                </p>
                <a class="card-header-icon">
                  <b-icon
                    type="is-info"
                    pack="fas"
                    :icon="openChangeLanguage ? 'angle-down' : 'angle-up'"
                  ></b-icon>
                </a>
              </div>
              <div class="card-content">
                <div class="content">
                  <b-field v-for="l in languages" :key="l.name">
                    <b-radio
                      v-model="locale"
                      :native-value="l.locale"
                      type="is-info"
                      size="is-medium"
                    >
                      {{ l.name }}
                    </b-radio>
                  </b-field>
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
  beforeMount() {
    this.authUser = this.$page.props.authUser;
  },
  mounted() {
    // console.log(this.$lang.getLocale());
  },
  created() {
    this.$watch(
      () => this.locale,
      (value) => {
        if (value) {
          this.changeLocale(value);
        }
      }
    );
  },
  data() {
    return {
      isUpdatingPassword: false,
      openChangePassword: true,
      openChangeLanguage: true,
      authUser: null,
      locale: this.$lang.getLocale(),
      languages: [
        { name: "English", locale: "en" },
        { name: "French", locale: "fr" },
      ],
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

    async changeLocale(locale) {
      try {
        const res = await this.$axios.get(`/lang/${locale}`);
        if (res.status === 200) {
          this.$lang.setLocale(locale);
          localStorage.setItem("locale", locale);
        }
      } catch (error) {
        console.trace(error);
      }
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
