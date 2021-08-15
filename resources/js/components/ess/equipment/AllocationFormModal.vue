<template>
  <div class="modal-card py-4" style="width: auto">
    <header class="modal-card-head">
      <h4 class="modal-card-title text-main label pt-2">Allocation Form</h4>
      <button class="delete" type="button" @click="cancelModal()" />
    </header>
    <section class="modal-card-body">
      <div class="request__wrapper">
        <div class="request__wrapper__logo">
          <img src="/storage/logo/A.D.U. logo.png" alt="" srcset="" />
        </div>
        <h1 class="request__wrapper__title">IT Equipment Allocation Form</h1>
        <div class="request__wrapper__instruction">
          <h5 class=""><strong>Instruction:</strong></h5>
          <article>
            <p>
              This form is used to authorize and certify the allocation of I.T.
              equipment to staff/departments/groups etc., at the African
              Development University (A.D.U). Equipment allocated is meant to be
              used for official A.D.U business only.
            </p>
            <p>
              Kindly retain a copy of this form (preferably in the office) to
              assist future I.T. Equipment Audit & Inventory update purposes.
            </p>
          </article>
        </div>
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
                    <h6>Allocated To</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ staffName ? getFullName(staffName) : "" }}</span>
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
                    <span>{{ staffName ? staffName.position : "" }}</span>
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
                    <span>{{ staffName ? staffName.email : "" }}</span>
                  </div>
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Department</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ staffName ? staffName.department : "" }}</span>
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
                    <span>{{ formatDate(allocation.created_at) }}</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <h1 class="request__wrapper__form__header">
            Section B: Equipment Details
          </h1>
          <div
            class="request__wrapper__form__info request__wrapper__form--section"
          >
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Equipment</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ allocation.equipment }}</span>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Manufacturer</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ allocation.manufacturer }}</span>
                  </div>
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Model</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ allocation.model }}</span>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Qty Allocated</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ allocation.quantity }}</span>
                  </div>
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Serial No.</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ allocation.serial_number }}</span>
                  </div>
                </article>
              </div>
              <div class="column is-6">
                <article class="text">
                  <div class="text__label">
                    <h6>Date Allocated</h6>
                    <span>:</span>
                  </div>
                  <div class="text__line">
                    <span>{{ formatDate(allocation.created_at) }}</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <h1 class="request__wrapper__form__header">
            Section C: Certification of Delivery
          </h1>
          <div
            class="
              request__wrapper__form__approval request__wrapper__form--section
            "
          >
            <p class="acknowledgement">
              I acknowledge receipt of the above IT equipment. I am obliged to
              return any such equipment when no longer required or as requested
              accordingly.
            </p>
            <div class="columns">
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{ staffName ? getFullName(staffName) : "" }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Staff</h6>
                  </div>
                </article>
              </div>
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{
                      allocation.staff_approval
                        ? allocation.staff_approval.initials
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
                      allocation.staff_approval
                        ? formatDate(allocation.staff_approval.date)
                        : ""
                    }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Date</h6>
                  </div>
                </article>
              </div>
            </div>
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
                      allocation.dpt_unit_approval
                        ? allocation.dpt_unit_approval.initials
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
                      allocation.dpt_unit_approval
                        ? formatDate(allocation.dpt_unit_approval.date)
                        : ""
                    }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Date</h6>
                  </div>
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{ getFullName(allocation) }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Digital and IT</h6>
                  </div>
                </article>
              </div>
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{ allocation.approver_initials }}</span>
                  </div>
                  <div class="text-1__label">
                    <h6>Sginature/Initials</h6>
                  </div>
                </article>
              </div>
              <div class="column is-4">
                <article class="text-1">
                  <div class="text-1__line">
                    <span>{{ formatDate(allocation.created_at) }}</span>
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
          <div class="request__wrapper">
            <div class="request__wrapper__logo">
              <img src="/storage/logo/A.D.U. logo.png" alt="" srcset="" />
            </div>
            <h1 class="request__wrapper__title">
              IT Equipment Allocation Form
            </h1>
            <div class="request__wrapper__instruction">
              <h5 class=""><strong>Instruction:</strong></h5>
              <article>
                <p>
                  This form is used to authorize and certify the allocation of
                  I.T. equipment to staff/departments/groups etc., at the
                  African Development University (A.D.U). Equipment allocated is
                  meant to be used for official A.D.U business only.
                </p>
                <p>
                  Kindly retain a copy of this form (preferably in the office)
                  to assist future I.T. Equipment Audit & Inventory update
                  purposes.
                </p>
              </article>
            </div>
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
                        <h6>Allocated To</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{
                          staffName ? getFullName(staffName) : ""
                        }}</span>
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
                        <span>{{ staffName ? staffName.position : "" }}</span>
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
                        <span>{{ staffName ? staffName.email : "" }}</span>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Department</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ staffName ? staffName.department : "" }}</span>
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
                        <span>{{ formatDate(allocation.created_at) }}</span>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <h1 class="request__wrapper__form__header">
                Section B: Equipment Details
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
                        <h6>Equipment</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ allocation.equipment }}</span>
                      </div>
                    </article>
                  </div>
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Manufacturer</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ allocation.manufacturer }}</span>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Model</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ allocation.model }}</span>
                      </div>
                    </article>
                  </div>
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Qty Allocated</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ allocation.quantity }}</span>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Serial No.</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ allocation.serial_number }}</span>
                      </div>
                    </article>
                  </div>
                  <div class="column is-6">
                    <article class="text">
                      <div class="text__label">
                        <h6>Date Allocated</h6>
                        <span>:</span>
                      </div>
                      <div class="text__line">
                        <span>{{ formatDate(allocation.created_at) }}</span>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <h1 class="request__wrapper__form__header">
                Section C: Certification of Delivery
              </h1>
              <div
                class="
                  request__wrapper__form__approval
                  request__wrapper__form--section
                "
              >
                <p class="acknowledgement">
                  I acknowledge receipt of the above IT equipment. I am obliged
                  to return any such equipment when no longer required or as
                  requested accordingly.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{
                          staffName ? getFullName(staffName) : ""
                        }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Staff</h6>
                      </div>
                    </article>
                  </div>
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{
                          allocation.staff_approval
                            ? allocation.staff_approval.initials
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
                          allocation.staff_approval
                            ? formatDate(allocation.staff_approval.date)
                            : ""
                        }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Date</h6>
                      </div>
                    </article>
                  </div>
                </div>
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
                          allocation.dpt_unit_approval
                            ? allocation.dpt_unit_approval.initials
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
                          allocation.dpt_unit_approval
                            ? formatDate(allocation.dpt_unit_approval.date)
                            : ""
                        }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Date</h6>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{ getFullName(allocation) }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Digital and IT</h6>
                      </div>
                    </article>
                  </div>
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{ allocation.approver_initials }}</span>
                      </div>
                      <div class="text-1__label">
                        <h6>Sginature/Initials</h6>
                      </div>
                    </article>
                  </div>
                  <div class="column is-4">
                    <article class="text-1">
                      <div class="text-1__line">
                        <span>{{ formatDate(allocation.created_at) }}</span>
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
      <b-button class="is-dark is-light" @click="cancelModal()"
        >Print PDF</b-button
      >
      <b-button class="is-dark is-light" @click="cancelModal()">Close</b-button>
    </footer>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
export default {
  name: "AllocationFormModal",
  props: { allocation: { require: true, type: Object } },
  components: { VueHtml2pdf },
  watch: {
    currentAllocation(allocation) {
      if (allocation.dpt_unit_approval) {
        this.getAllocationApproval(allocation.dpt_unit_approval.name);
      }
      if (allocation.staff_approval) {
        this.getAllocationApprovalStaff(allocation.staff_approval.name);
      }
    },
  },
  created() {
    this.$nextTick(() => {
      this.currentAllocation = { ...this.allocation };
    });
  },
  data() {
    return {
      currentAllocation: null,
      staffName: null,
      leaderName: "",
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
    async getAllocationApproval(id) {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/get-request-approval-name/${id}`
        );
        this.leaderName = this.getFullName(data.name);
      } catch (error) {}
    },
    async getAllocationApprovalStaff(id) {
      try {
        const { data } = await this.$axios.get(
          `/dashboard/get-request-approval-name/${id}`
        );
        this.staffName = data.name;
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped>
</style>