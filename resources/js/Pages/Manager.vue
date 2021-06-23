<template>
  <section>
    <h1>Manager</h1>
  </section>
</template>

<script>
import Dashboard from "../components/Dashboard";
export default {
  name: "Manager",
  metaInfo() {
    return {
      title: `Manager`,
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