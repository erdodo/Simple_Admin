<template>
  <div class="d-flex justify-content-center w-100">
    <el-dropdown trigger="click">
      <el-button size="large"><i class="bi bi-pencil fs-6"></i></el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Detail</el-dropdown-item>
          <el-dropdown-item> Edit </el-dropdown-item>
          <el-dropdown-item divided>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
