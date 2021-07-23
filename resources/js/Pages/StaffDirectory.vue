<template>
  <section class="staff__directory__container">
    <div class="staff__directory__container__search">
      <b-field>
        <b-input
          placeholder="Search staff..."
          type="search"
          icon-pack="fas"
          icon="search"
          size="is-medium"
        >
        </b-input>
      </b-field>
    </div>
    <div class="staff__directory__container__results">
      <div
        class="staff__directory__container__results__card"
        v-for="staff in getStaffList"
        :key="staff.id"
      >
        <div class="avatar">
          <img
            :src="`/storage/avatar/${staff.personal_details.avatar}`"
            alt="avatar"
            srcset=""
          />
        </div>
        <div class="info">
          <article class="info__details info--header">
            <strong>{{ getFullName(staff.personal_details) }}</strong>
          </article>
          <article class="info__details">
            <span>{{ staff.department }}</span>
          </article>
          <article class="info__details">
            <a :href="`mailto:${staff.email}`">{{ staff.email }}</a>
          </article>
          <article class="info__details mb-4">
            <a :href="`tel:+${isNull(staff.mobile)}`">{{
              isNull(staff.mobile)
            }}</a>
          </article>
          <inertia-link
            :href="`${
              $page.props.authUser.id === staff.id
                ? '/dashboard/ess'
                : `/dashboard/ess/${staff.id}/${staff.slug}`
            }`"
            preserve-scroll
            v-if="
              $page.props.userPermissions.includes('view_admin') ||
              $page.props.userPermissions.includes('view_pim')
            "
          >
            <b-button type="is-info is-light" size="">View profile</b-button>
          </inertia-link>
          <inertia-link
            :href="`/dashboard/ess`"
            preserve-scroll
            v-if="
              $page.props.authUser.id === staff.id &&
              (!$page.props.userPermissions.includes('view_admin') ||
                !$page.props.userPermissions.includes('view_pim'))
            "
          >
            <b-button type="is-info is-light" size="">View profile</b-button>
          </inertia-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Dashboard from "../components/Dashboard";
export default {
  name: "StaffDirectory",
  layout: Dashboard,
  metaInfo() {
    return {
      title: `Staff Directory`,
    };
  },
  components: {
    // Layout,
  },
  props: {
    staffList: Array,
  },
  computed: {
    ...mapGetters(["getStaffList"]),
  },
  created() {
    this.dispatchStaff({ payload: this.staffList });
  },
  mounted() {
    // console.log(this.getStaffList);
  },
  methods: {
    ...mapActions(["dispatchStaff"]),
    getFullName(details) {
      return `${details.title || ""} ${details.lastName || ""} ${
        details.firstName || ""
      } ${details.middleName || ""}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>