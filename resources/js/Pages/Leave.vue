<template>
  <section>
    <h1>Leave</h1>
  </section>
</template>

<script>
import Dashboard from "../components/Dashboard";
export default {
  name: "Leave",
  metaInfo() {
    return {
      title: `Leave`,
    };
  },
  components: {
    // Layout,
  },
  layout: Dashboard,
  props: {
    event: String,
  },
};
</script>

<style lang="sass" scoped>
</style>