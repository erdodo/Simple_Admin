<template></template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getSettings"]),
  },
  created() {
    document.getElementsByTagName("html")[0].classList.add(this.getSettings.theme);
  },
};
</script>

<style></style>
