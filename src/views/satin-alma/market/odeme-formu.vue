<template>
  <el-dialog v-model="dialogVisible" title="Ödeme Formu" min-width="90%" width="400px" :before-close="handleClose">
    <iframe
      src="http://localhost:8888/iyzipay/odeme-formu.php?token=2&id=1"
      height="400px"
      class="w-100"
      frameborder="0"
      id="iframe"
    ></iframe>
    <code class="mt-4">{{ code }} </code>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: ["visible", "id"],
  data() {
    return {
      dialogVisible: false,
      code: '<iframe src="http://localhost:8888/iyzipay/odeme-formu.php?token=2&id=1" ></iframe>',
    };
  },
  watch: {
    visible(val) {
      this.dialogVisible = val;
      if (val == true) {
        setInterval(() => {
          console.dir(document.getElementById("iframe"));
        }, 1000);
      }
    },
    dialogVisible(val) {
      this.$emit("update:visible", val);
    },
  },
};
</script>

<style></style>
