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
        <b-taglist attached>
          <b-tag type="is-dark" size="is-medium">Total Staff</b-tag>
          <b-tag type="is-info" size="is-medium">{{
            appraisal.staff.length
          }}</b-tag>
        </b-taglist>
      </section>
      <section>
        <b-steps
          v-model="activeStep"
          :animated="true"
          :rounded="true"
          :has-navigation="true"
          icon-prev="chevron-left"
          icon-next="chevron-right"
          label-position="bottom"
          mobile-mode="minimalist"
          type="is-info"
        >
          <b-step-item step="1" label="Key Goals">
            <section class="kpi__table">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">My Key Goals</th>
                    <th class="has-text-centered text-main">
                      Supervisor Key Goals
                    </th>
                    <th class="has-text-centered text-main">
                      Manager Key Goals
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
                        <form
                          v-if="
                            !isUserRole('Manager') && !isUserRole('Supervisor')
                          "
                        >
                          <template v-for="(kg, index) in keyGoals">
                            <b-field :key="index">
                              <b-input
                                placeholder="Enter new goal..."
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
                    <td>
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form v-if="isUserRole('Supervisor')">
                          <template v-for="(kg, index) in keyGoals">
                            <b-field :key="index">
                              <b-input
                                placeholder="Enter new goal..."
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
                    <td>
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                        <form v-if="isUserRole('Manager')">
                          <template v-for="(kg, index) in keyGoals">
                            <b-field :key="index">
                              <b-input
                                placeholder="Enter new goal..."
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
                        <form
                          v-if="
                            !isUserRole('Manager') && !isUserRole('Supervisor')
                          "
                        >
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
                        <form
                          v-if="
                            !isUserRole('Manager') && !isUserRole('Supervisor')
                          "
                        >
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
                        <form
                          v-if="
                            !isUserRole('Manager') && !isUserRole('Supervisor')
                          "
                        >
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
                        <form
                          v-if="
                            !isUserRole('Manager') && !isUserRole('Supervisor')
                          "
                        >
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
                          <editor :init="initEditor" />
                        </div>
                        <form
                          v-if="
                            !isUserRole('Manager') && !isUserRole('Supervisor')
                          "
                        >
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
            <section class="step__buttons">
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
import Editor from "@tinymce/tinymce-vue";
import Paginate from "../../Paginate";
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
    this.$nextTick(() => {
      this.dispatchKPI({
        type: "ADD_APPRAISEES",
        payload: { id: this.appraisal.id, page: 1 },
      });
    });
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
    };
  },
  methods: {
    ...mapActions(["dispatchKPI"]),
    cancelModal() {
      this.$emit("close");
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
    appendNewGoal() {
      this.keyGoals = [...this.keyGoals, { goal: "" }];
    },
    removeGoal(index) {
      if (this.keyGoals.length > 1) {
        this.keyGoals.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

Please add a DNS record with the following parameters:
Record type: TXT
Domain name: _acme-challenge.hrms.novatechltd.net
Record: WSa5ZYnEmus6z80Vu_t2w93qaowFSS0xHr-MLNBVtos