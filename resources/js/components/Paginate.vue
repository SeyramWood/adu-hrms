<template>
  <section>
    <!-- <b-field grouped group-multiline>
            <b-field label="Total">
                <b-input type="number" v-model="total"></b-input>
            </b-field>
            <b-field label="Items per page">
                <b-input type="number" v-model="perPage"></b-input>
            </b-field>
        </b-field>
        <b-field grouped group-multiline>
            <b-field label="Show buttons before current">
                <b-input type="number" v-model="rangeBefore" min="0"></b-input>
            </b-field>
            <b-field label="Show buttons after current">
                <b-input type="number" v-model="rangeAfter" min="0"></b-input>
            </b-field>
        </b-field>
        <b-field grouped group-multiline>
            <b-field label="Order">
                <b-select v-model="order">
                    <option value="">default</option>
                    <option value="is-centered">is-centered</option>
                    <option value="is-right">is-right</option>
                </b-select>
            </b-field>
            <b-field label="Size">
                <b-select v-model="size">
                    <option value="">default</option>
                    <option value="is-small">is-small</option>
                    <option value="is-medium">is-medium</option>
                    <option value="is-large">is-large</option>
                </b-select>
            </b-field>
        </b-field>
        <b-field grouped group-multiline>
            <b-field label="Previous icon">
                <b-select v-model="prevIcon">
                    <option value="chevron-left">Chevron</option>
                    <option value="arrow-left">Arrow</option>
                </b-select>
            </b-field>
            <b-field label="Next icon">
                <b-select v-model="nextIcon">
                    <option value="chevron-right">Chevron</option>
                    <option value="arrow-right">Arrow</option>
                </b-select>
            </b-field>
        </b-field>
        <div class="block">
            <b-switch v-model="isSimple">Simple</b-switch>
            <b-switch v-model="isRounded">Rounded</b-switch>
        </div>

        <hr> -->
    <b-pagination
      :total="totalPage"
      v-model="currentPage"
      :order="order"
      :size="size"
      :simple="isSimple"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </b-pagination>
  </section>
</template>

<script>
export default {
  name: "Paginate",
  props: {
    state: { require: true, type: Object },
    dispatch: { require: true, type: Function },
    dispatchAction: { default: "", type: String },
  },
  computed: {
    currentPage: {
      get() {
        return this.state.current_page || 0;
      },
      set(value) {
        if (this.dispatchAction) {
          this.dispatch({ type: this.dispatchAction, payload: value || 0 });
        } else {
          this.dispatch({ payload: value || 0 });
        }
      },
    },
    perPage: {
      get() {
        return this.state.per_page || 0;
      },
    },
    totalPage: {
      get() {
        return this.state.total || 0;
      },
    },
  },
  watch: {
    // state(v) {
    //   console.log(v);
    // },
  },
  data() {
    return {
      order: "is-right",
      size: "",
      isSimple: true,
      isRounded: true,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
    };
  },
};
</script>