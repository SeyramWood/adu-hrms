<template>
  <section class="b__collapse__section">
    <div class="card">
      <!-- <header class="card-header">
              <p class="card-header-title">Assigned Supervisors</p>
            </header> -->
      <div class="profile-detail-bar">
        <p class="p-text">{{ $t("app.report_to_cta") }}</p>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column is-4">
              <h5 class="text-main">{{ $t("app.report_to") }}</h5>
              <div class="mb-3" v-if="getMyLeaders.hods.length > 0">
                <div v-for="(s, i) in getMyLeaders.hods" :key="i">
                  <template v-if="getProfile.department_id === s.department_id">
                    <h5 class="">{{ $t("app.hod") }}(s)</h5>
                    <article class="leader__details">
                      <p class="report_to_text">
                        {{
                          getFullName({
                            title: s.title,
                            lastName: s.lastName,
                            firstName: s.firstName,
                            middleName: s.middleName,
                          })
                        }}
                        <span class="report_to_label">{{
                          $t("app.name")
                        }}</span>
                      </p>
                      <p class="report_to_text" v-if="s.mobile">
                        {{ s.mobile }}
                        <span class="report_to_label">{{
                          $t("app.mobile")
                        }}</span>
                      </p>
                      <p class="report_to_text" v-if="s.mail">
                        {{ s.mail }}
                        <span class="report_to_label">{{
                          $tc("app.email", 1)
                        }}</span>
                      </p>
                      <p class="report_to_text" v-if="s.position">
                        {{ s.position }}
                        <span class="report_to_label">{{
                          $t("app.position")
                        }}</span>
                      </p>
                    </article>
                  </template>
                </div>
              </div>
              <div class="" v-if="getMyLeaders.supervisors.length > 0">
                <div v-for="(s, i) in getMyLeaders.supervisors" :key="i">
                  <template v-if="getProfile.unit_id === s.unit_id">
                    <h5 class="">{{ $t("app.supervisor") }}(s)</h5>
                    <article class="leader__details">
                      <p class="report_to_text">
                        {{
                          getFullName({
                            title: s.title,
                            lastName: s.lastName,
                            firstName: s.firstName,
                            middleName: s.middleName,
                          })
                        }}
                        <span class="report_to_label">{{
                          $t("app.name")
                        }}</span>
                      </p>
                      <p class="report_to_text" v-if="s.mobile">
                        {{ s.mobile }}
                        <span class="report_to_label">{{
                          $t("app.mobile")
                        }}</span>
                      </p>
                      <p class="report_to_text" v-if="s.mail">
                        {{ s.mail }}
                        <span class="report_to_label">{{
                          $tc("app.email", 1)
                        }}</span>
                      </p>
                      <p class="report_to_text" v-if="s.position">
                        {{ s.position }}
                        <span class="report_to_label">{{
                          $t("app.position")
                        }}</span>
                      </p>
                    </article>
                  </template>
                </div>
              </div>
            </div>

            <div
              class="column is-4"
              v-if="
                $page.props.authUser.report_to_staff &&
                JSON.parse($page.props.authUser.report_to_staff).length
              "
            >
              <h5 class="text-main">{{ $t("app.report_to_me") }}</h5>
              <div class="mb-3" v-if="getMyLeaders.reportToMe.length > 0">
                <div v-for="(s, i) in getMyLeaders.reportToMe" :key="i">
                  <article class="leader__details">
                    <p class="report_to_text">
                      {{
                        getFullName({
                          title: s.title,
                          lastName: s.lastName,
                          firstName: s.firstName,
                          middleName: s.middleName,
                        })
                      }}
                      <span class="report_to_label">{{ $t("app.name") }}</span>
                    </p>
                    <p class="report_to_text" v-if="s.mobile">
                      {{ s.mobile }}
                      <span class="report_to_label">{{
                        $t("app.mobile")
                      }}</span>
                    </p>
                    <p class="report_to_text" v-if="s.mail">
                      {{ s.mail }}
                      <span class="report_to_label">{{
                        $tc("app.email", 1)
                      }}</span>
                    </p>
                    <p class="report_to_text" v-if="s.position">
                      {{ s.position }}
                      <span class="report_to_label">{{
                        $t("app.position")
                      }}</span>
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div class="column is-4">
              <h5 class="text-main">
                {{ `${$t("app.directorate")}  (${$t("app.report_to")})` }}
              </h5>

              <div class="mb-3">
                <div>
                  <template v-for="(s, j) in getMyLeaders.directorates">
                    <article
                      class="leader__details"
                      :key="j"
                      v-if="
                        !arrayIntersec(
                          JSON.parse($page.props.authUser.roles),
                          JSON.parse(s.roles)
                        )
                      "
                    >
                      <p class="report_to_text">
                        {{
                          getFullName({
                            title: s.title,
                            lastName: s.lastName,
                            firstName: s.firstName,
                            middleName: s.middleName,
                          })
                        }}
                        <span class="report_to_label">{{
                          $t("app.name")
                        }}</span>
                      </p>
                      <p class="report_to_text" v-if="s.mobile">
                        {{ s.mobile }}
                        <span class="report_to_label">{{
                          $t("app.mobile")
                        }}</span>
                      </p>
                      <p class="report_to_text" v-if="s.mail">
                        {{ s.mail }}
                        <span class="report_to_label">{{
                          $tc("app.email", 1)
                        }}</span>
                      </p>
                      <p class="report_to_text" v-if="s.position">
                        {{ s.position }}
                        <span class="report_to_label">{{
                          $t("app.position")
                        }}</span>
                      </p>
                    </article>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ReportToDetails",
  computed: { ...mapGetters(["getProfile", "getMyLeaders"]) },
  created() {},
  data() {
    return {};
  },
  methods: {
    getFullName(staff) {
      return `${this.isNull(staff.title)} ${staff.firstName} ${this.isNull(
        staff.middleName
      )} ${staff.lastName}`;
    },
  },
};
</script>

<style lang="scss">
</style>