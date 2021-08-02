<template>
  <div>
    <b-tabs type="is-toggle" size="" :animated="false" expanded>
      <b-tab-item label="Staff Account">
        <section class="b__collapse__section" v-if="isPermission('create')">
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
                  <h5 class="text-main">Account Status</h5>
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
                      @click="openAssignStatusForm()"
                      :disabled="!isPermission('update')"
                      >Assign account status</b-dropdown-item
                    >
                    <b-dropdown-item
                      aria-role="listitem"
                      @click="deleteUsers()"
                      :disabled="!isPermission('delete')"
                      >Delete users</b-dropdown-item
                    >
                  </b-dropdown>
                  <transition name="fade">
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
                    field="personal_details.avatar"
                    label="Avatar"
                    sortable
                    v-slot="props"
                    ><figure class="table-avatar">
                      <img
                        class="is-rounded"
                        :src="`/storage/avatar/${props.row.personal_details.avatar}`"
                      /></figure
                  ></b-table-column>

                  <b-table-column
                    field="email"
                    label="Username"
                    sortable
                    v-slot="props"
                    >{{ props.row.email }}</b-table-column
                  >

                  <b-table-column
                    field="personal_details.lastName"
                    label="Name"
                    sortable
                    v-slot="props"
                    >{{
                      getFullName(props.row.personal_details)
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
                      v-for="r in JSON.parse(props.row.roles)"
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
                            :disabled="!isPermission('read')"
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
                            :disabled="!isPermission('read')"
                          ></b-button>
                        </inertia-link>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="is-small" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          :disabled="!isPermission('delete')"
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
                      <strong class="pt-3">Ooops! No staff found.</strong>
                    </article>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </section>
      </b-tab-item>
      <b-tab-item label="Roles & Permissions">
        <section class="b__collapse__section">
          <div class="card">
            <header class="card-header">
              <article class="table__header">
                <h5 class="table__header__title">Roles</h5>
                <section class="table__header__lists">
                  <div
                    class="table__header__lists__item"
                    id="add-new-role"
                    v-if="isPermission('create')"
                  >
                    <b-tooltip label="Add new role" type="is-dark">
                      <b-icon class="icon--wrapper" icon="plus"></b-icon>
                    </b-tooltip>
                  </div>
                </section>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="selectedRoles.length > 0 ? false : true"
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
                      @click="deleteRoles()"
                      :disabled="!isPermission('delete')"
                      >Delete roles</b-dropdown-item
                    >
                  </b-dropdown>
                </section>
                <b-table
                  :data="getRoles"
                  :paginated="true"
                  :per-page="100"
                  :current-page="1"
                  :pagination-simple="true"
                  pagination-position="bottom"
                  default-sort-direction="desc"
                  sort-icon="arrow-up"
                  sort-icon-size="is-small"
                  :checked-rows.sync="selectedRoles"
                  checkable
                  hoverable
                  default-sort="id"
                  aria-next-label="Next page"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-current-label="Current page"
                >
                  <b-table-column
                    field="role"
                    label="Role"
                    sortable
                    v-slot="props"
                  >
                    {{ props.row.role }}
                  </b-table-column>
                  <b-table-column
                    field="staff"
                    label="Staff"
                    sortable
                    v-slot="props"
                  >
                    <div
                      class="role-user"
                      v-for="(staff, index) in props.row.staff"
                      :key="index"
                    >
                      <b-button
                        rounded
                        size=""
                        type="is-danger is-light"
                        @click="
                          deleteRoleUser({
                            staff: staff.user_id,
                            role: props.row.id,
                          })
                        "
                        :disabled="!isPermission('delete')"
                        ><b-icon icon="minus" size="is-small"></b-icon
                      ></b-button>
                      <span>{{ getFullName(staff) }}</span>
                    </div>
                    <b-button
                      rounded
                      icon-left="plus"
                      size=""
                      type="is-info is-light"
                      :id="`role-user-${getDropperId}`"
                      @click="openRoleUserDropper(props.row.id)"
                      :disabled="!isPermission('create')"
                      >Add
                    </b-button>
                  </b-table-column>
                  <b-table-column
                    field="permissions"
                    label="Permissions"
                    sortable
                    width="250"
                    v-slot="props"
                  >
                    <div class="block" style="margin-bottom: -0.02rem">
                      <b-tag
                        v-for="p in props.row.permissions.page"
                        type="is-success"
                        :key="p"
                        class="mr-2"
                      >
                        {{ p }}
                      </b-tag>
                    </div>
                    <div class="block" style="margin-bottom: -0.02rem">
                      <b-tag
                        v-for="t in props.row.permissions.tab"
                        type="is-success"
                        :key="t"
                        class="mr-2"
                      >
                        {{ t }}
                      </b-tag>
                    </div>
                    <div class="block" style="margin-bottom: -0.02rem">
                      <b-tag
                        v-for="d in props.row.permissions.other"
                        type="is-success"
                        :key="d"
                        class="mr-2"
                      >
                        {{ d }}
                      </b-tag>
                    </div>
                    <div class="block" style="margin-bottom: -0.02rem">
                      <b-tag
                        v-for="crud in props.row.permissions.crud"
                        type="is-success"
                        :key="crud"
                        class="mr-2"
                      >
                        {{ crud }}
                      </b-tag>
                    </div>
                    <div class="block">
                      <b-tag
                        v-for="org in props.row.permissions.organization"
                        type="is-success"
                        :key="org"
                        class="mr-2"
                      >
                        {{ org }}
                      </b-tag>
                    </div>
                    <p>
                      <b-button
                        icon-left="plus"
                        rounded
                        size=""
                        type="is-info is-light"
                        @click="addPermission(props.row)"
                        :disabled="!isPermission('create')"
                      >
                        <span :ref="`abs`">Add</span>
                      </b-button>
                    </p>
                  </b-table-column>
                  <b-table-column
                    field="report-to"
                    label="Report to"
                    sortable
                    v-slot="props"
                  >
                    <div
                      class="role-user"
                      v-for="(staff, index) in props.row.report_to"
                      :key="index"
                    >
                      <b-button
                        rounded
                        size=""
                        type="is-danger is-light"
                        @click="
                          removeReportToStaff({
                            staff: staff.user_id,
                            role: props.row.id,
                          })
                        "
                        ><b-icon icon="minus" size="is-small"></b-icon
                      ></b-button>
                      <span>{{ getFullName(staff) }}</span>
                    </div>
                    <b-button
                      rounded
                      icon-left="plus"
                      size=""
                      type="is-info is-light"
                      :id="`report-to-role-${getReportToDropperId}`"
                      @click="openReportToDropper(props.row)"
                      :disabled="!isPermission('create')"
                      >Add
                    </b-button>
                  </b-table-column>
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip
                        label="Edit role"
                        size="is-small"
                        type="is-dark"
                      >
                        <b-button
                          class="is-light is-info"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                          :id="`edit-role-${getEditRoleDropperId}`"
                          @click="openEditRoleDropper(props.row)"
                          :disabled="!isPermission('update')"
                        ></b-button>
                      </b-tooltip>

                      <b-tooltip
                        label="Delete role"
                        size="is-small"
                        type="is-dark"
                      >
                        <b-button
                          class="is-light is-danger"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deleteRole(props.row.id)"
                          :disabled="!isPermission('delete')"
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
    <dropper
      join="#add-new-role"
      ref="roleDropper"
      @esc-keydown="closeRoleDropper"
      @other-area-clicked="closeRoleDropper"
      class="dropper"
      :z-index="9999"
    >
      <h5 class="text-main py-4">Add New Role</h5>
      <form style="width: 25rem" @submit.prevent="addNewRole()">
        <b-field
          :type="{ 'is-danger': role.error.length > 0 }"
          :message="role.error"
        >
          <b-input
            placeholder="Enter new role"
            type="text"
            class="is-info"
            expanded
            v-model="role.role"
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
      :join="`#role-user-${getDropperId}`.toString()"
      ref="roleUserDropper"
      @esc-keydown="closeRoleUserDropper"
      @other-area-clicked="closeRoleUserDropper"
      class="dropper"
      :z-index="9999"
    >
      <h5 class="text-main py-4">Add New Staff</h5>
      <form style="width: 25rem" @submit.prevent="addRoleUser(getDropperId)">
        <b-field
          class="expand-input"
          :type="{
            'is-danger': roleUser.error.length > 0,
          }"
          :message="roleUser.error"
        >
          <treeselect
            :multiple="true"
            :options="getStaff"
            placeholder="Select staff..."
            v-model="roleUser.staff"
            :max-height="200"
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
            @click="closeRoleUserDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#edit-role-${editRoleDropperId}`.toString()"
      ref="editRoleDropper"
      @esc-keydown="closeEditRoleDropper"
      @other-area-clicked="closeEditRoleDropper"
      class="dropper"
      :z-index="9999"
    >
      <h5 class="text-main py-4">Edit Role</h5>
      <form
        style="width: 25rem"
        @submit.prevent="editRole(getEditRoleDropperId)"
      >
        <b-field
          :type="{ 'is-danger': role.error.length > 0 }"
          :message="role.error"
        >
          <b-input
            placeholder="Enter new role"
            type="text"
            class="is-info"
            expanded
            v-model="role.role"
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
      :join="`#report-to-role-${getReportToDropperId}`.toString()"
      ref="reportToDropper"
      @esc-keydown="closeReportToDropper"
      @other-area-clicked="closeReportToDropper"
      class="dropper"
      :z-index="9999"
    >
      <h5 class="text-main py-4">Assign Staff</h5>
      <form
        style="width: 25rem"
        @submit.prevent="addReportToStaff(getReportToDropperId)"
      >
        <b-field
          class="expand-input"
          :type="{
            'is-danger': reportTo.error.length > 0,
          }"
          :message="reportTo.error"
        >
          <treeselect
            :multiple="true"
            :options="getStaff"
            placeholder="Select staff..."
            v-model="reportTo.staff"
            :max-height="200"
          />
        </b-field>
        <b-field class="buttons pt-4">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingReportTo"
          >
            {{ isSubmittingReportTo ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isSubmittingReportTo"
            @click="closeReportToDropper()"
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
import AddPermissionModal from "./user_management/AddPermissionModal";
export default {
  name: "ManageUserComponent",
  components: { Paginate, Treeselect, AddPermissionModal },
  props: {},
  computed: {
    ...mapGetters(["getUsers", "getRoles", "getRolePermissions", "getProfile"]),
    getDropperId() {
      return this.dropperId;
    },
    getEditRoleDropperId() {
      return this.editRoleDropperId;
    },
    getReportToDropperId() {
      return this.reportToDropperId;
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
      selectedRoles: [],
      toggleUserForm: false,
      toggleQueryForm: false,
      showAssignRoleForm: false,
      showAssignStatusForm: false,
      isSubmitting: false,
      isSubmittingRole: false,
      isSubmittingReportTo: false,
      noUserFound: false,
      isLoading: false,
      dropperId: "",
      editRoleDropperId: "",
      reportToDropperId: "",

      role: {
        role: "",
        error: [],
      },
      roleUser: {
        staff: [],
        error: [],
      },
      reportTo: {
        staff: [],
        error: [],
      },
      user: {
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
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
        status: [],
      },
      statusData: "",
    };
  },
  methods: {
    ...mapActions([
      "dispatchUserAccount",
      "dispatchRole",
      "dispatchStaffCount",
    ]),
    openRoleDropper() {
      const dropper = this.$refs.roleDropper;
      if (dropper) {
        dropper.open();
      }
    },
    closeRoleDropper() {
      const dropper = this.$refs.roleDropper;
      if (dropper) {
        this.role.error = [];
        dropper.close();
      }
    },
    openRoleUserDropper(index) {
      const dropper = this.$refs.roleUserDropper;
      this.dropperId = index;
      if (dropper) {
        dropper.open();
      }
    },
    closeRoleUserDropper() {
      const dropper = this.$refs.roleUserDropper;
      if (dropper) {
        this.roleUser.error = [];
        dropper.close();
      }
    },
    openEditRoleDropper(data) {
      const dropper = this.$refs.editRoleDropper;
      this.editRoleDropperId = data.id;
      this.role.role = data.role;
      if (dropper) {
        dropper.open();
      }
    },
    closeEditRoleDropper() {
      const dropper = this.$refs.editRoleDropper;
      if (dropper) {
        this.role.error = [];
        dropper.close();
      }
    },
    openReportToDropper(data) {
      const dropper = this.$refs.reportToDropper;
      this.reportToDropperId = data.id;
      if (dropper) {
        dropper.open();
      }
    },
    closeReportToDropper() {
      const dropper = this.$refs.reportToDropper;
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
    openAssignStatusForm() {
      this.showAssignStatusForm = !this.showAssignStatusForm;
    },
    cancelAssignForm() {
      this.selectedUsers = [];
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
                      if (res.status === 200 && res.data.deleted) {
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
                      }
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
                    .delete(`/dashboard/delete-users/${ids}`)
                    .then((res) => {
                      if (res.status === 200 && res.data.deleted) {
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
                      }
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

    addNewRole() {
      this.isSubmittingRole = true;
      this.role.error = [];
      this.$axios
        .post("/dashboard/add-role", { role: this.role.role })
        .then((res) => {
          this.isSubmittingRole = false;
          if (res.status === 200 && res.data.created) {
            (this.role.role = ""),
              this.dispatchRole({
                type: "ADD_NEW_ROLE",
                payload: res.data.role,
              });
            setTimeout(() => {
              this.snackbar("Role added successfully.", "is-success");
              this.isSubmitting = false;
            }, 1000);
          }
        })
        .catch((err) => {
          this.isSubmittingRole = false;
          if (err.response.status === 422) {
            this.isSubmitting = false;
            this.role.error = err.response.data.errors.role;
          } else {
            console.log(err);
          }
        });
    },
    editRole(id) {
      this.isSubmittingRole = true;
      this.role.error = [];
      this.$axios
        .put(`/dashboard/update-role/${id}`, { role: this.role.role })
        .then((res) => {
          this.isSubmittingRole = false;
          if (res.status === 200 && res.data.updated) {
            this.dispatchRole({
              type: "UPDATE_ROLE",
              payload: { id, data: this.role.role },
            });
            this.closeEditRoleDropper();
            setTimeout(() => {
              this.snackbar("Role updated successfully.", "is-success");
              this.isSubmitting = false;
            }, 1000);
          }
        })
        .catch((err) => {
          this.isSubmittingRole = false;
          if (err.response.status === 422) {
            this.isSubmitting = false;
            this.role.error = err.response.data.errors.role;
          } else {
            console.log(err);
          }
        });
    },
    deleteRole(id) {
      this.$axios
        .delete(`/dashboard/delete-role/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchRole({
              type: "DELETE_ROLE",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Role deleted successfully.", "is-success");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteRoles() {
      const ids = this.selectedRoles.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-roles/${ids}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchRole({
              type: "DELETE_ROLES",
              payload: ids,
            });
            this.selectedRoles = [];
            setTimeout(() => {
              this.snackbar("Roles deleted successfully.", "is-success");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addRoleUser(id) {
      this.isSubmittingRole = true;
      this.roleUser.error = [];
      this.$axios
        .put(`/dashboard/add-role-user/${id}`, { staff: this.roleUser.staff })
        .then((res) => {
          if (res.status === 200 && res.data.created) {
            this.isSubmittingRole = false;
            this.dispatchRole({
              type: "ADD_ROLE_USER",
              payload: { id, data: res.data.staff },
            });
            this.roleUser.staff = [];
            this.closeRoleUserDropper();
            setTimeout(() => {
              this.snackbar("Staff added successfully.", "is-success");
            }, 1000);
          }
        })
        .catch((err) => {
          this.isSubmittingRole = false;
          if (err.response.status === 422) {
            this.roleUser.error = err.response.data.errors.staff;
          } else {
            console.log(err);
          }
        });
    },
    deleteRoleUser(data) {
      const roles = this.getRoles
        .filter((r, i) => r.staff[i] && r.staff[i]["id"] === data.staff)
        .filter((r, i) => r.staff[i] && r.id !== data.role)
        .map((r) => r.id);
      this.$axios
        .put(`/dashboard/delete-role-user/${data.role}/${data.staff}`, {
          roles,
        })
        .then((res) => {
          if (res.status === 200 && res.data.created) {
            this.dispatchRole({
              type: "ADD_ROLE_USER",
              payload: { id: data.role, data: res.data.staff },
            });
            setTimeout(() => {
              this.snackbar(
                "Staff removed from role successfully.",
                "is-success"
              );
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addPermission(role) {
      this.$buefy.modal.open({
        parent: this,
        component: AddPermissionModal,
        hasModalCard: true,
        trapFocus: true,
        canCancel: ["escape"],
        props: { role },
      });
    },
    addReportToStaff(id) {
      this.isSubmittingReportTo = true;
      this.reportTo.error = [];
      this.$axios
        .put(`/dashboard/add-report-to-staff/${id}`, {
          staff: this.reportTo.staff,
        })
        .then((res) => {
          if (res.status === 200 && res.data.created) {
            this.dispatchRole({
              type: "ADD_REPORT_TO_STAFF",
              payload: { id, data: res.data.staff },
            });
            this.isSubmittingReportTo = false;
            this.reportTo.staff = [];
            this.closeReportToDropper();
            setTimeout(() => {
              this.snackbar("Staff added successfully.", "is-success");
            }, 1000);
          }
        })
        .catch((err) => {
          this.isSubmittingReportTo = false;
          if (err.response.status === 422) {
            this.reportTo.error = err.response.data.errors.staff || [];
          } else {
            console.log(err);
          }
        });
    },
    removeReportToStaff(data) {
      this.$axios
        .put(`/dashboard/remove-report-to-staff/${data.role}/${data.staff}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchRole({
              type: "ADD_REPORT_TO_STAFF",
              payload: { id: data.role, data: res.data.staff },
            });
            setTimeout(() => {
              this.snackbar("Staff removed successfully.", "is-success");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    setUserErrors(error = {}) {
      this.userError = {
        firstName: error.first_name || [],
        middleName: error.middle_name || [],
        lastName: error.last_name || [],
        username: error.email || [],
        status: error.status || [],
      };
    },
    clearUserForm() {
      this.user = {
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        status: "1",
      };
    },

    isNull(el) {
      if (el === "null" || el === null) {
        return "";
      }
      return el;
    },
    getFullName(staff) {
      return `${this.isNull(staff.title)} ${staff.firstName} ${this.isNull(
        staff.middleName
      )} ${staff.lastName}`;
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