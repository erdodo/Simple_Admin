<template>
  <div class="d-flex flex-column flex-md-row align-items-md-center">
    <label class="text-nowrap text-primary fs-7 me-4">{{ column.display }} :</label>
    <el-tag type="warning" v-if="column.key == 'MUL' && value != undefined">
      {{ value.data }}
    </el-tag>
    <div v-else-if="column.type == 'file' && value != null">
      <el-image :src="this.$image_base + value" class="rounded" style="height: 60px">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
    </div>
    <span v-else class="fs-6">
      {{ value }}
    </span>
  </div>
  <el-divider class="my-2" border-style="dashed"></el-divider>
</template>

<script>
export default {
  props: ["modelValue", "column", "label"],
  data() {
    return {
      value: null,
    };
  },
  mounted() {
    this.value = this.modelValue;
  },
  watch: {
    modelValue(val) {
      this.value = val;
    },
    value(val) {
      this.$emit("update:modelValue", val);
    },
  },
};
</script>

<style>
.el-input-number .el-input__inner {
  text-align: left;
}
.form-control {
  padding: 2px 9px;
}
</style>
