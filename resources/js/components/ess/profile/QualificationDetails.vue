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
                        <div class="column is-6">
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
                        <div class="column is-6">
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
                            <b-datepicker
                              v-model="qualifications.education.started"
                              type="month"
                              :placeholder="$t('app.selectYear')"
                              icon="calendar"
                              trap-focus
                              expanded
                            >
                            </b-datepicker>
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
                            <b-datepicker
                              v-model="qualifications.education.completed"
                              type="month"
                              :placeholder="$t('app.selectYear')"
                              icon="calendar"
                              trap-focus
                              expanded
                            >
                            </b-datepicker>
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
              :data="getEducation"
              :paginated="true"
              :per-page="5"
              :current-page="1"
              :pagination-simple="true"
              pagination-position="bottom"
              default-sort="id"
              default-sort-direction="desc"
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
                field="started"
                :label="$t('app.started')"
                sortable
                v-slot="props"
                >{{
                  props.row.started ? formatMonthYear(props.row.started) : ""
                }}</b-table-column
              >
              <b-table-column
                field="completed"
                :label="$t('app.completed')"
                sortable
                v-slot="props"
                >{{
                  props.row.completed
                    ? formatMonthYear(props.row.completed)
                    : ""
                }}</b-table-column
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
                      :id="`education-id${
                        getAttachmentDropperId === props.row.id
                          ? getAttachmentDropperId
                          : ''
                      }`"
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
          <p class="card-header-title">
            {{ $tc("app.expertise", 1) }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <section
              class="b__collapse__section"
              v-if="userOrPermission('create', getProfile.user_id)"
            >
              <b-collapse
                class="card"
                v-model="isEditExpertise"
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
                    {{ $t("app.add_expertise") }}
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
                    <form @submit.prevent="addExpertise()">
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$tc('app.expertise', 1)"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.expertise.expertise
                                  .length > 0,
                            }"
                            :message="qualificationsErrors.expertise.expertise"
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.expertise.expertise"
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
                                qualificationsErrors.expertise.yearOfExperience
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.expertise.yearOfExperience
                            "
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="
                                qualifications.expertise.yearOfExperience
                              "
                            ></b-input>
                          </b-field>
                        </div>
                      </div>
                      <!-- <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$tc('app.comment', 1)"
                            :type="{
                              'is-danger':
                                qualificationsErrors.expertise.comment.length >
                                0,
                            }"
                            :message="qualificationsErrors.expertise.comment"
                          >
                            <b-input
                              type="textarea"
                              :placeholder="$t('app.comment_placeholder')"
                              size=""
                              v-model="qualifications.expertise.comment"
                            ></b-input>
                          </b-field>
                        </div>
                      </div> -->

                      <hr />
                      <b-field class="buttons">
                        <button
                          class="button is-success is-light"
                          type="submit"
                          :disabled="isSubmittingExpertise"
                        >
                          {{
                            isSubmittingExpertise
                              ? `${$t("app.submitting")}`
                              : $t("app.add")
                          }}
                        </button>
                        <b-button
                          class="is-danger is-light"
                          @click="cancelExpertiseForm()"
                          >{{ $t("app.cancel") }}</b-button
                        >
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>
            <b-table
              :data="getExpertise"
              :paginated="true"
              :per-page="5"
              :current-page="1"
              :pagination-simple="true"
              pagination-position="bottom"
            >
              <b-table-column
                field="expertise"
                :label="$tc('app.expertise', 1)"
                sortable
                v-slot="props"
                >{{ props.row.expertise }}</b-table-column
              >
              <b-table-column
                field="yoe"
                :label="$t('app.year_of_expe')"
                sortable
                v-slot="props"
                >{{ props.row.yearOfExperience }}</b-table-column
              >
              <!-- <b-table-column
                field="comment"
                :label="$tc('app.comment', 1)"
                sortable
                v-slot="props"
                >{{ props.row.comment }}</b-table-column
              > -->
              <b-table-column
                field="actions"
                :label="$tc('app.action', 2)"
                v-slot="props"
              >
                <div class="b-tooltips">
                  <b-tooltip :label="$t('app.edit_expertise')" type="is-dark">
                    <b-button
                      class="is-info is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="pen"
                      :id="`expertise-id${
                        getAttachmentDropperId === props.row.id
                          ? getAttachmentDropperId
                          : ''
                      }`"
                      @click="openExpertiseDropper(props.row)"
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
                      @click="deleteHandler('expertise', props.row.id)"
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
                      <!-- <div class="columns">
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
                      </div> -->
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
              :data="getLanguages"
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
              <!-- <b-table-column
                field="comment"
                :label="$tc('app.comment', 1)"
                sortable
                v-slot="props"
                >{{ props.row.comment }}</b-table-column
              > -->
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
                      :id="`language-id${
                        getAttachmentDropperId === props.row.id
                          ? getAttachmentDropperId
                          : ''
                      }`"
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
          <p class="card-header-title">
            {{ $t("app.continuous_dev") }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <section
              class="b__collapse__section"
              v-if="userOrPermission('create', getProfile.user_id)"
            >
              <b-collapse
                class="card"
                v-model="isEditContinuousDev"
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
                    {{ $t("app.add_continuous_dev") }}
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
                    <form @submit.prevent="addContinuousDev()">
                      <div class="columns">
                        <div class="column is-6">
                          <b-field
                            :label="$t('app.institution')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.continuousDev.institution
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.continuousDev.institution
                            "
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="qualifications.continuousDev.institution"
                            ></b-input>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field
                            :label="$t('app.major_spec')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.continuousDev
                                  .specialization.length > 0,
                            }"
                            :message="
                              qualificationsErrors.continuousDev.specialization
                            "
                          >
                            <b-input
                              size=""
                              expanded
                              v-model="
                                qualifications.continuousDev.specialization
                              "
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
                                qualificationsErrors.continuousDev.started
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.continuousDev.started
                            "
                          >
                            <b-datepicker
                              v-model="qualifications.continuousDev.started"
                              type="month"
                              :placeholder="$t('app.selectYear')"
                              icon="calendar"
                              trap-focus
                              expanded
                            >
                            </b-datepicker>
                          </b-field>
                        </div>
                        <div class="column is-6">
                          <b-field
                            :label="$t('app.completed')"
                            expanded
                            :type="{
                              'is-danger':
                                qualificationsErrors.continuousDev.completed
                                  .length > 0,
                            }"
                            :message="
                              qualificationsErrors.continuousDev.completed
                            "
                          >
                            <b-datepicker
                              v-model="qualifications.continuousDev.completed"
                              type="month"
                              :placeholder="$t('app.selectYear')"
                              icon="calendar"
                              trap-focus
                              expanded
                            >
                            </b-datepicker>
                          </b-field>
                        </div>
                      </div>
                      <hr />
                      <b-field class="buttons">
                        <button
                          class="button is-success is-light"
                          type="submit"
                          :disabled="isSubmittingContinuousDev"
                        >
                          {{
                            isSubmittingContinuousDev
                              ? `${$t("app.submitting")}`
                              : $t("app.add")
                          }}
                        </button>
                        <b-button
                          class="is-danger is-light"
                          @click="cancelContinuousDevForm()"
                          >{{ $t("app.cancel") }}</b-button
                        >
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>
            <b-table
              :data="getContinuousDev"
              :paginated="true"
              :per-page="5"
              :current-page="1"
              :pagination-simple="true"
              pagination-position="bottom"
              default-sort="id"
              default-sort-direction="desc"
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
                field="started"
                :label="$t('app.started')"
                sortable
                v-slot="props"
                >{{
                  props.row.started ? formatMonthYear(props.row.started) : ""
                }}</b-table-column
              >
              <b-table-column
                field="completed"
                :label="$t('app.completed')"
                sortable
                v-slot="props"
                >{{
                  props.row.completed
                    ? formatMonthYear(props.row.completed)
                    : ""
                }}
              </b-table-column>
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
                      :id="`continuous-dev-id${
                        getAttachmentDropperId === props.row.id
                          ? getAttachmentDropperId
                          : ''
                      }`"
                      @click="openContinuousDevDropper(props.row)"
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
                      @click="deleteHandler('continuousDev', props.row.id)"
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
      :join="`#education-id${getAttachmentDropperId}`"
      ref="educationDropper"
      @esc-keydown="closeEducationDropper"
      @other-area-clicked="closeEducationDropper"
      class="dropper"
      :z-index="9999"
    >
      <form @submit.prevent="updateEducation()" style="width: 30rem">
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
          <div class="column is-6">
            <b-field
              label="Started"
              expanded
              :type="{
                'is-danger': qualificationsErrors.education.started.length > 0,
              }"
              :message="qualificationsErrors.education.started"
            >
              <b-datepicker
                v-model="qualifications.education.started"
                type="month"
                :placeholder="$t('app.selectYear')"
                icon="calendar"
                trap-focus
                expanded
              >
              </b-datepicker>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Completed"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.education.completed.length > 0,
              }"
              :message="qualificationsErrors.education.completed"
            >
              <b-datepicker
                v-model="qualifications.education.completed"
                type="month"
                :placeholder="$t('app.selectYear')"
                icon="calendar"
                trap-focus
                expanded
              >
              </b-datepicker>
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
      :join="`#continuous-dev-id${getAttachmentDropperId}`"
      ref="continuousDevDropper"
      @esc-keydown="closeContinuousDevDropper"
      @other-area-clicked="closeContinuousDevDropper"
      class="dropper"
      :z-index="999"
    >
      <form @submit.prevent="updateContinuousDev()" style="width: 30rem">
        <h3 class="label text-main">Edit Continuous Development</h3>
        <hr />
        <div class="columns">
          <div class="column is-12">
            <b-field
              label="Institution"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.continuousDev.institution.length > 0,
              }"
              :message="qualificationsErrors.continuousDev.institution"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.continuousDev.institution"
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
                  qualificationsErrors.continuousDev.specialization.length > 0,
              }"
              :message="qualificationsErrors.continuousDev.specialization"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.continuousDev.specialization"
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Started"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.continuousDev.started.length > 0,
              }"
              :message="qualificationsErrors.continuousDev.started"
            >
              <b-datepicker
                v-model="qualifications.continuousDev.started"
                type="month"
                :placeholder="$t('app.selectYear')"
                icon="calendar"
                trap-focus
                expanded
              >
              </b-datepicker>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Completed"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.continuousDev.completed.length > 0,
              }"
              :message="qualificationsErrors.continuousDev.completed"
            >
              <b-datepicker
                v-model="qualifications.continuousDev.completed"
                type="month"
                :placeholder="$t('app.selectYear')"
                icon="calendar"
                trap-focus
                expanded
              >
              </b-datepicker>
            </b-field>
          </div>
        </div>
        <hr />
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingContinuousDev"
          >
            {{ isSubmittingContinuousDev ? "Saving..." : "Save" }}
          </button>
          <b-button
            class="is-danger is-light"
            @click="closeContinuousDevDropper()"
            >Cancel</b-button
          >
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#expertise-id${getAttachmentDropperId}`"
      ref="expertiseDropper"
      @esc-keydown="closeExpertiseDropper"
      @other-area-clicked="closeExpertiseDropper"
      class="dropper"
      :z-index="9999"
    >
      <form @submit.prevent="updateExpertise()" style="width: 30rem">
        <h3 class="label text-main">Edit Expertise</h3>
        <hr />
        <div class="columns">
          <div class="column is-6">
            <b-field
              label="Expertise"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.expertise.expertise.length > 0,
              }"
              :message="qualificationsErrors.expertise.expertise"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.expertise.expertise"
              ></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              label="Years of experience"
              expanded
              :type="{
                'is-danger':
                  qualificationsErrors.expertise.yearOfExperience.length > 0,
              }"
              :message="qualificationsErrors.expertise.yearOfExperience"
            >
              <b-input
                size=""
                expanded
                v-model="qualifications.expertise.yearOfExperience"
              ></b-input>
            </b-field>
          </div>
        </div>

        <!-- <div class="columns">
          <div class="column is-12">
            <b-field
              label="Comment"
              :type="{
                'is-danger': qualificationsErrors.expertise.comment.length > 0,
              }"
              :message="qualificationsErrors.expertise.comment"
            >
              <b-input
                type="textarea"
                placeholder="Type your comment..."
                size=""
                v-model="qualifications.expertise.comment"
              ></b-input>
            </b-field>
          </div>
        </div> -->
        <hr />
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingExpertise"
          >
            {{ isSubmittingExpertise ? "Saving..." : "Save" }}
          </button>
          <b-button class="is-danger is-light" @click="closeExpertiseDropper()"
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
      :z-index="9999"
    >
      <form @submit.prevent="updateLanguage()" style="width: 30rem">
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
              <b-input
                size=""
                expanded
                v-model="qualifications.languages.language"
              >
              </b-input>
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

        <!-- <div class="columns">
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
        </div> -->
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "QualificayionDetails",
  components: {},
  computed: {
    ...mapGetters(["getProfile"]),
    getEducation() {
      if (typeof this.getProfile.qualifications.education === "string")
        return JSON.parse(this.getProfile.qualifications.education);
      return [];
    },
    getContinuousDev() {
      if (typeof this.getProfile.qualifications.continuousDev === "string")
        return JSON.parse(this.getProfile.qualifications.continuousDev);
      return [];
    },
    getExpertise() {
      if (typeof this.getProfile.qualifications.expertise === "string")
        return JSON.parse(this.getProfile.qualifications.expertise);
      return [];
    },
    getLanguages() {
      if (typeof this.getProfile.qualifications.languages === "string")
        return JSON.parse(this.getProfile.qualifications.languages);
      return [];
    },
    getAttachmentDropperId() {
      return this.attachmentDropperId;
    },
  },
  created() {},
  data() {
    return {
      isEditEducation: false,
      isEditExpertise: false,
      isEditLanguage: false,
      isEditContinuousDev: false,
      isSubmitting: false,
      attachmentUpdateType: "",
      attachmentDropperId: "",
      isSubmittingEducation: false,
      isSubmittingContinuousDev: false,
      isSubmittingExpertise: false,
      isSubmittingLanguage: false,
      qualifications: {
        education: {
          institution: "",
          specialization: "",
          started: null,
          completed: null,
        },
        continuousDev: {
          institution: "",
          specialization: "",
          started: null,
          completed: null,
        },
        expertise: {
          expertise: "",
          yearOfExperience: "",
          comment: "",
        },
        languages: {
          language: "",
          fluency: "",
          comment: "",
        },
      },
      qualificationsErrors: {
        education: {
          institution: [],
          specialization: [],
          started: [],
          completed: [],
        },
        continuousDev: {
          institution: [],
          specialization: [],
          started: [],
          completed: [],
        },
        expertise: {
          expertise: [],
          yearOfExperience: [],
          comment: [],
        },
        languages: {
          language: [],
          fluency: [],
          comment: [],
        },
      },
    };
  },
  methods: {
    ...mapActions(["dispatchProfile"]),
    openEducationDropper(data) {
      const dropper = this.$refs.educationDropper;
      this.attachmentDropperId = data.id;
      if (dropper) {
        this.qualifications.education = {
          institution: data.institution,
          specialization: data.specialization,
          gpa: data.gpa,
          started: data.started ? new Date(data.started) : data.started,
          completed: data.completed ? new Date(data.completed) : data.completed,
        };
        dropper.open();
      }
    },
    closeEducationDropper() {
      const dropper = this.$refs.educationDropper;
      this.attachmentUpdateType = "";
      this.attachmentDropperId = "";
      if (dropper) {
        this.cancelEducationForm();
        dropper.close();
      }
    },
    openContinuousDevDropper(data) {
      const dropper = this.$refs.continuousDevDropper;
      this.attachmentDropperId = data.id;
      if (dropper) {
        this.qualifications.continuousDev = {
          institution: data.institution,
          specialization: data.specialization,
          started: data.started ? new Date(data.started) : data.started,
          completed: data.completed ? new Date(data.completed) : data.completed,
        };
        dropper.open();
      }
    },
    closeContinuousDevDropper() {
      const dropper = this.$refs.continuousDevDropper;
      this.attachmentUpdateType = "";
      this.attachmentDropperId = "";
      if (dropper) {
        this.cancelContinuousDevForm();
        dropper.close();
      }
    },
    openExpertiseDropper(data) {
      const dropper = this.$refs.expertiseDropper;
      this.attachmentDropperId = data.id;
      if (dropper) {
        this.qualifications.expertise = {
          expertise: data.expertise,
          yearOfExperience: data.yearOfExperience,
          comment: data.comment,
        };
        dropper.open();
      }
    },
    closeExpertiseDropper() {
      const dropper = this.$refs.expertiseDropper;
      this.attachmentUpdateType = "";
      this.attachmentDropperId = "";
      if (dropper) {
        this.cancelExpertiseForm();
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
      this.attachmentDropperId = "";
      if (dropper) {
        this.cancelLanguageForm();
        dropper.close();
      }
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
            this.closeEducationDropper();
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
    addContinuousDev() {
      this.isSubmittingContinuousDev = true;
      this.setContinuousDevErrors();
      this.$axios
        .put(
          `/dashboard/ess/add-continuous-dev/${this.getProfile.user_id}`,
          this.qualifications.continuousDev
        )
        .then((res) => {
          if (res.status === 200 && res.data.added) {
            this.dispatchProfile({
              type: "ADD_CONTINUOUS_DEV",
              payload: res.data.data,
            });
            this.clearContinuousDevForm();
            setTimeout(() => {
              this.snackbar("Development added successfully", "is-dark");
              this.isSubmittingContinuousDev = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setContinuousDevErrors(err.response.data.errors);
          }
          this.isSubmittingContinuousDev = false;
        });
    },
    updateContinuousDev() {
      this.isSubmittingContinuousDev = true;
      this.setContinuousDevErrors();
      this.$axios
        .put(
          `/dashboard/ess/update-continuous-dev/${this.getProfile.user_id}/${this.attachmentDropperId}`,
          this.qualifications.continuousDev
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.closeContinuousDevDropper();
            this.dispatchProfile({
              type: "ADD_CONTINUOUS_DEV",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Development updated successfully", "is-dark");
              this.isSubmittingContinuousDev = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setContinuousDevErrors(err.response.data.errors);
          }
          this.isSubmittingContinuousDev = false;
        });
    },
    addExpertise() {
      this.isSubmittingExpertise = true;
      this.setExpertiseErrors();
      this.$axios
        .put(
          `/dashboard/ess/add-expertise/${this.getProfile.user_id}`,
          this.qualifications.expertise
        )
        .then((res) => {
          if (res.status === 200 && res.data.added) {
            this.clearExpertiseForm();
            this.dispatchProfile({
              type: "ADD_EXPERTISE",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Expertise added successfully", "is-dark");
              this.isSubmittingExpertise = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setExpertiseErrors(err.response.data.errors);
          }
          this.isSubmittingExpertise = false;
        });
    },
    updateExpertise() {
      this.isSubmittingExpertise = true;
      this.setExpertiseErrors();
      this.$axios
        .put(
          `/dashboard/ess/update-expertise/${this.getProfile.user_id}/${this.attachmentDropperId}`,
          this.qualifications.expertise
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.closeExpertiseDropper();
            this.dispatchProfile({
              type: "ADD_EXPERTISE",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Expertise updated successfully", "is-dark");
              this.isSubmittingExpertise = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setExpertiseErrors(err.response.data.errors);
          }
          this.isSubmittingExpertise = false;
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
            this.closeLanguageDropper();
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
    clearEducationForm() {
      this.qualifications.education.institution = "";
      this.qualifications.education.specialization = "";
      this.qualifications.education.started = null;
      this.qualifications.education.completed = null;
    },
    clearContinuousDevForm() {
      this.qualifications.continuousDev.institution = "";
      this.qualifications.continuousDev.specialization = "";
      this.qualifications.continuousDev.started = null;
      this.qualifications.continuousDev.completed = null;
    },
    clearExpertiseForm() {
      this.qualifications.expertise.expertise = "";
      this.qualifications.expertise.yearOfExperience = "";
      this.qualifications.expertise.comment = "";
    },
    clearLanguageForm() {
      this.qualifications.languages.language = "";
      this.qualifications.languages.fluency = "";
      this.qualifications.languages.comment = "";
    },
    cancelEducationForm() {
      this.isEditEducation = false;
      this.clearEducationForm();
      this.setEducationErrors();
    },
    cancelContinuousDevForm() {
      this.isEditContinuousDev = false;
      this.clearContinuousDevForm();
      this.setContinuousDevErrors();
    },
    cancelLanguageForm() {
      this.isEditLanguage = false;
      this.clearLanguageForm();
      this.setLanguageErrors();
    },
    cancelExpertiseForm() {
      this.isEditExpertise = false;
      this.clearExpertiseForm();
      this.setExpertiseErrors();
    },
    setEducationErrors(error = {}) {
      this.qualificationsErrors.education = {
        institution: error.institution || [],
        specialization: error.specialization || [],
        started: error.started || [],
        completed: error.completed || [],
      };
    },
    setContinuousDevErrors(error = {}) {
      this.qualificationsErrors.continuousDev = {
        institution: error.institution || [],
        specialization: error.specialization || [],
        started: error.started || [],
        completed: error.completed || [],
      };
    },
    setExpertiseErrors(error = {}) {
      this.qualificationsErrors.expertise.expertise = error.expertise
        ? error.expertise
        : [];
      this.qualificationsErrors.expertise.yearOfExperience =
        error.yearOfExperience || [];
      this.qualificationsErrors.expertise.comment = error.comment || [];
    },
    setLanguageErrors(error = {}) {
      this.qualificationsErrors.languages.language = error.language || [];
      this.qualificationsErrors.languages.fluency = error.fluency || [];
      this.qualificationsErrors.languages.comment = error.comment || [];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>