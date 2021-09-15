<template>
  <form @submit.prevent="saveAppraisalReview()">
    <div class="modal-card py-4" style="width: 960px">
      <header class="modal-card-head">
        <h4 class="modal-card-title text-main label pt-2">
          Performance Review & Rating
        </h4>
        <button class="delete" type="button" @click="cancelModal()" />
      </header>
      <section class="modal-card-body">
        <section>
          <b-collapse
            class="card"
            animation="slide"
            v-for="(collapse, index) of 2"
            :key="index"
            :open="openCollapse == index"
            @open="openCollapse = index"
          >
            <template #trigger="props">
              <div class="card-header" role="button">
                <p class="card-header-title has-text-info">
                  {{ collapse === 1 ? "Review Appraisee" : "Rate Appraisee" }}
                </p>
                <a class="card-header-icon">
                  <b-icon
                    :icon="props.open ? 'angle-down' : 'angle-up'"
                    type="is-info"
                  >
                  </b-icon>
                </a>
              </div>
            </template>
            <div class="card-content">
              <div class="content" v-if="collapse === 1">
                <div class="columns">
                  <div class="column is-6">
                    <div class="content">
                      <h6>Key Goals</h6>
                      <ol
                        type="1"
                        v-if="
                          userAppraisal &&
                          userAppraisal.userAppraisal &&
                          userAppraisal.userAppraisal.goals
                        "
                      >
                        <li
                          v-for="goal in userAppraisal.userAppraisal.goals"
                          :key="goal.id"
                        >
                          {{ goal.goal }}
                        </li>
                      </ol>
                      <p v-else>No key goal found!</p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="content">
                      <h6>Achievements</h6>
                      <ol
                        type="1"
                        v-if="
                          userAppraisal &&
                          userAppraisal.userAppraisal &&
                          userAppraisal.userAppraisal.achievements
                        "
                      >
                        <li
                          v-for="achievement in userAppraisal.userAppraisal
                            .achievements"
                          :key="achievement.id"
                        >
                          {{ achievement.achievement }}
                        </li>
                      </ol>
                      <p v-else>No achievement found!</p>
                    </div>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <div class="content">
                      <h6>Difficulties</h6>
                      <ol
                        type="1"
                        v-if="
                          userAppraisal &&
                          userAppraisal.userAppraisal &&
                          userAppraisal.userAppraisal.difficulties
                        "
                      >
                        <li
                          v-for="difficulty in userAppraisal.userAppraisal
                            .difficulties"
                          :key="difficulty.id"
                        >
                          {{ difficulty.difficulty }}
                        </li>
                      </ol>
                      <p v-else>No difficulty found!</p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="content">
                      <h6>Initiatives</h6>
                      <ol
                        type="1"
                        v-if="
                          userAppraisal &&
                          userAppraisal.userAppraisal &&
                          userAppraisal.userAppraisal.initiatives
                        "
                      >
                        <li
                          v-for="initiative in userAppraisal.userAppraisal
                            .initiatives"
                          :key="initiative.id"
                        >
                          {{ initiative.initiative }}
                        </li>
                      </ol>
                      <p v-else>No initiative found!</p>
                    </div>
                  </div>
                </div>

                <div class="columns">
                  <div class="column is-6">
                    <div class="content">
                      <h6>Ohter Initiatives</h6>
                      <ol
                        type="1"
                        v-if="
                          userAppraisal &&
                          userAppraisal.userAppraisal &&
                          userAppraisal.userAppraisal.other_initiatives
                        "
                      >
                        <li
                          v-for="initiative in userAppraisal.userAppraisal
                            .other_initiatives"
                          :key="initiative.id"
                        >
                          {{ initiative.initiative }}
                        </li>
                      </ol>
                      <p v-else>No initiative found!</p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="content">
                      <h6>Feedback</h6>
                      <article
                        type="1"
                        v-if="
                          userAppraisal &&
                          userAppraisal.userAppraisal &&
                          userAppraisal.userAppraisal.feedback
                        "
                        v-html="userAppraisal.userAppraisal.feedback"
                      ></article>
                      <p v-else>No initiative found!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content" v-if="collapse === 2">
                <table class="table is-fullwidth is-hoverable">
                  <thead>
                    <tr>
                      <th class="has-text-centered text-main">Metrics</th>
                      <th class="has-text-centered text-main">Description</th>
                      <th class="has-text-centered text-main">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Attendance</td>
                      <td>
                        Attendance Consistency in coming to work daily and
                        conforming to scheduled work hours
                      </td>
                      <td>
                        <div class="" style="width: 20rem">
                          <b-radio
                            name="attendance"
                            native-value="5"
                            type="is-info"
                            v-model="metrics.attendance"
                          >
                            5
                          </b-radio>
                          <b-radio
                            name="attendance"
                            native-value="4"
                            type="is-info"
                            v-model="metrics.attendance"
                          >
                            4
                          </b-radio>
                          <b-radio
                            name="attendance"
                            native-value="3"
                            type="is-info"
                            v-model="metrics.attendance"
                          >
                            3
                          </b-radio>
                          <b-radio
                            name="attendance"
                            native-value="2"
                            type="is-info"
                            v-model="metrics.attendance"
                          >
                            2
                          </b-radio>
                          <b-radio
                            name="attendance"
                            native-value="1"
                            type="is-info"
                            v-model="metrics.attendance"
                          >
                            1
                          </b-radio>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Quality of Work</td>
                      <td>
                        Quality of Work Freedom from errors and mistakes.
                        Responsiveness, follow-through, consistency, and quality
                        of work
                      </td>
                      <td>
                        <div class="" style="width: 20rem">
                          <b-radio
                            name="quatlityOfWork"
                            native-value="5"
                            type="is-info"
                            v-model="metrics.quatlityOfWork"
                          >
                            5
                          </b-radio>
                          <b-radio
                            name="quatlityOfWork"
                            native-value="4"
                            type="is-info"
                            v-model="metrics.quatlityOfWork"
                          >
                            4
                          </b-radio>
                          <b-radio
                            name="quatlityOfWork"
                            native-value="3"
                            type="is-info"
                            v-model="metrics.quatlityOfWork"
                          >
                            3
                          </b-radio>
                          <b-radio
                            name="quatlityOfWork"
                            native-value="2"
                            type="is-info"
                            v-model="metrics.quatlityOfWork"
                          >
                            2
                          </b-radio>
                          <b-radio
                            name="quatlityOfWork"
                            native-value="1"
                            type="is-info"
                            v-model="metrics.quatlityOfWork"
                          >
                            1
                          </b-radio>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table class="table is-fullwidth is-hoverable">
                  <thead>
                    <tr>
                      <th class="has-text-centered text-main">Metrics</th>
                      <th class="has-text-centered text-main">Description</th>
                      <th class="has-text-centered text-main">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Planning and Organizing</td>
                      <td>
                        Planning and Organizing Analyzes work, set goals,
                        develop plans of action and utilizes time. Consider the
                        amount of supervision required and the extent to which
                        you can trust the employee to carry out assignments
                        conscientiously
                      </td>
                      <td>
                        <div class="" style="width: 20rem">
                          <b-radio
                            name="planningAndOrganizing"
                            native-value="5"
                            type="is-info"
                            v-model="metrics.planningAndOrganizing"
                          >
                            5
                          </b-radio>
                          <b-radio
                            name="planningAndOrganizing"
                            native-value="4"
                            type="is-info"
                            v-model="metrics.planningAndOrganizing"
                          >
                            4
                          </b-radio>
                          <b-radio
                            name="planningAndOrganizing"
                            native-value="3"
                            type="is-info"
                            v-model="metrics.planningAndOrganizing"
                          >
                            3
                          </b-radio>
                          <b-radio
                            name="planningAndOrganizing"
                            native-value="2"
                            type="is-info"
                            v-model="metrics.planningAndOrganizing"
                          >
                            2
                          </b-radio>
                          <b-radio
                            name="planningAndOrganizing"
                            native-value="1"
                            type="is-info"
                            v-model="metrics.planningAndOrganizing"
                          >
                            1
                          </b-radio>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Leadership and Management</td>
                      <td>
                        Communicate vision, sets unit goals, develops
                        strategies, and takes action to ensure the efficient
                        stewardship of resources (operational, financial, and
                        human)
                      </td>
                      <td>
                        <div class="" style="width: 20rem">
                          <b-radio
                            name="leadershipAndManagement"
                            native-value="5"
                            type="is-info"
                            v-model="metrics.leadershipAndManagement"
                          >
                            5
                          </b-radio>
                          <b-radio
                            name="leadershipAndManagement"
                            native-value="4"
                            type="is-info"
                            v-model="metrics.leadershipAndManagement"
                          >
                            4
                          </b-radio>
                          <b-radio
                            name="leadershipAndManagement"
                            native-value="3"
                            type="is-info"
                            v-model="metrics.leadershipAndManagement"
                          >
                            3
                          </b-radio>
                          <b-radio
                            name="leadershipAndManagement"
                            native-value="2"
                            type="is-info"
                            v-model="metrics.leadershipAndManagement"
                          >
                            2
                          </b-radio>
                          <b-radio
                            name="leadershipAndManagement"
                            native-value="1"
                            type="is-info"
                            v-model="metrics.leadershipAndManagement"
                          >
                            1
                          </b-radio>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <section class="content">
                  <h5 class="label text-main">
                    One on one discussion width staff
                  </h5>
                  <ul>
                    <li>
                      Discuss overall performance as outlined in the appraisal
                    </li>
                    <li>Evaluate output and achieved goals</li>
                    <li>
                      Provide feedback on areas of excellence within overall
                      performance for the month
                    </li>
                    <li>Discuss areas of improvement</li>
                    <li>
                      Identify areas where the employee may be facing challenges
                      and requires support
                    </li>
                    <li>Mutually set goals for the coming month</li>
                  </ul>
                </section>
                <section class="content">
                  <h5 class="label text-main">
                    Noteworthy accomplishments and areas of improvement
                  </h5>
                  <editor
                    api-key="25qhafbs9v6uleue5kg84jeofqdrwawb30mv1o6mgvx4cdbb"
                    id="improvement"
                    :init="initEditor"
                    v-model="metrics.accomplishment"
                  ></editor>
                </section>
                <section class="content">
                  <h5 class="label text-main">Overall assessment</h5>
                  <editor
                    api-key="25qhafbs9v6uleue5kg84jeofqdrwawb30mv1o6mgvx4cdbb"
                    id="assessment"
                    :init="initEditor"
                    v-model="metrics.assessment"
                  ></editor>
                </section>
              </div>
            </div>
          </b-collapse>
        </section>
      </section>
      <footer class="modal-card-foot buttons">
        <button
          type="submit"
          class="button is-success is-light"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? "Saving..." : "Save" }}
        </button>
        <b-button class="is-danger is-light" @click="cancelModal()"
          >Cancel</b-button
        >
      </footer>
    </div>
  </form>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "RateAppraiseeModal",
  components: {
    // "vue-mce": component,
    Editor,
  },
  props: {
    appraisalId: { require: true, type: Number },
    userId: { require: true, type: Number },
  },
  computed: {},
  created() {
    this.$nextTick(() => {
      this.getUserAppraisal(this.appraisalId, this.userId);
    });
  },
  data() {
    return {
      isSubmitting: false,
      openCollapse: 0,
      userAppraisal: null,
      metrics: {
        attendance: "",
        quatlityOfWork: "",
        planningAndOrganizing: "",
        leadershipAndManagement: "",
        accomplishment: "",
        assessment: "",
      },
    };
  },
  methods: {
    cancelModal() {
      this.$emit("close");
    },
    saveAppraisalReview() {
      this.isSubmitting = true;
      this.$axios
        .put(
          `/dashboard/update-user-appraisal-metrics/${this.appraisalId}/${this.userId}`,
          this.metrics
        )
        .then((res) => {
          this.isSubmitting = false;
        })
        .catch((err) => {
          this.isSubmitting = false;
        });
    },
    formatUserAppraisal(data) {
      const result = data;
      for (const key in result) {
        if (Object.hasOwnProperty.call(result, key)) {
          if (result[key]) {
            result[key].goals = JSON.parse(result[key].goals);
            if (result[key].achievements) {
              result[key].achievements = JSON.parse(result[key].achievements);
            }
            if (result[key].difficulties) {
              result[key].difficulties = JSON.parse(result[key].difficulties);
            }
            if (result[key].initiatives) {
              result[key].initiatives = JSON.parse(result[key].initiatives);
            }
            if (result[key].other_initiatives) {
              result[key].other_initiatives = JSON.parse(
                result[key].other_initiatives
              );
            }
            if (result[key].feedback) {
              result[key].feedback = JSON.parse(result[key].feedback);
            }
            if (result[key].metrics) {
              result[key].metrics = JSON.parse(result[key].metrics);
            }
          }
        }
      }
      return result;
    },
    async getUserAppraisal(id, user) {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/get-user-appraisal/${id}/${user}`
        );
        this.userAppraisal = this.formatUserAppraisal(data);
        if (
          this.userAppraisal &&
          this.userAppraisal.userAppraisal &&
          this.userAppraisal.userAppraisal.metrics
        ) {
          this.metrics = {
            attendance: this.userAppraisal.userAppraisal.metrics.attendance,
            quatlityOfWork:
              this.userAppraisal.userAppraisal.metrics.quatlityOfWork,
            planningAndOrganizing:
              this.userAppraisal.userAppraisal.metrics.planningAndOrganizing,
            leadershipAndManagement:
              this.userAppraisal.userAppraisal.metrics.leadershipAndManagement,
            accomplishment:
              this.userAppraisal.userAppraisal.metrics.accomplishment,
            assessment: this.userAppraisal.userAppraisal.metrics.assessment,
          };
        }
      } catch (err) {
        console.trace(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>