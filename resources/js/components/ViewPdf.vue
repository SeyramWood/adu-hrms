<template>
  <div class="modal-card" style="width: auto">
    <vue-pdf-app
      :pdf="`/storage${getFile}`"
      @pages-rendered="pagesRendered"
      style="height: 100vh; width: 960px"
    ></vue-pdf-app>
  </div>
</template>

<script>
import VuePdfApp from "vue-pdf-app";
import "vue-pdf-app/dist/icons/main.css";

export default {
  name: "ViewPdf",
  components: {
    VuePdfApp,
  },
  computed: {
    getFile() {
      return this.file;
    },
  },
  props: {
    file: { required: true },
  },
  data() {
    return {};
  },
  methods: {
    pagesRendered(pdfApp) {
      setTimeout(() => (pdfApp.pdfViewer.currentScaleValue = "page-height"));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>