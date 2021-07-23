<template>
  <form>
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
                <div class="content">
                  <h5>Key Goals</h5>
                  <ol type="1">
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                  </ol>
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
                          <b-radio name="score" native-value="5" type="is-info">
                            5
                          </b-radio>
                          <b-radio name="score" native-value="4" type="is-info">
                            4
                          </b-radio>
                          <b-radio name="score" native-value="3" type="is-info">
                            3
                          </b-radio>
                          <b-radio name="score" native-value="2" type="is-info">
                            2
                          </b-radio>
                          <b-radio name="score" native-value="1" type="is-info">
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
                          <b-radio name="score" native-value="5" type="is-info">
                            5
                          </b-radio>
                          <b-radio name="score" native-value="4" type="is-info">
                            4
                          </b-radio>
                          <b-radio name="score" native-value="3" type="is-info">
                            3
                          </b-radio>
                          <b-radio name="score" native-value="2" type="is-info">
                            2
                          </b-radio>
                          <b-radio name="score" native-value="1" type="is-info">
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
                          <b-radio name="score" native-value="5" type="is-info">
                            5
                          </b-radio>
                          <b-radio name="score" native-value="4" type="is-info">
                            4
                          </b-radio>
                          <b-radio name="score" native-value="3" type="is-info">
                            3
                          </b-radio>
                          <b-radio name="score" native-value="2" type="is-info">
                            2
                          </b-radio>
                          <b-radio name="score" native-value="1" type="is-info">
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
                          <b-radio name="score" native-value="5" type="is-info">
                            5
                          </b-radio>
                          <b-radio name="score" native-value="4" type="is-info">
                            4
                          </b-radio>
                          <b-radio name="score" native-value="3" type="is-info">
                            3
                          </b-radio>
                          <b-radio name="score" native-value="2" type="is-info">
                            2
                          </b-radio>
                          <b-radio name="score" native-value="1" type="is-info">
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
                  ></editor>
                </section>
                <section class="content">
                  <h5 class="label text-main">Overall assessment</h5>
                  <editor
                    api-key="25qhafbs9v6uleue5kg84jeofqdrwawb30mv1o6mgvx4cdbb"
                    id="assessment"
                    :init="initEditor"
                  ></editor>
                </section>
              </div>
            </div>
          </b-collapse>
        </section>
      </section>
      <footer class="modal-card-foot buttons">
        <button class="button is-success is-light" :disabled="isSubmitting">
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
  props: {},
  computed: {},
  data() {
    return {
      isSubmitting: false,
      openCollapse: 0,
    };
  },
  methods: {
    cancelModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>