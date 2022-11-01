<template>
  <div>
    <label class="mb-1 mt-2 fs-6">{{ column.display }}:</label>
    <el-input-number v-if="column.type == 'int'" class="w-100 text-start" v-model="value" controls-position="right" />
    <input type="file" v-else-if="column.type == 'file'" class="form-control" />
    <el-input
      v-else-if="column.type == 'text'"
      v-model="value"
      :autosize="{ minRows: 2, maxRows: 5 }"
      type="textarea"
      placeholder="Please input"
    />
    <el-select v-else-if="column.type == 'tinyint'" class="w-100" v-model="value" placeholder="Select">
      <el-option label="Aktif" value="1" />
      <el-option label="Pasif" value="0" />
    </el-select>
    <el-input v-else v-model="value" placeholder=""></el-input>
  </div>
</template>

<script>
export default {
  props: ["modelValue", "column", "label"],
  data() {
    return {
      value: null,
    };
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
