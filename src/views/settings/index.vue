<template>
  <div class="d-flex flex-column align-items-center">
    <div class="d-flex align-items-center">
      <darkLight></darkLight>
    </div>
    <div class="d-flex align-items-center">
      <el-select v-model="settings.container" class="m-2" placeholder="Select" size="large">
        <el-option value="container" />
        <el-option value="container-sm" />
        <el-option value="container-md" />
        <el-option value="container-lg" />
        <el-option value="container-xl" />
        <el-option value="container-xxl" />
        <el-option value="container-fluid" />
      </el-select>
    </div>
    <el-row class="mb-4 mt-5">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>
  </div>
  {{ settings }}
</template>

<script>
/*eslint-disable*/
import darkLight from "@/views/settings/dark-light.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      settings: {
        container: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getSettings"]),
  },
  mounted() {
    this.settings = this.getSettings;
  },
  watch: {
    getSettings(val) {
      this.settings = val;
    },
  },
  components: {
    darkLight,
  },
};
</script>

<style></style>
