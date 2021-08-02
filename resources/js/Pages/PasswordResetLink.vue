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
                <transition name="slide-fade">
                  <p class="my-2" v-if="passwordSent">{{ passwordSent }}</p>
                </transition>

                <form @submit.prevent="getResetLink()">
                  <b-field
                    :type="{ 'is-danger': usernameError.length > 0 }"
                    :message="usernameError"
                  >
                    <b-input
                      expanded
                      type="email"
                      pack="fas"
                      icon="envelope"
                      placeholder="Enter your username, yourstaffemail@gmail.com"
                      v-model="credentials.username"
                      autocomplete="email"
                      autofocus
                      size="is-large"
                    ></b-input>
                  </b-field>
                  <div class="login-button">
                    <button
                      type="submit"
                      class="button is-primary is-large"
                      :disabled="sendingLink"
                    >
                      {{ sendingLink ? "Submitting..." : "Submit" }}
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
  name: "PasswordResetLink",
  metaInfo() {
    return {
      title: `Password Reset Link | ADU Staff Portal`,
    };
  },
  data() {
    return {
      credentials: {
        username: "",
      },
      usernameError: "",
      passwordSent: "",
      sendingLink: false,
    };
  },
  methods: {
    getResetLink() {
      this.sendingLink = true;
      this.usernameError = "";
      Inertia.post("/password-reset-link", this.credentials, {
        errorBag: "passwordResetLink",
        onSuccess: (res) => {
          this.sendingLink = false;
          this.passwordSent = "Recovery token successfully sent to your email.";
        },
        onError: (err) => {
          this.usernameError = err.username ? err.username : "";
          this.sendingLink = false;
        },
      });
    },
  },
};
</script>

<style lang="scss" scope>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>