<template>
  <div>
    <label class="mb-1 mt-2 fs-6">{{ column.display }}:</label>
    <div v-if="column.key == 'MUL'">
      <el-select v-model="value" class="w-100" placeholder="Select">
        <el-option v-for="item in column.list" :key="item.id" :label="item.label" :value="item.id" />
      </el-select>
    </div>
    <el-input-number v-else-if="column.type == 'int'" class="w-100 text-start" v-model="value" controls-position="right" />
    <div v-else-if="column.type == 'file'" class="d-flex">
      <image-input v-model="value" :column="column"></image-input>
    </div>

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
import { ElMessageBox, ElMessage } from "element-plus";
import ImageInput from "@/components/ImageInput";
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
  methods: {
    imageDetail() {
      ElMessageBox.alert(
        `
     <div class="d-flex justify-content-center">
     <img src="` +
          this.$image_base +
          this.value +
          `" class="rounded" style="height: 240px; width: auto"/>
     </div>
      `,
        "Image Detail",
        {
          distinguishCancelAndClose: true,
          type: "warning",
          dangerouslyUseHTMLString: true,
          confirmButtonText: "Remove",
          cancelButtonText: "Cancel",
          showConfirmButton: true,
          showCancelButton: true,
        }
      ).then((action) => {
        if (action == "confirm") {
          this.value = null;
          ElMessage({
            type: "success",
            message: "Image remove",
          });
        }
      });
    },
  },
  components: {
    ImageInput,
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
.image-holder {
  position: absolute;
  top: 0;
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.image-parent {
  height: 40px;
  width: auto;
}
.image-parent:hover .image-holder {
  display: block;
}
</style>
