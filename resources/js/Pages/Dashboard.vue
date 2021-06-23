<template>
  <section>
    <p>Welcome to the A.D.U. Knowledge Management System</p>
  </section>
</template>

<script>
import Dashboard from "../components/Dashboard";

export default {
  name: "Dashboard",
  metaInfo() {
    return {
      title: `Welcome`,
    };
  },
  components: {
    // Layout,
  },
  layout: Dashboard,
  props: {
    event: String,
  },
  created() {
    // this.$nextTick(() =>
    //   this.$inertia.visit("/dashboard", {
    //     headers: { "Custom-Header": "value" },
    //   })
    // );
    this.$inertia.on("success", {
      headers: { "Accept-Language:": "fr" },
    });
  },
};
</script>