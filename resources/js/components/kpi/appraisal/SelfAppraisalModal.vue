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
                        this.$page.props.authUser.unit_id ||
                        anyPermission('admin', 'president')
                      "
                    >
                      Unit Key Goals
                    </th>
                    <th
                      class="text-main"
                      v-if="
                        this.$page.props.authUser.department_id ||
                        anyPermission('admin', 'president', 'hod')
                      "
                    >
                      Department Key Goals
                    </th>
                    <th class="text-main">Branch Key Goals</th>
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
                        <form @submit.prevent="addKeyGoal()">
                          <template v-for="(kg, index) in myGoals">
                            <b-field
                              :key="index"
                              :type="{
                                'is-danger':
                                  Object.keys(myGoalErrors).length > 0 &&
                                  myGoalErrors[`goal.${index}.goal`] &&
                                  myGoalErrors[`goal.${index}.goal`].length > 0,
                              }"
                              :message="
                                Object.keys(myGoalErrors).length > 0
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
                              <b-button class="is-default is-light"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                              >
                                Submit
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                    <td
                      v-if="
                        this.$page.props.authUser.unit_id ||
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
                        <form v-if="anyPermission('admin', 'supervisor')">
                          <template v-for="(kg, index) in unitGoals">
                            <b-field :key="index">
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
                              <b-button class="is-default is-light"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                              >
                                Submit
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                    <td
                      v-if="
                        this.$page.props.authUser.department_id ||
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
                        <form v-if="anyPermission('admin', 'hod')">
                          <template v-for="(kg, index) in dptGoals">
                            <b-field :key="index">
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
                              <b-button class="is-default is-light"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                              >
                                Submit
                              </button>
                            </div>
                          </section>
                        </form>
                      </section>
                    </td>
                    <td>
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form v-if="anyPermission('admin', 'branch_manager')">
                          <template v-for="(kg, index) in branchGoals">
                            <b-field :key="index">
                              <b-input
                                placeholder="Enter new goal..."
                                type="text"
                                expanded
                                v-model="branchGoals[index]['goal']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="branchGoals.length === 1"
                                  @click="removeGoal(index, 'branch')"
                                />
                              </p>
                            </b-field>
                          </template>

                          <section class="goal__btns">
                            <div class="">
                              <b-button
                                class="is-info is-light"
                                icon-left="plus"
                                @click="appendNewGoal('branch')"
                                >Add New</b-button
                              >
                            </div>
                            <div class="block">
                              <b-button class="is-default is-light"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                              >
                                Submit
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
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form v-if="!isPermission('admin')">
                          <template v-for="(kg, index) in keyGoals">
                            <b-field :key="index">
                              <b-input
                                placeholder="Enter new achievement recorded..."
                                type="text"
                                expanded
                                v-model="keyGoals[index]['goal']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="keyGoals.length === 1"
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
                              <b-button class="is-default is-light"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                              >
                                Submit
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
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form v-if="!isPermission('admin')">
                          <template v-for="(kg, index) in keyGoals">
                            <b-field :key="index">
                              <b-input
                                placeholder="Enter new difficulty faced..."
                                type="text"
                                expanded
                                v-model="keyGoals[index]['goal']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="keyGoals.length === 1"
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
                              <b-button class="is-default is-light"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                              >
                                Submit
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
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form v-if="!isPermission('admin')">
                          <template v-for="(kg, index) in keyGoals">
                            <b-field :key="index">
                              <b-input
                                placeholder="Enter new project or initiative..."
                                type="text"
                                expanded
                                v-model="keyGoals[index]['goal']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="keyGoals.length === 1"
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
                              <b-button class="is-default is-light"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                              >
                                Submit
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
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form v-if="!isPermission('admin')">
                          <template v-for="(kg, index) in keyGoals">
                            <b-field :key="index">
                              <b-input
                                placeholder="Enter new project or initiative..."
                                type="text"
                                expanded
                                v-model="keyGoals[index]['goal']"
                              >
                              </b-input>
                              <p class="control">
                                <b-button
                                  type="is-danger is-light"
                                  icon-left="times"
                                  :disabled="keyGoals.length === 1"
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
                              <b-button class="is-default is-light"
                                >Cancel</b-button
                              >
                              <button
                                type="submit"
                                class="button is-success is-light"
                              >
                                Submit
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
          <b-step-item step="5" label="Overall Feedback">
            <section class="kpi__table">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <!-- <editor :init="initEditor" /> -->
                        </div>
                        <form v-if="!isPermission('admin')">
                          <b-field>
                            <vue-mce></vue-mce>
                          </b-field>
                          <div class="bolck justify-c-end">
                            <b-button class="is-default is-light"
                              >Cancel</b-button
                            >
                            &nbsp;&nbsp;
                            <button
                              type="submit"
                              class="button is-success is-light"
                            >
                              Submit
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
export default {
  name: "SelfAppraisalModal",
  props: {
    appraisal: { require: true, type: Object },
  },
  components: { Paginate },
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
      isLoading: false,
      noAppraisalFound: false,
      activeStep: 0,
      keyGoals: [
        {
          goal: "",
        },
      ],
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
      branchGoals: [
        {
          id: `${Math.random(16)}`.split(".")[1],
          goal: "",
        },
      ],

      myGoalErrors: {},
      unitGoalErrors: {},
      dptGoalErrors: {},
      branchGoalErrors: {},
    };
  },
  methods: {
    ...mapActions(["dispatchKPI"]),
    cancelModal() {
      this.$emit("close");
    },

    addKeyGoal(type) {
      switch (type) {
        case "branch":
          break;
        case "department":
          break;

        case "unit":
          break;
        default:
          const data = {
            type: "my-goal",
            id: this.$page.props.authUser.id,
            appraisal: this.appraisal.id,
            goal: this.myGoals,
          };
          this.myGoalErrors = {};
          this.saveKeyGoal("my-goal", data);
          break;
      }
    },
    saveKeyGoal(type, data) {
      this.$axios
        .post(`/dashboard/add-key-goal`, data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          if (type === "my-goal") {
            this.myGoalErrors = err.response.data.errors;
          }
          if (type === "unit") {
            this.unitGoalErrors = err.response.data.errors;
          }
          if (type === "department") {
            this.dptGoalErrors = err.response.data.errors;
          }
          if (type === "branch") {
            this.branchGoalErrors = err.response.data.errors;
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
        case "branch":
          if (this.branchGoals.length > 1) {
            this.branchGoals.splice(index, 1);
          }
          break;
        case "department":
          if (this.dptGoals.length > 1) {
            this.dptGoals.splice(index, 1);
          }
          break;

        case "unit":
          if (this.unitGoals.length > 1) {
            this.unitGoals.splice(index, 1);
          }
          break;

        default:
          if (this.myGoals.length > 1) {
            this.myGoals.splice(index, 1);
          }
          break;
      }
    },

    async getAppraisalKeyGoal(id) {
      try {
        const goals = await this.$axios.get(
          `/dashboard/get-appraisal-goal/${id}`
        );
        console.log(goals);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
