<template>
  <section class="main__content">
    <tabs stickyTab="main__content__sticky">
      <tab label="Staff List" v-if="isPermission('staff_list')">
        <StaffListComponent />
      </tab>
      <!-- <tab label="Work Shifts">
        <ShiftListComponent />
      </tab>
      <tab label="Reports">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            :open="false"
            animation="slide"
            aria-id="definereport"
          >
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
              aria-controls="definereport"
            >
              <p class="card-header-title">Generate Report</p>
              <a class="card-header-icon">
                <b-icon
                  pack="fas"
                  :icon="props.open ? 'caret-down' : 'caret-up'"
                ></b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <form action>
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Report Name</label>
                    </div>
                    <div class="column is-3">
                      <b-input size="is-small" expanded></b-input>
                    </div>
                  </div>

                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Selection Criteria</label>
                    </div>
                    <div class="column is-3">
                      <b-select size="is-small" expanded>
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Other</option>
                      </b-select>
                    </div>
                    <div class="column is-2">
                      <b-button size="is-small">Add</b-button>
                    </div>
                  </div>
                  <h6>Selected Criterion</h6>
                  <section>
                    <div class="columns">
                      <div class="column is-2">
                        <label class="label">Include</label>
                      </div>
                      <div class="column is-3">
                        <b-select size="is-small" expanded>
                          <option>Full-Time</option>
                          <option>Part-Time</option>
                          <option>Other</option>
                        </b-select>
                      </div>
                    </div>
                    <section>
                      <div class="columns">
                        <div class="column is-2">
                          <label class="label">Staff Name</label>
                        </div>
                        <div class="column is-3">
                          <b-input size="is-small" expanded></b-input>
                        </div>
                        <div class="column is-2">
                          <b-button size="is-small">Delete</b-button>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-2">
                          <label class="label">Eployment Status</label>
                        </div>
                        <div class="column is-3">
                          <b-select size="is-small" expanded>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Other</option>
                          </b-select>
                        </div>
                        <div class="column is-2">
                          <b-button size="is-small">Delete</b-button>
                        </div>
                      </div>
                    </section>
                  </section>
                  <hr />
                  <section>
                    <div class="columns">
                      <div class="column is-2">
                        <label class="label">Select Field Groups</label>
                      </div>
                      <div class="column is-3">
                        <b-select size="is-small" expanded>
                          <option>Full-Time</option>
                          <option>Part-Time</option>
                          <option>Other</option>
                        </b-select>
                      </div>
                      <div class="column is-2">
                        <b-button size="is-small">Add</b-button>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column is-2">
                        <label class="label">Select Fields</label>
                      </div>
                      <div class="column is-3">
                        <b-select size="is-small" expanded>
                          <option>Full-Time</option>
                          <option>Part-Time</option>
                          <option>Other</option>
                        </b-select>
                      </div>
                      <div class="column is-2">
                        <b-button size="is-small">Add</b-button>
                      </div>
                    </div>
                  </section>
                  <hr />
                  <h6>Display Fields</h6>
                  <section>
                    <ul class="report__display__fields">
                      <li class="report__display__fields__list">
                        <span>
                          <b-icon
                            size="is-small"
                            pack="fas"
                            icon="times"
                            type="is-danger"
                          ></b-icon>
                          <span>Persoanal Details (Include header)</span>
                          <b-checkbox size="is-small"></b-checkbox>
                        </span>
                        <ul class="report__display__fields__list__deep">
                          <li class="report__display__fields__list__deep__list">
                            <b-icon
                              size="is-small"
                              pack="fas"
                              icon="times"
                              type="is-danger"
                            ></b-icon>
                            <span>First Name</span>
                          </li>
                          <li class="report__display__fields__list__deep__list">
                            <b-icon
                              size="is-small"
                              pack="fas"
                              icon="times"
                              type="is-danger"
                            ></b-icon>
                            <span>Last Name</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul class="report__display__fields">
                      <li class="report__display__fields__list">
                        <span>
                          <b-icon
                            size="is-small"
                            pack="fas"
                            icon="times"
                            type="is-danger"
                          ></b-icon>
                          <span>Skills (Include header)</span>
                          <b-checkbox size="is-small"></b-checkbox>
                        </span>
                        <ul class="report__display__fields__list__deep">
                          <li class="report__display__fields__list__deep__list">
                            <b-icon
                              size="is-small"
                              pack="fas"
                              icon="times"
                              type="is-danger"
                            ></b-icon>
                            <span>Skill</span>
                          </li>
                          <li class="report__display__fields__list__deep__list">
                            <b-icon
                              size="is-small"
                              pack="fas"
                              icon="times"
                              type="is-danger"
                            ></b-icon>
                            <span>Skill</span>
                          </li>
                          <li class="report__display__fields__list__deep__list">
                            <b-icon
                              size="is-small"
                              pack="fas"
                              icon="times"
                              type="is-danger"
                            ></b-icon>
                            <span>Skill</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </section>
                  <hr />
                  <b-field class="buttons">
                    <b-button class="is-success is-light">Generate</b-button>
                    <b-button class="is-danger is-light">Cancel</b-button>
                  </b-field>
                </form>
              </div>
            </div>
          </b-collapse>
        </section>
        <section class="b__collapse__section">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Reports</p>
            </header>
            <div class="card-content">
              <div class="content">
                <template>
                  <div class="columns">
                    <div class="column is-6">
                      <b-input
                        placeholder="Search..."
                        pack="fas"
                        icon="search"
                        size="is-small"
                      />
                    </div>
                  </div>
                </template>
                <b-table :data="reports">
                  <b-table-column
                    field="id"
                    label="ID"
                    width="40"
                    sortable
                    numeric
                    v-slot="props"
                    >{{ props.row.id }}</b-table-column
                  >
                  <b-table-column
                    field="name"
                    label="Name"
                    sortable
                    v-slot="props"
                    >{{ props.row.name }}</b-table-column
                  >
                  <b-table-column field="actions" label="Actions">
                    <div class="b-tooltips">
                      <b-tooltip label="View" size="is-small">
                        <b-button
                          class="is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="eye"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Edit" size="is-small">
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="is-small">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                        ></b-button>
                      </b-tooltip>
                    </div>
                  </b-table-column>
                </b-table>
              </div>
            </div>
          </div>
        </section>
      </tab> -->
      <!-- <tab label="Configurations">
        <b-tabs type="is-toggle" size="is-small" :animated="false" expanded>
          
          <b-tab-item label="Reporting Methods">
            <section class="b__collapse__section">
              <b-collapse
                class="card"
                :open="false"
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
                  <p class="card-header-title">Add Reporting Methods</p>
                  <a class="card-header-icon">
                    <b-icon
                      pack="fas"
                      :icon="props.open ? 'caret-down' : 'caret-up'"
                    ></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <form action>
                      <div class="columns">
                        <div class="column is-2">
                          <label class="label">Method</label>
                        </div>
                        <div class="column is-5">
                          <b-input size="is-small" expanded></b-input>
                        </div>
                        <div class="column is-2">
                          <b-button size="is-small">Add</b-button>
                        </div>
                      </div>
                      <hr />
                      <b-field class="buttons">
                        <b-button class="is-success is-light">Save</b-button>
                        <b-button class="is-danger is-light">Cancel</b-button>
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>
            <section class="b__collapse__section">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Reports</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <b-table :data="reports">
                      <b-table-column
                        field="id"
                        label="ID"
                        width="40"
                        sortable
                        numeric
                        v-slot="props"
                        >{{ props.row.id }}</b-table-column
                      >
                      <b-table-column
                        field="name"
                        label="Name"
                        sortable
                        v-slot="props"
                        >{{ props.row.name }}</b-table-column
                      >
                      <b-table-column field="actions" label="Actions">
                        <div class="b-tooltips">
                          <b-tooltip label="Edit" size="is-small">
                            <b-button
                              class="is-info is-light"
                              size="is-small"
                              pack="fas"
                              icon-right="pen"
                            ></b-button>
                          </b-tooltip>

                          <b-tooltip label="Delete" size="is-small">
                            <b-button
                              class="is-danger is-light"
                              size="is-small"
                              pack="fas"
                              icon-right="trash"
                            ></b-button>
                          </b-tooltip>
                        </div>
                      </b-table-column>
                    </b-table>
                  </div>
                </div>
              </div>
            </section>
          </b-tab-item>
          <b-tab-item label="Termination Reasons">
            <section class="b__collapse__section">
              <b-collapse
                class="card"
                :open="false"
                animation="slide"
                aria-id="addreason"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="addreason"
                >
                  <p class="card-header-title">Add Termination Reasons</p>
                  <a class="card-header-icon">
                    <b-icon
                      pack="fas"
                      :icon="props.open ? 'caret-down' : 'caret-up'"
                    ></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <form action>
                      <div class="columns">
                        <div class="column is-2">
                          <label class="label">Reason</label>
                        </div>
                        <div class="column is-5">
                          <b-input size="is-small" expanded></b-input>
                        </div>
                        <div class="column is-2">
                          <b-button size="is-small">Add</b-button>
                        </div>
                      </div>
                      <hr />
                      <b-field class="buttons">
                        <b-button class="is-success is-light">Save</b-button>
                        <b-button class="is-danger is-light">Cancel</b-button>
                      </b-field>
                    </form>
                  </div>
                </div>
              </b-collapse>
            </section>
            <section class="b__collapse__section">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Reports</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <b-table :data="reports">
                      <b-table-column
                        field="id"
                        label="ID"
                        width="40"
                        sortable
                        numeric
                        v-slot="props"
                        >{{ props.row.id }}</b-table-column
                      >
                      <b-table-column
                        field="name"
                        label="Name"
                        sortable
                        v-slot="props"
                        >{{ props.row.name }}</b-table-column
                      >
                      <b-table-column field="actions" label="Actions">
                        <div class="b-tooltips">
                          <b-tooltip label="Edit" size="is-small">
                            <b-button
                              class="is-info is-light"
                              size="is-small"
                              pack="fas"
                              icon-right="pen"
                            ></b-button>
                          </b-tooltip>
                          <b-tooltip label="Delete" size="is-small">
                            <b-button
                              class="is-danger is-light"
                              size="is-small"
                              pack="fas"
                              icon-right="trash"
                            ></b-button>
                          </b-tooltip>
                        </div>
                      </b-table-column>
                    </b-table>
                  </div>
                </div>
              </div>
            </section>
          </b-tab-item>
        </b-tabs>
      </tab> -->
    </tabs>
  </section>
</template>

<script>
import Dashboard from "../components/Dashboard";
import Tab from "../components/Tab";
import Tabs from "../components/Tabs";
import { mapGetters, mapActions } from "vuex";
import StaffListComponent from "../components/pim/StaffListComponent";
import ShiftListComponent from "../components/pim/ShiftListComponent";
export default {
  name: "PIM",
  metaInfo() {
    return {
      title: `Personal Information Mmanagement`,
    };
  },
  components: {
    Tab,
    Tabs,
    StaffListComponent,
    ShiftListComponent,
  },
  layout: Dashboard,
  props: {
    staffList: Array,
    jobTitles: Array,
    employmentStatuses: Array,
    branches: Array,
    departments: Array,
    units: Array,
    positions: Array,
    jobCategories: Array,
    workShifts: Array,
  },
  created() {
    this.dispatchStaff({ payload: this.staffList });
    this.dispatchJobTitle({ payload: this.jobTitles });
    this.dispatchEmploymentStatus({ payload: this.employmentStatuses });
    this.dispatchDepartment({ payload: this.departments });
    this.dispatchUnit({ payload: this.units });
    this.dispatchPosition({ payload: this.positions });
    this.dispatchJobCategory({ payload: this.jobCategories });
    this.dispatchWorkShift({ payload: this.workShifts });
  },
  data() {
    return {
      reports: [{ id: "1", name: "PIM Report" }],
    };
  },
  methods: {
    ...mapActions([
      "dispatchUserAccount",
      "dispatchStaff",
      "dispatchJobTitle",
      "dispatchEmploymentStatus",
      "dispatchDepartment",
      "dispatchUnit",
      "dispatchPosition",
      "dispatchJobCategory",
      "dispatchWorkShift",
    ]),
  },
};
</script>

<style lang="sass" scoped>
</style>