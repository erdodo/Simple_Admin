<template>
  <el-upload
    ref="imagesss"
    :action="this.$upload_base + column.name"
    list-type="picture-card"
    :class="!upload_state ? 'upload' : ''"
    :name="column.name"
    :auto-upload="true"
    :on-success="handleAvatarSuccess"
    :multiple="false"
    :limit="1"
    v-model:file-list="files"
    :clearFiles="clearFiles"
  >
    <el-icon v-if="upload_state"><Plus /></el-icon>

    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <el-icon><zoom-in /></el-icon>
          </span>
          <span class="el-upload-list__item-preview" @click="removePicture(file)">
            <el-icon><Delete /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img class="w-100" :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>
<script>
import { Plus, ZoomIn, Delete } from "@element-plus/icons-vue";

export default {
  props: ["modelValue", "column"],
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      upload_state: true,
      data: null,
      files: [],
    };
  },
  watch: {
    modelValue() {
      if (this.modelValue != undefined) {
        this.files = [];
        this.files.push({
          name: this.modelValue,
          url: this.$image_base + this.modelValue,
        });
        this.upload_state = false;
      }
    },
  },
  methods: {
    handleAvatarSuccess(e, a) {
      this.upload_state = false;
      this.$emit("update:modelValue", e?.file_name);
      this.data = e;
    },
    handlePictureCardPreview(f) {
      this.dialogVisible = true;
      this.dialogImageUrl = f.url;
    },
    removePicture() {
      this.upload_state = true;
      this.$refs.imagesss.clearFiles();
    },
  },
  components: {
    Plus,
    ZoomIn,
    Delete,
  },
};
</script>
<style>
.upload .el-upload--picture-card {
  display: none;
}
</style>
