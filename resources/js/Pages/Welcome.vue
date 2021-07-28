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
              <h4>{{ $t("app.login_pannel") }}</h4>
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
                      :placeholder="$t('app.username_placeholder')"
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
                      :placeholder="$t('app.password')"
                      v-model="credentials.password"
                      autocomplete="current-password"
                      password-reveal
                    ></b-input>
                  </b-field>
                  <b-field>
                    <b-checkbox v-model="credentials.remember" type="is-info">
                      {{ $t("app.remember_me") }}
                    </b-checkbox>
                  </b-field>
                  <div class="login-button">
                    <button type="submit" class="button is-primary">
                      {{ $t("app.login") }}
                    </button>
                    <p class="login-error" v-if="credentialError">
                      {{ credentialError }}
                    </p>
                  </div>
                </form>

                <div class="login__footer">
                  <p class="login-forget-password">
                    <inertia-link href="/password-reset-link">{{
                      $t("app.forget_pass_text")
                    }}</inertia-link>
                  </p>
                  <p class="toggle__lang">
                    <a @click="changeLocale()">{{
                      locale === "fr" ? "English" : "French"
                    }}</a>
                  </p>
                </div>
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
      title: `Login | ADU Human Resource Management System`,
    };
  },
  mounted() {
    if (localStorage.getItem("locale")) {
      this.locale = localStorage.getItem("locale");
      this.$lang.setLocale(this.locale);
    }
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
      locale: "",
    };
  },
  methods: {
    login() {
      this.usernameError = "";
      this.passwordError = "";
      Inertia.post("/login", this.credentials, {
        errorBag: "userLogin",
        headers: {
          Locale: this.$lang.getLocale(),
        },
        onError: (err) => {
          this.usernameError = err.username || "";
          this.passwordError = err.password || "";
          this.credentialError = err.credentialError || "";
        },
      });
    },
    async changeLocale() {
      const locale = this.locale === "fr" ? "en" : "fr";
      try {
        const res = await this.$axios.get(`/lang/${locale}`);
        if (res.status === 200) {
          this.locale = locale;
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