<template>
  <div v-show="activeTab" class="s__tabs__content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    label: {
      require: true,
      type: String,
    },
  },
  data() {
    return {
      activeTab: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.s__tabs__content {
  width: 100%;
}
</style>