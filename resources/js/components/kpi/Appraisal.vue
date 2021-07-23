<template>
  <div>
    <section class="b__collapse__section">
      <div class="card">
        <header class="card-header" role="button">
          <article class="table__header">
            <h5 class="table__header__title">Appraisal List</h5>
            <section class="table__header__lists">
              <div class="table__header__lists__item" @click="openQueryForm()">
                <b-tooltip label="Query Users." type="is-dark">
                  <b-icon class="icon--wrapper" icon="search"></b-icon>
                </b-tooltip>
              </div>
            </section>
          </article>
        </header>
        <div class="card-content">
          <div class="content">
            <b-table
              :data="getAppraisals.data"
              :default-sort-direction="defaultSortDirection"
              :sort-icon="sortIcon"
              :sort-icon-size="sortIconSize"
              :loading="isLoading"
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
                field="name"
                label="Name"
                sortable
                v-slot="props"
                >{{ props.row.name }}</b-table-column
              >

              <b-table-column
                field="sap_timestamp"
                label="Self Appraisal Period"
                sortable
                v-slot="props"
                >{{
                  ` ${formatDate2(
                    props.row.sap_timestamp.open
                  )} - ${formatDate2(props.row.sap_timestamp.close)}`
                }}</b-table-column
              >
              <b-table-column
                field="np_timestamp"
                label="Nomalization Period"
                sortable
                v-slot="props"
                >{{
                  ` ${formatDate2(props.row.np_timestamp.open)} - ${formatDate2(
                    props.row.np_timestamp.close
                  )}`
                }}</b-table-column
              >
              <b-table-column
                field="period"
                label="Period"
                sortable
                v-slot="props"
                >{{
                  ` ${formatDate2(props.row.period.from)} - ${formatDate2(
                    props.row.period.to
                  )}`
                }}</b-table-column
              >
              <b-table-column field="actions" label="Actions" v-slot="props">
                <div class="b-tooltips">
                  <b-tooltip
                    label="Self Appraisal"
                    size="is-small"
                    type="is-dark"
                  >
                    <b-button
                      class="is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="user-cog"
                      @click="openSelfAppraisalModal(props.row)"
                    ></b-button>
                  </b-tooltip>
                  <b-tooltip
                    label="View Appraisee"
                    size="is-small"
                    type="is-dark"
                    v-if="isPermission('review_appraisal')"
                  >
                    <b-button
                      class="is-light"
                      size="is-small"
                      pack="fas"
                      icon-right="users"
                      @click="openRatingAppraiseeModal(props.row)"
                      :disabled="!isPermission('read')"
                    ></b-button>
                  </b-tooltip>
                </div>
              </b-table-column>
              <template #footer>
                <paginate :state="getAppraisals" :dispatch="dispatchKPI" />
              </template>
              <template #empty v-if="noAppraisalFound">
                <article class="table__data__notfound">
                  <b-icon icon="database" pack="fas"></b-icon>
                  <strong class="pt-3">Ooops! No appraisal found.</strong>
                </article>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Paginate from "../Paginate";
import SelfAppraisalModal from "./appraisal/SelfAppraisalModal";
import RatingAppraiseeModal from "./appraisal/RatingAppraiseeModal";
export default {
  name: "Appraisal",
  components: {
    Paginate,
    SelfAppraisalModal,
    RatingAppraiseeModal,
  },
  computed: {
    ...mapGetters(["getUsers", "getRolePermissions", "getAppraisals"]),
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
  data() {
    return {
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      selectedKPIs: [],
      isSubmitting: false,
      selected: null,
      toggleKPIForm: false,
      noAppraisalFound: false,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["dispatchUserAccount", "dispatchStaffCount", "dispatchKPI"]),
    addKPI() {
      this.setKPIErrors();
      this.isSubmitting = true;
      this.$axios
        .post(`/dashboard/add-kpi`, this.kpi)
        .then((res) => {
          this.clearKPIForm();
          this.isSubmitting = false;
        })
        .catch((err) => {
          this.isSubmitting = false;
          if (err.response.status === 422) {
            this.setKPIErrors(err.response.data.errors);
          }
        });
    },
    cancelKPIForm() {
      this.toggleKPIForm = false;
      this.clearKPIForm();
      this.setKPIErrors();
    },
    clearKPIForm() {
      this.kpi = {
        name: "",
        period: {
          from: null,
          to: null,
        },
        kg: {
          open: null,
          close: null,
        },
        ar: {
          open: null,
          close: null,
        },
      };
    },
    setKPIErrors(err = {}) {
      this.kpiErrors = {
        name: err["name"] || [],
        period: {
          from: err["period.from"] || [],
          to: err["period.to"] || [],
        },
        kg: {
          open: err["kg.open"] || [],
          close: err["kg.close"] || [],
        },
        ar: {
          open: err["ar.open"] || [],
          close: err["ar.close"] || [],
        },
      };
    },
    openSelfAppraisalModal(appraisal) {
      this.$buefy.modal.open({
        parent: this,
        component: SelfAppraisalModal,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: true,
        canCancel: ["escape"],
        props: { appraisal },
      });
    },
    openRatingAppraiseeModal(appraisal) {
      this.$buefy.modal.open({
        parent: this,
        component: RatingAppraiseeModal,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: true,
        canCancel: ["escape"],
        props: { appraisal },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>