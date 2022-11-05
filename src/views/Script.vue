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

<style>
.v-popper--theme-tooltip .v-popper__inner {
  font-size: 12px;
  padding: 5px 10px 5px 10px !important;
}
</style>
