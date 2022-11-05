<template>
  <div class="px-5">
    <img src="/file/good-bye.gif" class="w-100" alt="" />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      localStorage.clear();
      window.location.href = "/login";
    }, 2000);
  },
};
</script>

<style></style>
