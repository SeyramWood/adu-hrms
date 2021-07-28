<template>
  <main class="v-cloak">
    <div class="brand__logo">
      <div class="brand__logo__main">
        <img :src="`/storage/logo/${getLogo}`" alt="Brand Logo" srcset="" />
      </div>
    </div>
    <header class="header">
      <nav class="header__nav">
        <ul class="header__nav__list header__nav__list--left">
          <li
            :class="`header__nav__list__item ${
              activePage === '/dashboard' ? 'active-left' : ''
            }`"
          >
            <inertia-link
              href="/dashboard"
              preserve-scroll
              :headers="{ 'Custom-Header': 'poopjpo' }"
              >{{ $t("app.dashboard") }}</inertia-link
            >
          </li>
          <li
            :class="`header__nav__list__item ${
              activePage === '/dashboard/ess'
                ? 'active-left'
                : regex.test(activePage)
                ? 'active-left'
                : ''
            }`"
          >
            <inertia-link href="/dashboard/ess" preserve-scroll>{{
              $t("app.employee")
            }}</inertia-link>
          </li>
          <li
            :class="`header__nav__list__item ${
              activePage === '/dashboard/admin' ? 'active-left' : ''
            }`"
            v-if="isPermission('view_admin')"
          >
            <inertia-link href="/dashboard/admin" preserve-scroll>{{
              $t("app.admin")
            }}</inertia-link>
          </li>

          <li
            :class="`header__nav__list__item ${
              activePage === '/dashboard/pim' ? 'active-left' : ''
            }`"
            v-if="isPermission('view_pim')"
          >
            <inertia-link href="/dashboard/pim" preserve-scroll>{{
              $t("app.pim")
            }}</inertia-link>
          </li>
          <li
            :class="`header__nav__list__item ${
              activePage === '/dashboard/leave' ? 'active-left' : ''
            }`"
            v-if="isPermission('view_leave')"
          >
            <inertia-link href="/dashboard/leave" preserve-scroll>{{
              $t("app.leave")
            }}</inertia-link>
          </li>
          <li
            :class="`header__nav__list__item ${
              activePage === '/dashboard/kpi' ? 'active-left' : ''
            }`"
          >
            <inertia-link href="/dashboard/kpi" preserve-scroll>{{
              $t("app.kpi")
            }}</inertia-link>
          </li>

          <li
            :class="`header__nav__list__item ${
              activePage === '/dashboard/staff-directory' ? 'active-left' : ''
            }`"
          >
            <inertia-link href="/dashboard/staff-directory" preserve-scroll>{{
              $t("app.staff_directory")
            }}</inertia-link>
          </li>
        </ul>
        <ul class="header__nav__list header__nav__list--right">
          <li class="header__nav__list__item">
            <b-dropdown aria-role="list" position="is-bottom-left">
              <p slot="trigger" role="button">
                <b-icon
                  pack="fas"
                  icon="exclamation-circle"
                  size="is-small"
                ></b-icon>
              </p>
              <b-dropdown-item aria-role="listitem">
                <a href="#" class="default"> Notifications</a>
              </b-dropdown-item>
              <b-dropdown-item aria-role="listitem">
                <a href="#" class="default"> Notifications</a>
              </b-dropdown-item>
              <b-dropdown-item aria-role="listitem">
                <a href="#" class="default"> Notifications</a>
              </b-dropdown-item>
              <b-dropdown-item aria-role="listitem">
                <a href="#" class="default"> Notifications</a>
              </b-dropdown-item>
            </b-dropdown>
          </li>
          <li class="header__nav__list__item">
            <b-dropdown aria-role="list" position="is-bottom-left">
              <p slot="trigger" role="button">
                <b-icon pack="fas" icon="cogs" size="is-small"></b-icon>
              </p>
              <b-dropdown-item aria-role="listitem">
                <inertia-link :href="`/dashboard/ess`" preserve-scroll>
                  <b-icon pack="fas" icon="user" size="is-small"></b-icon>
                  &nbsp; {{ $t("app.profile") }}
                </inertia-link>
              </b-dropdown-item>
              <b-dropdown-item aria-role="listitem">
                <inertia-link
                  href="/logout"
                  method="POST"
                  as="button"
                  class="logout-btn"
                  ><b-icon
                    pack="fas"
                    icon="sign-out-alt"
                    size="is-small"
                  ></b-icon>
                  &nbsp; {{ $t("app.logout") }}</inertia-link
                >
              </b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
      </nav>
      <div class="header__details">
        <div class="header__details__avatar">
          <div class="header__details__avatar__round">
            <img
              :src="`/storage/avatar/${getAuthUser.avatar}`"
              alt="avatar"
              srcset
            />
          </div>
        </div>
        <div class="header__details__staff">
          <strong class="header__details__staff__name">
            <span>{{ authUserName }}</span>
          </strong>
          <h4 class="header__details__staff__title">
            <span>{{ authJobTitle }}</span>
          </h4>
        </div>
        <div class="header__details__brand__name">
          <h4>{{ getOrgName }}</h4>
        </div>
      </div>
    </header>
    <template><slot /> </template>
    <vue-confirm-dialog></vue-confirm-dialog>
  </main>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Dashboard",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "ADU Human Resource Management System",
    // all titles will be injected into this template
    titleTemplate: "%s | ADU Human Resource Management System",
  },
  props: { userPermissions: { require: true, type: Array } },
  computed: {
    ...mapGetters([
      "getBranches",
      "getDepartments",
      "getOrganizationProfile",
      "getProfile",
      "getAuthUser",
      "getJobTitles",
    ]),
    authUserName() {
      return `${this.isNull(this.getAuthUser.title)} ${
        this.getAuthUser.lastName
      } ${this.getAuthUser.firstName} ${this.isNull(
        this.getAuthUser.middleName
      )}`;
    },
    authJobTitle() {
      if (this.getAuthUser.jobTitle && this.getJobTitles) {
        const title = this.getJobTitles.find(
          (t) => t.id === parseInt(this.getAuthUser.jobTitle)
        );
        return title.title;
      }
      return "";
    },
    getLogo() {
      if (this.getOrganizationProfile) {
        return this.getOrganizationProfile.logo;
      }
    },
    getOrgName() {
      if (this.getOrganizationProfile) {
        return this.getOrganizationProfile.name;
      }
    },
  },
  beforeMount() {
    this.activePage = this.$page.url;
    Inertia.on("navigate", (event) => {
      this.activePage = event.detail.page.url;
    });
    if (localStorage.getItem("locale")) {
      this.$lang.setLocale(localStorage.getItem("locale"));
    } else {
      this.$lang.setLocale("en");
    }
  },
  created() {
    this.dispatchAuthUser({ payload: this.$page.props.authUser });
    this.dispatchJobTitle({ payload: this.$page.props.jobTitles });
    this.dispatchOrgnizationProfile({ payload: this.$page.props.orgInfo });
  },
  mounted() {},
  data() {
    return {
      activePage: "",
      regex: new RegExp("^/dashboard/ess/[0-9]+/[a-z-]*$"),
    };
  },

  methods: {
    ...mapActions([
      "dispatchOrgnizationProfile",
      "dispatchAuthUser",
      "dispatchJobTitle",
    ]),
    isNull(el) {
      if (el === "null" || null) {
        return "";
      }
      return el;
    },
  },
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
.logout-btn {
  border: none;
  background-color: transparent;
  color: #686767;
  cursor: pointer;
  &:active {
    border: none;
  }
}
</style>
