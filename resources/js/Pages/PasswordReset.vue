<template>
  <div class="login__container">
    <section class="login__container__panel__wrapper">
      <div class="login__container__panel">
        <div class="login__container__panel__logo">
          <img src="/storage/logo/login.png" alt="" srcset="" />
        </div>
        <div class="login__container__panel__form">
          <div class="login__container__panel__form__header">
            <div class="login__container__panel__form__header__text">
              <h4>Recover Password</h4>
            </div>
          </div>
          <div class="login__container__panel__form__container">
            <div class="login__container__panel__form__container__body">
              <div style="width: 100%">
                <form @submit.prevent="login()">
                  <b-field
                    label="Enter your username"
                    :type="{ 'is-danger': usernameError.length > 0 }"
                    :message="usernameError"
                  >
                    <b-input
                      expanded
                      type="email"
                      autocomplete="email"
                      pack="fas"
                      icon="envelope"
                      placeholder="yourstaffemail@gmail.com"
                      v-model="credentials.username"
                    ></b-input>
                  </b-field>
                  <b-field
                    :type="{ 'is-danger': passwordError.length > 0 }"
                    :message="passwordError"
                    label="Enter new password"
                  >
                    <b-input
                      expanded
                      type="password"
                      pack="fas"
                      icon="key"
                      class="is-dander"
                      placeholder="New Password"
                      v-model="credentials.password"
                      autocomplete="current-password"
                      autofocus
                    ></b-input>
                  </b-field>
                  <b-field
                    :type="{ 'is-danger': passwordError.length > 0 }"
                    label="Confirm New password"
                  >
                    <b-input
                      expanded
                      type="password"
                      pack="fas"
                      icon="key"
                      class="is-dander"
                      placeholder="Confirm New Password"
                      v-model="credentials.password_confirmation"
                      autocomplete="current-password"
                    ></b-input>
                  </b-field>
                  <div class="login-button">
                    <button
                      type="submit"
                      class="button is-primary"
                      :disabled="recovering"
                    >
                      Recover
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
export default {
  name: "PasswordReset",
  metaInfo() {
    return {
      title: `Password Reset`,
    };
  },
  computed: {},
  props: {
    token: String,
    email: String,
  },
  data() {
    return {
      credentials: {
        username: this.email,
        password: "",
        password_confirmation: "",
        token: this.token,
      },
      usernameError: "",
      passwordError: "",
      recovering: false,
    };
  },
  methods: {
    login() {
      this.recovering = true;
      this.usernameError = "";
      this.passwordError = "";
      Inertia.post("/password-reset", this.credentials, {
        errorBag: "recoverPassword",
        onError: (err) => {
          this.recovering = false;
          this.usernameError = err.username ? err.username : "";
          this.passwordError = err.password ? err.password : "";
        },
      });
    },
  },
};
</script>