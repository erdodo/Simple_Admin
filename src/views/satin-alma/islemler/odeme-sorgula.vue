<template>
  <el-dialog v-model="dialogVisible" title="Ödeme Sorgulama" min-width="90%" width="400px" :before-close="handleClose">
    {{ cevap }}
    <code>{{ code }} </code>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import axios from "axios";
export default {
  props: ["visible", "id"],
  data() {
    return {
      dialogVisible: false,
      code: '"http://localhost:8888/iyzipay/odeme-sorgu.php?token=" + this.sorgutoken',
      cevap: null,
    };
  },

  watch: {
    visible(val) {
      this.dialogVisible = val;
      if (val == true) {
        axios.get("http://localhost:8888/iyzipay/odeme-sorgu.php?token=" + this.id).then((res) => {
          this.cevap = res.data;
        });
      }
    },
    dialogVisible(val) {
      this.$emit("update:visible", val);
    },
  },
};
</script>

<style></style>
