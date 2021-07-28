<template>
  <div class="modal-card py-4" style="width: auto">
    <header class="modal-card-head">
      <h4 class="modal-card-title text-main label pt-2">Self Appraisal</h4>
      <button class="delete" type="button" @click="cancelModal()" />
    </header>
    <section class="modal-card-body">
      <section class="appraisal__title">
        <p>{{ appraisal.name }}</p>
        <p>
          {{
            ` ${formatDate2(appraisal.period.from)} - ${formatDate2(
              appraisal.period.to
            )}`
          }}
        </p>
      </section>
      <section class="kpi__table__wrapper">
        <b-steps
          v-model="activeStep"
          :animated="true"
          :rounded="true"
          :has-navigation="true"
          icon-prev="chevron-left"
          icon-next="chevron-right"
          label-position="left"
          mobile-mode="compact"
          type="is-info"
          vertical
        >
          <b-step-item step="1" label="Key Goals">
            <section class="kpi__table">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="text-main">My Key Goals</th>
                    <th
                      class="text-main"
                      v-if="
                        $page.props.authUser.unit_id ||
                        anyPermission('admin', 'president')
                      "
                    >
                      Unit Key Goals
                    </th>
                    <th
                      class="text-main"
                      v-if="
                        $page.props.authUser.department_id ||
                        anyPermission('admin', 'president', 'hod')
                      "
                    >
                      Department Key Goals
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form @submit.prevent="addSelfAppraisal()">
                          <template v-for="(kg, index) in myGoals">
                            <b-field
                              :key="index"
                              :type="{
                                'is-danger':
                                  Object.keys(myGoalErrors).length &&
                                  myGoalErrors[`goal.${index}.goal`] &&
                                  myGoalErrors[`goal.${index}.goal`].length,
                              }"
                              :message="
                                Object.keys(myGoalErrors).length
                                  ? myGoalErrors[`goal.${index}.goal`]
                                  : []
                              "
                            >
                              <b-input
                                placeholder="Enter new goal..."
                                type="text"
                                expanded
                                v-model="myGoals[index]['goal']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="myGoals.length === 1"
                                  @click="removeGoal(index)"
                                />
                              </p>
                            </b-field>
                          </template>

                          <section class="goal__btns">
                            <div class="">
                              <b-button
                                class="is-info is-light"
                                icon-left="plus"
                                @click="appendNewGoal()"
                                >Add New</b-button
                              >
                            </div>
                            <div class="block">
                              <b-button
                                class="is-default is-light"
                                @click="cancelGoalForm()"
                                :disabled="isSubmittingMyGoal"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                                :disabled="isSubmittingMyGoal"
                              >
                                {{
                                  isSubmittingMyGoal ? "Submitting..." : "Add"
                                }}
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                    <td
                      v-if="
                        $page.props.authUser.unit_id ||
                        anyPermission('admin', 'president', 'supervisor')
                      "
                    >
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form
                          v-if="anyPermission('admin', 'supervisor')"
                          @submit.prevent="addSelfAppraisal('unit')"
                        >
                          <template v-for="(kg, index) in unitGoals">
                            <b-field
                              :key="index"
                              :type="{
                                'is-danger':
                                  Object.keys(unitGoalErrors).length &&
                                  unitGoalErrors[`goal.${index}.goal`] &&
                                  unitGoalErrors[`goal.${index}.goal`].length,
                              }"
                              :message="
                                Object.keys(unitGoalErrors).length
                                  ? unitGoalErrors[`goal.${index}.goal`]
                                  : []
                              "
                            >
                              <b-input
                                placeholder="Enter new goal..."
                                type="text"
                                expanded
                                v-model="unitGoals[index]['goal']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="unitGoals.length === 1"
                                  @click="removeGoal(index, 'unit')"
                                />
                              </p>
                            </b-field>
                          </template>

                          <section class="goal__btns">
                            <div class="">
                              <b-button
                                class="is-info is-light"
                                icon-left="plus"
                                @click="appendNewGoal('unit')"
                                >Add New</b-button
                              >
                            </div>
                            <div class="block">
                              <b-button
                                class="is-default is-light"
                                @click="cancelGoalForm('unit')"
                                :disabled="isSubmittingUnitGoal"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                                :disabled="isSubmittingUnitGoal"
                              >
                                {{
                                  isSubmittingUnitGoal ? "Submitting..." : "Add"
                                }}
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                    <td
                      v-if="
                        $page.props.authUser.department_id ||
                        anyPermission('admin', 'president', 'hod')
                      "
                    >
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form
                          v-if="anyPermission('admin', 'hod')"
                          @submit.prevent="addSelfAppraisal('department')"
                        >
                          <template v-for="(kg, index) in dptGoals">
                            <b-field
                              :key="index"
                              :type="{
                                'is-danger':
                                  Object.keys(dptGoalErrors).length &&
                                  dptGoalErrors[`goal.${index}.goal`] &&
                                  dptGoalErrors[`goal.${index}.goal`].length,
                              }"
                              :message="
                                Object.keys(dptGoalErrors).length
                                  ? dptGoalErrors[`goal.${index}.goal`]
                                  : []
                              "
                            >
                              <b-input
                                placeholder="Enter new goal..."
                                type="text"
                                expanded
                                v-model="dptGoals[index]['goal']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="dptGoals.length === 1"
                                  @click="removeGoal(index, 'department')"
                                />
                              </p>
                            </b-field>
                          </template>

                          <section class="goal__btns">
                            <div class="">
                              <b-button
                                class="is-info is-light"
                                icon-left="plus"
                                @click="appendNewGoal('department')"
                                >Add New</b-button
                              >
                            </div>
                            <div class="block">
                              <b-button
                                class="is-default is-light"
                                @click="cancelGoalForm('department')"
                                :disabled="isSubmittingDptGoal"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                                :disabled="isSubmittingDptGoal"
                              >
                                {{
                                  isSubmittingDptGoal ? "Submitting..." : "Add"
                                }}
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>

          <b-step-item step="2" label="Achievement">
            <section class="kpi__table">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">My Achievement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <section class="kpi_goals__wrapper">
                        <div class="content" style="width: 30rem">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form
                          style="width: 30rem"
                          @submit.prevent="addSelfAppraisal('achievement')"
                        >
                          <template v-for="(a, index) in achievements">
                            <b-field
                              :key="index"
                              :type="{
                                'is-danger':
                                  Object.keys(achievementErrors).length &&
                                  achievementErrors[
                                    `achievement.${index}.achievement`
                                  ] &&
                                  achievementErrors[
                                    `achievement.${index}.achievement`
                                  ].length,
                              }"
                              :message="
                                Object.keys(achievementErrors).length
                                  ? achievementErrors[
                                      `achievement.${index}.achievement`
                                    ]
                                  : []
                              "
                            >
                              <b-input
                                placeholder="Enter new achievement recorded..."
                                type="text"
                                expanded
                                v-model="achievements[index]['achievement']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="achievements.length === 1"
                                  @click="removeGoal(index, 'achievement')"
                                />
                              </p>
                            </b-field>
                          </template>

                          <section class="goal__btns">
                            <div class="">
                              <b-button
                                class="is-info is-light"
                                icon-left="plus"
                                @click="appendNewGoal('achievement')"
                                >Add New</b-button
                              >
                            </div>
                            <div class="block">
                              <b-button
                                class="is-default is-light"
                                @click="cancelGoalForm('achievement')"
                                :disabled="isSubmitting"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                                :disabled="isSubmitting"
                              >
                                {{ isSubmitting ? "Submitting..." : "Add" }}
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>

          <b-step-item step="3" label="Difficulties Faced">
            <section class="kpi__table">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">Difficulties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <section class="kpi_goals__wrapper">
                        <div class="content" style="width: 30rem">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form
                          style="width: 30rem"
                          @submit.prevent="addSelfAppraisal('difficulty')"
                        >
                          <template v-for="(d, index) in difficulties">
                            <b-field
                              :key="index"
                              :type="{
                                'is-danger':
                                  Object.keys(difficultyErrors).length &&
                                  difficultyErrors[
                                    `difficulty.${index}.difficulty`
                                  ] &&
                                  difficultyErrors[
                                    `difficulty.${index}.difficulty`
                                  ].length,
                              }"
                              :message="
                                Object.keys(difficultyErrors).length
                                  ? difficultyErrors[
                                      `difficulty.${index}.difficulty`
                                    ]
                                  : []
                              "
                            >
                              <b-input
                                placeholder="Enter new difficulty faced..."
                                type="text"
                                expanded
                                v-model="difficulties[index]['difficulty']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="difficulties.length === 1"
                                  @click="removeGoal(index, 'difficulty')"
                                />
                              </p>
                            </b-field>
                          </template>

                          <section class="goal__btns">
                            <div class="">
                              <b-button
                                class="is-info is-light"
                                icon-left="plus"
                                @click="appendNewGoal('difficulty')"
                                >Add New</b-button
                              >
                            </div>
                            <div class="block">
                              <b-button
                                class="is-default is-light"
                                @click="cancelGoalForm('difficulty')"
                                :disabled="isSubmitting"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                                :disabled="isSubmitting"
                              >
                                {{ isSubmitting ? "Submitting..." : "Add" }}
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>
          <b-step-item step="4" label="Project and Initiative (Department)">
            <section class="kpi__table">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">
                      Project and Initiative (My Department)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <section class="kpi_goals__wrapper">
                        <div class="content" style="width: 30rem">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form
                          style="width: 30rem"
                          @submit.prevent="addSelfAppraisal('initiative')"
                        >
                          <template v-for="(i, index) in initiatives">
                            <b-field
                              :key="index"
                              :type="{
                                'is-danger':
                                  Object.keys(initiativeErrors).length &&
                                  initiativeErrors[
                                    `initiative.${index}.initiative`
                                  ] &&
                                  initiativeErrors[
                                    `initiative.${index}.initiative`
                                  ].length,
                              }"
                              :message="
                                Object.keys(initiativeErrors).length
                                  ? initiativeErrors[
                                      `initiative.${index}.initiative`
                                    ]
                                  : []
                              "
                            >
                              <b-input
                                placeholder="Enter new project or initiative..."
                                type="text"
                                expanded
                                v-model="initiatives[index]['initiative']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="initiatives.length === 1"
                                  @click="removeGoal(index, 'initiative')"
                                />
                              </p>
                            </b-field>
                          </template>

                          <section class="goal__btns">
                            <div class="">
                              <b-button
                                class="is-info is-light"
                                icon-left="plus"
                                @click="appendNewGoal('initiative')"
                                >Add New</b-button
                              >
                            </div>
                            <div class="block">
                              <b-button
                                class="is-default is-light"
                                @click="cancelGoalForm('initiative')"
                                :disabled="isSubmitting"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                                :disabled="isSubmitting"
                              >
                                {{ isSubmitting ? "Submitting..." : "Add" }}
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>
          <b-step-item step="5" label="Project and Initiative (Other)">
            <section class="kpi__table">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">
                      Project and Initiative (Other)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <section class="kpi_goals__wrapper">
                        <div class="content" style="width: 30rem">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form
                          style="width: 30rem"
                          @submit.prevent="addSelfAppraisal('otherInitiative')"
                        >
                          <template v-for="(oi, index) in otherInitiatives">
                            <b-field
                              :key="index"
                              :type="{
                                'is-danger':
                                  Object.keys(otherInitiativeErrors).length &&
                                  otherInitiativeErrors[
                                    `initiative.${index}.initiative`
                                  ] &&
                                  otherInitiativeErrors[
                                    `initiative.${index}.initiative`
                                  ].length,
                              }"
                              :message="
                                Object.keys(otherInitiativeErrors).length
                                  ? otherInitiativeErrors[
                                      `initiative.${index}.initiative`
                                    ]
                                  : []
                              "
                            >
                              <b-input
                                placeholder="Enter new project or initiative..."
                                type="text"
                                expanded
                                v-model="otherInitiatives[index]['initiative']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="otherInitiatives.length === 1"
                                  @click="removeGoal(index, 'otherInitiative')"
                                />
                              </p>
                            </b-field>
                          </template>

                          <section class="goal__btns">
                            <div class="">
                              <b-button
                                class="is-info is-light"
                                icon-left="plus"
                                @click="appendNewGoal('otherInitiative')"
                                >Add New</b-button
                              >
                            </div>
                            <div class="block">
                              <b-button
                                class="is-default is-light"
                                @click="cancelGoalForm('otherInitiative')"
                                :disabled="isSubmitting"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                                :disabled="isSubmitting"
                              >
                                {{ isSubmitting ? "Submitting..." : "Add" }}
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>
          <b-step-item step="5" label="Overall feedback">
            <section class="kpi__table">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">feedback</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <section class="kpi_goals__wrapper">
                        <form @submit.prevent="addSelfAppraisal('feedback')">
                          <b-field
                            :type="{
                              'is-danger': feedbackErrors.length,
                            }"
                            :message="feedbackErrors"
                          >
                            <section class="content">
                              <editor
                                api-key="25qhafbs9v6uleue5kg84jeofqdrwawb30mv1o6mgvx4cdbb"
                                id="feedback"
                                :init="initEditor"
                                v-model="feedback"
                              ></editor>
                            </section>
                          </b-field>
                          <div class="bolck justify-c-start">
                            <b-button
                              class="is-default is-light"
                              @click="cancelGoalForm('feedback')"
                              :disabled="isSubmitting"
                              >Cancel</b-button
                            >
                            &nbsp;&nbsp;
                            <button
                              type="submit"
                              class="button is-success is-light"
                              :disabled="isSubmitting"
                            >
                              {{ isSubmitting ? "Submitting..." : "Add" }}
                            </button>
                          </div>
                        </form>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>
          <template #navigation="{ previous, next }">
            <section class="step__buttons position">
              <b-button
                outlined
                type="is-danger"
                icon-pack="fas"
                icon-left="chevron-left"
                :disabled="previous.disabled"
                @click.prevent="previous.action"
              >
                Previous
              </b-button>
              <b-button
                outlined
                type="is-success"
                icon-pack="fas"
                icon-right="chevron-right"
                :disabled="next.disabled"
                @click.prevent="next.action"
              >
                Next
              </b-button>
            </section>
          </template>
        </b-steps>
      </section>
    </section>
    <footer class="modal-card-foot buttons">
      <!-- <b-button class="is-dark is-light" @click="cancelModal()">Close</b-button> -->
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Paginate from "../../Paginate";
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "SelfAppraisalModal",
  props: {
    appraisal: { require: true, type: Object },
  },
  components: { Paginate, Editor },
  computed: {
    ...mapGetters(["getAppraisees", "getJobTitles"]),
  },
  beforeMount() {
    // this.$nextTick(() => {
    //   this.dispatchKPI({
    //     type: "ADD_APPRAISEES",
    //     payload: { id: this.appraisal.id, page: 1 },
    //   });
    // });
    this.getAppraisalKeyGoal(this.appraisal.id);
  },
  data() {
    return {
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      selectedKPIs: [],
      isSubmitting: false,
      isSubmittingMyGoal: false,
      isSubmittingUnitGoal: false,
      isSubmittingDptGoal: false,
      isLoading: false,
      noAppraisalFound: false,
      activeStep: 0,

      myGoals: [
        {
          id: `${Math.random(16)}`.split(".")[1],
          goal: "",
        },
      ],
      unitGoals: [
        {
          id: `${Math.random(16)}`.split(".")[1],
          goal: "",
        },
      ],
      dptGoals: [
        {
          id: `${Math.random(16)}`.split(".")[1],
          goal: "",
        },
      ],

      achievements: [
        {
          id: `${Math.random(16)}`.split(".")[1],
          achievement: "",
        },
      ],
      difficulties: [
        {
          id: `${Math.random(16)}`.split(".")[1],
          difficulty: "",
        },
      ],
      initiatives: [
        {
          id: `${Math.random(16)}`.split(".")[1],
          initiative: "",
        },
      ],
      otherInitiatives: [
        {
          id: `${Math.random(16)}`.split(".")[1],
          initiative: "",
        },
      ],

      feedback: "",

      myGoalErrors: {},
      unitGoalErrors: {},
      dptGoalErrors: {},
      achievementErrors: {},
      difficultyErrors: {},
      initiativeErrors: {},
      otherInitiativeErrors: {},
      feedbackErrors: [],
    };
  },
  methods: {
    ...mapActions(["dispatchKPI"]),
    cancelModal() {
      this.$emit("close");
    },
    addSelfAppraisal(type) {
      switch (type) {
        case "department":
          this.isSubmittingDptGoal = true;
          this.saveKeyGoal(
            this.generateAppraisalData(
              "department-goal",
              this.$page.props.authUser.department_id,
              this.appraisal.id,
              this.dptGoals
            )
          );
          this.dptGoalErrors = {};
          break;
        case "unit":
          this.isSubmittingUnitGoal = true;
          this.saveKeyGoal(
            this.generateAppraisalData(
              "unit-goal",
              this.$page.props.authUser.unit_id,
              this.appraisal.id,
              this.unitGoals
            )
          );
          this.unitGoalErrors = {};
          break;
        case "achievement":
          this.saveSelfAppraisal({
            type: "achievement",
            id: this.$page.props.authUser.id,
            appraisal: this.appraisal.id,
            achievement: this.achievements,
          });
          this.achievementErrors = {};
          break;
        case "difficulty":
          this.saveSelfAppraisal({
            type: "difficulty",
            id: this.$page.props.authUser.id,
            appraisal: this.appraisal.id,
            difficulty: this.difficulties,
          });
          this.difficultyErrors = {};
          break;
        case "initiative":
          this.saveSelfAppraisal({
            type: "initiative",
            id: this.$page.props.authUser.id,
            appraisal: this.appraisal.id,
            initiative: this.initiatives,
          });
          this.initiativeErrors = {};
          break;
        case "otherInitiative":
          this.saveSelfAppraisal({
            type: "otherInitiative",
            id: this.$page.props.authUser.id,
            appraisal: this.appraisal.id,
            initiative: this.otherInitiatives,
          });
          this.otherInitiativeErrors = {};
          break;
        case "feedback":
          this.saveSelfAppraisal({
            type: "feedback",
            id: this.$page.props.authUser.id,
            appraisal: this.appraisal.id,
            feedback: this.feedback,
          });
          this.feedbackErrors = [];
          break;
        default:
          this.isSubmittingMyGoal = true;
          this.saveKeyGoal(
            this.generateAppraisalData(
              "my-goal",
              this.$page.props.authUser.id,
              this.appraisal.id,
              this.myGoals
            )
          );
          this.myGoalErrors = {};
          break;
      }
    },
    saveKeyGoal(data) {
      this.$axios
        .post(`/dashboard/add-key-goal`, data)
        .then((res) => {
          console.log(res.data);
          if (data.type === "my-goal") {
            this.isSubmittingMyGoal = false;
          }
          if (data.type === "unit-goal") {
            this.isSubmittingUnitGoal = false;
          }
          if (data.type === "department-goal") {
            this.isSubmittingDptGoal = false;
          }
        })
        .catch((err) => {
          this.isSubmittingMyGoal = false;
          this.isSubmittingUnitGoal = false;
          this.isSubmittingDptGoal = false;
          if (data.type === "my-goal") {
            this.myGoalErrors = err.response.data.errors;
          }
          if (data.type === "unit-goal") {
            this.unitGoalErrors = err.response.data.errors;
          }
          if (data.type === "department-goal") {
            this.dptGoalErrors = err.response.data.errors;
          }
        });
    },
    saveSelfAppraisal(data) {
      this.isSubmitting = true;
      this.$axios
        .post(`/dashboard/add-self-appraisal`, data)
        .then((res) => {
          this.isSubmitting = false;
          console.log(res.data);
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (data.type === "achievement") {
            this.achievementErrors = err.response.data.errors;
          }
          if (data.type === "difficulty") {
            this.difficultyErrors = err.response.data.errors;
          }
          if (data.type === "initiative") {
            this.initiativeErrors = err.response.data.errors;
          }
          if (data.type === "otherInitiative") {
            this.otherInitiativeErrors = err.response.data.errors;
          }
          if (data.type === "feedback") {
            this.feedbackErrors = err.response.data.errors.feedback;
          }
        });
    },

    getJobTitle(id) {
      if (id) {
        const t = this.getJobTitles.find((t) => t.id === parseInt(id));
        return t.title || "";
      }
      return "";
    },
    isNull(el) {
      if (el === "null" || null) {
        return "";
      }
      return el;
    },
    getFullName(staff) {
      return `${this.isNull(staff.title)} ${staff.firstName} ${this.isNull(
        staff.middleName
      )} ${staff.lastName}`;
    },
    appendNewGoal(type) {
      switch (type) {
        case "branch":
          this.branchGoals = [
            ...this.branchGoals,
            {
              id: `${Math.random(16)}`.split(".")[1],
              goal: "",
            },
          ];
          break;
        case "department":
          this.dptGoals = [
            ...this.dptGoals,
            {
              id: `${Math.random(16)}`.split(".")[1],
              goal: "",
            },
          ];
          break;
        case "unit":
          this.unitGoals = [
            ...this.unitGoals,
            {
              id: `${Math.random(16)}`.split(".")[1],
              goal: "",
            },
          ];
          break;
        case "achievement":
          this.achievements = [
            ...this.achievements,
            {
              id: `${Math.random(16)}`.split(".")[1],
              achievement: "",
            },
          ];
          break;
        case "difficulty":
          this.difficulties = [
            ...this.difficulties,
            {
              id: `${Math.random(16)}`.split(".")[1],
              difficulty: "",
            },
          ];
          break;
        case "initiative":
          this.initiatives = [
            ...this.initiatives,
            {
              id: `${Math.random(16)}`.split(".")[1],
              initiative: "",
            },
          ];
          break;
        case "otherInitiative":
          this.otherInitiatives = [
            ...this.otherInitiatives,
            {
              id: `${Math.random(16)}`.split(".")[1],
              initiative: "",
            },
          ];
          break;
        default:
          this.myGoals = [
            ...this.myGoals,
            {
              id: `${Math.random(16)}`.split(".")[1],
              goal: "",
            },
          ];
          break;
      }
    },
    removeGoal(index, type) {
      switch (type) {
        case "department":
          if (this.dptGoals.length > 1) {
            this.dptGoals.splice(index, 1);
            this.$nextTick(() => {
              if (Object.keys(this.dptGoalErrors).length) {
                this.dptGoalErrors[`goal.${index}.goal`] = "";
              }
            });
          }
          break;
        case "unit":
          if (this.unitGoals.length > 1) {
            this.unitGoals.splice(index, 1);
            this.$nextTick(() => {
              if (Object.keys(this.unitGoalErrors).length) {
                this.unitGoalErrors[`goal.${index}.goal`] = "";
              }
            });
          }
          break;
        case "achievement":
          if (this.achievements.length > 1) {
            this.achievements.splice(index, 1);
            this.$nextTick(() => {
              if (Object.keys(this.achievementErrors).length) {
                this.achievementErrors[`achievement.${index}.achievement`] = "";
              }
            });
          }
          break;
        case "difficulty":
          if (this.difficulties.length > 1) {
            this.difficulties.splice(index, 1);
            this.$nextTick(() => {
              if (Object.keys(this.difficultyErrors).length) {
                this.difficultyErrors[`difficulty.${index}.difficulty`] = "";
              }
            });
          }
          break;
        case "initiative":
          if (this.initiatives.length > 1) {
            this.initiatives.splice(index, 1);
            this.$nextTick(() => {
              if (Object.keys(this.initiativeErrors).length) {
                this.initiativeErrors[`initiative.${index}.initiative`] = "";
              }
            });
          }
          break;
        case "otherInitiative":
          if (this.otherInitiatives.length > 1) {
            this.otherInitiatives.splice(index, 1);
            this.$nextTick(() => {
              if (Object.keys(this.otherInitiativeErrors).length) {
                this.otherInitiativeErrors[`initiative.${index}.initiative`] =
                  "";
              }
            });
          }
          break;
        default:
          if (this.myGoals.length > 1) {
            this.myGoals.splice(index, 1);
            this.$nextTick(() => {
              if (Object.keys(this.myGoalErrors).length) {
                this.myGoalErrors[`goal.${index}.goal`] = "";
              }
            });
          }
          break;
      }
    },
    cancelGoalForm(type) {
      switch (type) {
        case "department":
          this.dptGoals = [
            {
              goal: "",
            },
          ];
          this.$nextTick(() => {
            this.dptGoalErrors = {};
          });
          break;
        case "unit":
          this.unitGoals = [
            {
              goal: "",
            },
          ];
          this.$nextTick(() => {
            this.unitGoalErrors = {};
          });
          break;
        case "achievement":
          this.achievements = [
            {
              achievement: "",
            },
          ];
          this.$nextTick(() => {
            this.achievementErrors = {};
          });
          break;
        case "difficulty":
          this.difficulties = [
            {
              difficulty: "",
            },
          ];
          this.$nextTick(() => {
            this.difficultyErrors = {};
          });
          break;
        case "initiative":
          this.initiatives = [
            {
              initiative: "",
            },
          ];
          this.$nextTick(() => {
            this.initiativeErrors = {};
          });
          break;
        case "otherInitiative":
          this.otherInitiatives = [
            {
              initiative: "",
            },
          ];
          this.$nextTick(() => {
            this.otherInitiativeErrors = {};
          });
          break;
        case "feedback":
          this.feedback = "";
          this.$nextTick(() => {
            this.feedbackErrors = [];
          });
          break;
        default:
          this.myGoals = [
            {
              goal: "",
            },
          ];
          this.$nextTick(() => {
            this.myGoalErrors = {};
          });
          break;
      }
    },
    generateAppraisalData(type, id, appraisal, goals) {
      return { type, id, appraisal, goals };
    },

    async getAppraisalKeyGoal(id) {
      try {
        const goals = await this.$axios.get(
          `/dashboard/get-appraisal-goal/${id}`
        );
        //console.log(goals);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
