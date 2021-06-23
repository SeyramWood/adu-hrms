<template>
  <form @submit.prevent="updateWorkShift()">
    <div class="modal-card py-4" style="width: 700px">
      <header class="modal-card-head">
        <h4 class="modal-card-title text-main label pt-2">Edit Work Shift</h4>
        <button class="delete" type="button" @click="$emit('close')" />
      </header>

      <section class="modal-card-body">
        <b-field
          label="Shift Name"
          horizontal
          :type="{
            'is-danger': workShiftErrors.name.length > 0,
          }"
          :message="workShiftErrors.name"
        >
          <b-input size="" expanded v-model="workShift.name"></b-input>
        </b-field>
        <b-field label="Work Hours" horizontal>
          <b-field
            label="From"
            :type="{
              'is-danger': workShiftErrors.from.length > 0,
            }"
            :message="workShiftErrors.from"
          >
            <b-timepicker
              size=""
              v-model="workShift.from"
              hour-format="12"
              inline
              expanded
            ></b-timepicker>
          </b-field>
          <b-field
            label="To"
            :type="{
              'is-danger': workShiftErrors.to.length > 0,
            }"
            :message="workShiftErrors.to"
          >
            <b-timepicker
              size=""
              v-model="workShift.to"
              hour-format="12"
              inline
            ></b-timepicker>
          </b-field>
          <b-field
            label="Duration"
            :type="{
              'is-danger': workShiftErrors.duration.length > 0,
            }"
            :message="workShiftErrors.duration"
          >
            <div class="card">
              <div class="card-content">
                <div class="content">
                  {{ workShift.duration }}
                </div>
              </div>
            </div>
          </b-field>
        </b-field>
        <b-field label="Week Definition" horizontal>
          <div class="workshift__card">
            <div class="workshift__card__header">
              <strong>Days</strong>
              <p class="has-text-danger" v-if="workShiftErrors.days.length > 0">
                <span v-for="(e, i) in workShiftErrors.days" :key="i">{{
                  e
                }}</span>
              </p>
            </div>
            <div class="workshift__card__content">
              <div class="checkbox__lists">
                <div
                  class="checkbox__lists__list"
                  :key="day"
                  v-for="day in weekDefinitions"
                >
                  <label>
                    <input
                      type="checkbox"
                      :value="day"
                      v-model="workShift.days"
                    />
                    <span>{{ day }} </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <b-field class="buttons">
          <button class="button is-success is-light">
            {{ isSubmittingWorkShift ? "Saving..." : "Save" }}
          </button>
          <b-button class="is-danger is-light" @click="cancelWorkShiftForm()"
            >Cancel</b-button
          >
        </b-field>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "EditShiftModal",
  props: { shift: { require: true } },
  mounted() {
    this.setWorkShift(this.shift);
    this.$watch(
      () => this.workShift.from,
      (value) => {
        const duration = this.formatDurationInHours(value, this.workShift.to);
        this.workShift.duration = duration;
      }
    );
    this.$watch(
      () => this.workShift.to,
      (value) => {
        const duration = this.formatDurationInHours(this.workShift.from, value);
        this.workShift.duration = duration;
      }
    );
  },
  data() {
    return {
      isSubmittingWorkShift: false,
      weekDefinitions: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturay",
        "Sunday",
        "Weekdays",
        "Weekend",
        "All",
      ],

      workShift: {
        name: "",
        from: new Date(),
        to: new Date(),
        duration: "",
        days: [],
      },

      workShiftErrors: {
        name: [],
        from: [],
        to: [],
        duration: [],
        days: [],
      },
    };
  },

  methods: {
    ...mapActions(["dispatchWorkShift"]),
    updateWorkShift() {
      this.isSubmittingWorkShift = true;
      this.$axios
        .put(`/dashboard/update-work-shift/${this.shift.id}`, {
          ...this.workShift,
          from: this.workShift.from.toISOString(),
          to: this.workShift.to.toISOString(),
        })
        .then((res) => {
          this.$emit("close");
          this.clearWorkShiftForm();
          if (res.status === 200 && res.data.created) {
            this.dispatchWorkShift({
              type: "UPDATE_SHIFT",
              payload: res.data.data,
            });
            setTimeout(() => {
              this.snackbar("Shift updated successfully", "is-dark");
              this.isSubmittingWorkShift = false;
            }, 1000);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setTimeout(() => {
              this.setWorkShiftErrors(err.response.data.errors);
              this.isSubmittingWorkShift = false;
            }, 1000);
          }
        });
    },
    setWorkShift(shift) {
      this.workShift = {
        name: shift.name,
        from: new Date(shift.from),
        to: new Date(shift.to),
        duration: shift.duration,
        days: shift.days,
      };
    },
    cancelWorkShiftForm() {
      this.$emit("close");
      this.clearWorkShiftForm();
    },
    setWorkShiftErrors(error = {}) {
      this.workShiftErrors.name = error.name || [];
      this.workShiftErrors.days = error.days || [];
      this.workShiftErrors.duration = error.duration || [];
    },

    clearWorkShiftForm() {
      this.setWorkShiftErrors();
      this.workShift.name = "";
      this.workShift.from = new Date();
      this.workShift.to = new Date();
      this.workShift.duration = "";
      this.workShift.days = [];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
