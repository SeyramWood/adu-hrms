<template>
  <div>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <!-- <p class="card-header-title">Work Experience</p> -->
        </header>
        <div class="profile-detail-bar">
          <p class="p-text">{{ $t("app.qualification_cta") }}</p>
        </div>
        <div class="card-content">
          <div class="content">
            <section
              class="b__collapse__section"
              v-if="userOrPermission('create', getProfile.user_id)"
            >
              <b-collapse
                class="card"
                v-model="isEditWorkExperience"
                animation="slide"
                aria-id="addreportingmethod"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="addreportingmethod"
                >
                  <p class="card-header-title has-text-info">
                    {{ $t("app.add_wrk_experience") }}
                  </p>
                  <a class="card-header-icon">
                    <b-icon
                      pack="fas"
                      type="is-info"
                      :icon="props.open ? 'angle-down' : 'angle-up'"
                    ></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <form @submit.prevent="addWorkExperience()">
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$t('app.company')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.workExperience.company
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.workExperience.company
                            "
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.workExperience.company"
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field
                            :label="$t('app.jobTitle')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.workExperience.jobTitle
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.workExperience.jobTitle
                            "
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.workExperience.jobTitle"
                            ></b-input>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="`${$t('app.from')} (${$t('app.year')})`"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.workExperience.from
                                  .length > 0,
                            }"
                            :message="qualificationsErrors.workExperience.from"
                          >
                            <b-select
                              v-model="qualifications.workExperience.from"
                              :placeholder="$t('app.selectYear')"
                              size=""
                              expanded
                            >
                              <option
                                :value="year"
                                v-for="(year, index) in getYears"
                                :key="index"
                              >
                                {{ year }}
                              </option>
                            </b-select>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field
                            :label="`${$t('app.to')} (${$t('app.year')})`"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.workExperience.to.length >
                                0,
                            }"
                            :message="qualificationsErrors.workExperience.to"
                          >
                            <b-select
                              v-model="qualifications.workExperience.to"
                              :placeholder="$t('app.selectYear')"
                              size=""
                              expanded
                            >
                              <option
                                :value="year"
                                v-for="(year, index) in getYears"
                                :key="index"
                              >
                                {{ year }}
                              </option>
                            </b-select>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$tc('app.comment', 1)"
                            :type="{
                              'is-danger':
                                qualificationsErrors.workExperience.comment
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.workExperience.comment
                            "
                          >
                            <b-input
                              size=""
                              type="textarea"
                              :placeholder="$t('app.placeholder_comment')"
                              v-model="qualifications.workExperience.comment"
                            ></b-input>
                          </b-field>
                        </div>
                      </div>
                      <hr />
                      <b-field class="buttons">
                        <button
                          class="button is-success is-light"
                          type="submit"
                          :disabled="isSubmittingWorkExperience"
                        >
                          {{
                            isSubmittingWorkExperience
                              ? `${$t("app.edit_wrk_experience")}...`
                              : $t("app.add")
                          }}
                        </button>
                        <b-button
                          class="is-danger is-light"
                          @click="cancelWorkExperienceForm()"
                          >{{ $t("app.cancel") }}</b-button
                        >
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>
            <b-table
              :data="getWorkExperience || []"
              :paginated="true"
              :per-page="5"
              :current-page="1"
              :pagination-simple="true"
              pagination-position="bottom"
            >
              <b-table-column
                field="company"
                :label="$t('app.company')"
                sortable
                v-slot="props"
                >{{ props.row.company }}</b-table-column
              >
              <b-table-column
                field="jtitle"
                :label="$t('app.jobTitle')"
                sortable
                v-slot="props"
                >{{ props.row.jobTitle }}</b-table-column
              >
              <b-table-column
                field="from"
                :label="$t('app.from')"
                sortable
                v-slot="props"
                >{{ props.row.from }}</b-table-column
              >
              <b-table-column
                field="to"
                :label="$t('app.to')"
                sortable
                v-slot="props"
                >{{ props.row.to }}</b-table-column
              >
              <b-table-column
                field="comment"
                :label="$tc('app.comment', 1)"
                sortable
                v-slot="props"
                >{{ props.row.comment }}</b-table-column
              >
              <b-table-column
                field="actions"
                :label="$tc('app.action', 2)"
                v-slot="props"
              >
                <div class="b-tooltips">
                  <b-tooltip
                    :label="$t('app.edit_wrk_experience')"
                    type="is-dark"
                  >
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="pen"
                      :id="`wrk-experince-id${props.row.id}`"
                      @click="openWorkExperienceDropper(props.row)"
                      :disabled="
                        !userOrPermission('update', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip :label="$t('app.delete')" type="is-dark">
                    <b-button
                      class="is-danger is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="trash"
                      @click="deleteHandler('workExperience', props.row.id)"
                      :disabled="
                        !userOrPermission('delete', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
            </b-table>
          </div>
        </div>
      </div>
    </section>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ $t("app.education") }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <section
              class="b__collapse__section"
              v-if="userOrPermission('create', getProfile.user_id)"
            >
              <b-collapse
                class="card"
                v-model="isEditEducation"
                animation="slide"
                aria-id="addreportingmethod"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="addreportingmethod"
                >
                  <p class="card-header-title has-text-info">
                    {{ $t("app.add_education") }}
                  </p>
                  <a class="card-header-icon">
                    <b-icon
                      pack="fas"
                      type="is-info"
                      :icon="props.open ? 'angle-down' : 'angle-up'"
                    ></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <form @submit.prevent="addEducation()">
                      <div class="columns">
                        <div class="column is-4">
                          <b-field
                            :label="$t('app.institution')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.education.institution
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.education.institution
                            "
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.education.institution"
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-4">
                          <b-field
                            :label="$t('app.major_spec')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.education.specialization
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.education.specialization
                            "
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.education.specialization"
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-4">
                          <b-field
                            :label="$t('app.gpa')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.education.gpa.length > 0,
                            }"
                            :message="qualificationsErrors.education.gpa"
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.education.gpa"
                            ></b-input>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$t('app.started')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.education.started.length >
                                0,
                            }"
                            :message="qualificationsErrors.education.started"
                          >
                            <b-select
                              v-model="qualifications.education.started"
                              :placeholder="$t('app.selectYear')"
                              size=""
                              expanded
                            >
                              <option
                                :value="year"
                                v-for="(year, index) in getYears"
                                :key="index"
                              >
                                {{ year }}
                              </option>
                            </b-select>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field
                            :label="$t('app.completed')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.education.completed
                                  .length > 0,
                            }"
                            :message="qualificationsErrors.education.completed"
                          >
                            <b-select
                              v-model="qualifications.education.completed"
                              :placeholder="$t('app.selectYear')"
                              size=""
                              expanded
                            >
                              <option
                                :value="year"
                                v-for="(year, index) in getYears"
                                :key="index"
                              >
                                {{ year }}
                              </option>
                            </b-select>
                          </b-field>
                        </div>
                      </div>
                      <hr />
                      <b-field class="buttons">
                        <button
                          class="button is-success is-light"
                          type="submit"
                          :disabled="isSubmittingEducation"
                        >
                          {{
                            isSubmittingEducation
                              ? `${$t("app.submitting")}`
                              : $t("app.add")
                          }}
                        </button>
                        <b-button
                          class="is-danger is-light"
                          @click="cancelEducationForm()"
                          >{{ $t("app.cancel") }}</b-button
                        >
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>
            <b-table
              :data="getEducation || []"
              :paginated="true"
              :per-page="5"
              :current-page="1"
              :pagination-simple="true"
              pagination-position="bottom"
            >
              <b-table-column
                field="institution"
                :label="$t('app.institution')"
                sortable
                v-slot="props"
                >{{ props.row.institution }}</b-table-column
              >
              <b-table-column
                field="specialization"
                :label="$t('app.specialization')"
                sortable
                v-slot="props"
                >{{ props.row.specialization }}</b-table-column
              >
              <b-table-column
                field="gpa"
                :label="$t('app.gpa')"
                sortable
                v-slot="props"
                >{{ props.row.gpa }}</b-table-column
              >
              <b-table-column
                field="started"
                :label="$t('app.started')"
                sortable
                v-slot="props"
                >{{ props.row.started }}</b-table-column
              >
              <b-table-column
                field="completed"
                :label="$t('app.completed')"
                sortable
                v-slot="props"
                >{{ props.row.completed }}</b-table-column
              >
              <b-table-column
                field="actions"
                :label="$tc('app.action', 2)"
                v-slot="props"
              >
                <div class="b-tooltips">
                  <b-tooltip :label="$t('app.edit_education')" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="pen"
                      :id="`education-id${getAttachmentDropperId}`"
                      @click="openEducationDropper(props.row)"
                      :disabled="
                        !userOrPermission('update', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip :label="$t('app.delete')" type="is-dark">
                    <b-button
                      class="is-danger is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="trash"
                      @click="deleteHandler('education', props.row.id)"
                      :disabled="
                        !userOrPermission('delete', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
            </b-table>
          </div>
        </div>
      </div>
    </section>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ $tc("app.skill", 2) }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <section
              class="b__collapse__section"
              v-if="userOrPermission('create', getProfile.user_id)"
            >
              <b-collapse
                class="card"
                v-model="isEditSkills"
                animation="slide"
                aria-id="addreportingmethod"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="addreportingmethod"
                >
                  <p class="card-header-title has-text-info">
                    {{ $t("app.add_skills") }}
                  </p>
                  <a class="card-header-icon">
                    <b-icon
                      pack="fas"
                      type="is-info"
                      :icon="props.open ? 'angle-down' : 'angle-up'"
                    ></b-icon>
                  </a>
                </div>

                <div class="card-content">
                  <div class="content">
                    <form @submit.prevent="addSkills()">
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$tc('app.skill', 1)"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.skills.skill.length > 0,
                            }"
                            :message="qualificationsErrors.skills.skill"
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.skills.skill"
                            ></b-input>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$t('app.year_of_expe')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.skills.yearOfExperience
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.skills.yearOfExperience
                            "
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.skills.yearOfExperience"
                            ></b-input>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$tc('app.comment', 1)"
                            :type="{
                              'is-danger':
                                qualificationsErrors.skills.comment.length > 0,
                            }"
                            :message="qualificationsErrors.skills.comment"
                          >
                            <b-input
                              type="textarea"
                              :placeholder="$t('app.comment_placeholder')"
                              size=""
                              v-model="qualifications.skills.comment"
                            ></b-input>
                          </b-field>
                        </div>
                      </div>

                      <hr />
                      <b-field class="buttons">
                        <button
                          class="button is-success is-light"
                          type="submit"
                          :disabled="isSubmittingSkills"
                        >
                          {{
                            isSubmittingSkills
                              ? `${$t("app.submitting")}`
                              : $t("app.add")
                          }}
                        </button>
                        <b-button
                          class="is-danger is-light"
                          @click="cancelSkillsForm()"
                          >{{ $t("app.cancel") }}</b-button
                        >
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>
            <b-table
              :data="getSkills || []"
              :paginated="true"
              :per-page="5"
              :current-page="1"
              :pagination-simple="true"
              pagination-position="bottom"
            >
              <b-table-column
                field="skill"
                :label="$tc('app.skill', 1)"
                sortable
                v-slot="props"
                >{{ props.row.skill }}</b-table-column
              >
              <b-table-column
                field="yoe"
                :label="$t('app.year_of_expe')"
                sortable
                v-slot="props"
                >{{ props.row.yearOfExperience }}</b-table-column
              >
              <b-table-column
                field="comment"
                :label="$tc('app.comment', 1)"
                sortable
                v-slot="props"
                >{{ props.row.comment }}</b-table-column
              >
              <b-table-column
                field="actions"
                :label="$tc('app.action', 2)"
                v-slot="props"
              >
                <div class="b-tooltips">
                  <b-tooltip :label="$t('app.edit_skill')" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="pen"
                      :id="`skill-id${getAttachmentDropperId}`"
                      @click="openSkillDropper(props.row)"
                      :disabled="
                        !userOrPermission('update', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip :label="$t('app.delete')" type="is-dark">
                    <b-button
                      class="is-danger is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="trash"
                      @click="deleteHandler('skills', props.row.id)"
                      :disabled="
                        !userOrPermission('delete', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
            </b-table>
          </div>
        </div>
      </div>
    </section>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ $tc("app.language", 2) }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <section
              class="b__collapse__section"
              v-if="userOrPermission('create', getProfile.user_id)"
            >
              <b-collapse
                class="card"
                v-model="isEditLanguage"
                animation="slide"
                aria-id="addreportingmethod"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="addreportingmethod"
                >
                  <p class="card-header-title has-text-info">
                    {{ $t("app.add_language") }}
                  </p>
                  <a class="card-header-icon">
                    <b-icon
                      pack="fas"
                      type="is-info"
                      :icon="props.open ? 'angle-down' : 'angle-up'"
                    ></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <form @submit.prevent="addLanguage()">
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$tc('app.language', 1)"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.languages.language.length >
                                0,
                            }"
                            :message="qualificationsErrors.languages.language"
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.languages.language"
                            >
                            </b-input>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$t('app.fluency')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.languages.fluency.length >
                                0,
                            }"
                            :message="qualificationsErrors.languages.fluency"
                          >
                            <b-select
                              size=""
                              expanded
                              v-model="qualifications.languages.fluency"
                            >
                              <option :value="$t('app.poor')">
                                {{ $t("app.poor") }}
                              </option>
                              <option :value="$t('app.good')">
                                {{ $t("app.good") }}
                              </option>
                              <option :value="$t('app.very_good')">
                                {{ $t("app.very_good") }}
                              </option>
                              <option :value="$t('app.mother_tongue')">
                                {{ $t("app.mother_tongue") }}
                              </option>
                            </b-select>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$tc('app.comment', 1)"
                            :type="{
                              'is-danger':
                                qualificationsErrors.languages.comment.length >
                                0,
                            }"
                            :message="qualificationsErrors.languages.comment"
                          >
                            <b-input
                              type="textarea"
                              size=""
                              :placeholder="$t('app.comment_placeholder')"
                              v-model="qualifications.languages.comment"
                            ></b-input>
                          </b-field>
                        </div>
                      </div>
                      <hr />
                      <b-field class="buttons">
                        <button
                          class="button is-success is-light"
                          type="submit"
                          :disabled="isSubmittingLanguage"
                        >
                          {{
                            isSubmittingLanguage
                              ? `${$t("app.submitting")}`
                              : $t("app.add")
                          }}
                        </button>
                        <b-button
                          class="is-danger is-light"
                          @click="cancelLanguageForm()"
                          >{{ $t("app.cancel") }}</b-button
                        >
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>
            <b-table
              :data="getLanguages || []"
              :paginated="true"
              :per-page="5"
              :current-page="1"
              :pagination-simple="true"
              pagination-position="bottom"
            >
              <b-table-column
                field="language"
                :label="$tc('app.language', 1)"
                sortable
                v-slot="props"
                >{{ props.row.language }}</b-table-column
              >
              <b-table-column
                field="fluency"
                :label="$t('app.fluency')"
                sortable
                v-slot="props"
                >{{ props.row.fluency }}</b-table-column
              >
              <b-table-column
                field="comment"
                :label="$tc('app.comment', 1)"
                sortable
                v-slot="props"
                >{{ props.row.comment }}</b-table-column
              >
              <b-table-column
                field="actions"
                :label="$tc('app.action', 2)"
                v-slot="props"
              >
                <div class="b-tooltips">
                  <b-tooltip :label="$t('app.edit_language')" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="pen"
                      :id="`language-id${getAttachmentDropperId}`"
                      @click="openLanguageDropper(props.row)"
                      :disabled="
                        !userOrPermission('update', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip :label="$t('app.delete')" type="is-dark">
                    <b-button
                      class="is-danger is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="trash"
                      @click="deleteHandler('languages', props.row.id)"
                      :disabled="
                        !userOrPermission('delete', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
            </b-table>
          </div>
        </div>
      </div>
    </section>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ $tc("app.attachment", 2) }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <section
              class="b__collapse__section"
              v-if="userOrPermission('create', getProfile.user_id)"
            >
              <b-collapse
                class="card"
                v-model="isEditQualificationAttachment"
                animation="slide"
                aria-id="addreportingmethod"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="addreportingmethod"
                >
                  <p class="card-header-title has-text-info">
                    {{ $t("app.addAttament") }}
                  </p>
                  <a class="card-header-icon">
                    <b-icon
                      pack="fas"
                      type="is-info"
                      :icon="props.open ? 'angle-down' : 'angle-up'"
                    ></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <form @submit.prevent="addQualificationAttachment()">
                      <div class="columns">
                        <div class="column is-3">
                          <b-field>
                            <b-upload
                              v-model="qualifications.attachment.file"
                              drag-drop
                              size="is-small"
                            >
                              <section class="section">
                                <div class="content has-text-centered">
                                  <p>
                                    <b-icon
                                      icon="upload"
                                      size="is-small"
                                    ></b-icon>
                                  </p>
                                  <p>{{ $t("app.placeholder_attachment1") }}</p>
                                </div>
                              </section>
                            </b-upload>
                          </b-field>
                          <div
                            class="tags"
                            v-if="qualifications.attachment.file"
                          >
                            <span class="tag is-large is-info is-light">
                              {{ qualifications.attachment.file.name }}
                              <button
                                class="delete is-small"
                                type="button"
                                @click="qualifications.attachment.file = null"
                              ></button>
                            </span>
                          </div>
                          <b-field
                            :type="{
                              'is-danger':
                                qualificationsErrors.attachment.file.length > 0,
                            }"
                            :message="qualificationsErrors.attachment.file"
                          >
                          </b-field>
                        </div>
                        <div class="column is-4">
                          <b-field
                            :type="{
                              'is-danger':
                                qualificationsErrors.attachment.comment.length >
                                0,
                            }"
                            :message="qualificationsErrors.attachment.comment"
                          >
                            <b-input
                              type="textarea"
                              :placeholder="$t('app.placeholder_comment')"
                              v-model="qualifications.attachment.comment"
                            ></b-input>
                          </b-field>
                        </div>
                      </div>
                      <hr />
                      <b-field class="buttons">
                        <button
                          class="button is-success is-light"
                          type="submit"
                          :disabled="isSubmittingQualificationAttachment"
                        >
                          {{
                            isSubmittingQualificationAttachment
                              ? `${$t("app.submitting")}`
                              : $t("app.add")
                          }}
                        </button>
                        <b-button
                          class="is-danger is-light"
                          @click="cancelQualificationAttachmentForm()"
                          >{{ $t("app.cancel") }}</b-button
                        >
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>
            <b-table
              :data="getAttachments || []"
              :paginated="true"
              :per-page="10"
              :current-page="1"
              :pagination-simple="true"
              pagination-position="bottom"
            >
              <b-table-column
                field="file"
                :label="$tc('app.file', 1)"
                sortable
                v-slot="props"
              >
                <a
                  @click="
                    viewAttachment(
                      `/attachments/qualification/${props.row.file}`
                    )
                  "
                  >{{ props.row.file }}</a
                >
              </b-table-column>
              <b-table-column
                field="comment"
                :label="$tc('app.comment', 1)"
                sortable
                v-slot="props"
                >{{ props.row.comment }}</b-table-column
              >
              <b-table-column
                field="actions"
                :label="$tc('app.action', 2)"
                v-slot="props"
              >
                <div class="b-tooltips">
                  <b-tooltip
                    :label="$t('app.replaceAttachment')"
                    type="is-dark"
                  >
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="upload"
                      :id="`comment-id${getAttachmentDropperId}`"
                      @click="openAttachmentDropper(props.row, 'attachment')"
                      :disabled="
                        !userOrPermission('update', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip :label="$t('app.editComment')" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="pen"
                      :id="`comment-id${getAttachmentDropperId}`"
                      @click="openAttachmentDropper(props.row, 'comment')"
                      :disabled="
                        !userOrPermission('update', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip :label="$t('app.delete')" type="is-dark">
                    <b-button
                      class="is-danger is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="trash"
                      @click="deleteHandler('attachments', props.row.id)"
                      :disabled="
                        !userOrPermission('delete', getProfile.user_id)
                      "
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
            </b-table>
          </div>
        </div>
      </div>
    </section>

    <dropper
      :join="`#wrk-experince-id${getAttachmentDropperId}`"
      ref="workExperienceDropper"
      @esc-keydown="closeWorkExperienceDropper"
      @other-area-clicked="closeWorkExperienceDropper"
      class="dropper"
      :z-index="1000"
    >
      <form @submit.prevent="updateWorkExperience()">
        <h3 class="label text-main">Edit Work Experience</h3>
        <hr />
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Company"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.workExperience.company.length > 0,
              }"
              :message="qualificationsErrors.workExperience.company"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.workExperience.company"
              ></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Job Title"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.workExperience.jobTitle.length > 0,
              }"
              :message="qualificationsErrors.workExperience.jobTitle"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.workExperience.jobTitle"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="From (Year)"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.workExperience.from.length > 0,
              }"
              :message="qualificationsErrors.workExperience.from"
            >
              <b-select
                v-model="qualifications.workExperience.from"
                placeholder="Select year..."
                size=""
                expanded
              >
                <option
                  :value="year"
                  v-for="(year, index) in getYears"
                  :key="index"
                >
                  {{ year }}
                </option>
              </b-select>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="To (Year)"
              expanded
              :type="{
                'is-danger': qualificationsErrors.workExperience.to.length > 0,
              }"
              :message="qualificationsErrors.workExperience.to"
            >
              <b-select
                v-model="qualifications.workExperience.to"
                placeholder="Select year..."
                size=""
                expanded
              >
                <option
                  :value="year"
                  v-for="(year, index) in getYears"
                  :key="index"
                >
                  {{ year }}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12">
            <b-field
              label="Comment"
              :type="{
                'is-danger':
                  qualificationsErrors.workExperience.comment.length > 0,
              }"
              :message="qualificationsErrors.workExperience.comment"
            >
              <b-input
                size=""
                type="textarea"
                placeholder="Type your comment..."
                v-model="qualifications.workExperience.comment"
              ></b-input>
            </b-field>
          </div>
        </div>
        <hr />
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingWorkExperience"
          >
            {{ isSubmittingWorkExperience ? "Saving..." : "Save" }}
          </button>
          <b-button
            class="is-danger is-light"
            @click="closeWorkExperienceDropper()"
            >Cancel</b-button
          >
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#education-id${getAttachmentDropperId}`"
      ref="educationDropper"
      @esc-keydown="closeEducationDropper"
      @other-area-clicked="closeEducationDropper"
      class="dropper"
      :z-index="1000"
    >
      <form @submit.prevent="updateEducation()">
        <h3 class="label text-main">Edit Educational Details</h3>
        <hr />
        <div class="columns">
          <div class="column is-12">
            <b-field
              label="Institution"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.education.institution.length > 0,
              }"
              :message="qualificationsErrors.education.institution"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.education.institution"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12">
            <b-field
              label="Major/Specialization"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.education.specialization.length > 0,
              }"
              :message="qualificationsErrors.education.specialization"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.education.specialization"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <b-field
              label="Started"
              expanded
              :type="{
                'is-danger': qualificationsErrors.education.started.length > 0,
              }"
              :message="qualificationsErrors.education.started"
            >
              <b-select
                v-model="qualifications.education.started"
                placeholder="Select year..."
                size=""
                expanded
              >
                <option
                  :value="year"
                  v-for="(year, index) in getYears"
                  :key="index"
                >
                  {{ year }}
                </option>
              </b-select>
            </b-field>
          </div>
          <div class="column is-4">
            <b-field
              label="Completed"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.education.completed.length > 0,
              }"
              :message="qualificationsErrors.education.completed"
            >
              <b-select
                v-model="qualifications.education.completed"
                placeholder="Select year..."
                size=""
                expanded
              >
                <option
                  :value="year"
                  v-for="(year, index) in getYears"
                  :key="index"
                >
                  {{ year }}
                </option>
              </b-select>
            </b-field>
          </div>
          <div class="column is-4">
            <b-field
              label="GPA/Score"
              expanded
              :type="{
                'is-danger': qualificationsErrors.education.gpa.length > 0,
              }"
              :message="qualificationsErrors.education.gpa"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.education.gpa"
              ></b-input>
            </b-field>
          </div>
        </div>
        <hr />
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingEducation"
          >
            {{ isSubmittingEducation ? "Saving..." : "Save" }}
          </button>
          <b-button class="is-danger is-light" @click="closeEducationDropper()"
            >Cancel</b-button
          >
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#skill-id${getAttachmentDropperId}`"
      ref="skillDropper"
      @esc-keydown="closeSkillDropper"
      @other-area-clicked="closeSkillDropper"
      class="dropper"
      :z-index="1000"
    >
      <form @submit.prevent="updateSkills()">
        <h3 class="label text-main">Edit Skill</h3>
        <hr />
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Skill"
              expanded
              :type="{
                'is-danger': qualificationsErrors.skills.skill.length > 0,
              }"
              :message="qualificationsErrors.skills.skill"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.skills.skill"
              ></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Years of experience"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.skills.yearOfExperience.length > 0,
              }"
              :message="qualificationsErrors.skills.yearOfExperience"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.skills.yearOfExperience"
              ></b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column is-12">
            <b-field
              label="Comment"
              :type="{
                'is-danger': qualificationsErrors.skills.comment.length > 0,
              }"
              :message="qualificationsErrors.skills.comment"
            >
              <b-input
                type="textarea"
                placeholder="Type your comment..."
                size=""
                v-model="qualifications.skills.comment"
              ></b-input>
            </b-field>
          </div>
        </div>
        <hr />
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingSkills"
          >
            {{ isSubmittingSkills ? "Saving..." : "Save" }}
          </button>
          <b-button class="is-danger is-light" @click="closeSkillDropper()"
            >Cancel</b-button
          >
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#language-id${getAttachmentDropperId}`"
      ref="languageDropper"
      @esc-keydown="closeLanguageDropper"
      @other-area-clicked="closeLanguageDropper"
      class="dropper"
      :z-index="1000"
    >
      <form @submit.prevent="updateLanguage()">
        <h3 class="label text-main">Edit Language</h3>
        <hr />
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Language"
              expanded
              :type="{
                'is-danger': qualificationsErrors.languages.language.length > 0,
              }"
              :message="qualificationsErrors.languages.language"
            >
              <b-select
                size=""
                expanded
                v-model="qualifications.languages.language"
              >
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Ewe">Ewe</option>
                <option value="Ga">Ga</option>
                <option value="Twi">Twi</option>
              </b-select>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Fluency"
              expanded
              :type="{
                'is-danger': qualificationsErrors.languages.fluency.length > 0,
              }"
              :message="qualificationsErrors.languages.fluency"
            >
              <b-select
                size=""
                expanded
                v-model="qualifications.languages.fluency"
              >
                <option value="Poor">Poor</option>
                <option value="Good">Good</option>
                <option value="Very Good">Very Good</option>
                <option value="Mother Tongue">Mother Tongue</option>
              </b-select>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column is-12">
            <b-field
              label="Comment"
              :type="{
                'is-danger': qualificationsErrors.languages.comment.length > 0,
              }"
              :message="qualificationsErrors.languages.comment"
            >
              <b-input
                type="textarea"
                size=""
                placeholder="Type your comment..."
                v-model="qualifications.languages.comment"
              ></b-input>
            </b-field>
          </div>
        </div>
        <hr />
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingLanguage"
          >
            {{ isSubmittingLanguage ? "Saving..." : "Save" }}
          </button>
          <b-button class="is-danger is-light" @click="closeLanguageDropper()"
            >Cancel</b-button
          >
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#comment-id${getAttachmentDropperId}`"
      ref="attachmentDropper"
      @esc-keydown="closeAttachmentDropper"
      @other-area-clicked="closeAttachmentDropper"
      class="dropper"
      :z-index="1000"
    >
      <form
        @submit.prevent="replaceAttachment(attachmentUpdateType)"
        v-if="attachmentUpdateType === 'comment'"
      >
        <h3 class="label text-main">Edit Comment</h3>
        <hr />
        <b-field
          :type="{
            'is-danger': qualificationsErrors.attachment.comment.length > 0,
          }"
          :message="qualificationsErrors.attachment.comment"
        >
          <b-input
            type="textarea"
            placeholder="Type your comment..."
            v-model="qualifications.attachment.comment"
          ></b-input>
        </b-field>
        <hr />
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingQualificationAttachment"
          >
            {{ isSubmittingQualificationAttachment ? "Saving..." : "Save" }}
          </button>
          <b-button class="is-danger is-light" @click="closeAttachmentDropper()"
            >Cancel</b-button
          >
        </b-field>
      </form>
      <form
        @submit.prevent="replaceAttachment(attachmentUpdateType)"
        v-if="attachmentUpdateType === 'attachment'"
      >
        <h3 class="label has-text-info">Replace Attachment</h3>
        <hr />
        <b-field>
          <b-upload
            v-model="qualifications.attachment.file"
            size="is-small"
            style="cursor: pointer"
          >
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon icon="upload" size="is-small"></b-icon>
                </p>
                <p>Click to replace attachment</p>
              </div>
            </section>
          </b-upload>
        </b-field>
        <div class="tags" v-if="qualifications.attachment.file">
          <span class="tag is-large is-info is-light">
            {{ qualifications.attachment.file.name }}
            <button
              class="delete is-small"
              type="button"
              @click="qualifications.attachment.file = null"
            ></button>
          </span>
        </div>
        <b-field
          :type="{
            'is-danger': qualificationsErrors.attachment.file.length > 0,
          }"
          :message="qualificationsErrors.attachment.file"
        >
        </b-field>

        <hr />
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingQualificationAttachment"
          >
            {{ isSubmittingQualificationAttachment ? "Saving..." : "Save" }}
          </button>
          <b-button class="is-danger is-light" @click="closeAttachmentDropper()"
            >Cancel</b-button
          >
        </b-field>
      </form>
    </dropper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ViewPdf from "../../ViewPdf";
export default {
  name: "QualificayionDetails",
  components: { ViewPdf },
  computed: {
    ...mapGetters(["getProfile"]),
    getWorkExperience() {
      if (typeof this.getProfile.qualifications.workExperience === "string")
        return JSON.parse(this.getProfile.qualifications.workExperience);
      return [];
    },
    getEducation() {
      if (typeof this.getProfile.qualifications.education === "string")
        return JSON.parse(this.getProfile.qualifications.education);
      return [];
    },
    getSkills() {
      if (typeof this.getProfile.qualifications.skills === "string")
        return JSON.parse(this.getProfile.qualifications.skills);
      return [];
    },
    getLanguages() {
      if (typeof this.getProfile.qualifications.languages === "string")
        return JSON.parse(this.getProfile.qualifications.languages);
      return [];
    },
    getAttachments() {
      if (typeof this.getProfile.qualifications.attachments === "string")
        return JSON.parse(this.getProfile.qualifications.attachments);
      return [];
    },

    getAttachmentDropperId() {
      return this.attachmentDropperId;
    },
  },
  created() {},
  data() {
    return {
      isEditWorkExperience: false,
      isEditEducation: false,
      isEditSkills: false,
      isEditLanguage: false,
      isEditQualificationAttachment: false,
      isSubmitting: false,
      attachmentUpdateType: null,
      attachmentDropperId: null,
      // isviewSpecification: false,
      isSubmittingWorkExperience: false,
      isSubmittingEducation: false,
      isSubmittingSkills: false,
      isSubmittingLanguage: false,
      isSubmittingQualificationAttachment: false,
      qualifications: {
        workExperience: {
          company: "",
          jobTitle: "",
          from: null,
          to: null,
          comment: "",
        },
        education: {
          institution: "",
          specialization: "",
          gpa: null,
          started: null,
          completed: null,
        },
        skills: {
          skill: "",
          yearOfExperience: "",
          comment: "",
        },
        languages: {
          language: "",
          fluency: "",
          comment: "",
        },
        attachment: {
          file: null,
          comment: "",
        },
      },
      qualificationsErrors: {
        workExperience: {
          company: [],
          jobTitle: [],
          from: [],
          to: [],
          comment: [],
        },
        education: {
          institution: [],
          specialization: [],
          gpa: [],
          started: [],
          completed: [],
        },
        skills: {
          skill: [],
          yearOfExperience: [],
          comment: [],
        },
        languages: {
          language: [],
          fluency: [],
          comment: [],
        },
        attachment: {
          file: [],
          comment: [],
        },
      },
    };
  },
  methods: {
    ...mapActions(["dispatchProfile"]),
    openAttachmentDropper(data, type) {
      const dropper = this.$refs.attachmentDropper;
      this.attachmentDropperId = data.id;
      this.attachmentUpdateType = type;
      if (dropper) {
        this.qualifications.attachment = {
          comment: data.comment,
        };
        dropper.open();
      }
    },
    closeAttachmentDropper() {
      const dropper = this.$refs.attachmentDropper;
      this.attachmentUpdateType = "";
      if (dropper) {
        this.cancelQualificationAttachmentForm();
        dropper.close();
      }
    },
    openWorkExperienceDropper(data) {
      const dropper = this.$refs.workExperienceDropper;
      this.attachmentDropperId = data.id;
      if (dropper) {
        this.qualifications.workExperience = {
          company: data.company,
          jobTitle: data.jobTitle,
          from: data.from,
          to: data.to,
          comment: data.comment,
        };
        dropper.open();
      }
    },
    closeWorkExperienceDropper() {
      const dropper = this.$refs.workExperienceDropper;
      this.attachmentUpdateType = "";
      if (dropper) {
        this.cancelWorkExperienceForm();
        dropper.close();
      }
    },
    openEducationDropper(data) {
      const dropper = this.$refs.educationDropper;
      this.attachmentDropperId = data.id;
      if (dropper) {
        this.qualifications.education = {
          institution: data.institution,
          specialization: data.specialization,
          gpa: data.gpa,
          started: data.started,
          completed: data.completed,
        };
        dropper.open();
      }
    },
    closeEducationDropper() {
      const dropper = this.$refs.educationDropper;
      this.attachmentUpdateType = "";
      if (dropper) {
        this.cancelEducationForm();
        dropper.close();
      }
    },
    openSkillDropper(data) {
      const dropper = this.$refs.skillDropper;
      this.attachmentDropperId = data.id;
      if (dropper) {
        this.qualifications.skills = {
          skill: data.skill,
          yearOfExperience: data.yearOfExperience,
          comment: data.comment,
        };
        dropper.open();
      }
    },
    closeSkillDropper() {
      const dropper = this.$refs.skillDropper;
      this.attachmentUpdateType = "";
      if (dropper) {
        this.cancelSkillsForm();
        dropper.close();
      }
    },
    openLanguageDropper(data) {
      const dropper = this.$refs.languageDropper;
      this.attachmentDropperId = data.id;
      if (dropper) {
        this.qualifications.languages = {
          language: data.language,
          fluency: data.fluency,
          comment: data.comment,
        };
        dropper.open();
      }
    },
    closeLanguageDropper() {
      const dropper = this.$refs.languageDropper;
      this.attachmentUpdateType = "";
      if (dropper) {
        this.cancelLanguageForm();
        dropper.close();
      }
    },
    addWorkExperience() {
      this.isSubmittingWorkExperience = true;
      this.setWorkExperienceErrors();
      this.$axios
        .put(
          `/dashboard/ess/add-work-experience/${this.getProfile.user_id}`,
          this.qualifications.workExperience
        )
        .then((res) => {
          if (res.status === 200 && res.data.added) {
            this.clearWorkExperienceForm();
            this.dispatchProfile({
              type: "ADD_WORK_EXPERIENCE",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Work experience added successfully", "is-dark");
              this.isSubmittingWorkExperience = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setWorkExperienceErrors(err.response.data.errors);
          }
          this.isSubmittingWorkExperience = false;
        });
    },
    updateWorkExperience() {
      this.isSubmittingWorkExperience = true;
      this.setWorkExperienceErrors();
      this.$axios
        .put(
          `/dashboard/ess/update-work-experience/${this.getProfile.user_id}/${this.attachmentDropperId}`,
          this.qualifications.workExperience
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchProfile({
              type: "ADD_WORK_EXPERIENCE",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Work experience updated successfully", "is-dark");
              this.isSubmittingWorkExperience = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setWorkExperienceErrors(err.response.data.errors);
          }
          this.isSubmittingWorkExperience = false;
        });
    },
    addEducation() {
      this.isSubmittingEducation = true;
      this.setEducationErrors();
      this.$axios
        .put(
          `/dashboard/ess/add-education/${this.getProfile.user_id}`,
          this.qualifications.education
        )
        .then((res) => {
          if (res.status === 200 && res.data.added) {
            this.dispatchProfile({
              type: "ADD_EDUCATION",
              payload: res.data.data,
            });
            this.clearEducationForm();
            setTimeout(() => {
              this.snackbar("Education added successfully", "is-dark");
              this.isSubmittingEducation = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setEducationErrors(err.response.data.errors);
          }
          this.isSubmittingEducation = false;
        });
    },
    updateEducation() {
      this.isSubmittingEducation = true;
      this.setEducationErrors();
      this.$axios
        .put(
          `/dashboard/ess/update-education/${this.getProfile.user_id}/${this.attachmentDropperId}`,
          this.qualifications.education
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchProfile({
              type: "ADD_EDUCATION",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Education updated successfully", "is-dark");
              this.isSubmittingEducation = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setEducationErrors(err.response.data.errors);
          }
          this.isSubmittingEducation = false;
        });
    },
    addSkills() {
      this.isSubmittingSkills = true;
      this.setSkillsErrors();
      this.$axios
        .put(
          `/dashboard/ess/add-skill/${this.getProfile.user_id}`,
          this.qualifications.skills
        )
        .then((res) => {
          if (res.status === 200 && res.data.added) {
            this.clearSkillsForm();
            this.dispatchProfile({
              type: "ADD_SKILL",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Skill added successfully", "is-dark");
              this.isSubmittingSkills = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setSkillsErrors(err.response.data.errors);
          }
          this.isSubmittingSkills = false;
        });
    },
    updateSkills() {
      this.isSubmittingSkills = true;
      this.setSkillsErrors();
      this.$axios
        .put(
          `/dashboard/ess/update-skill/${this.getProfile.user_id}/${this.attachmentDropperId}`,
          this.qualifications.skills
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchProfile({
              type: "ADD_SKILL",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Skill updated successfully", "is-dark");
              this.isSubmittingSkills = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setSkillsErrors(err.response.data.errors);
          }
          this.isSubmittingSkills = false;
        });
    },
    addLanguage() {
      this.isSubmittingLanguage = true;
      this.setLanguageErrors();
      this.$axios
        .put(
          `/dashboard/ess/add-language/${this.getProfile.user_id}`,
          this.qualifications.languages
        )
        .then((res) => {
          if (res.status === 200 && res.data.added) {
            this.clearLanguageForm();
            this.dispatchProfile({
              type: "ADD_LANGUAGE",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Laguage added successfully", "is-dark");
              this.isSubmittingLanguage = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setLanguageErrors(err.response.data.errors);
          }
          this.isSubmittingLanguage = false;
        });
    },
    updateLanguage() {
      this.isSubmittingLanguage = true;
      this.setLanguageErrors();
      this.$axios
        .put(
          `/dashboard/ess/update-language/${this.getProfile.user_id}/${this.attachmentDropperId}`,
          this.qualifications.languages
        )
        .then((res) => {
          if (res.status === 200 && res.data.added) {
            this.dispatchProfile({
              type: "ADD_LANGUAGE",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Laguage updated successfully", "is-dark");
              this.isSubmittingLanguage = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setLanguageErrors(err.response.data.errors);
          }
          this.isSubmittingLanguage = false;
        });
    },
    addQualificationAttachment() {
      this.isSubmittingQualificationAttachment = true;
      this.setQualificationAttachmentErrors();
      const data = new FormData();
      data.append("file", this.qualifications.attachment.file);
      data.append("comment", this.qualifications.attachment.comment);
      this.$axios
        .post(
          `/dashboard/ess/add-qualification-attachment/${this.getProfile.user_id}`,
          data
        )
        .then((res) => {
          if (res.status === 200) {
            this.clearQualificationAttachmentForm();
            this.dispatchProfile({
              type: "ADD_ATTACHMENT",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Attachment added successfully", "is-dark");
              this.isSubmittingQualificationAttachment = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setQualificationAttachmentErrors(err.response.data.errors);
          }
          this.isSubmittingQualificationAttachment = false;
        });
    },
    replaceAttachment(type) {
      this.isSubmittingQualificationAttachment = true;
      this.setQualificationAttachmentErrors();
      const data = new FormData();
      if (type === "comment") {
        data.append(`id`, this.attachmentDropperId);
        data.append("comment", this.qualifications.attachment.comment);
      }
      if (type === "attachment") {
        data.append(`id`, this.attachmentDropperId);
        data.append("file", this.qualifications.attachment.file);
      }
      this.$axios
        .post(
          `/dashboard/ess/replace-qualification-attachment/${this.getProfile.user_id}`,
          data
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.qualifications.attachment.file = null;
            this.dispatchProfile({
              type: "ADD_ATTACHMENT",
              payload: res.data.data,
            });
            setTimeout(() => {
              if (type === "comment") {
                this.snackbar("Comment updated successfully", "is-dark");
              }
              if (type === "attachment") {
                this.snackbar("Attachment updated successfully", "is-dark");
              }
              this.isSubmittingQualificationAttachment = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status == 422) {
            setTimeout(() => {
              this.setQualificationAttachmentErrors(err.response.data.errors);
              this.isSubmittingQualificationAttachment = false;
            }, 1000);
          }
        });
    },
    viewAttachment(file) {
      this.$buefy.modal.open({
        parent: this,
        component: ViewPdf,
        hasModalCard: true,
        trapFocus: true,
        props: { file },
      });
    },
    deleteHandler(type, id) {
      this.$axios
        .delete(
          `/dashboard/ess/delete-qualification/${this.getProfile.user_id}/${id}/${type}`
        )
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchProfile({
              type: "UDATE_QUALIFICATION",
              payload: { type, data: res.data.data },
            });
            setTimeout(() => {
              this.snackbar("Data successfully deleted", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clearWorkExperienceForm() {
      this.qualifications.workExperience.company = "";
      this.qualifications.workExperience.jobTitle = "";
      this.qualifications.workExperience.from = "";
      this.qualifications.workExperience.to = "";
      this.qualifications.workExperience.comment = "";
    },
    clearEducationForm() {
      this.qualifications.education.institution = "";
      this.qualifications.education.specialization = "";
      this.qualifications.education.gpa = "";
      this.qualifications.education.started = "";
      this.qualifications.education.completed = "";
    },
    clearSkillsForm() {
      this.qualifications.skills.skill = "";
      this.qualifications.skills.yearOfExperience = "";
      this.qualifications.skills.comment = "";
    },
    clearLanguageForm() {
      this.qualifications.languages.language = "";
      this.qualifications.languages.fluency = "";
      this.qualifications.languages.comment = "";
    },
    clearQualificationAttachmentForm() {
      this.qualifications.attachment.file = null;
      this.qualifications.attachment.comment = "";
    },
    cancelWorkExperienceForm() {
      this.isEditWorkExperience = false;
      this.clearWorkExperienceForm();
      this.setWorkExperienceErrors();
    },
    cancelEducationForm() {
      this.isEditEducation = false;
      this.clearEducationForm();
      this.setEducationErrors();
    },
    cancelLanguageForm() {
      this.isEditLanguage = false;
      this.clearLanguageForm();
      this.setLanguageErrors();
    },
    cancelSkillsForm() {
      this.isEditSkills = false;
      this.clearSkillsForm();
      this.setSkillsErrors();
    },
    cancelQualificationAttachmentForm() {
      this.isEditQualificationAttachment = false;
      this.clearQualificationAttachmentForm();
      this.setQualificationAttachmentErrors();
    },
    setWorkExperienceErrors(error = {}) {
      this.qualificationsErrors.workExperience.company = error.company
        ? error.company
        : [];
      this.qualificationsErrors.workExperience.jobTitle = error.jobTitle
        ? error.jobTitle
        : [];
      this.qualificationsErrors.workExperience.from = error.from
        ? error.from
        : [];
      this.qualificationsErrors.workExperience.to = error.to ? error.to : [];
      this.qualificationsErrors.workExperience.comment = error.comment
        ? error.comment
        : [];
    },
    setEducationErrors(error = {}) {
      this.qualificationsErrors.education.institution = error.institution
        ? error.institution
        : [];
      this.qualificationsErrors.education.specialization = error.specialization
        ? error.specialization
        : [];
      this.qualificationsErrors.education.gpa = error.gpa ? error.gpa : [];
      this.qualificationsErrors.education.started = error.started
        ? error.started
        : [];
      this.qualificationsErrors.education.completed = error.completed
        ? error.completed
        : [];
    },
    setSkillsErrors(error = {}) {
      this.qualificationsErrors.skills.skill = error.skill ? error.skill : [];
      this.qualificationsErrors.skills.yearOfExperience = error.yearOfExperience
        ? error.yearOfExperience
        : [];
      this.qualificationsErrors.skills.comment = error.comment
        ? error.comment
        : [];
    },
    setLanguageErrors(error = {}) {
      this.qualificationsErrors.languages.language = error.language
        ? error.language
        : [];
      this.qualificationsErrors.languages.fluency = error.fluency
        ? error.fluency
        : [];
      this.qualificationsErrors.languages.comment = error.comment
        ? error.comment
        : [];
    },
    setQualificationAttachmentErrors(error = {}) {
      this.qualificationsErrors.attachment.file = error.file || [];
      this.qualificationsErrors.attachment.comment = error.comment || [];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>