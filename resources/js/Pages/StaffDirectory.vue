<template>
  <section class="staff__directory__container">
    <div class="staff__directory__container__search">
      <b-field style="width: 100%">
        <b-input
          placeholder="Search staff..."
          type="search"
          icon-pack="fas"
          icon="search"
          size="is-medium"
          expanded
          v-model="searchKey"
        >
        </b-input>
      </b-field>
    </div>
    <div class="staff__directory__container__results">
      <template v-if="triggerSearch">
        <div
          class="staff__directory__container__results__card"
          v-for="(staff, $index) in searchResults"
          :key="$index"
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
            <article class="info__details" v-if="staff.department">
              <span>{{ staff.department }}</span>
            </article>
            <article class="info__details" v-if="staff.unit">
              <span>{{ staff.unit }}</span>
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
      </template>
      <template v-else>
        <div
          class="staff__directory__container__results__card"
          v-for="(staff, $index) in getStaffDirectory"
          :key="$index"
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
            <article class="info__details" v-if="staff.department">
              <span>{{ staff.department }}</span>
            </article>
            <article class="info__details" v-if="staff.unit">
              <span>{{ staff.unit }}</span>
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
      </template>
    </div>

    <template v-if="triggerSearch">
      <infinite-loading @infinite="searchStaffDirectory">
        <div slot="no-more" class="text-main py-4">"No more staff.</div>
        <div slot="no-results" class="text-main py-4">"No staff found :(</div>
      </infinite-loading>
    </template>
    <template v-if="!triggerSearch">
      <infinite-loading @infinite="fetchStaffDirectory">
        <div slot="no-more" class="text-main py-4">"No more staff.</div>
        <div slot="no-results" class="text-main py-4">"No staff found :(</div>
      </infinite-loading>
    </template>
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
  components: {},
  props: {
    // staffList: Array,
  },
  computed: {
    ...mapGetters(["getStaffDirectory"]),
  },
  watch: {
    searchKey(nv) {
      if (nv) {
        let url = `/dashboard/search-staff?page=${this.searchPage}&search=${nv}`;
        this.searchPage = 1;
        this.$axios.get(url).then(({ data }) => {
          this.searchResults = data.data.map((u) => {
            u.personal_details = JSON.parse(u.personal_details);
            u.job = u.job ? JSON.parse(u.job) : u.job;
            return u;
          });
          this.triggerSearch = true;
        });
      } else {
        this.triggerSearch = false;
        this.searchResults = [];
        this.searchPage = 1;
      }
    },
  },
  created() {},
  mounted() {
    // console.log(this.getStaffList);
  },

  data() {
    return {
      page: 1,
      searchPage: 1,
      searchResults: [],
      searchKey: "",
      triggerSearch: false,
    };
  },
  methods: {
    ...mapActions(["dispatchStaff"]),
    getFullName(details) {
      let { title, lastName, firstName, middleName } = details;
      return `${title || ""} ${lastName || ""} ${firstName || ""} ${
        middleName || ""
      }`;
    },

    async fetchStaffDirectory($state) {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/search-staff?page=${this.page}`
        );
        if (data.data.length) {
          this.page += 1;
          const intersection = this.getStaffDirectory.filter((x) =>
            data.data.includes(x)
          );
          if (!intersection.length) {
            this.dispatchStaff({ type: "ADD_DIRECTORY", payload: data.data });
          }
          $state.loaded();
        } else {
          $state.complete();
        }
      } catch (error) {}
    },
    async searchStaffDirectory($state) {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/search-staff?page=${this.searchPage}&search=${this.searchKey}`
        );
        const intersection = this.searchResults.filter((x) =>
          data.data.includes(x)
        );
        if (data.data.length) {
          this.searchPage += 1;
          if (!intersection.length) {
            this.searchResults = [
              ...this.searchResults,
              ...data.data.map((u) => {
                u.personal_details = JSON.parse(u.personal_details);
                u.job = u.job ? JSON.parse(u.job) : u.job;
                return u;
              }),
            ];
          }
          $state.loaded();
        } else {
          $state.complete();
        }
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped>
</style>