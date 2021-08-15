<template>
  <div class="modal-card py-4" style="width: auto">
    <header class="modal-card-head">
      <h4 class="modal-card-title text-main label pt-2">Request Form</h4>
      <button class="delete" type="button" @click="cancelModal()" />
    </header>
    <section class="modal-card-body">
      <div class="request__wrapper">
        <div class="request__wrapper__logo">
          <img src="/storage/logo/A.D.U. logo.png" alt="" srcset="" />
        </div>
        <h1 class="request__wrapper__title">IT Equipment Request Form</h1>
        <div class="request__wrapper__form">
          <h1 class="request__wrapper__form__header">
            Section A: Staff Information
          </h1>
          <div
            class="
              request__wrapper__form__staff request__wrapper__form--section
            "
          >
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Request By</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ getFullName(request) }}</span>
                  </div>
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Position</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ request.position }}</span>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Email</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ request.email }}</span>
                  </div>
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6 v-if="$page.props.authUser.department_id">
                      Department
                    </h6>
                    <h6 v-if="$page.props.authUser.unit_id">Unit</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span v-if="$page.props.authUser.department_id">{{
                      request.department
                    }}</span>
                    <span v-if="$page.props.authUser.unit_id">{{
                      request.unit
                    }}</span>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Date</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ formatDate(request.created_at) }}</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <h1 class="request__wrapper__form__header">
            Section B: Request Details
          </h1>
          <div
            class="request__wrapper__form__info request__wrapper__form--section"
          >
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Category</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ request.details.category || "" }}</span>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Type</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span v-if="request.details.otherType">{{
                      request.details.otherType || ""
                    }}</span>
                    <span v-else>{{ request.details.type || "" }}</span>
                  </div>
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Item</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span v-if="request.details.otherItem">{{
                      request.details.otherItem || ""
                    }}</span>
                    <span v-else>{{ request.details.item || "" }}</span>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Quantity</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ request.details.quantity || "" }}</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <h1 class="request__wrapper__form__header">
            Section C: Approval & Authorization
          </h1>
          <div
            class="
              request__wrapper__form__approval request__wrapper__form--section
            "
          >
            <div class="columns">
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{ leaderName }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Director/VP</h6>
                  </div>
                </article>
              </div>
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{
                      request.dpt_unit_approval
                        ? request.dpt_unit_approval.initials
                        : ""
                    }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Sginature/Initials</h6>
                  </div>
                </article>
              </div>
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{
                      request.dpt_unit_approval
                        ? formatDate(request.dpt_unit_approval.date)
                        : ""
                    }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Date</h6>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <h1 class="request__wrapper__form__header">
            Section D: Digital & IT DEPT use Only
          </h1>
          <div
            class="request__wrapper__form__it request__wrapper__form--section"
          >
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Status</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{
                      request.it_approval ? request.it_approval.status : ""
                    }}</span>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Reason</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{
                      request.it_approval ? request.it_approval.reason : ""
                    }}</span>
                  </div>
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Supplier</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{
                      request.it_approval ? request.it_approval.supplier : ""
                    }}</span>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Availability</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{
                      request.it_approval
                        ? request.it_approval.availability
                        : ""
                    }}</span>
                  </div>
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{ itDptName }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Digital and IT</h6>
                  </div>
                </article>
              </div>
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{
                      request.it_approval ? request.it_approval.initials : ""
                    }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Sginature/Initials</h6>
                  </div>
                </article>
              </div>
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{
                      request.it_approval
                        ? formatDate(request.it_approval.date)
                        : ""
                    }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Date</h6>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div class="request__wrapper__trademark">A.D.U | digital and IT</div>
      </div>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="Equipment Request Form"
        :pdf-quality="1"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="100%"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <div class="request__wrapper print__document">
            <div class="request__wrapper__logo">
              <img src="/storage/logo/A.D.U. logo.png" alt="" srcset="" />
            </div>
            <h1 class="request__wrapper__title">IT Equipment Request Form</h1>
            <div class="request__wrapper__form">
              <h1 class="request__wrapper__form__header">
                Section A: Staff Information
              </h1>
              <div
                class="
                  request__wrapper__form__staff request__wrapper__form--section
                "
              >
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Request By</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ getFullName(request) }}</span>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Position</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ request.position }}</span>
                      </div>
                    </article>
                  </div>
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Email</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ request.email }}</span>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6 v-if="$page.props.authUser.department_id">
                          Department
                        </h6>
                        <h6 v-if="$page.props.authUser.unit_id">Unit</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span v-if="$page.props.authUser.department_id">{{
                          request.department
                        }}</span>
                        <span v-if="$page.props.authUser.unit_id">{{
                          request.unit
                        }}</span>
                      </div>
                    </article>
                  </div>
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Date</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ formatDate(request.created_at) }}</span>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <h1 class="request__wrapper__form__header">
                Section B: Request Details
              </h1>
              <div
                class="
                  request__wrapper__form__info request__wrapper__form--section
                "
              >
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Category</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ request.details.category || "" }}</span>
                      </div>
                    </article>
                  </div>
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Type</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span v-if="request.details.otherType">{{
                          request.details.otherType || ""
                        }}</span>
                        <span v-else>{{ request.details.type || "" }}</span>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Item</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span v-if="request.details.otherItem">{{
                          request.details.otherItem || ""
                        }}</span>
                        <span v-else>{{ request.details.item || "" }}</span>
                      </div>
                    </article>
                  </div>
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Quantity</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ request.details.quantity || "" }}</span>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <h1 class="request__wrapper__form__header">
                Section C: Approval & Authorization
              </h1>
              <div
                class="
                  request__wrapper__form__approval
                  request__wrapper__form--section
                "
              >
                <div class="columns">
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{ leaderName }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Director/VP</h6>
                      </div>
                    </article>
                  </div>
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{
                          request.dpt_unit_approval
                            ? request.dpt_unit_approval.initials
                            : ""
                        }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Sginature/Initials</h6>
                      </div>
                    </article>
                  </div>
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{
                          request.dpt_unit_approval
                            ? formatDate(request.dpt_unit_approval.date)
                            : ""
                        }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Date</h6>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <h1 class="request__wrapper__form__header">
                Section D: Digital & IT DEPT use Only
              </h1>
              <div
                class="
                  request__wrapper__form__it request__wrapper__form--section
                "
              >
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Status</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{
                          request.it_approval ? request.it_approval.status : ""
                        }}</span>
                      </div>
                    </article>
                  </div>
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Reason</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{
                          request.it_approval ? request.it_approval.reason : ""
                        }}</span>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Supplier</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{
                          request.it_approval
                            ? request.it_approval.supplier
                            : ""
                        }}</span>
                      </div>
                    </article>
                  </div>
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Availability</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{
                          request.it_approval
                            ? request.it_approval.availability
                            : ""
                        }}</span>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{ itDptName }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Digital and IT</h6>
                      </div>
                    </article>
                  </div>
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{
                          request.it_approval
                            ? request.it_approval.initials
                            : ""
                        }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Sginature/Initials</h6>
                      </div>
                    </article>
                  </div>
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{
                          request.it_approval
                            ? formatDate(request.it_approval.date)
                            : ""
                        }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Date</h6>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div class="request__wrapper__trademark">
              A.D.U | digital and IT
            </div>
          </div>
        </section>
      </vue-html2pdf>
    </section>
    <footer class="modal-card-foot buttons">
      <b-button class="is-dark is-light" @click="generateReport()"
        >Print PDF</b-button
      >
      <b-button class="is-dark is-light" @click="cancelModal()">Close</b-button>
    </footer>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
export default {
  name: "RequestFormModal",
  props: { request: { require: true, type: Object } },
  components: { VueHtml2pdf },
  watch: {
    currentRequest(request) {
      if (request.dpt_unit_approval) {
        this.getRquestApproval(request.dpt_unit_approval.name);
      }
      if (request.it_approval) {
        this.getRquestApprovalIT(request.it_approval.name);
      }
    },
  },
  created() {
    this.$nextTick(() => {
      this.currentRequest = { ...this.request };
    });
  },
  data() {
    return {
      currentRequest: null,
      itDptName: "",
      leaderName: "",
      generatingPdf: false,
    };
  },
  methods: {
    cancelModal() {
      this.$emit("close");
    },
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    getFullName(staff) {
      return `${this.isNull(staff.title)} ${staff.firstName} ${this.isNull(
        staff.middleName
      )} ${staff.lastName}`;
    },
    async getRquestApproval(id) {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/get-request-approval-name/${id}`
        );
        this.leaderName = this.getFullName(data.name);
      } catch (error) {}
    },
    async getRquestApprovalIT(id) {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/get-request-approval-name/${id}`
        );
        this.itDptName = this.getFullName(data.name);
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped>
</style>