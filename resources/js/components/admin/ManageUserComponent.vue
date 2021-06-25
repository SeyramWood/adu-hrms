<template>
  <div>
    <b-tabs type="is-toggle" size="" :animated="false" expanded>
      <b-tab-item label="Staff Account">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleUserForm"
            animation="slide"
            aria-id="querystaff"
          >
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
              aria-controls="querystaff"
            >
              <p class="card-header-title">
                <b-icon type="is-info" pack="fas" icon="plus"></b-icon>
                <span class="has-text-info"> Add New User</span>
              </p>
              <a class="card-header-icon">
                <b-icon
                  type="is-info"
                  pack="fas"
                  :icon="props.open ? 'angle-up' : 'angle-down'"
                ></b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <form @submit.prevent="addUser()">
                  <h5 class="text-main">Full Name</h5>
                  <div class="columns">
                    <div class="column is-3">
                      <b-field
                        label="Last Name"
                        expanded
                        :type="{ 'is-danger': userError.lastName.length > 0 }"
                        :message="userError.lastName"
                      >
                        <b-input
                          expanded
                          v-model="user.lastName"
                          placeholder="Enter last name"
                        ></b-input>
                      </b-field>
                    </div>
                    <div class="column is-3">
                      <b-field
                        label="First Name"
                        expanded
                        :type="{
                          'is-danger': userError.firstName.length > 0,
                        }"
                        :message="userError.firstName"
                      >
                        <b-input
                          expanded
                          v-model="user.firstName"
                          placeholder="Enter first name"
                        ></b-input>
                      </b-field>
                    </div>
                    <div class="column is-3">
                      <b-field
                        label="Middle Name"
                        expanded
                        :type="{
                          'is-danger': userError.middleName.length > 0,
                        }"
                        :message="userError.middleName"
                      >
                        <b-input
                          expanded
                          v-model="user.middleName"
                          placeholder="Enter middle name"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <h5 class="text-main">Login Credentials</h5>
                  <div class="columns">
                    <div class="column is-3">
                      <b-field
                        label="Username"
                        expanded
                        :type="{ 'is-danger': userError.username.length > 0 }"
                        :message="userError.username"
                      >
                        <b-input
                          expanded
                          v-model="user.username"
                          placeholder="Enter email"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <h5 class="text-main">Access Level</h5>
                  <div class="columns">
                    <div class="column is-12">
                      <b-field
                        label="User Role"
                        expanded
                        :type="{ 'is-danger': userError.role.length > 0 }"
                        :message="userError.role"
                      >
                        <div class="block">
                          <b-checkbox
                            v-model="user.role"
                            :native-value="r.role"
                            v-for="(r, i) in getRolePermissions"
                            :key="i"
                            :disabled="r.role === 'ESS'"
                          >
                            {{ r.role }}
                          </b-checkbox>
                        </div>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-12">
                      <b-field
                        label="Status"
                        expanded
                        :type="{ 'is-danger': userError.status.length > 0 }"
                        :message="userError.status"
                      >
                        <div class="block">
                          <b-radio
                            type="is-info"
                            v-model="user.status"
                            name="status"
                            native-value="1"
                          >
                            Enable
                          </b-radio>
                          <b-radio
                            type="is-info"
                            v-model="user.status"
                            name="status"
                            native-value="0"
                          >
                            Disable
                          </b-radio>
                        </div>
                      </b-field>
                    </div>
                  </div>

                  <hr />
                  <b-field class="buttons">
                    <button
                      type="submit"
                      class="button is-success is-light"
                      :disabled="isSubmitting"
                    >
                      {{ isSubmitting ? "Submitting..." : "Add" }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="closeUserForm()"
                      >Cancel</b-button
                    >
                  </b-field>
                </form>
              </div>
            </div>
          </b-collapse>
        </section>
        <section class="b__collapse__section">
          <div class="card">
            <header class="card-header" role="button">
              <article class="table__header">
                <h5 class="table__header__title">User List</h5>
                <section class="table__header__lists">
                  <div
                    class="table__header__lists__item"
                    @click="openQueryForm()"
                  >
                    <b-tooltip label="Query Users." type="is-dark">
                      <b-icon class="icon--wrapper" icon="search"></b-icon>
                    </b-tooltip>
                  </div>
                </section>
              </article>
              <!-- <p class="card-header-title">User List</p>
          <p class="align-center">
            <b-button
              type="is-info is-light"
              pack="fas"
              icon-left="search"
              @click="openQueryForm()"
              >Query Users</b-button
            >
          </p> -->
            </header>
            <div class="card-content">
              <div class="content">
                <section class="b__collapse__section" v-if="toggleQueryForm">
                  <b-collapse
                    class="card"
                    :open="toggleQueryForm"
                    animation="slide"
                    aria-id="querystaff"
                  >
                    <div
                      slot="trigger"
                      slot-scope="props"
                      class="card-header"
                      role="button"
                      aria-controls="querystaff"
                    >
                      <p class="card-header-title">
                        <span class="has-text-info">Query Users</span>
                      </p>

                      <a class="card-header-icon">
                        <b-icon
                          type="is-info"
                          pack="fas"
                          :icon="props.open ? 'angle-up' : 'angle-down'"
                        ></b-icon>
                      </a>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <form action>
                          <div class="columns">
                            <div class="column is-3">
                              <b-field label="Username" expanded>
                                <b-input expanded></b-input>
                              </b-field>
                            </div>
                            <div class="column is-3">
                              <b-field label="Staff Name" expanded>
                                <b-input expanded></b-input>
                              </b-field>
                            </div>
                            <div class="column is-3">
                              <b-field label="User Role" expanded>
                                <b-select expanded>
                                  <option>Full-Time</option>
                                  <option>Part-Time</option>
                                  <option>Other</option>
                                </b-select>
                              </b-field>
                            </div>
                            <div class="column is-3">
                              <b-field label="Status" expanded>
                                <b-select expanded>
                                  <option>Current Staff Only</option>
                                  <option>Current and Past Staff Only</option>
                                  <option>Past Staff Only</option>
                                </b-select>
                              </b-field>
                            </div>
                          </div>
                          <hr />
                          <b-field class="buttons">
                            <b-button class="is-success is-light"
                              >Search</b-button
                            >
                            <b-button class="is-danger is-light"
                              >Cancel</b-button
                            >
                          </b-field>
                        </form>
                      </div>
                    </div>
                  </b-collapse>
                </section>
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="selectedUsers.length > 0 ? false : true"
                  >
                    <template #trigger="{ active }">
                      <b-button
                        type="is-info is-light"
                        label="Actions"
                        pack="fas"
                        :icon-right="active ? 'angle-up' : 'angle-down'"
                      />
                    </template>
                    <b-dropdown-item
                      aria-role="listitem"
                      @click="openAssignRoleForm()"
                      >Assign user role</b-dropdown-item
                    >
                    <b-dropdown-item
                      aria-role="listitem"
                      @click="openAssignStatusForm()"
                      >Assign account status</b-dropdown-item
                    >
                    <b-dropdown-item aria-role="listitem" @click="deleteUsers()"
                      >Delete users</b-dropdown-item
                    >
                  </b-dropdown>
                  <transition name="fade">
                    <form
                      action
                      v-if="showAssignRoleForm && selectedUsers.length > 0"
                    >
                      <b-field label="Choose Role" expanded>
                        <div class="block">
                          <b-checkbox
                            v-model="roleData"
                            :native-value="r.role"
                            v-for="(r, i) in getRolePermissions"
                            :key="i"
                            :disabled="r.role === 'ESS'"
                          >
                            {{ r.role }}
                          </b-checkbox>
                        </div>
                      </b-field>
                      <b-field class="buttons">
                        <b-button
                          class="is-success is-light"
                          @click="assignUserRole()"
                          >Save</b-button
                        >
                        <b-button
                          class="is-danger is-light"
                          @click="cancelAssignForm()"
                          >Cancel</b-button
                        >
                      </b-field>
                    </form>
                    <form
                      action
                      v-if="showAssignStatusForm && selectedUsers.length > 0"
                    >
                      <b-field label="Choose Status" expanded>
                        <div class="block">
                          <b-radio
                            type="is-info"
                            v-model="statusData"
                            name="status"
                            native-value="1"
                          >
                            Enable
                          </b-radio>
                          <b-radio
                            type="is-info"
                            v-model="statusData"
                            name="status"
                            native-value="0"
                          >
                            Disable
                          </b-radio>
                        </div>
                      </b-field>
                      <b-field class="buttons">
                        <b-button
                          class="is-success is-light"
                          @click="assignUserStatus()"
                          >Save</b-button
                        >
                        <b-button
                          class="is-danger is-light"
                          @click="cancelAssignForm()"
                          >Cancel</b-button
                        >
                      </b-field>
                    </form>
                  </transition>
                </section>
                <b-table
                  :data="getUsers.data"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  :checked-rows.sync="selectedUsers"
                  :loading="isLoading"
                  checkable
                  striped
                  hoverable
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column
                    class="is-info"
                    field="id"
                    label="ID"
                    width="40"
                    sortable
                    numeric
                    v-slot="props"
                    >{{ props.row.id }}</b-table-column
                  >

                  <b-table-column
                    field="username"
                    label="Username"
                    sortable
                    v-slot="props"
                    >{{ props.row.email }}</b-table-column
                  >

                  <b-table-column
                    field="staff_name"
                    label="Name"
                    sortable
                    v-slot="props"
                    >{{
                      `${props.row.personal_details.title || ""} ${
                        props.row.personal_details.firstName
                      } ${props.row.personal_details.middleName || ""} ${
                        props.row.personal_details.lastName
                      }`
                    }}</b-table-column
                  >

                  <b-table-column
                    field="user_role"
                    label="User Role"
                    sortable
                    v-slot="props"
                  >
                    <b-tag
                      class="mr-1"
                      type="is-dark"
                      v-for="r in JSON.parse(props.row.role)"
                      :key="r"
                      >{{ r }}</b-tag
                    >
                  </b-table-column>
                  <b-table-column
                    field="status"
                    label="Status"
                    sortable
                    v-slot="props"
                  >
                    <b-tag
                      :type="`${
                        props.row.status === 1 ? 'is-success' : 'is-danger'
                      } is-light`"
                      >{{
                        props.row.status === 1 ? "Enabled" : "Disabled"
                      }}</b-tag
                    >
                  </b-table-column>
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip
                        label="View Profile"
                        size="is-small"
                        type="is-dark"
                      >
                        <inertia-link
                          :href="`/dashboard/ess/${props.row.id}/${props.row.slug}`"
                          preserve-scroll
                          v-if="$page.props.authUser.id !== props.row.id"
                        >
                          <b-button
                            class="is-light"
                            size="is-small"
                            pack="fas"
                            icon-right="eye"
                          ></b-button>
                        </inertia-link>
                        <inertia-link
                          :href="`/dashboard/ess`"
                          preserve-scroll
                          v-else
                        >
                          <b-button
                            class="is-light"
                            size="is-small"
                            pack="fas"
                            icon-right="eye"
                          ></b-button>
                        </inertia-link>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="is-small" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deleteUser(props.row.id)"
                        ></b-button>
                      </b-tooltip>
                    </div>
                  </b-table-column>
                  <template #footer>
                    <paginate
                      :state="getUsers"
                      :dispatch="dispatchUserAccount"
                    />
                  </template>
                  <template #empty v-if="noUserFound">
                    <article class="table__data__notfound">
                      <b-icon icon="database" pack="fas"></b-icon>
                      <strong class="pt-3">Ooops! No user found.</strong>
                    </article>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </section> </b-tab-item
      ><b-tab-item label="Roles & Permissions">
        <section class="b__collapse__section">
          <div class="card">
            <header class="card-header">
              <article class="table__header">
                <h5 class="table__header__title">Roles</h5>
                <section class="table__header__lists">
                  <div class="table__header__lists__item" id="add-new-role">
                    <b-tooltip label="Add new role" type="is-dark">
                      <b-icon class="icon--wrapper" icon="plus"></b-icon>
                    </b-tooltip>
                  </div>
                </section>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <b-table
                  :data="['hphophpo']"
                  :paginated="true"
                  :per-page="100"
                  :current-page="1"
                  :pagination-simple="true"
                  pagination-position="bottom"
                  default-sort-direction="desc"
                  sort-icon="arrow-up"
                  sort-icon-size="is-small"
                  :checked-rows.sync="checkedRoles"
                  checkable
                  hoverable
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column field="role" label="Role" sortable>
                    dsjkgfjkaasg
                  </b-table-column>
                  <b-table-column field="staff" label="Staff" sortable>
                    <div
                      class="role-user"
                      v-for="(member, index) in ['dsdsgds']"
                      :key="index"
                    >
                      <b-button rounded size="" type="is-danger is-light"
                        ><b-icon icon="minus" size="is-small"></b-icon
                      ></b-button>
                      <span>{{ member }}</span>
                    </div>
                    <b-button
                      rounded
                      icon-left="plus"
                      size=""
                      type="is-info is-light"
                      :id="`add-staff-${546546}`"
                      @click="openAddStaffDropper(546546)"
                      >Add
                    </b-button>
                  </b-table-column>
                  <b-table-column
                    field="permissions"
                    label="Permissions"
                    sortable
                  >
                    <div class="block" style="display: block">
                      <b-checkbox
                        v-for="(p, i) in permissions"
                        :native-value="p.id"
                        :key="i"
                        size=""
                        type="is-success"
                      >
                        {{ p }}
                      </b-checkbox>
                    </div>
                    <p>
                      <b-button
                        icon-left="file"
                        rounded
                        size=""
                        type="is-info is-light"
                        @click="savePermissions()"
                      >
                        <span :ref="`abs`">Save</span>
                      </b-button>
                    </p>
                  </b-table-column>
                  <b-table-column field="report-to" label="Report to" sortable>
                    <div
                      class="role-user"
                      v-for="(member, index) in ['dsdsgds']"
                      :key="index"
                    >
                      <b-button rounded size="" type="is-danger is-light"
                        ><b-icon icon="minus" size="is-small"></b-icon
                      ></b-button>
                      <span>{{ member }}</span>
                    </div>
                    <b-button
                      rounded
                      icon-left="plus"
                      size=""
                      type="is-info is-light"
                      :id="`add-staff-${546546}`"
                      @click="openAddStaffDropper(546546)"
                      >Add
                    </b-button>
                  </b-table-column>
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip label="Assign" size="is-small" type="is-dark">
                        <b-button
                          class="is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="user-cog"
                          @click="getStaffToAssign(props.row.id)"
                        ></b-button>
                      </b-tooltip>

                      <b-tooltip
                        label="View Profile"
                        size="is-small"
                        type="is-dark"
                      >
                        <inertia-link
                          :href="`/dashboard/ess/${props.row.id}/${props.row.slug}`"
                          preserve-scroll
                          v-if="$page.props.authUser.id !== props.row.id"
                        >
                          <b-button
                            class="is-light"
                            size="is-small"
                            pack="fas"
                            icon-right="eye"
                          ></b-button>
                        </inertia-link>
                        <inertia-link
                          :href="`/dashboard/ess`"
                          preserve-scroll
                          v-else
                        >
                          <b-button
                            class="is-light"
                            size="is-small"
                            pack="fas"
                            icon-right="eye"
                          ></b-button>
                        </inertia-link>
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
    <dropper
      join="#add-new-role"
      ref="roleDropper"
      @esc-keydown="closeRoleDropper"
      @other-area-clicked="closeRoleDropper"
      class="dropper"
      :z-index="9999"
    >
      <h5 class="text-main py-4">Add New Role</h5>
      <form style="width: 25rem">
        <b-field>
          <b-input
            placeholder="Enter new role"
            type="text"
            class="is-info"
            expanded
          >
          </b-input>
        </b-field>

        <b-field class="buttons pt-4">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingRole"
          >
            {{ isSubmittingRole ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isSubmittingRole"
            @click="closeRoleDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#add-staff-${getDropperId}`"
      ref="addStaffDropper"
      @esc-keydown="closeAddStaffDropper"
      @other-area-clicked="closeAddStaffDropper"
      class="dropper"
      :z-index="9999"
    >
      <h5 class="text-main py-4">Add New Staff</h5>
      <form style="width: 25rem">
        <b-field
          class="expand-input"
          :type="{
            'is-danger': newStaff.errors.length > 0,
          }"
          :message="newStaff.errors"
        >
          <treeselect
            :multiple="true"
            :options="getStaff"
            placeholder="Select staff..."
            v-model="newStaff.value"
          />
        </b-field>
        <b-field class="buttons pt-4">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingRole"
          >
            {{ isSubmittingRole ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isSubmittingRole"
            @click="closeRoleDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Paginate from "../Paginate";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "ManageUserComponent",
  components: { Paginate, Treeselect },
  props: {},
  computed: {
    ...mapGetters(["getUsers", "getRolePermissions"]),
    getDropperId() {
      return this.dropperId.toString();
    },
    getStaff() {
      return this.getUsers.data.map((s) => {
        return {
          id: s.id,
          label: `${s.personal_details.title || ""} ${
            s.personal_details.firstName
          } ${s.personal_details.middleName || ""} ${
            s.personal_details.lastName
          }`,
        };
      });
    },
  },
  beforeMount() {
    this.authUser = this.$page.props.authUser;
  },
  mounted() {
    this.isLoading = true;
    this.$nextTick(() => {
      if (this.getUsers.data.length > 0) {
        this.isLoading = false;
      } else {
        setTimeout(() => {
          this.isLoading = false;
          this.noAppraisalFound = true;
        }, 1000);
      }
    });
  },

  watch: {
    selectedUsers(v) {
      if (v.length === 0) {
        this.showAssignRoleForm = false;
        this.showAssignStatusForm = false;
        this.roleData = ["ESS"];
        this.statusData = "";
      }
    },
  },
  data() {
    return {
      authUser: null,
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      selectedUsers: [],
      checkedRoles: [],
      toggleUserForm: false,
      toggleQueryForm: false,
      showAssignRoleForm: false,
      showAssignStatusForm: false,
      isSubmitting: false,
      noUserFound: false,
      isLoading: false,
      isSubmittingRole: false,
      dropperId: "",
      newStaff: {
        value: [],
        errors: [],
      },
      user: {
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        role: ["ESS"],
        status: "1",
      },
      userPersonalDetails: {
        avatar: "",
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        staffId: "",
        otherId: "",
        birthDate: "",
        maritalStatus: "",
        nationality: "",
        gender: "",
        attachments: [],
      },
      userError: {
        firstName: [],
        middleName: [],
        lastName: [],
        username: [],
        password: [],
        confirmPassword: [],
        role: [],
        status: [],
      },

      roleData: ["ESS"],
      statusData: "",
      permissions: ["Create", "Edit", "Delete"],
    };
  },
  methods: {
    ...mapActions(["dispatchUserAccount", "dispatchStaffCount"]),
    openRoleDropper() {
      const dropper = this.$refs.roleDropper;
      // this.positionDropperId = data.id;
      if (dropper) {
        dropper.open();
      }
    },
    closeRoleDropper() {
      const dropper = this.$refs.roleDropper;
      if (dropper) {
        dropper.close();
      }
    },
    openAddStaffDropper(index) {
      const dropper = this.$refs.addStaffDropper;
      this.dropperId = index;
      console.log(dropper);
      if (dropper) {
        dropper.open();
      }
    },
    closeAddStaffDropper() {
      const dropper = this.$refs.addStaffDropper;
      if (dropper) {
        dropper.close();
      }
    },
    closeUserForm() {
      this.toggleUserForm = !this.toggleUserForm;
      this.setUserErrors();
    },
    openQueryForm() {
      this.toggleQueryForm = !this.toggleQueryForm;
    },
    openAssignRoleForm() {
      this.showAssignStatusForm = false;
      this.showAssignRoleForm = !this.showAssignRoleForm;
    },
    openAssignStatusForm() {
      this.showAssignRoleForm = false;
      this.showAssignStatusForm = !this.showAssignStatusForm;
    },
    cancelAssignForm() {
      this.showAssignRoleForm = false;
      this.showAssignRoleForm = false;
      this.selectedUsers = [];
      this.roleData = ["ESS"];
      this.statusData = "";
    },
    addUser() {
      this.setUserErrors();
      this.isSubmitting = true;
      const data = {
        first_name: this.user.firstName,
        middle_name: this.user.middleName,
        last_name: this.user.lastName,
        email: this.user.username,
        role: this.user.role,
        status: this.user.status,
        userPersonalDetails: {
          ...this.userPersonalDetails,
          firstName: this.user.firstName,
          middleName: this.user.middleName,
          lastName: this.user.lastName,
        },
      };
      this.$axios
        .post("/dashboard/register", data)
        .then((res) => {
          this.clearUserForm();
          if (res.status === 200) {
            this.dispatchUserAccount({
              type: "ADD_NEW_USER",
              payload: res.data.user,
            });
            this.dispatchStaffCount({
              payload: res.data.staffCount,
            });
            setTimeout(() => {
              this.snackbar("User added successfully.", "is-success");
              this.isSubmitting = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setUserErrors(err.response.data.errors);
              this.isSubmitting = false;
            }, 1000);
          } else {
            console.log(err);
          }
        });
    },
    assignUserRole() {
      const ids = this.selectedUsers.map((r) => r.id);
      this.$axios
        .put(`/dashboard/assign-users-role`, { ids, role: this.roleData })
        .then((res) => {
          if (res.data.assigned) {
            this.dispatchUserAccount({
              type: "ASSIGN_ROLE",
              payload: { ids, role: JSON.stringify(this.roleData) },
            });
            this.selectedUsers = [];
            this.roleData = ["ESS"];
            setTimeout(() => {
              this.snackbar("Role assigned successfully.", "is-success");
            }, 1000);
          }
        })
        .catch((err) => {
          setTimeout(() => {
            this.snackbar("There was a problem assigning role.", "is-danger");
          }, 1000);
        });
    },
    assignUserStatus() {
      const ids = this.selectedUsers.map((r) => r.id);
      this.$axios
        .put(`/dashboard/assign-users-status`, {
          ids,
          status: this.statusData,
        })
        .then((res) => {
          if (res.data.assigned) {
            this.dispatchUserAccount({
              type: "ASSIGN_STATUS",
              payload: { ids, status: this.statusData },
            });
            this.selectedUsers = [];
            this.statusData = "";
            setTimeout(() => {
              this.snackbar("Status assigned successfully.", "is-success");
            }, 1000);
          }
        })
        .catch((err) => {
          setTimeout(() => {
            this.snackbar("There was a problem assigning role.", "is-danger");
          }, 1000);
        });
    },
    deleteUser(id) {
      this.$confirm({
        auth: true,
        message: `Are you sure you want to delete this user?`,
        button: {
          no: "No",
          yes: "Yes",
        },
        callback: (confirm, password) => {
          if (confirm) {
            this.$axios
              .get(
                `/dashboard/check-user-password/${this.authUser.id}/${password}`
              )
              .then((res) => {
                if (res.data.confirmed) {
                  this.$axios
                    .delete(`/dashboard/delete-user/${id}`)
                    .then((res) => {
                      this.dispatchUserAccount({
                        type: "DELETE_USER",
                        payload: id,
                      });
                      this.dispatchStaffCount({
                        payload: res.data.staffCount,
                      });
                      setTimeout(() => {
                        this.snackbar(
                          "User deleted successfully.",
                          "is-success"
                        );
                      }, 1000);
                    })
                    .catch((err) => {
                      setTimeout(() => {
                        this.toast(
                          "There was a problem deleting user.",
                          "is-danger"
                        );
                      }, 1000);
                    });
                } else {
                  setTimeout(() => {
                    this.toast("Your password is incorrect!", "is-danger");
                  }, 1000);
                }
              });
          }
        },
      });
    },
    deleteUsers() {
      const ids = this.selectedUsers.map((r) => r.id);
      this.$confirm({
        auth: true,
        message: `Are you sure you want to delete this user?`,
        button: {
          no: "No",
          yes: "Yes",
        },
        callback: (confirm, password) => {
          if (confirm) {
            this.$axios
              .get(
                `/dashboard/check-user-password/${this.authUser.id}/${password}`
              )
              .then((res) => {
                if (res.data.confirmed) {
                  this.$axios
                    .delete(`/dashboard/delete-users/${JSON.stringify(ids)}`)
                    .then((res) => {
                      this.dispatchUserAccount({
                        type: "DELETE_USERS",
                        payload: ids,
                      });
                      this.selectedUsers = [];
                      setTimeout(() => {
                        this.snackbar(
                          "User deleted successfully.",
                          "is-success"
                        );
                      }, 1000);
                    })
                    .catch((err) => {
                      setTimeout(() => {
                        this.snackbar(
                          "There was a problem deleting user.",
                          "is-danger"
                        );
                      }, 1000);
                    });
                } else {
                  setTimeout(() => {
                    this.snackbar("Your password is incorrect!", "is-danger");
                  }, 1000);
                }
              });
          }
        },
      });
    },

    setUserErrors(error = {}) {
      this.userError = {
        firstName: error.first_name || [],
        middleName: error.middle_name || [],
        lastName: error.last_name || [],
        username: error.email || [],
        role: error.role || [],
        status: error.status || [],
      };
    },
    clearUserForm() {
      this.user = {
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        role: ["ESS"],
        status: "1",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.button.is-rounded {
  border-radius: 290486px;
  padding-bottom: calc(0.2em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.2em - 1px);
}
.role-user {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1rem 1rem 0;
  & > span {
    margin-left: 1rem;
  }
}
</style>