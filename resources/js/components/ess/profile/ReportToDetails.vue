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
              <div class="mb-3" v-if="getMyLeaders.managers.length > 0">
                <div v-for="(s, i) in getMyLeaders.managers" :key="i">
                  <template v-if="getProfile.branch_id === s.branch_id">
                    <h5 class="">{{ $t("app.manager") }}(s)</h5>
                    <p>
                      {{
                        getFullName({
                          title: s.title,
                          lastName: s.lastName,
                          firstName: s.firstName,
                          middleName: s.middleName,
                        })
                      }}
                    </p>
                    <p>
                      {{ s.mobile }}
                    </p>
                    <p>
                      {{ s.mail }}
                    </p>
                    <p>
                      {{ s.position }}
                    </p>
                  </template>
                </div>
              </div>
              <div class="mb-3" v-if="getMyLeaders.hods.length > 0">
                <div v-for="(s, i) in getMyLeaders.hods" :key="i">
                  <template v-if="getProfile.department_id === s.department_id">
                    <h5 class="">{{ $t("app.hod") }}(s)</h5>
                    <p class="report_to_text">
                      {{
                        getFullName({
                          title: s.title,
                          lastName: s.lastName,
                          firstName: s.firstName,
                          middleName: s.middleName,
                        })
                      }}
                      <span class="report_to_label">Name</span>
                    </p>
                    <p class="report_to_text" v-if="s.mobile">
                      {{ s.mobile }}
                      <span class="report_to_label">Mobile</span>
                    </p>
                    <p class="report_to_text" v-if="s.mail">
                      {{ s.mail }}
                      <span class="report_to_label">Email</span>
                    </p>
                    <p class="report_to_text" v-if="s.position">
                      {{ s.position }}
                      <span class="report_to_label">Position</span>
                    </p>
                  </template>
                </div>
              </div>
              <div class="" v-if="getMyLeaders.supervisors.length > 0">
                <div v-for="(s, i) in getMyLeaders.supervisors" :key="i">
                  <template v-if="getProfile.unit_id === s.unit_id">
                    <h5 class="">{{ $t("app.supervisor") }}(s)</h5>
                    <p class="report_to_text">
                      {{
                        getFullName({
                          title: s.title,
                          lastName: s.lastName,
                          firstName: s.firstName,
                          middleName: s.middleName,
                        })
                      }}
                      <span class="report_to_label">Name</span>
                    </p>
                    <p class="report_to_text" v-if="s.mobile">
                      {{ s.mobile }}
                      <span class="report_to_label">Mobile</span>
                    </p>
                    <p class="report_to_text" v-if="s.mail">
                      {{ s.mail }}
                      <span class="report_to_label">Email</span>
                    </p>
                    <p class="report_to_text" v-if="s.position">
                      {{ s.position }}
                      <span class="report_to_label">Position</span>
                    </p>
                  </template>
                </div>
              </div>
            </div>

            <div class="column is-4">
              <h5 class="text-main">{{ $t("app.report_to_me") }}</h5>
              <div class="mb-3" v-if="getMyLeaders.reportToMe.length > 0">
                <div v-for="(s, i) in getMyLeaders.reportToMe" :key="i">
                  <p>
                    {{
                      getFullName({
                        title: s.title,
                        lastName: s.lastName,
                        firstName: s.firstName,
                        middleName: s.middleName,
                      })
                    }}
                  </p>
                  <p>
                    {{ s.mobile }}
                  </p>
                  <p>
                    {{ s.mail }}
                  </p>
                  <p>
                    {{ s.position }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="column is-4"
              v-if="
                $page.props.authUser.report_to_roles &&
                JSON.parse($page.props.authUser.report_to_roles).length > 0
              "
            >
              <h5 class="text-main">{{ "Directorate/Office" }}</h5>
              <div class="mb-3">
                <div
                  v-for="(office, i) in JSON.parse(
                    $page.props.authUser.report_to_roles
                  )"
                  :key="i"
                >
                  <h5 class="">{{ $t("app.report_to") }}</h5>
                  <template v-for="(d, j) in getMyLeaders.directorates">
                    <article
                      :key="j"
                      v-if="JSON.parse(d.roles).includes(office)"
                    >
                      <p class="report_to_text">
                        {{
                          getFullName({
                            title: d.title,
                            lastName: d.lastName,
                            firstName: d.firstName,
                            middleName: d.middleName,
                          })
                        }}
                        <span class="report_to_label">Name</span>
                      </p>
                      <p class="report_to_text" v-if="d.mobile">
                        {{ s.mobile }}
                        <span class="report_to_label">Mobile</span>
                      </p>
                      <p class="report_to_text" v-if="d.mail">
                        {{ s.mail }}
                        <span class="report_to_label">Email</span>
                      </p>
                      <p class="report_to_text" v-if="office">
                        {{ office }}
                        <span class="report_to_label">Office</span>
                      </p>
                    </article>
                  </template>
                </div>
              </div>
              <div class="mb-3" v-if="getMyLeaders.reportToMe.length > 0">
                <div v-for="(s, i) in getMyLeaders.reportToMe" :key="i">
                  <h5 class="">{{ $t("app.report_to_me") }}</h5>
                  <p>
                    {{
                      getFullName({
                        title: s.title,
                        lastName: s.lastName,
                        firstName: s.firstName,
                        middleName: s.middleName,
                      })
                    }}
                  </p>
                  <p>
                    {{ s.mobile }}
                  </p>
                  <p>
                    {{ s.mail }}
                  </p>
                  <p>
                    {{ s.position }}
                  </p>
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

<style lang="scss" scoped>
.report_to_label {
  display: block;
  font-size: 1rem;
  color: #686767b5;
  letter-spacing: 2px;
}
.report_to_text {
  &:not(:last-child) {
    margin-bottom: 0.15rem !important;
  }
}
</style>