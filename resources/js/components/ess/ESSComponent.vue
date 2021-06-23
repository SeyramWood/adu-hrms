<template>
  <div>
    <section class="content__split">
      <div class="content__split__left">
        <div class="content__split__left__panel">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p>
                  <b-icon pack="fas" icon="phone"></b-icon>
                  <span>{{
                    getContactDetails ? getContactDetails.mobile : ""
                  }}</span>
                </p>
                <p>
                  <b-icon pack="fas" icon="envelope"></b-icon>
                  <span>{{
                    getContactDetails ? getContactDetails.workEmail : ""
                  }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p>Hire Date</p>
                <p>
                  <b-icon pack="fas" icon="calendar-alt"></b-icon>
                  <span>{{ formatDateShort(getUserJob.startDate) }}</span>
                </p>
                <p>
                  <b-icon pack="fas" icon="clock"></b-icon>
                  <span>{{ formatTime(getUserJob.startDate) }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p>
                  <b-icon pack="fas" icon="id-card"></b-icon>
                  <span>{{ getPersonalDetails.staffId }}</span>
                </p>
                <p>
                  <b-icon pack="fas" icon="briefcase"></b-icon>
                  <span>{{ getUserJob.department }}</span>
                </p>
                <p>
                  <b-icon pack="fas" icon="clock"></b-icon>
                  <span>{{ getUserJob.employmentStatus }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content__split__right" v-if="!checkUser">
        <tabs stickyTab="content__split__right__sticky" :tabIndex="tabIndex">
          <tab label="Profile">
            <ProfileComponent />
          </tab>
        </tabs>
      </div>
      <div class="content__split__right" v-if="checkUser">
        <tabs stickyTab="content__split__right__sticky" :tabIndex="tabIndex">
          <tab label="My Leave">
            <MyLeaveComponent />
          </tab>
          <tab label="Entitlements">
            <MyEntitlementComponent />
          </tab>
          <tab label="Profile">
            <ProfileComponent />
          </tab>
        </tabs>
      </div>
    </section>
  </div>
</template>

<script>
import Tab from "../../Tab";
import Tabs from "../../Tabs";
import ProfileComponent from "./ProfileComponent";
import MyLeaveComponent from "./MyLeaveComponent";
import MyEntitlementComponent from "./MyEntitlementComponent";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ESSComponent",
  components: {
    Tab,
    Tabs,
    ProfileComponent,
    MyLeaveComponent,
    MyEntitlementComponent,
  },
  computed: {
    ...mapGetters([
      "getAuthUser",
      "getPersonalDetails",
      "getContactDetails",
      "getUserJob",
      "getLeaves",
    ]),
    checkUser() {
      return this.profile.user_id === this.getAuthUser.id;
    },
  },
  props: {
    profile: { type: Object },
  },
  created() {
    this.fetchProfile(this.profile);
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    // ...mapActions(["fetchProfile"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
