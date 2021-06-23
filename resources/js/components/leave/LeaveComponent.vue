<template>
  <div>
    <section class="main__content">
      <tabs stickyTab="main__content__sticky">
        <!-- <tab label="User Management">
          <section>
            <section class="b__collapse__section">
              <b-collapse class="card" :open="false" animation="slide" aria-id="querystaff">
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="querystaff"
                >
                  <p class="card-header-title">Add Users</p>
                  <a class="card-header-icon">
                    <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <form action>
                      <div class="columns">
                        <div class="column is-3">
                          <b-field label="Username" expanded>
                            <b-input size="is-small" expanded></b-input>
                          </b-field>
                        </div>
                        <div class="column is-3">
                          <b-field label="Staff Name" expanded>
                            <b-input size="is-small" expanded></b-input>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-3">
                          <b-field label="User Role" expanded>
                            <b-select size="is-small" expanded>
                              <option>Full-Time</option>
                              <option>Part-Time</option>
                              <option>Other</option>
                            </b-select>
                          </b-field>
                        </div>
                        <div class="column is-3">
                          <b-field label="Status" expanded>
                            <b-select size="is-small" expanded>
                              <option>Current Staff Only</option>
                              <option>Current and Past Staff Only</option>
                              <option>Past Staff Only</option>
                            </b-select>
                          </b-field>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column is-3">
                          <b-field label="Password" expanded>
                            <b-input type="password" size="is-small" expanded></b-input>
                          </b-field>
                        </div>
                        <div class="column is-3">
                          <b-field label="Confirm Password" expanded>
                            <b-input type="password" size="is-small" expanded></b-input>
                          </b-field>
                        </div>
                      </div>
                      <hr />
                      <b-field class="buttons">
                        <b-button class="is-success is-light">Add</b-button>
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
                  <p class="card-header-title">User List</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <section class="b__collapse__section">
                      <b-collapse class="card" :open="false" animation="slide" aria-id="querystaff">
                        <div
                          slot="trigger"
                          slot-scope="props"
                          class="card-header"
                          role="button"
                          aria-controls="querystaff"
                        >
                          <p class="card-header-title">Query Users</p>
                          <a class="card-header-icon">
                            <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
                          </a>
                        </div>
                        <div class="card-content">
                          <div class="content">
                            <form action>
                              <div class="columns">
                                <div class="column is-3">
                                  <b-field label="Username" expanded>
                                    <b-input size="is-small" expanded></b-input>
                                  </b-field>
                                </div>
                                <div class="column is-3">
                                  <b-field label="Staff Name" expanded>
                                    <b-input size="is-small" expanded></b-input>
                                  </b-field>
                                </div>
                                <div class="column is-3">
                                  <b-field label="User Role" expanded>
                                    <b-select size="is-small" expanded>
                                      <option>Full-Time</option>
                                      <option>Part-Time</option>
                                      <option>Other</option>
                                    </b-select>
                                  </b-field>
                                </div>
                                <div class="column is-3">
                                  <b-field label="Status" expanded>
                                    <b-select size="is-small" expanded>
                                      <option>Current Staff Only</option>
                                      <option>Current and Past Staff Only</option>
                                      <option>Past Staff Only</option>
                                    </b-select>
                                  </b-field>
                                </div>
                              </div>
                              <hr />
                              <b-field class="buttons">
                                <b-button class="is-success is-light">Search</b-button>
                                <b-button class="is-danger is-light">Cancel</b-button>
                              </b-field>
                            </form>
                          </div>
                        </div>
                      </b-collapse>
                    </section>

                    <b-table
                      :data="data"
                      :paginated="isPaginated"
                      :per-page="perPage"
                      :current-page="currentPage"
                      :pagination-simple="isPaginationSimple"
                      :pagination-position="paginationPosition"
                      :default-sort-direction="defaultSortDirection"
                      :sort-icon="sortIcon"
                      :sort-icon-size="sortIconSize"
                      :checked-rows.sync="checkedRows"
                      checkable
                      default-sort="id"
                      aria-next-label="Next page"
                      aria-previous-label="Previous page"
                      aria-page-label="Page"
                      aria-current-label="Current page"
                    >
                      <b-table-column
                        field="id"
                        label="ID"
                        width="40"
                        sortable
                        numeric
                        v-slot="props"
                      >{{ props.row.id }}</b-table-column>

                      <b-table-column
                        field="username"
                        label="Username"
                        sortable
                        v-slot="props"
                      >{{ props.row.first_name }}</b-table-column>

                      <b-table-column
                        field="staff_name"
                        label="Staff Name"
                        sortable
                        v-slot="props"
                      >{{ props.row.last_name }}</b-table-column>

                      <b-table-column field="user_role" label="User Role" sortable v-slot="props">
                        <span>{{ props.row.job_title }}</span>
                      </b-table-column>

                      <b-table-column
                        field="employment_status"
                        label="Employment Status"
                        sortable
                        v-slot="props"
                      >
                        <span>{{ props.row.employment_status }}</span>
                      </b-table-column>
                      <b-table-column field="status" label="Status" sortable v-slot="props">
                        <span>{{ props.row.department }}</span>
                      </b-table-column>
                      <b-table-column field="actions" label="Actions">
                        <div class="b-tooltips">
                          <b-tooltip label="View" size="is-small">
                            <b-button class="is-light" size="is-small" pack="fas" icon-right="eye"></b-button>
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
          </section>

          <section></section>
        </tab>-->
        <tab label="Configurations">
          <b-tabs type="is-toggle" size="is-small" :animated="false" expanded>
            <b-tab-item label="Leave Type">
              <section class="b__collapse__section">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">Leave Types</p>
                    <span class="card-header-icon">
                      <b-tooltip label="Add new leave policy" type="is-dark" position="is-left">
                        <b-button
                          class="is-info is-light"
                          pack="fas"
                          icon-right="plus"
                          @click="leavePolicyModal=true"
                        ></b-button>
                      </b-tooltip>
                    </span>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <b-table
                        :data="getLeaves"
                        :paginated="isPaginated"
                        :per-page="perPage"
                        :current-page="currentPage"
                        :pagination-simple="isPaginationSimple"
                        :pagination-position="paginationPosition"
                        :default-sort-direction="defaultSortDirection"
                        :sort-icon="sortIcon"
                        :sort-icon-size="sortIconSize"
                        default-sort="name"
                        aria-next-label="Next page"
                        aria-previous-label="Previous page"
                        aria-page-label="Page"
                        aria-current-label="Current page"
                      >
                        <b-table-column
                          field="name"
                          label="Name"
                          sortable
                          v-slot="props"
                        >{{ props.row.name }}</b-table-column>

                        <b-table-column field="type" label="Type" sortable v-slot="props">
                          <span class="is-capitalized">{{ props.row.type }}</span>
                        </b-table-column>

                        <b-table-column field="count" label="Maximum Leave" sortable v-slot="props">
                          <span>{{ props.row.leave_count +' '+ props.row.unit}}</span>
                        </b-table-column>
                        <b-table-column field="role" label="Role" sortable v-slot="props">
                          <span class="is-capitalized">{{ props.row.applicable['role'] }}</span>
                        </b-table-column>
                        <b-table-column field="gender" label="Gender" sortable v-slot="props">
                          <span class="is-capitalized">{{ props.row.applicable['gender'] }}</span>
                        </b-table-column>
                        <b-table-column
                          field="maritalStatus"
                          label="Marital Status"
                          sortable
                          v-slot="props"
                        >
                          <span class="is-capitalized">{{ props.row.applicable['maritalStatus'] }}</span>
                        </b-table-column>
                        <b-table-column field="actions" label="Actions" v-slot="props">
                          <div class="b-tooltips">
                            <b-tooltip label="Edit" type="is-dark">
                              <b-button
                                class="is-info is-light"
                                size="is-small"
                                pack="fas"
                                icon-right="pen"
                                @click="setEditLeave(props.row)"
                              ></b-button>
                            </b-tooltip>
                            <b-tooltip label="Delete" type="is-dark">
                              <b-button
                                class="is-danger is-light"
                                size="is-small"
                                pack="fas"
                                icon-right="trash"
                                @click="deleteLeaveType(props.row.id)"
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
            <b-tab-item label="Initial Balance">
              <section class="b__collapse__section">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">Iniatial Balance</p>
                    <span class="card-header-icon">
                      <b-tooltip label="Add new leave policy" type="is-dark" position="is-left">
                        <b-button
                          class="is-info is-light"
                          pack="fas"
                          icon-right="plus"
                          @click="leavePolicyModal=true"
                        ></b-button>
                      </b-tooltip>
                    </span>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <b-table
                        :data="getAdminLeaveBalance"
                        :paginated="isPaginated"
                        :per-page="perPage"
                        :current-page="currentPage"
                        :pagination-simple="isPaginationSimple"
                        :pagination-position="paginationPosition"
                        :default-sort-direction="defaultSortDirection"
                        :sort-icon="sortIcon"
                        :sort-icon-size="sortIconSize"
                        default-sort="name"
                        aria-next-label="Next page"
                        aria-previous-label="Previous page"
                        aria-page-label="Page"
                        aria-current-label="Current page"
                      >
                        <b-table-column field="name" label="Staff" sortable v-slot="props">
                          <div style="display:flex;justify-content:flex-start;align-items:center">
                            <span style="margin-right:.5rem" v-if="props.row.avatar">
                              <img
                                :src="`/storage/avatar/${props.row.avatar}`"
                                alt="avatar"
                                srcset
                                style="border-radius:100px;width:40px;height:40px"
                              />
                            </span>
                            <span class="is-capitalized">{{ props.row.slug.split('-').join(' ') }}</span>
                          </div>
                        </b-table-column>

                        <b-table-column field="type" label="Balance" sortable v-slot="props">
                          <div
                            class
                            v-for="(entitlement, index) in props.row.entitlement"
                            :key="index"
                            style="display:flex;justify-content:flex-start;align-items:center"
                          >
                            <span style="width:70%;">{{ `${entitlement.name}` }}</span>
                            <span style="width:30%;">{{ `${entitlement.accrual}` }}</span>
                          </div>
                        </b-table-column>

                        <!-- <b-table-column field="count" label="Minimum Leave" sortable v-slot="props">
                          <span>{{ props.row.leave_count +' '+ props.row.unit}}</span>
                        </b-table-column>
                        <b-table-column field="role" label="Role" sortable v-slot="props">
                          <span class="is-capitalized">{{ props.row.applicable['role'] }}</span>
                        </b-table-column>
                        <b-table-column field="gender" label="Gender" sortable v-slot="props">
                          <span class="is-capitalized">{{ props.row.applicable['gender'] }}</span>
                        </b-table-column>
                        <b-table-column
                          field="maritalStatus"
                          label="Marital Status"
                          sortable
                          v-slot="props"
                        >
                          <span class="is-capitalized">{{ props.row.applicable['maritalStatus'] }}</span>
                        </b-table-column>
                        <b-table-column field="actions" label="Actions">
                          <div class="b-tooltips">
                            <b-tooltip label="Edit" type="is-dark">
                              <b-button
                                class="is-info is-light"
                                size="is-small"
                                pack="fas"
                                icon-right="pen"
                              ></b-button>
                            </b-tooltip>
                            <b-tooltip label="Delete" type="is-dark">
                              <b-button
                                class="is-danger is-light"
                                size="is-small"
                                pack="fas"
                                icon-right="trash"
                              ></b-button>
                            </b-tooltip>
                          </div>
                        </b-table-column>-->
                      </b-table>
                    </div>
                  </div>
                </div>
              </section>
            </b-tab-item>
            <!-- <b-tab-item label="Customize Entitltment"></b-tab-item>
            <b-tab-item label="General Configurations"></b-tab-item>-->
          </b-tabs>
        </tab>
        <tab label="Reports">
          <b-tabs type="is-toggle" size="is-small" :animated="false" expanded>
            <b-tab-item label="Genaral Information">
              <section class="b__collapse__section">
                <b-collapse class="card" animation="slide" aria-id="addreason">
                  <div
                    slot="trigger"
                    slot-scope="props"
                    class="card-header"
                    role="button"
                    aria-controls="addreason"
                  >
                    <p class="card-header-title">Genaral Information</p>
                    <a class="card-header-icon">
                      <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
                    </a>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <!-- <form action>
                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Organization Name</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded></b-input>
                              </div>
                            </div>
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Number of Staff</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded value="20"></b-input>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">TIN</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded></b-input>
                              </div>
                            </div>
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Registraion Number</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded></b-input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Phone</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded></b-input>
                              </div>
                            </div>
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Email</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded></b-input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Address</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded></b-input>
                              </div>
                            </div>
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">City</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded></b-input>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Region</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded></b-input>
                              </div>
                            </div>
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">District</label>
                              </div>
                              <div class="column is-8">
                                <b-input size="is-small" expanded></b-input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <b-field class="buttons">
                          <b-button class="is-success is-light">Save</b-button>
                          <b-button class="is-danger is-light">Cancel</b-button>
                        </b-field>
                      </form>-->
                    </div>
                  </div>
                </b-collapse>
              </section>
            </b-tab-item>
            <b-tab-item label="Locations">
              <section class="b__collapse__section">
                <b-collapse class="card" :open="false" animation="slide" aria-id="addreason">
                  <div
                    slot="trigger"
                    slot-scope="props"
                    class="card-header"
                    role="button"
                    aria-controls="addreason"
                  >
                    <p class="card-header-title">Add Location</p>
                    <a class="card-header-icon">
                      <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
                    </a>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <form action>
                        <div class="columns">
                          <div class="column is-2">
                            <label class="label">Area Name</label>
                          </div>
                          <div class="column is-6">
                            <b-input size="is-small" expanded></b-input>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-2">
                            <label class="label">City</label>
                          </div>
                          <div class="column is-6">
                            <b-input size="is-small" expanded></b-input>
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
                    <p class="card-header-title">Locations</p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <!-- <b-table :data="[]">
                        <b-table-column
                          field="name"
                          label="Name"
                          sortable
                          v-slot="props"
                        >{{ props.row.name }}</b-table-column>
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
                      </b-table>-->
                    </div>
                  </div>
                </div>
              </section>
            </b-tab-item>
          </b-tabs>
        </tab>
        <!-- <tab label="Qualifications">
          <b-tabs type="is-toggle" size="is-small" :animated="false" expanded>
            <b-tab-item label="Skills"></b-tab-item>
            <b-tab-item label="Education"></b-tab-item>
            <b-tab-item label="Languages"></b-tab-item>
            <b-tab-item label="Memberships"></b-tab-item>
          </b-tabs>
        </tab>
        <tab label="Reports">
          <section class="b__collapse__section">
            <b-collapse class="card" :open="false" animation="slide" aria-id="definereport">
              <div
                slot="trigger"
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="definereport"
              >
                <p class="card-header-title">Generate Report</p>
                <a class="card-header-icon">
                  <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
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
                            <b-icon size="is-small" pack="fas" icon="times" type="is-danger"></b-icon>
                            <span>Persoanal Details (Include header)</span>
                            <b-checkbox size="is-small"></b-checkbox>
                          </span>
                          <ul class="report__display__fields__list__deep">
                            <li class="report__display__fields__list__deep__list">
                              <b-icon size="is-small" pack="fas" icon="times" type="is-danger"></b-icon>
                              <span>First Name</span>
                            </li>
                            <li class="report__display__fields__list__deep__list">
                              <b-icon size="is-small" pack="fas" icon="times" type="is-danger"></b-icon>
                              <span>Last Name</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul class="report__display__fields">
                        <li class="report__display__fields__list">
                          <span>
                            <b-icon size="is-small" pack="fas" icon="times" type="is-danger"></b-icon>
                            <span>Skills (Include header)</span>
                            <b-checkbox size="is-small"></b-checkbox>
                          </span>
                          <ul class="report__display__fields__list__deep">
                            <li class="report__display__fields__list__deep__list">
                              <b-icon size="is-small" pack="fas" icon="times" type="is-danger"></b-icon>
                              <span>Skill</span>
                            </li>
                            <li class="report__display__fields__list__deep__list">
                              <b-icon size="is-small" pack="fas" icon="times" type="is-danger"></b-icon>
                              <span>Skill</span>
                            </li>
                            <li class="report__display__fields__list__deep__list">
                              <b-icon size="is-small" pack="fas" icon="times" type="is-danger"></b-icon>
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
                        <b-input placeholder="Search..." pack="fas" icon="search" size="is-small" />
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
                    >{{ props.row.id }}</b-table-column>
                    <b-table-column
                      field="name"
                      label="Name"
                      sortable
                      v-slot="props"
                    >{{ props.row.name }}</b-table-column>
                    <b-table-column field="actions" label="Actions">
                      <div class="buttons">
                        <b-button class="is-light" size="is-small" pack="fas" icon-right="eye">View</b-button>
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                        >Edit</b-button>
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                        >Delete</b-button>
                      </div>
                    </b-table-column>
                  </b-table>
                </div>
              </div>
            </div>
          </section>
        </tab>
        <tab label="Configurations">
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
                      <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
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
                        >{{ props.row.id }}</b-table-column>
                        <b-table-column
                          field="name"
                          label="Name"
                          sortable
                          v-slot="props"
                        >{{ props.row.name }}</b-table-column>
                        <b-table-column field="actions" label="Actions">
                          <div class="buttons">
                            <b-button
                              class="is-info is-light"
                              size="is-small"
                              pack="fas"
                              icon-right="pen"
                            >Edit</b-button>
                            <b-button
                              class="is-danger is-light"
                              size="is-small"
                              pack="fas"
                              icon-right="trash"
                            >Delete</b-button>
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
                <b-collapse class="card" :open="false" animation="slide" aria-id="addreason">
                  <div
                    slot="trigger"
                    slot-scope="props"
                    class="card-header"
                    role="button"
                    aria-controls="addreason"
                  >
                    <p class="card-header-title">Add Termination Reasons</p>
                    <a class="card-header-icon">
                      <b-icon pack="fas" :icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
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
                        >{{ props.row.id }}</b-table-column>
                        <b-table-column
                          field="name"
                          label="Name"
                          sortable
                          v-slot="props"
                        >{{ props.row.name }}</b-table-column>
                        <b-table-column field="actions" label="Actions">
                          <div class="buttons">
                            <b-button
                              class="is-info is-light"
                              size="is-small"
                              pack="fas"
                              icon-right="pen"
                            >Edit</b-button>
                            <b-button
                              class="is-danger is-light"
                              size="is-small"
                              pack="fas"
                              icon-right="trash"
                            >Delete</b-button>
                          </div>
                        </b-table-column>
                      </b-table>
                    </div>
                  </div>
                </div>
              </section>
            </b-tab-item>
          </b-tabs>
        </tab>-->
      </tabs>
    </section>

    <b-modal
      v-model="leavePolicyModal"
      has-modal-card
      trap-focus
      :destroyed-on-hide="false"
      arial-role="dialog"
      arial-modal
    >
      <template #default="props">
        <LeavePolicyModalComponent
          @close="props.close"
          @toggleMethods="setLeaveTypeSubmitMethod = $event"
          :leaveType="leaveType"
          :setLeaveTypeSubmitMethod="setLeaveTypeSubmitMethod"
        />
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Tab from "../../Tab";
import Tabs from "../../Tabs";
import LeavePolicyModalComponent from "../admin/LeavePolicyModalComponent";
export default {
  name: "AdminComponent",
  components: {
    Tab,
    Tabs,
    LeavePolicyModalComponent,
  },
  computed: {
    ...mapGetters(["getLeaves", "getAdminLeaveBalance"]),
  },
  created() {
    this.fetchLeaves();
    this.fetchAdminLeaveBalance();
  },
  data() {
    return {
      tabIndex: 0,
      leavePolicyModal: false,
      time: new Date(),
      isPaginated: true,
      isPaginationSimple: true,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 5,
      files: [],
      setLeaveTypeSubmitMethod: false,
      leaveType: {
        name: "",
        type: "paid",
        unit: "days",
        description: "",
        applicableFor: {
          for: "role",
          role: "",
          gender: "all",
          maritalStatus: "all",
        },
        entitlement: {
          period: "",
          on: "",
          for: "all",
          leaveCount: "",
        },
      },
    };
  },
  methods: {
    ...mapActions([
      "fetchLeaves",
      "fetchLeaveBalance",
      "fetchAdminLeaveBalance",
    ]),
    deleteFile(index) {
      this.files.splice(index, 1);
    },
    setEditLeave(leave) {
      this.leaveType["id"] = leave.id;
      this.leaveType.name = leave.name;
      this.leaveType.type = leave.type;
      this.leaveType.unit = leave.unit;
      this.leaveType.description = leave.description;
      this.leaveType.applicableFor.for = leave.applicable.for;
      this.leaveType.applicableFor.role = leave.applicable.role;
      this.leaveType.applicableFor.gender = leave.applicable.gender;
      this.leaveType.applicableFor.maritalStatus =
        leave.applicable.maritalStatus;
      this.leaveType.entitlement.period = leave.entitlement.period;
      this.leaveType.entitlement.on = leave.entitlement.on;
      this.leaveType.entitlement.for = leave.entitlement.for;
      this.leaveType.entitlement.leaveCount = leave.entitlement.leaveCount;
      this.setLeaveTypeSubmitMethod = true;
      this.leavePolicyModal = true;
    },
    deleteLeaveType(id) {
      this.$axios
        .post(`/dashboard/delete-leave-type/${id}`)
        .then((res) => {
          setTimeout(() => {
            this.toast("Leave type deleted successfully", "is-dark");
            this.fetchAdminLeaveBalance();
            this.fetchLeaves();
          }, 1000);
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              console.log(err);
            }, 1000);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.is-capitalized {
  text-transform: capitalize;
}
</style>
