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
          label-position="bottom"
          mobile-mode="compact"
          type="is-info"
        >
          <b-step-item step="1" label="Key Goals">
            <section class="kpi__table">
              <table class="table is-fullwidth is-bordered">
                <thead>
                  <tr>
                    <th class="text-main">My Key Goals</th>
                    <th class="text-main" v-if="$page.props.authUser.unit_id">
                      Unit Key Goals
                    </th>
                    <th
                      class="text-main"
                      v-if="$page.props.authUser.department_id"
                    >
                      Department Key Goals
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="kpi__goals__td">
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol
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
                              <div class="appraisal-list">
                                <p>
                                  {{ goal.goal }}
                                </p>
                                <div class="">
                                  <button
                                    @click="setEditGoalData(goal, 'user')"
                                  >
                                    <b-icon
                                      icon="pen"
                                      size="is-small"
                                      type="is-primary"
                                    ></b-icon>
                                  </button>
                                  <button @click="deleteGoal(goal.id, 'user')">
                                    <b-icon
                                      icon="times"
                                      size="is-small"
                                      type="is-danger"
                                    ></b-icon>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <p v-else>No key goal found!</p>
                        </div>
                        <template
                          v-if="openAppraisal(this.appraisal.sap_timestamp)"
                        >
                          <form
                            @submit.prevent="updateGoal('user')"
                            v-if="isEditingUserGoal"
                          >
                            <b-field
                              :type="{
                                'is-danger': editUserGoalError.length,
                              }"
                              :message="editUserGoalError"
                            >
                              <b-input
                                placeholder="Enter new goal..."
                                type="text"
                                expanded
                                v-model="editUserGoal.goal"
                              >
                              </b-input>
                            </b-field>

                            <section class="goal__btns">
                              <div></div>
                              <div class="block">
                                <b-button
                                  class="is-default is-light"
                                  @click="cancelEditGoal('user')"
                                  :disabled="isSubmittingMyGoal"
                                  >Cancel</b-button
                                >
                                <button
                                  type="submit"
                                  class="button is-success is-light"
                                  :disabled="isSubmittingMyGoal"
                                >
                                  {{
                                    isSubmittingMyGoal ? "Saving..." : "Save"
                                  }}
                                </button>
                              </div>
                            </section>
                          </form>
                          <form @submit.prevent="addSelfAppraisal()" v-else>
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
                        </template>
                      </section>
                    </td>
                    <td
                      class="kpi__goals__td"
                      v-if="$page.props.authUser.unit_id"
                    >
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol
                            v-if="
                              userAppraisal &&
                              userAppraisal.userUnitGoal &&
                              userAppraisal.userUnitGoal.goals
                            "
                          >
                            <li
                              v-for="goal in userAppraisal.userUnitGoal.goals"
                              :key="goal.id"
                            >
                              <div class="appraisal-list">
                                <p>
                                  {{ goal.goal }}
                                </p>
                                <div class="">
                                  <button
                                    @click="setEditGoalData(goal, 'unit')"
                                  >
                                    <b-icon
                                      icon="pen"
                                      size="is-small"
                                      type="is-primary"
                                    ></b-icon>
                                  </button>
                                  <button @click="deleteGoal(goal.id, 'unit')">
                                    <b-icon
                                      icon="times"
                                      size="is-small"
                                      type="is-danger"
                                    ></b-icon>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                        <template
                          v-if="openAppraisal(this.appraisal.sap_timestamp)"
                        >
                          <template v-if="isEditingUnitGoal">
                            <form @submit.prevent="updateGoal('unit')">
                              <b-field
                                :type="{
                                  'is-danger': editUnitError.length,
                                }"
                                :message="editUnitError"
                              >
                                <b-input
                                  placeholder="Enter new goal..."
                                  type="text"
                                  expanded
                                  v-model="editUnitGoal.goal"
                                >
                                </b-input>
                              </b-field>

                              <section class="goal__btns">
                                <div></div>
                                <div class="block">
                                  <b-button
                                    class="is-default is-light"
                                    @click="cancelEditGoal('unit')"
                                    :disabled="isSubmittingUnitGoal"
                                    >Cancel</b-button
                                  >
                                  <button
                                    type="submit"
                                    class="button is-success is-light"
                                    :disabled="isSubmittingUnitGoal"
                                  >
                                    {{
                                      isSubmittingDptGoal ? "Saving..." : "Save"
                                    }}
                                  </button>
                                </div>
                              </section>
                            </form>
                          </template>
                          <template v-else>
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
                                      unitGoalErrors[`goal.${index}.goal`]
                                        .length,
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
                                      isSubmittingUnitGoal
                                        ? "Submitting..."
                                        : "Add"
                                    }}
                                  </button>
                                </div>
                              </section>
                            </form>
                          </template>
                        </template>
                      </section>
                    </td>
                    <td
                      class="kpi__goals__td"
                      v-if="$page.props.authUser.department_id"
                    >
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol
                            v-if="
                              userAppraisal &&
                              userAppraisal.userDepartmentGoal &&
                              userAppraisal.userDepartmentGoal.goals
                            "
                          >
                            <li
                              v-for="goal in userAppraisal.userDepartmentGoal
                                .goals"
                              :key="goal.id"
                            >
                              <div class="appraisal-list">
                                <p>
                                  {{ goal.goal }}
                                </p>
                                <div class="">
                                  <button @click="setEditGoalData(goal, 'dpt')">
                                    <b-icon
                                      icon="pen"
                                      size="is-small"
                                      type="is-primary"
                                    ></b-icon>
                                  </button>
                                  <button @click="deleteGoal(goal.id, 'dpt')">
                                    <b-icon
                                      icon="times"
                                      size="is-small"
                                      type="is-danger"
                                    ></b-icon>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                        <template
                          v-if="openAppraisal(this.appraisal.sap_timestamp)"
                        >
                          <template v-if="isEditingDptGoal">
                            <form @submit.prevent="updateGoal('dpt')">
                              <b-field
                                :type="{
                                  'is-danger': editDptGoalError.length,
                                }"
                                :message="editDptGoalError"
                              >
                                <b-input
                                  placeholder="Enter new goal..."
                                  type="text"
                                  expanded
                                  v-model="editDptGoal.goal"
                                >
                                </b-input>
                              </b-field>

                              <section class="goal__btns">
                                <div></div>
                                <div class="block">
                                  <b-button
                                    class="is-default is-light"
                                    @click="cancelEditGoal('dpt')"
                                    :disabled="isSubmittingDptGoal"
                                    >Cancel</b-button
                                  >
                                  <button
                                    type="submit"
                                    class="button is-success is-light"
                                    :disabled="isSubmittingDptGoal"
                                  >
                                    {{
                                      isSubmittingDptGoal ? "Saving..." : "Save"
                                    }}
                                  </button>
                                </div>
                              </section>
                            </form>
                          </template>
                          <template v-else>
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
                                      dptGoalErrors[`goal.${index}.goal`]
                                        .length,
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
                                      isSubmittingDptGoal
                                        ? "Submitting..."
                                        : "Add"
                                    }}
                                  </button>
                                </div>
                              </section>
                            </form>
                          </template>
                        </template>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>

          <b-step-item step="2" label="Achievement">
            <section class="kpi__table__single">
              <table class="table is-fullwidth is-bordered">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">My Achievement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="kpi__goals__td">
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol
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
                              <div class="appraisal-list">
                                <p>
                                  {{ achievement.achievement }}
                                </p>
                                <div class="">
                                  <button
                                    @click="
                                      setEditSelfAppraisal(
                                        achievement,
                                        'achievement'
                                      )
                                    "
                                  >
                                    <b-icon
                                      icon="pen"
                                      size="is-small"
                                      type="is-primary"
                                    ></b-icon>
                                  </button>
                                  <button
                                    @click="
                                      deleteSelfAppraisal(
                                        achievement.id,
                                        'achievements'
                                      )
                                    "
                                  >
                                    <b-icon
                                      icon="times"
                                      size="is-small"
                                      type="is-danger"
                                    ></b-icon>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <p v-else>No achievement found!</p>
                        </div>

                        <template
                          v-if="openAppraisal(this.appraisal.np_timestamp)"
                        >
                          <form
                            @submit.prevent="
                              updateSelfAppraisal('achievements')
                            "
                            v-if="isEditingSelfAppraisal"
                          >
                            <b-field
                              :type="{
                                'is-danger': editAchievementErrors.length,
                              }"
                              :message="editAchievementErrors.achievement"
                            >
                              <b-input
                                placeholder="Enter new achievement..."
                                type="text"
                                expanded
                                v-model="editAchievement.achievement"
                              >
                              </b-input>
                            </b-field>

                            <section class="goal__btns">
                              <div></div>
                              <div class="block">
                                <b-button
                                  class="is-default is-light"
                                  @click="
                                    cancelEditSelfAppraisal('achievements')
                                  "
                                  :disabled="isSubmitting"
                                  >Cancel</b-button
                                >
                                <button
                                  type="submit"
                                  class="button is-success is-light"
                                  :disabled="isSubmitting"
                                >
                                  {{ isSubmitting ? "Saving..." : "Save" }}
                                </button>
                              </div>
                            </section>
                          </form>
                          <form
                            @submit.prevent="addSelfAppraisal('achievement')"
                            v-else
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
                        </template>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>

          <b-step-item step="3" label="Difficulties Faced">
            <section class="kpi__table__single">
              <table class="table is-fullwidth is-bordered">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">Difficulties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="kpi__goals__td">
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol
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
                              <div class="appraisal-list">
                                <p>
                                  {{ difficulty.difficulty }}
                                </p>
                                <div class="">
                                  <button
                                    @click="
                                      setEditSelfAppraisal(
                                        difficulty,
                                        'difficulty'
                                      )
                                    "
                                  >
                                    <b-icon
                                      icon="pen"
                                      size="is-small"
                                      type="is-primary"
                                    ></b-icon>
                                  </button>
                                  <button
                                    @click="
                                      deleteSelfAppraisal(
                                        difficulty.id,
                                        'difficulties'
                                      )
                                    "
                                  >
                                    <b-icon
                                      icon="times"
                                      size="is-small"
                                      type="is-danger"
                                    ></b-icon>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <p v-else>No difficulty found!</p>
                        </div>
                        <template
                          v-if="openAppraisal(this.appraisal.np_timestamp)"
                        >
                          <form
                            @submit.prevent="
                              updateSelfAppraisal('difficulties')
                            "
                            v-if="isEditingSelfAppraisal"
                          >
                            <b-field
                              :type="{
                                'is-danger': editDifficultyErrors.length,
                              }"
                              :message="editDifficultyErrors.difficulty"
                            >
                              <b-input
                                placeholder="Enter new difficulty..."
                                type="text"
                                expanded
                                v-model="editDifficulty.difficulty"
                              >
                              </b-input>
                            </b-field>

                            <section class="goal__btns">
                              <div></div>
                              <div class="block">
                                <b-button
                                  class="is-default is-light"
                                  @click="
                                    cancelEditSelfAppraisal('difficulties')
                                  "
                                  :disabled="isSubmitting"
                                  >Cancel</b-button
                                >
                                <button
                                  type="submit"
                                  class="button is-success is-light"
                                  :disabled="isSubmitting"
                                >
                                  {{ isSubmitting ? "Saving..." : "Save" }}
                                </button>
                              </div>
                            </section>
                          </form>
                          <form
                            @submit.prevent="addSelfAppraisal('difficulty')"
                            v-else
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
                        </template>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>
          <b-step-item step="4" label="Project and Initiative (Department)">
            <section class="kpi__table__single">
              <table class="table is-fullwidth is-bordered">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">
                      Project and Initiative (My Department)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="kpi__goals__td">
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol
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
                              <div class="appraisal-list">
                                <p>
                                  {{ initiative.initiative }}
                                </p>
                                <div class="">
                                  <button
                                    @click="
                                      setEditSelfAppraisal(
                                        initiative,
                                        'initiative'
                                      )
                                    "
                                  >
                                    <b-icon
                                      icon="pen"
                                      size="is-small"
                                      type="is-primary"
                                    ></b-icon>
                                  </button>
                                  <button
                                    @click="
                                      deleteSelfAppraisal(
                                        initiative.id,
                                        'initiatives'
                                      )
                                    "
                                  >
                                    <b-icon
                                      icon="times"
                                      size="is-small"
                                      type="is-danger"
                                    ></b-icon>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <p v-else>No initiative found!</p>
                        </div>
                        <template
                          v-if="openAppraisal(this.appraisal.np_timestamp)"
                        >
                          <form
                            @submit.prevent="updateSelfAppraisal('initiatives')"
                            v-if="isEditingSelfAppraisal"
                          >
                            <b-field
                              :type="{
                                'is-danger': editInitiativeErrors.length,
                              }"
                              :message="editInitiativeErrors.initiative"
                            >
                              <b-input
                                placeholder="Enter new initiative..."
                                type="text"
                                expanded
                                v-model="editInitiative.initiative"
                              >
                              </b-input>
                            </b-field>

                            <section class="goal__btns">
                              <div></div>
                              <div class="block">
                                <b-button
                                  class="is-default is-light"
                                  @click="
                                    cancelEditSelfAppraisal('initiatives')
                                  "
                                  :disabled="isSubmitting"
                                  >Cancel</b-button
                                >
                                <button
                                  type="submit"
                                  class="button is-success is-light"
                                  :disabled="isSubmitting"
                                >
                                  {{ isSubmitting ? "Saving..." : "Save" }}
                                </button>
                              </div>
                            </section>
                          </form>
                          <form
                            @submit.prevent="addSelfAppraisal('initiative')"
                            v-else
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
                        </template>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>
          <b-step-item step="5" label="Project and Initiative (Other)">
            <section class="kpi__table__single">
              <table class="table is-fullwidth is-bordered">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">
                      Project and Initiative (Other)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="kpi__goals__td">
                      <section class="kpi_goals__wrapper">
                        <div class="content">
                          <ol
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
                              <div class="appraisal-list">
                                <p>
                                  {{ initiative.initiative }}
                                </p>
                                <div class="">
                                  <button
                                    @click="
                                      setEditSelfAppraisal(
                                        initiative,
                                        'otherInitiative'
                                      )
                                    "
                                  >
                                    <b-icon
                                      icon="pen"
                                      size="is-small"
                                      type="is-primary"
                                    ></b-icon>
                                  </button>
                                  <button
                                    @click="
                                      deleteSelfAppraisal(
                                        initiative.id,
                                        'other_initiatives'
                                      )
                                    "
                                  >
                                    <b-icon
                                      icon="times"
                                      size="is-small"
                                      type="is-danger"
                                    ></b-icon>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <p v-else>No initiative found!</p>
                        </div>
                        <template
                          v-if="openAppraisal(this.appraisal.np_timestamp)"
                        >
                          <form
                            @submit.prevent="
                              updateSelfAppraisal('other_initiatives')
                            "
                            v-if="isEditingSelfAppraisal"
                          >
                            <b-field
                              :type="{
                                'is-danger': editOtherInitiativeErrors.length,
                              }"
                              :message="editOtherInitiativeErrors.initiative"
                            >
                              <b-input
                                placeholder="Enter new initiative..."
                                type="text"
                                expanded
                                v-model="editOtherInitiative.initiative"
                              >
                              </b-input>
                            </b-field>

                            <section class="goal__btns">
                              <div></div>
                              <div class="block">
                                <b-button
                                  class="is-default is-light"
                                  @click="
                                    cancelEditSelfAppraisal('other_initiatives')
                                  "
                                  :disabled="isSubmitting"
                                  >Cancel</b-button
                                >
                                <button
                                  type="submit"
                                  class="button is-success is-light"
                                  :disabled="isSubmitting"
                                >
                                  {{ isSubmitting ? "Saving..." : "Save" }}
                                </button>
                              </div>
                            </section>
                          </form>
                          <form
                            @submit.prevent="
                              addSelfAppraisal('otherInitiative')
                            "
                            v-else
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
                                  v-model="
                                    otherInitiatives[index]['initiative']
                                  "
                                >
                                </b-input>
                                <p class="control">
                                  <b-button
                                    type="is-danger is-light"
                                    icon-left="times"
                                    :disabled="otherInitiatives.length === 1"
                                    @click="
                                      removeGoal(index, 'otherInitiative')
                                    "
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
                        </template>
                      </section>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </b-step-item>
          <b-step-item step="5" label="Overall feedback">
            <section class="">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th class="has-text-centered text-main">feedback</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="">
                      <section class="kpi_goals__wrapper">
                        <template
                          v-if="openAppraisal(this.appraisal.np_timestamp)"
                        >
                          <form
                            @submit.prevent="
                              isEditingSelfAppraisalFeedback
                                ? updateSelfAppraisal('feedback')
                                : addSelfAppraisal('feedback')
                            "
                          >
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
                                {{
                                  isSubmitting
                                    ? "Submitting..."
                                    : isEditingSelfAppraisalFeedback
                                    ? "Save"
                                    : "Add"
                                }}
                              </button>
                            </div>
                          </form>
                        </template>
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
  created() {
    this.$nextTick(() => {
      this.getUserAppraisal(this.appraisal.id);
    });
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

      userAppraisal: null,
      isEditingUserGoal: false,
      isEditingUnitGoal: false,
      isEditingDptGoal: false,
      isEditingSelfAppraisal: false,
      isEditingSelfAppraisalFeedback: false,

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

      editUserGoal: {
        goal: "",
        id: "",
      },
      editUnitGoal: {
        goal: "",
        id: "",
      },
      editDptGoal: {
        goal: "",
        id: "",
      },
      editUserGoalError: [],
      editUnitGoalError: [],
      editDptGoalError: [],

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

      editAchievement: { achievement: "", id: "" },
      editDifficulty: { difficulty: "", id: "" },
      editInitiative: { initiative: "", id: "" },
      editOtherInitiative: { initiative: "", id: "" },
      editFeedback: "",

      myGoalErrors: {},
      unitGoalErrors: {},
      dptGoalErrors: {},
      achievementErrors: {},
      difficultyErrors: {},
      initiativeErrors: {},
      otherInitiativeErrors: {},
      feedbackErrors: [],
      editAchievementErrors: [],
      editDifficultyErrors: [],
      editInitiativeErrors: [],
      editOtherInitiativeErrors: [],
    };
  },
  methods: {
    ...mapActions(["dispatchKPI"]),
    openAppraisal(period) {
      const currentDate = new Date();
      const open = new Date(period.open);
      const close = new Date(period.close);
      if (open >= currentDate || close >= currentDate) {
        return true;
      }
      return false;
    },
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
    updateSelfAppraisal(type) {
      switch (type) {
        case "achievements":
          this.saveEditedSelfAppraisal({
            ...this.editAchievement,
            type,
          });
          this.achievementErrors = {};
          break;
        case "difficulties":
          this.saveEditedSelfAppraisal({
            ...this.editDifficulty,
            type,
          });
          this.difficultyErrors = {};
          break;
        case "initiatives":
          this.saveEditedSelfAppraisal({
            ...this.editInitiative,
            type,
          });
          this.initiativeErrors = {};
          break;
        case "other_initiatives":
          this.saveEditedSelfAppraisal({
            ...this.editOtherInitiative,
            type,
          });
          this.otherInitiativeErrors = {};
          break;
        case "feedback":
          this.saveEditedSelfAppraisal({
            feedback: this.feedback,
            type,
          });
          this.feedbackErrors = [];
          break;
        default:
          return;
      }
    },
    saveKeyGoal(data) {
      this.$axios
        .post(`/dashboard/add-key-goal`, data)
        .then((res) => {
          if (data.type === "my-goal") {
            this.isSubmittingMyGoal = false;
            this.myGoals = [
              {
                id: `${Math.random(16)}`.split(".")[1],
                goal: "",
              },
            ];
            this.userAppraisal = {
              ...this.userAppraisal,
              userAppraisal: this.formatUserAppraisal(res.data.appraisal)
                .userAppraisal,
            };
          }
          if (data.type === "unit-goal") {
            this.isSubmittingUnitGoal = false;
            this.unitGoals = [
              {
                id: `${Math.random(16)}`.split(".")[1],
                goal: "",
              },
            ];
            this.userAppraisal = {
              ...this.userAppraisal,
              ...this.formatUserAppraisal(res.data.appraisal),
            };
          }
          if (data.type === "department-goal") {
            this.isSubmittingDptGoal = false;
            this.dptGoals = [
              {
                id: `${Math.random(16)}`.split(".")[1],
                goal: "",
              },
            ];
            this.userAppraisal = {
              ...this.userAppraisal,
              ...this.formatUserAppraisal(res.data.appraisal),
            };
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
          this.cancelGoalForm(data.type);
          this.userAppraisal = {
            ...this.userAppraisal,
            userAppraisal: this.formatUserAppraisal(res.data.appraisal)
              .userAppraisal,
          };
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

    saveEditedSelfAppraisal(data) {
      this.isSubmitting = true;
      this.$axios
        .put(
          `/dashboard/update-user-appraisal/${this.userAppraisal.userAppraisal.appraisal_id}`,
          data
        )
        .then((res) => {
          this.isSubmitting = false;
          this.cancelEditSelfAppraisal(data.type);
          this.userAppraisal = this.formatUserAppraisal(res.data.appraisal);
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (data.type === "achievements") {
            this.achievementErrors = err.response.data.errors;
          }
          if (data.type === "difficulties") {
            this.difficultyErrors = err.response.data.errors;
          }
          if (data.type === "initiatives") {
            this.initiativeErrors = err.response.data.errors;
          }
          if (data.type === "other_initiatives") {
            this.otherInitiativeErrors = err.response.data.errors;
          }
          if (data.type === "feedback") {
            this.feedbackErrors = err.response.data.errors.feedback;
          }
        });
    },
    setEditSelfAppraisal(data, type) {
      this.isEditingSelfAppraisal = true;
      if (type === "achievement") {
        this.editAchievement = { ...data };
      }
      if (type === "difficulty") {
        this.editDifficulty = { ...data };
      }
      if (type === "initiative") {
        this.editInitiative = { ...data };
      }
      if (type === "otherInitiative") {
        this.editOtherInitiative = { ...data };
      }
    },

    cancelEditSelfAppraisal(type) {
      this.isEditingSelfAppraisal = false;
      if (type === "achievements") {
        this.$nextTick(() => {
          this.editAchievement = { achievement: "", id: "" };
        });
      }
      if (type === "difficulties") {
        this.$nextTick(() => {
          this.editDifficulty = { difficulty: "", id: "" };
        });
      }
      if (type === "initiatives") {
        this.$nextTick(() => {
          this.editInitiative = { initiative: "", id: "" };
        });
      }
      if (type === "other_initiatives") {
        this.$nextTick(() => {
          this.editOtherInitiative = { initiative: "", id: "" };
        });
      }
      if (type === "feedback") {
        this.editFeedback = "";
      }
    },

    deleteSelfAppraisal(id, type) {
      this.$axios
        .delete(
          `/dashboard/delete-user-appraisal/${this.userAppraisal.userAppraisal.appraisal_id}/${id}/${type}`
        )
        .then(({ data }) => {
          this.userAppraisal = this.formatUserAppraisal(data.appraisal);
        })
        .catch((err) => {
          console.trace(err);
        });
    },

    setEditGoalData(goal, type) {
      if (type === "user") {
        this.editUserGoal = { ...goal };
        this.isEditingUserGoal = true;
      }
      if (type === "unit") {
        this.editUnitGoal = { ...goal };
        this.isEditingUnitGoal = true;
      }
      if (type === "dpt") {
        this.editDptGoal = { ...goal };
        this.isEditingDptGoal = true;
      }
    },
    updateGoal(type) {
      if (type === "user") {
        this.isSubmittingMyGoal = true;
        this.$axios
          .put(
            `/dashboard/update-user-goal/${this.userAppraisal.userAppraisal.appraisal_id}`,
            this.editUserGoal
          )
          .then(({ data }) => {
            this.isSubmittingMyGoal = false;
            this.cancelEditGoal(type);
            this.userAppraisal = this.formatUserAppraisal(data.appraisal);
          })
          .catch((err) => {
            this.isSubmittingMyGoal = false;
          });
      }
      if (type === "dpt") {
        this.isSubmittingDptGoal = true;
        this.$axios
          .put(
            `/dashboard/update-department-goal/${this.userAppraisal.userDepartmentGoal.appraisal_id}`,
            this.editDptGoal
          )
          .then(({ data }) => {
            this.isSubmittingDptGoal = false;
            this.cancelEditGoal(type);
            this.userAppraisal = this.formatUserAppraisal(data.appraisal);
          })
          .catch((err) => {
            this.isSubmittingDptGoal = false;
          });
      }
      if (type === "unit") {
        this.isSubmittingUnitGoal = true;
        this.$axios
          .put(
            `/dashboard/update-unit-goal/${this.userAppraisal.userUnitGoal.appraisal_id}`,
            this.editUnitGoal
          )
          .then(({ data }) => {
            this.isSubmittingUnitGoal = false;
            this.cancelEditGoal(type);
            this.userAppraisal = this.formatUserAppraisal(data.appraisal);
          })
          .catch((err) => {
            this.isSubmittingUnitGoal = false;
          });
      }
    },
    deleteGoal(id, type) {
      if (type === "user") {
        this.$axios
          .delete(
            `/dashboard/delete-user-goal/${this.userAppraisal.userAppraisal.appraisal_id}/${id}`
          )
          .then(({ data }) => {
            this.userAppraisal = this.formatUserAppraisal(data.appraisal);
          })
          .catch((err) => {
            console.trace(err);
          });
      }
      if (type === "dpt") {
        this.$axios
          .delete(
            `/dashboard/delete-department-goal/${this.userAppraisal.userDepartmentGoal.appraisal_id}/${id}`
          )
          .then(({ data }) => {
            this.userAppraisal = this.formatUserAppraisal(data.appraisal);
          })
          .catch((err) => {
            console.trace(err);
          });
      }
      if (type === "unit") {
        this.$axios
          .delete(
            `/dashboard/delete-unit-goal/${this.userAppraisal.userUnitGoal.appraisal_id}/${id}`
          )
          .then(({ data }) => {
            this.userAppraisal = this.formatUserAppraisal(data.appraisal);
          })
          .catch((err) => {
            console.trace(err);
          });
      }
    },
    cancelEditGoal(type) {
      if (type === "user") {
        this.isEditingUserGoal = false;
        this.$nextTick(() => {
          this.editUserGoal = { goal: "", id: "" };
        });
      }
      if (type === "unit") {
        this.isEditingUnitGoal = false;
        this.$nextTick(() => {
          this.editUnitGoal = { goal: "", id: "" };
        });
      }
      if (type === "dpt") {
        this.isEditingDptGoal = false;
        this.$nextTick(() => {
          this.editDptGoal = { goal: "", id: "" };
        });
      }
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
              id: `${Math.random(16)}`.split(".")[1],
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
              id: `${Math.random(16)}`.split(".")[1],
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
              id: `${Math.random(16)}`.split(".")[1],
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
              id: `${Math.random(16)}`.split(".")[1],
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
              id: `${Math.random(16)}`.split(".")[1],
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
              id: `${Math.random(16)}`.split(".")[1],
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
              id: `${Math.random(16)}`.split(".")[1],
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
          }
        }
      }
      return result;
    },
    async getUserAppraisal(id) {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/get-user-appraisal/${id}`
        );
        this.userAppraisal = this.formatUserAppraisal(data);
        if (
          this.userAppraisal &&
          this.userAppraisal.userAppraisal &&
          this.userAppraisal.userAppraisal.feedback
        ) {
          this.feedback = this.userAppraisal.userAppraisal.feedback;
          if (this.feedback) {
            this.isEditingSelfAppraisalFeedback = true;
          }
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
