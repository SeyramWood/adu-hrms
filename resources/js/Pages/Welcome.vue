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
              <h4>Login Panel</h4>
            </div>
          </div>
          <div class="login__container__panel__form__container">
            <div class="login__container__panel__form__container__body">
              <div style="width: 100%">
                <form @submit.prevent="login()">
                  <b-field
                    :type="{ 'is-danger': usernameError.length > 0 }"
                    :message="usernameError"
                  >
                    <b-input
                      expanded
                      type="email"
                      pack="fas"
                      icon="envelope"
                      placeholder="yourstaffemail@gmail.com"
                      v-model="credentials.username"
                      autocomplete="email"
                      autofocus
                    ></b-input>
                  </b-field>
                  <b-field
                    :type="{ 'is-danger': passwordError.length > 0 }"
                    :message="passwordError"
                  >
                    <b-input
                      expanded
                      type="password"
                      pack="fas"
                      icon="key"
                      class="is-dander"
                      placeholder="Password"
                      v-model="credentials.password"
                      autocomplete="current-password"
                    ></b-input>
                  </b-field>
                  <b-field>
                    <b-checkbox v-model="credentials.remember" type="is-info">
                      Remember me
                    </b-checkbox>
                  </b-field>
                  <div class="login-button">
                    <button type="submit" class="button is-primary">
                      Login
                    </button>
                    <p class="login-error" v-if="credentialError">
                      {{ credentialError }}
                    </p>
                  </div>
                </form>

                <p class="pt-2 login-forget-password">
                  <inertia-link href="/password-reset-link"
                    >I forget my password</inertia-link
                  >
                </p>
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
  name: "Welcome",
  metaInfo() {
    return {
      title: `Login`,
    };
  },
  data() {
    return {
      credentials: {
        username: "",
        password: "",
        remember: false,
      },
      usernameError: "",
      passwordError: "",
      credentialError: "",
    };
  },
  methods: {
    login() {
      this.usernameError = "";
      this.passwordError = "";
      Inertia.post("/login", this.credentials, {
        errorBag: "userLogin",
        onError: (err) => {
          this.usernameError = err.username ? err.username : "";
          this.passwordError = err.username ? err.username : "";
          this.credentialError = err.credentialError ? err.credentialError : "";
        },
      });
    },
  },
};
</script>