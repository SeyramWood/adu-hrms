<template>
  <section>
    <b-tabs type="is-toggle" size="" :animated="false" expanded>
      <b-tab-item label="Organization Metadata">
        <section class="b__collapse__section">
          <b-collapse class="card" animation="slide" aria-id="addreason">
            <div class="card-header" role="button" aria-controls="addreason">
              <p class="card-header-title">Metadata</p>
            </div>
            <div class="card-content">
              <div class="content">
                <div class="columns">
                  <div class="column is-3">
                    <div class="brand-logo-container">
                      <div
                        :class="`brand-logo-overlay ${
                          isUploadingBrandLogo
                            ? 'show-brand-logo-overlay'
                            : 'hide-brand-logo-overlay'
                        }`"
                      >
                        <p class="text-withe">Uploading...</p>
                      </div>
                      <div class="brand-logo">
                        <img
                          :src="`/storage/logo/${
                            getOrganizationProfile &&
                            getOrganizationProfile.logo
                          }`"
                          alt="Brand Logo"
                        />
                      </div>
                      <b-field
                        :type="{ 'is-danger': brandLogoError.length > 0 }"
                        :message="brandLogoError"
                      >
                        <b-field
                          class="file is-info is-light"
                          :class="{ 'has-name': !!brandLogo }"
                        >
                          <b-upload
                            v-model="brandLogo"
                            class="file-label"
                            rounded
                            :disabled="isUploadingBrandLogo"
                          >
                            <span class="file-cta">
                              <b-icon class="file-icon" icon="upload"></b-icon>
                              <span class="file-label">Upload Logo</span>
                            </span>
                          </b-upload>
                        </b-field>
                      </b-field>
                    </div>
                  </div>
                  <div class="column is-9">
                    <fieldset :disabled="isEditOrganizationMetadata">
                      <form @submit.prevent="updateOrganizationMetadata()">
                        <div class="columns">
                          <div class="column is-12">
                            <h3
                              class="label text-main is-pulled-right is-size-6"
                            >
                              Profile
                            </h3>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Organization Name</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.name.length >
                                      0,
                                  }"
                                  :message="organizationMetadataErrors.name"
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.name"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Telephone</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.telephone
                                        .length > 0,
                                  }"
                                  :message="
                                    organizationMetadataErrors.telephone
                                  "
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.telephone"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Email</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.email.length >
                                      0,
                                  }"
                                  :message="organizationMetadataErrors.email"
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.email"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Address</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.address
                                        .length > 0,
                                  }"
                                  :message="organizationMetadataErrors.address"
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.address"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">City</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.city.length >
                                      0,
                                  }"
                                  :message="organizationMetadataErrors.city"
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.city"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Landmark</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.landmark
                                        .length > 0,
                                  }"
                                  :message="organizationMetadataErrors.landmark"
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.landmark"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Municipal/District</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.district
                                        .length > 0,
                                  }"
                                  :message="organizationMetadataErrors.district"
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.district"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Region</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.region.length >
                                      0,
                                  }"
                                  :message="organizationMetadataErrors.region"
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.region"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-12">
                            <h3
                              class="label text-main is-pulled-right is-size-6"
                            >
                              Business Details
                            </h3>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Registration Number</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.regNumber
                                        .length > 0,
                                  }"
                                  :message="
                                    organizationMetadataErrors.regNumber
                                  "
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.regNumber"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">TIN</label>
                              </div>
                              <div class="column is-8">
                                <b-field
                                  :type="{
                                    'is-danger':
                                      organizationMetadataErrors.tin.length > 0,
                                  }"
                                  :message="organizationMetadataErrors.tin"
                                >
                                  <b-input
                                    expanded
                                    v-model="organizationMetadata.tin"
                                  ></b-input>
                                </b-field>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-12">
                            <h3
                              class="label text-main is-pulled-right is-size-6"
                            >
                              Staff Details
                            </h3>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Current Staff</label>
                              </div>
                              <div class="column is-8">
                                <b-input
                                  expanded
                                  disabled
                                  v-model="organizationMetadata.currentStaff"
                                ></b-input>
                              </div>
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Past Staff</label>
                              </div>
                              <div class="column is-8">
                                <b-input
                                  expanded
                                  disabled
                                  v-model="organizationMetadata.pastStaff"
                                ></b-input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="columns">
                          <div class="column is-6">
                            <div class="columns">
                              <div class="column is-4">
                                <label class="label">Total Staff</label>
                              </div>
                              <div class="column is-8">
                                <b-input
                                  expanded
                                  disabled
                                  v-model="organizationMetadata.totalStaff"
                                ></b-input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />

                        <b-field
                          class="buttons"
                          v-if="!isEditOrganizationMetadata"
                        >
                          <button
                            type="submit"
                            class="button is-success is-light"
                            :disabled="isSubmittingMetadata"
                          >
                            {{ isSubmittingMetadata ? "Saving..." : "Save" }}
                          </button>
                          <button
                            type="button"
                            class="button is-danger is-light"
                            :disabled="isSubmittingMetadata"
                            @click="cancelOrganizationMetaData()"
                          >
                            Cancel
                          </button>
                        </b-field>
                      </form>
                    </fieldset>
                    <b-field v-if="isEditOrganizationMetadata">
                      <b-button
                        class="is-info is-light"
                        @click="
                          isEditOrganizationMetadata =
                            !isEditOrganizationMetadata
                        "
                        icon-pack="fas"
                        icon-left="pen"
                        >Edit Metadata</b-button
                      >
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </section>
      </b-tab-item>
      <b-tab-item label="Departments">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleAddOrganizationDepartment"
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
              <p class="card-header-title">
                <b-icon type="is-info" pack="fas" icon="plus"></b-icon>
                <span class="has-text-info">Add New Department</span>
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
                <form @submit.prevent="addOrganizationDepartment()">
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Department Name</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger':
                            organizationDepartmentErrors.name.length > 0,
                        }"
                        :message="organizationDepartmentErrors.name"
                      >
                        <b-input
                          size=""
                          expanded
                          v-model="organizationDepartment.name"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <hr />
                  <b-field class="buttons">
                    <button
                      class="button is-success is-light"
                      :disabled="isSubmittingNewDepartment"
                    >
                      {{ isSubmittingNewDepartment ? "Submitting..." : "Add" }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="cancelAddOrganizationDepartment()"
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
            <header class="card-header">
              <article class="table__header">
                <h5 class="table__header__title">Departments</h5>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="checkedDepartments.length > 0 ? false : true"
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
                      @click="deleteDepartments()"
                      >Delete departments</b-dropdown-item
                    >
                  </b-dropdown>
                </section>
                <b-table
                  :data="getDepartments"
                  :paginated="isPaginated"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :pagination-simple="isPaginationSimple"
                  :pagination-position="paginationPosition"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  :checked-rows.sync="checkedDepartments"
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
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip label="Edit" size="is-small" type="is-dark">
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                          :id="`department-id${getDropperId}`.toString()"
                          @click="openDepartmentDropper(props.row)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="is-small" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deleteDepartment(props.row.id)"
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
      <b-tab-item label="Unit">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleAddOrganizationUnit"
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
              <p class="card-header-title">
                <b-icon type="is-info" pack="fas" icon="plus"></b-icon>
                <span class="has-text-info">Add New Unit</span>
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
                <form @submit.prevent="addOrganizationUnit()">
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Unit Name</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger': organizationUnitErrors.name.length > 0,
                        }"
                        :message="organizationUnitErrors.name"
                      >
                        <b-input
                          size=""
                          expanded
                          v-model="organizationUnit.name"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Select Department</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger':
                            organizationUnitErrors.department.length > 0,
                        }"
                        :message="organizationUnitErrors.department"
                      >
                        <b-select
                          type="is-info"
                          expanded
                          v-model="organizationUnit.department"
                        >
                          <option
                            :value="d.id"
                            v-for="(d, i) in getDepartments"
                            :key="d.name + i"
                          >
                            {{ d.name }}
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                  </div>

                  <hr />
                  <b-field class="buttons">
                    <button
                      class="button is-success is-light"
                      :disabled="isSubmittingNewUnit"
                    >
                      {{ isSubmittingNewUnit ? "Submitting..." : "Add" }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="cancelAddOrganizationUnit()"
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
            <header class="card-header">
              <article class="table__header">
                <h5 class="table__header__title">Units</h5>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="checkedUnits.length > 0 ? false : true"
                  >
                    <template #trigger="{ active }">
                      <b-button
                        type="is-info is-light"
                        label="Actions"
                        pack="fas"
                        :icon-right="active ? 'angle-up' : 'angle-down'"
                      />
                    </template>
                    <b-dropdown-item aria-role="listitem" @click="deleteUnits()"
                      >Delete units</b-dropdown-item
                    >
                  </b-dropdown>
                </section>
                <b-table
                  :data="getUnits"
                  :paginated="isPaginated"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :pagination-simple="isPaginationSimple"
                  :pagination-position="paginationPosition"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  :checked-rows.sync="checkedUnits"
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
                    label="Unit"
                    sortable
                    v-slot="props"
                    >{{ props.row.name }}</b-table-column
                  >
                  <b-table-column
                    field="department"
                    label="Department"
                    sortable
                    v-slot="props"
                    >{{ props.row.department }}</b-table-column
                  >
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip label="Edit" size="is-small" type="is-dark">
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                          :id="`unit-id${getUnitDropperId}`.toString()"
                          @click="openUnitDropper(props.row)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="is-small" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deleteUnit(props.row.id)"
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
      <b-tab-item label="Leadership">
        <section class="b__collapse__section">
          <b-collapse
            class="card"
            v-model="toggleAddOrganizationLeadership"
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
              <p class="card-header-title">
                <b-icon type="is-info" pack="fas" icon="plus"></b-icon>
                <span class="has-text-info">Define Organization Positions</span>
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
                <form @submit.prevent="addOrganizationPosition()">
                  <div class="columns">
                    <div class="column is-2">
                      <label class="label">Position Name</label>
                    </div>
                    <div class="column is-4">
                      <b-field
                        :type="{
                          'is-danger':
                            organizationPositionErrors.name.length > 0,
                        }"
                        :message="organizationPositionErrors.name"
                      >
                        <b-input
                          size=""
                          expanded
                          v-model="organizationPosition.name"
                        ></b-input>
                      </b-field>
                    </div>
                  </div>
                  <hr />
                  <b-field class="buttons">
                    <button
                      class="button is-success is-light"
                      :disabled="isSubmittingPosition"
                    >
                      {{ isSubmittingPosition ? "Submitting..." : "Add" }}
                    </button>
                    <b-button
                      class="is-danger is-light"
                      @click="cancelAddOrganizationPosition()"
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
            <header class="card-header">
              <article class="table__header">
                <h5 class="table__header__title">Leader Positions</h5>
              </article>
            </header>
            <div class="card-content">
              <div class="content">
                <section class="py-4 multiples-actions">
                  <b-dropdown
                    aria-role="list"
                    :disabled="checkedPositions.length > 0 ? false : true"
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
                      @click="deletePositions()"
                      >Delete postions</b-dropdown-item
                    >
                  </b-dropdown>
                </section>
                <b-table
                  :data="getPositions"
                  :paginated="isPaginated"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :pagination-simple="isPaginationSimple"
                  :pagination-position="paginationPosition"
                  :default-sort-direction="defaultSortDirection"
                  :sort-icon="sortIcon"
                  :sort-icon-size="sortIconSize"
                  :checked-rows.sync="checkedPositions"
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
                  <b-table-column
                    field="actions"
                    label="Actions"
                    v-slot="props"
                  >
                    <div class="b-tooltips">
                      <b-tooltip label="Edit" size="is-small" type="is-dark">
                        <b-button
                          class="is-info is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="pen"
                          :id="`position-id${getPositionDropperId}`.toString()"
                          @click="openPositionDropper(props.row)"
                        ></b-button>
                      </b-tooltip>
                      <b-tooltip label="Delete" size="is-small" type="is-dark">
                        <b-button
                          class="is-danger is-light"
                          size="is-small"
                          pack="fas"
                          icon-right="trash"
                          @click="deletePosition(props.row.id)"
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
      :join="`#department-id${getDropperId}`"
      ref="departmentDropper"
      @esc-keydown="closeDepartmentDropper"
      @other-area-clicked="closeDepartmentDropper"
      class="dropper"
      :z-index="1000"
    >
      <form @submit.prevent="updateOrganizationDepartment()">
        <h5 class="text-main pb-3">Update Department</h5>
        <b-field
          label="Department"
          :type="{
            'is-danger': organizationDepartmentErrors.name.length > 0,
          }"
          :message="organizationDepartmentErrors.name"
        >
          <b-input
            size=""
            expanded
            v-model="organizationDepartment.name"
          ></b-input>
        </b-field>
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingNewDepartment"
          >
            {{ isSubmittingNewDepartment ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isSubmittingNewDepartment"
            @click="closeDepartmentDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#unit-id${getUnitDropperId}`"
      ref="unitDropper"
      @esc-keydown="closeUnitDropper"
      @other-area-clicked="closeUnitDropper"
      class="dropper"
      :z-index="1000"
    >
      <form @submit.prevent="updateOrganizationUnit()">
        <h5 class="text-main pb-3">Update Unit</h5>
        <b-field
          label="Unit"
          :type="{
            'is-danger': organizationUnitErrors.name.length > 0,
          }"
          :message="organizationUnitErrors.name"
        >
          <b-input size="" expanded v-model="organizationUnit.name"></b-input>
        </b-field>
        <b-field
          label="Department"
          :type="{
            'is-danger': organizationUnitErrors.department.length > 0,
          }"
          :message="organizationUnitErrors.department"
        >
          <b-select
            type="is-info"
            expanded
            v-model="organizationUnit.department"
          >
            <option
              :value="d.id"
              v-for="(d, i) in getDepartments"
              :key="d.name + i"
            >
              {{ d.name }}
            </option>
          </b-select>
        </b-field>
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingNewUnit"
          >
            {{ isSubmittingNewUnit ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isSubmittingNewUnit"
            @click="closeUnitDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
    <dropper
      :join="`#position-id${getPositionDropperId}`"
      ref="positionDropper"
      @esc-keydown="closePositionDropper"
      @other-area-clicked="closePositionDropper"
      class="dropper"
      :z-index="1000"
    >
      <form @submit.prevent="updateOrganizationPosition()">
        <h5 class="text-main pb-3">Update Position</h5>
        <b-field
          label="Position"
          :type="{
            'is-danger': organizationPositionErrors.name.length > 0,
          }"
          :message="organizationPositionErrors.name"
        >
          <b-input
            size=""
            expanded
            v-model="organizationPosition.name"
          ></b-input>
        </b-field>
        <b-field class="buttons">
          <button
            class="button is-success is-light"
            type="submit"
            :disabled="isSubmittingPosition"
          >
            {{ isSubmittingPosition ? "Saving..." : "Save" }}
          </button>
          <button
            class="button is-danger is-light"
            type="button"
            :disabled="isSubmittingPosition"
            @click="closePositionDropper()"
          >
            Cancel
          </button>
        </b-field>
      </form>
    </dropper>
    <b-modal
      v-model="isUdateDepartmentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
      :can-cancel="['escape']"
      :on-cancel="cancelAddOrganizationBranch"
    >
      <template #default="props">
        <UpdateBranchModal
          v-bind="{
            branchId,
            organizationBranch,
            organizationBranchErrors,
            isSubmittingNewBranch,
            cancelAddOrganizationBranch,
            updateBranch,
          }"
          @close="props.close"
        />
      </template>
    </b-modal>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UpdateBranchModal from "./organization/UpdateBranchModal";
export default {
  name: "OrganizationComponent",
  components: { UpdateBranchModal },
  props: {},
  computed: {
    ...mapGetters([
      "getBranches",
      "getDepartments",
      "getUnits",
      "getPositions",
      "getOrganizationProfile",
      "getStaffCount",
    ]),
    getDropperId() {
      return this.dropperId.toString();
    },
    getUnitDropperId() {
      return this.unitDropperId.toString();
    },
    getPositionDropperId() {
      return this.positionDropperId.toString();
    },
  },
  watch: {
    brandLogo(file) {
      if (file) {
        this.isUploadingBrandLogo = true;
        this.updateBranLogo(file);
      } else {
        this.isUploadingBrandLogo = false;
      }
    },
  },
  beforeMount() {
    if (this.getOrganizationProfile) {
      this.organizationMetadata = {
        ...this.organizationMetadata,
        name: this.getOrganizationProfile.name,
        telephone: this.getOrganizationProfile.telephone,
        email: this.getOrganizationProfile.email,
        address: this.getOrganizationProfile.address,
        city: this.getOrganizationProfile.city,
        landmark: this.getOrganizationProfile.landmark,
        district: this.getOrganizationProfile.district,
        region: this.getOrganizationProfile.region,
        regNumber: this.getOrganizationProfile.reg_number,
        tin: this.getOrganizationProfile.tin,
      };
    }
    this.organizationMetadata = {
      ...this.organizationMetadata,
      currentStaff: this.getStaffCount.current,
      pastStaff: this.getStaffCount.past,
      totalStaff: this.getStaffCount.total,
    };
  },
  data() {
    return {
      toggleAddOrganizationBranch: false,
      toggleAddOrganizationDepartment: false,
      toggleAddOrganizationUnit: false,
      toggleAddOrganizationLeadership: false,
      isSubmittingNewBranch: false,
      isSubmittingPosition: false,
      isSubmittingNewDepartment: false,
      isSubmittingNewUnit: false,
      isUdateDepartmentModalActive: false,
      isUploadingBrandLogo: false,
      isPaginated: true,
      isPaginationSimple: true,
      isEditOrganizationMetadata: true,
      isSubmittingMetadata: false,
      paginationPosition: "bottom",
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 50,
      checkedBranches: [],
      checkedDepartments: [],
      checkedUnits: [],
      checkedPositions: [],

      dropperId: "",
      unitDropperId: "",
      positionDropperId: "",
      branchId: null,
      brandLogo: null,
      brandLogoError: [],
      organizationBranch: {
        name: "",
        city: "",
        telephone: "",
        landmark: "",
        email: "",
        address: "",
      },
      organizationDepartment: { name: "", id: "" },
      organizationUnit: { name: "", department: "", id: "" },
      organizationPosition: { name: "", id: "" },

      organizationBranchErrors: {
        name: [],
        city: [],
        telephone: [],
        landmark: [],
        email: [],
        address: [],
      },
      organizationDepartmentErrors: { name: [] },
      organizationUnitErrors: { name: [], department: [] },
      organizationPositionErrors: { name: [] },
      organizationMetadata: {
        name: "",
        telephone: "",
        email: "",
        address: "",
        city: "",
        landmark: "",
        district: "",
        region: "",
        regNumber: "",
        tin: "",
        currentStaff: "",
        pastStaff: "",
        totalStaff: "",
      },
      organizationMetadataErrors: {
        name: [],
        telephone: [],
        email: [],
        address: [],
        city: [],
        landmark: [],
        district: [],
        region: [],
        regNumber: [],
        tin: [],
      },
    };
  },
  methods: {
    ...mapActions([
      "dispatchBranch",
      "dispatchDepartment",
      "dispatchUnit",
      "dispatchPosition",
      "dispatchOrgnizationProfile",
    ]),
    openDepartmentDropper(data) {
      const dropper = this.$refs.departmentDropper;
      this.dropperId = data.id;
      if (dropper) {
        this.organizationDepartment.id = data.id;
        this.organizationDepartment.name = data.name;
        dropper.open();
      }
    },
    closeDepartmentDropper() {
      const dropper = this.$refs.departmentDropper;
      if (dropper) {
        this.organizationDepartment.id = "";
        this.organizationDepartment.name = "";
        this.organizationDepartmentErrors.name = [];
        dropper.close();
      }
    },
    openUnitDropper(data) {
      const dropper = this.$refs.unitDropper;
      this.unitDropperId = data.id;
      if (dropper) {
        this.organizationUnit.id = data.id;
        this.organizationUnit.name = data.name;
        this.organizationUnit.department = data.department_id;
        dropper.open();
      }
    },
    closeUnitDropper() {
      const dropper = this.$refs.unitDropper;
      if (dropper) {
        this.organizationUnit.id = "";
        this.organizationUnit.name = "";
        this.organizationUnit.department = "";
        this.organizationUnitErrors.name = [];
        this.organizationUnitErrors.department = [];
        dropper.close();
      }
    },
    openPositionDropper(data) {
      const dropper = this.$refs.positionDropper;
      this.positionDropperId = data.id;
      if (dropper) {
        this.organizationPosition.id = data.id;
        this.organizationPosition.name = data.name;
        dropper.open();
      }
    },
    closePositionDropper() {
      const dropper = this.$refs.positionDropper;
      if (dropper) {
        this.organizationPosition.id = "";
        this.organizationPosition.name = "";
        this.organizationPositionErrors.name = [];
        dropper.close();
      }
    },
    updateBranLogo(file) {
      this.brandLogoError = [];
      const data = new FormData();
      data.append("logo", file);
      this.$axios
        .post(`/dashboard/update-brand-logo`, data)
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            if (res.data.logo) {
              this.dispatchOrgnizationProfile({
                type: "UPDATE_LOGO",
                payload: res.data.logo,
              });
            }
            if (res.data.org) {
              this.dispatchOrgnizationProfile({
                type: "UPDATE_INFO",
                payload: res.data.org,
              });
            }

            setTimeout(() => {
              this.snackbar("Logo updated successfully", "is-dark");
              this.isUploadingBrandLogo = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.brandLogoError = err.response.data.errors.logo
                ? err.response.data.errors.logo
                : [];
              this.isUploadingBrandLogo = false;
            }, 1000);
          } else {
            console.log(err);
          }
        });
    },
    updateOrganizationMetadata() {
      this.isSubmittingMetadata = true;
      this.setOrganizationMetaDataErrors();
      this.$axios
        .post(
          "/dashboard/update-organization-metadata",
          this.organizationMetadata
        )
        .then((res) => {
          this.clearAddOrganizationBranchForm();
          if (res.status === 200) {
            this.dispatchOrgnizationProfile({
              type: "UPDATE_INFO",
              payload: res.data.info,
            });
            setTimeout(() => {
              this.snackbar("Metadata updated successfully", "is-dark");
              this.isSubmittingMetadata = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setOrganizationMetaDataErrors(err.response.data.errors);
              this.isSubmittingMetadata = false;
            }, 1000);
          }
        });
    },
    addOrganizationBranch() {
      this.isSubmittingNewBranch = true;
      this.setAddOrganizationBranchErrors();
      this.$axios
        .post("/dashboard/create-branch", this.organizationBranch)
        .then((res) => {
          this.clearAddOrganizationBranchForm();
          if (res.status === 201) {
            this.dispatchBranch({ type: "ADD_NEW_BRANCH", payload: res.data });
            setTimeout(() => {
              this.snackbar("Branch added successfully", "is-dark");
              this.isSubmittingNewBranch = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setAddOrganizationBranchErrors(err.response.data.errors);
              this.isSubmittingNewBranch = false;
            }, 1000);
          }
        });
    },
    getBranchToEdit(branch) {
      this.branchId = branch.id;
      this.organizationBranch.name = branch.name;
      this.organizationBranch.city = branch.city;
      this.organizationBranch.landmark = branch.landmark;
      this.organizationBranch.address = branch.address;
      this.organizationBranch.telephone = branch.telephone;
      this.organizationBranch.email = branch.email;

      this.isUdateDepartmentModalActive = true;
    },
    updateBranch(id) {
      this.isSubmittingNewBranch = true;
      this.setAddOrganizationBranchErrors();
      this.$axios
        .put(`/dashboard/update-branch/${id}`, this.organizationBranch)
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchBranch({
              type: "UPDATE_BRANCH",
              payload: res.data.branch,
            });
            this.cancelAddOrganizationBranch("modal");
            this.isUdateDepartmentModalActive = false;
            setTimeout(() => {
              this.snackbar("Branch updated successfully", "is-dark");
              this.isSubmittingNewBranch = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setAddOrganizationBranchErrors(err.response.data.errors);
              this.isSubmittingNewBranch = false;
            }, 1000);
          }
        });
    },
    deleteBranch(id) {
      this.$axios
        .delete(`/dashboard/delete-branch/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchBranch({
              type: "DELETE_BRANCH",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Branch deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteBranches() {
      const ids = this.checkedBranches.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-branches/${JSON.stringify(ids)}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchBranch({
              type: "DELETE_BRANCHES",
              payload: ids,
            });
            this.checkedBranches = [];
            setTimeout(() => {
              this.snackbar("Branch deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addOrganizationDepartment() {
      this.isSubmittingNewDepartment = true;
      this.organizationDepartmentErrors.name = [];
      this.$axios
        .post("/dashboard/create-department", this.organizationDepartment)
        .then((res) => {
          this.organizationDepartment.name = "";
          if (res.status === 201) {
            this.dispatchDepartment({
              type: "ADD_NEW_DEPARTMENT",
              payload: res.data,
            });
            setTimeout(() => {
              this.snackbar("Department added successfully", "is-dark");
              this.isSubmittingNewDepartment = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.organizationDepartmentErrors.name = err.response.data.errors
                .name
                ? err.response.data.errors.name
                : [];
              this.isSubmittingNewDepartment = false;
            }, 1000);
          }
        });
    },
    addOrganizationUnit() {
      this.isSubmittingNewUnit = true;
      this.organizationUnitErrors.name = [];
      this.organizationUnitErrors.department = [];
      this.$axios
        .post("/dashboard/create-unit", this.organizationUnit)
        .then((res) => {
          this.organizationUnit.name = "";
          this.organizationUnit.department = "";
          if (res.status === 200 && res.data.created) {
            this.dispatchUnit({
              type: "ADD_NEW_UNIT",
              payload: res.data.unit,
            });
            setTimeout(() => {
              this.snackbar("Unit added successfully", "is-dark");
              this.isSubmittingNewUnit = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.isSubmittingNewUnit = false;
            setTimeout(() => {
              this.organizationUnitErrors.name =
                err.response.data.errors.name || [];
              this.organizationUnitErrors.department =
                err.response.data.errors.name || [];
            }, 1000);
          }
        });
    },

    updateOrganizationDepartment() {
      this.isSubmittingNewDepartment = true;
      this.organizationDepartmentErrors.name = [];
      this.$axios
        .put(
          `/dashboard/edit-department/${this.organizationDepartment.id}`,
          this.organizationDepartment
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchDepartment({
              type: "UPDATE_DEPARTMENT",
              payload: res.data.department,
            });
            this.closeDepartmentDropper();
            setTimeout(() => {
              this.snackbar("Department updated successfully", "is-dark");
              this.isSubmittingNewDepartment = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.organizationDepartmentErrors.name = err.response.data.errors
                .name
                ? err.response.data.errors.name
                : [];
              this.isSubmittingNewDepartment = false;
            }, 1000);
          }
        });
    },
    updateOrganizationUnit() {
      this.isSubmittingNewUnit = true;
      this.organizationUnitErrors.name = [];
      this.organizationUnitErrors.department = [];
      this.$axios
        .put(
          `/dashboard/edit-unit/${this.organizationUnit.id}`,
          this.organizationUnit
        )
        .then((res) => {
          this.organizationUnit.name = "";
          this.organizationUnit.department = "";
          if (res.status === 200 && res.data.updated) {
            this.dispatchUnit({
              type: "UPDATE_UNIT",
              payload: res.data.unit,
            });
            this.closeUnitDropper();
            setTimeout(() => {
              this.snackbar("Unit updated successfully", "is-dark");
              this.isSubmittingNewUnit = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.isSubmittingNewUnit = false;
            setTimeout(() => {
              this.organizationUnitErrors.name =
                err.response.data.errors.name || [];
              this.organizationUnitErrors.department =
                err.response.data.errors.name || [];
            }, 1000);
          }
        });
    },

    deleteDepartment(id) {
      this.$axios
        .delete(`/dashboard/delete-department/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchDepartment({
              type: "DELETE_DEPARTMENT",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Department deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteUnit(id) {
      this.$axios
        .delete(`/dashboard/delete-unit/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchUnit({
              type: "DELETE_UNIT",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Unit deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteDepartments() {
      const ids = this.checkedDepartments.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-departments/${JSON.stringify(ids)}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchDepartment({
              type: "DELETE_DEPARTMENTS",
              payload: ids,
            });
            this.checkedDepartments = [];
            setTimeout(() => {
              this.snackbar("Department deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteUnits() {
      const ids = this.checkedUnits.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-units/${JSON.stringify(ids)}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchUnit({
              type: "DELETE_UNITS",
              payload: ids,
            });
            this.checkedUnits = [];
            setTimeout(() => {
              this.snackbar("Units deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addOrganizationPosition() {
      this.isSubmittingPosition = true;
      this.organizationPositionErrors.name = [];
      this.$axios
        .post("/dashboard/create-position", this.organizationPosition)
        .then((res) => {
          this.organizationPosition.name = "";
          if (res.status === 201) {
            this.dispatchPosition({
              type: "ADD_NEW_POSITION",
              payload: res.data,
            });
            setTimeout(() => {
              this.snackbar("Position added successfully", "is-dark");
              this.isSubmittingPosition = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.organizationPositionErrors.name = err.response.data.errors
                .name
                ? err.response.data.errors.name
                : [];
              this.isSubmittingPosition = false;
            }, 1000);
          }
        });
    },
    updateOrganizationPosition() {
      this.isSubmittingPosition = true;
      this.organizationPositionErrors.name = [];
      this.$axios
        .put(
          `/dashboard/edit-position/${this.organizationPosition.id}`,
          this.organizationPosition
        )
        .then((res) => {
          if (res.status === 200 && res.data.updated) {
            this.dispatchPosition({
              type: "UPDATE_POSITION",
              payload: res.data.position,
            });
            setTimeout(() => {
              this.snackbar("Position updated successfully", "is-dark");
              this.isSubmittingPosition = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.organizationPositionErrors.name = err.response.data.errors
                .name
                ? err.response.data.errors.name
                : [];
              this.isSubmittingPosition = false;
            }, 1000);
          }
        });
    },
    deletePosition(id) {
      this.$axios
        .delete(`/dashboard/delete-position/${id}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchPosition({
              type: "DELETE_POSITION",
              payload: id,
            });
            setTimeout(() => {
              this.snackbar("Position deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deletePositions() {
      const ids = this.checkedPositions.map((r) => r.id);
      this.$axios
        .delete(`/dashboard/delete-positions/${JSON.stringify(ids)}`)
        .then((res) => {
          if (res.status === 200 && res.data.deleted) {
            this.dispatchPosition({
              type: "DELETE_POSITIONS",
              payload: ids,
            });
            this.checkedPositions = [];
            setTimeout(() => {
              this.snackbar("Position deleted successfully", "is-dark");
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    assignStaff() {
      this.selectedStaff = this.availableStaff;
      this.workShift.assignedStaff = this.selectedStaff;
    },
    removeStaff() {
      this.assignedStaffIndex.forEach((val) => {
        this.selectedStaff.forEach((value, index) => {
          if (val === index) {
            this.selectedStaff.splice(index, this.assignedStaffIndex.length);
          }
        });
      });
    },

    setAddOrganizationBranchErrors(errors = {}) {
      this.organizationBranchErrors.name = errors.name ? errors.name : [];
      this.organizationBranchErrors.city = errors.city ? errors.city : [];
      this.organizationBranchErrors.telephone = errors.telephone
        ? errors.telephone
        : [];
      this.organizationBranchErrors.landmark = errors.landmark
        ? errors.landmark
        : [];
      this.organizationBranchErrors.email = errors.email ? errors.email : [];
      this.organizationBranchErrors.address = errors.address
        ? errors.address
        : [];
    },
    setOrganizationMetaDataErrors(errors = {}) {
      this.organizationMetadataErrors = {
        name: errors.name ? errors.name : [],
        telephone: errors.telephone ? errors.telephone : [],
        email: errors.email ? errors.email : [],
        address: errors.address ? errors.address : [],
        city: errors.city ? errors.city : [],
        landmark: errors.landmark ? errors.landmark : [],
        district: errors.district ? errors.district : [],
        region: errors.region ? errors.region : [],
        regNumber: errors.regNumber ? errors.regNumber : [],
        tin: errors.tin ? errors.tin : [],
      };
    },
    cancelAddOrganizationBranch(modal = undefined) {
      this.clearAddOrganizationBranchForm();
      this.setAddOrganizationBranchErrors();
      if (!modal) {
        this.toggleAddOrganizationBranch = !this.toggleAddOrganizationBranch;
      }
    },

    cancelAddOrganizationDepartment() {
      this.organizationDepartmentErrors.name = [];
      this.toggleAddOrganizationDepartment =
        !this.toggleAddOrganizationDepartment;
    },
    cancelAddOrganizationUnit() {
      this.organizationUnitErrors.name = [];
      this.organizationUnitErrors.department = [];
      this.toggleAddOrganizationUnit = !this.toggleAddOrganizationUnit;
    },

    cancelAddOrganizationPosition() {
      this.organizationPositionErrors.name = [];
      this.toggleAddOrganizationPosition = !this.toggleAddOrganizationPosition;
    },

    clearAddOrganizationBranchForm() {
      this.organizationBranch.name = "";
      this.organizationBranch.city = "";
      this.organizationBranch.telephone = "";
      this.organizationBranch.landmark = "";
      this.organizationBranch.email = "";
      this.organizationBranch.address = "";
    },
    cancelOrganizationMetaData() {
      this.setOrganizationMetaDataErrors();
      this.isEditOrganizationMetadata = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.brand-logo-overlay {
  position: relative;
}
.brand-logo {
  width: 25rem;
  height: 12.4rem;
  margin-bottom: 1.5rem;
  border: 1px solid #eee;
  & > img {
    width: 100%;
    height: 100%;
  }
}
.brand-logo-overlay {
  width: 25rem;
  height: 12.4rem;
  position: absolute;
  background-color: rgba(7, 7, 7, 0.616);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  transition: opacity 0.1s ease-in;
}
.show-brand-logo-overlay {
  z-index: 1;
  opacity: 1;
}
.hide-brand-logo-overlay {
  z-index: -1;
  opacity: 0;
}
.text-withe {
  color: white;
}
</style>