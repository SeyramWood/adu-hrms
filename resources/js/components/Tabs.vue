<template>
  <Fragment>
    <div class="s__tabs" :class="stickyTab">
      <div class="s__tabs__tab">
        <ul>
          <li
            v-for="(tab, index) in tabs"
            :key="index"
            @click="selectTab(index)"
            :class="index === selectedIndex && 'isActive'"
          >
            <span>{{ tab.label }}</span>
          </li>
        </ul>
      </div>
    </div>
    <slot></slot>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  name: "Tabs",
  components: {
    Fragment,
  },
  props: {
    tabIndex: {
      type: Number,
      default: 0,
    },
    stickyTab: {
      type: String,
      default: "",
    },
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(this.tabIndex);
  },
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  methods: {
    selectTab(index) {
      this.selectedIndex = index;
      this.tabs.forEach((tab, idx) => {
        tab.activeTab = idx === index;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$main: #99001c;
$main-1: #262626;
$text: #fff;
.s__tabs {
  width: 100%;
  &__tab {
    & > ul {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      list-style-type: none;
      & > li {
        cursor: pointer;
        font-size: 1rem;
        // font-weight: bold;
        padding: 0.15rem 0.3rem;
        &:not(:last-child) {
          margin-right: 0.3rem;
        }
        background-color: $main;
        color: $text;
        border-radius: 3px;
        & > span {
          letter-spacing: 0.05rem;
          transition: color 0.2s ease-in;
        }
      }
    }
  }
  &__content {
  }
}
.isActive {
  color: $text !important;
  background-color: $main-1 !important;
}
</style>