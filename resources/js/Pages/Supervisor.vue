<template>
  <section>
    <h1>Supervisor</h1>
  </section>
</template>

<script>
import Dashboard from "../components/Dashboard";
export default {
  name: "Supervisor",
  metaInfo() {
    return {
      title: `Supervisor`,
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