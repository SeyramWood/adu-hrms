<template>
  <section class="dashboard__wrapper">
    <div class="dashboard__cards">
      <div class="dashboard__cards__card c--3">
        <div class="card gradient--1">
          <div class="card-content">
            <div class="content">
              <div class="ui__card">
                <div class="ui__card__content">
                  <div class="ui__card__content__icon">
                    <b-icon icon="users"></b-icon>
                  </div>
                  <div class="ui__card__content__text">
                    <p>{{ getStaffCount.total }}</p>
                    <p>Total Staff</p>
                  </div>
                </div>
                <div
                  class="ui__card__link"
                  v-if="anyPermission('admin', 'hod', 'supervisor')"
                >
                  <inertia-link href="/dashboard/pim">View Staff</inertia-link>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard__cards__card c--3">
        <div class="card gradient--2">
          <div class="card-content">
            <div class="content">
              <div class="ui__card">
                <div class="ui__card__content">
                  <div class="ui__card__content__icon">
                    <b-icon icon="building"></b-icon>
                  </div>
                  <div class="ui__card__content__text">
                    <p>{{ departments.length }}</p>
                    <p>Departments</p>
                  </div>
                </div>
                <div class="ui__card__link" v-if="anyPermission('admin')">
                  <inertia-link href="/dashboard/admin"
                    >View Departments</inertia-link
                  >
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard__cards__card c--3">
        <div class="card gradient--3">
          <div class="card-content">
            <div class="content">
              <div class="ui__card">
                <div class="ui__card__content">
                  <div class="ui__card__content__icon">
                    <b-icon icon="umbrella"></b-icon>
                  </div>
                  <div class="ui__card__content__text">
                    <p>{{ units.length }}</p>
                    <p>Units</p>
                  </div>
                </div>
                <div class="ui__card__link" v-if="anyPermission('admin')">
                  <inertia-link href="/dashboard/admin"
                    >View Units</inertia-link
                  >
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard__cards__card c--3">
        <div class="card gradient--4">
          <div class="card-content">
            <div class="content">
              <div class="ui__card">
                <div class="ui__card__content">
                  <div class="ui__card__content__icon">
                    <b-icon icon="city"></b-icon>
                  </div>
                  <div class="ui__card__content__text">
                    <p>ADU</p>
                    <p>Organization</p>
                  </div>
                </div>
                <div class="ui__card__link" v-if="anyPermission('admin')">
                  <inertia-link href="/dashboard/admin"
                    >View Organization</inertia-link
                  >
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard__cards">
      <div class="dashboard__cards__card c--9">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <p class="">Recent Access Logs</p>
              <b-table :data="data" :columns="columns"></b-table>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="dashboard__cards__card c--9">
        <b-datepicker
          v-model="date"
          inline
          :unselectable-days-of-week="disableWeekends ? [0, 6] : null"
        >
        </b-datepicker>
      </div> -->

      <div class="dashboard__cards__card c--3">
        <div
          class="dashboard__cards"
          v-if="anyPermission('admin', 'hod', 'supervisor')"
        >
          <div class="dashboard__cards__card c--6">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <div class="side_card">
                    <span class=""><b-icon icon="user-friends"></b-icon></span>
                    <inertia-link href="/dashboard/pim">PIM</inertia-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="dashboard__cards__card c--6"
            v-if="anyPermission('admin')"
          >
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <div class="side_card">
                    <span class=""><b-icon icon="cogs"></b-icon></span>
                    <inertia-link href="/dashboard/admin"
                      >Staff Accounts</inertia-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dashboard__cards">
          <div class="dashboard__cards__card c--6">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <div class="side_card">
                    <span class=""><b-icon icon="user-cog"></b-icon></span>
                    <inertia-link href="/dashboard/ess">Profile</inertia-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="dashboard__cards__card c--6"
            v-if="anyPermission('admin')"
          >
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <div class="side_card">
                    <span class=""><b-icon icon="user-cog"></b-icon></span>
                    <inertia-link href="/dashboard/admin">Admin</inertia-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Dashboard from "../components/Dashboard";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Dashboard",
  metaInfo() {
    return {
      title: `Dashboard`,
    };
  },
  components: {
    // Layout,
  },
  layout: Dashboard,
  props: {
    staffCount: Object,
    branches: Array,
    departments: Array,
    units: Array,
  },
  computed: {
    ...mapGetters([
      "getBranches",
      "getDepartments",
      "getUnits",
      "getStaffCount",
    ]),
  },
  created() {
    this.dispatchStaffCount({ payload: this.staffCount });
    this.dispatchBranch({ payload: this.branches });
    this.dispatchDepartment({ payload: this.departments });
    this.dispatchUnit({ payload: this.units });
  },
  beforeMount() {},

  data() {
    return {
      date: new Date(),
      disableWeekends: false,
      data: [
        {
          staff: "Jesse",
          username: "username",
          ip: "127.0.0.1",
          date: "2016-10-15 13:43:27",
        },
        {
          staff: "John",
          username: "Jacobs",
          ip: "127.0.0.1",
          date: "2016-10-15 13:43:27",
        },
        {
          staff: "Tina",
          username: "Gilbert",
          ip: "127.0.0.1",
          date: "2016-10-15 13:43:27",
        },
        {
          staff: "Clarence",
          username: "Flores",
          ip: "127.0.0.1",
          date: "2016-10-15 13:43:27",
        },
        {
          staff: "Anne",
          username: "Lee",
          ip: "127.0.0.1",
          date: "2016-10-15 13:43:27",
        },
      ],
      columns: [
        {
          field: "staff",
          label: "Staff",
        },
        {
          field: "username",
          label: "Username",
        },
        {
          field: "ip",
          label: "IP",
        },
        {
          field: "date",
          label: "Login Date",
          centered: true,
        },
      ],
    };
  },
  methods: {
    ...mapActions([
      "dispatchStaffCount",
      "dispatchBranch",
      "dispatchDepartment",
      "dispatchUnit",
    ]),
  },
};
</script>

