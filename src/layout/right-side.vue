<template>
  <el-card>
    <div class="d-flex flex-column mb-2" v-for="not in nots" :key="not">
      <div class="d-flex w-100 justify-content-end">
        <label class="my-0 fs-9">{{ not.updated_date }} </label>
      </div>
      <span class="fs-4 ellipsis-1" v-tooltip="not.title">
        {{ not.title }}
      </span>

      <p class="ellipsis-3" v-tooltip="not.content">{{ not.content }}</p>
      <el-divider></el-divider>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      nots: {},
    };
  },
  mounted() {
    this.$services.list("nots").then((res) => (this.nots = res.data.data));
  },
};
</script>

<style></style>
