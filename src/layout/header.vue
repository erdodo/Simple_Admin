<template>
  <el-divider border-style="dashed">
    <router-link to="/" class="logo">
      <img class="logo-gif" src="/file/logo.gif" style="width: 110px; margin-top: 0px" alt="" />
      <label class="fs-2 text-primary cursor-pointer"> SIMPLE </label>
    </router-link>
  </el-divider>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.logo-gif {
  display: none;
}
.logo:hover label {
  display: none;
}
.logo:hover .logo-gif {
  display: block;
}
</style>
