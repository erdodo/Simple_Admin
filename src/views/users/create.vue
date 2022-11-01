<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6">
      <Inputs v-for="column in columns" :key="column" :column="column" v-model="data[column.name]"></Inputs>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import Inputs from "@/components/Inputs";
export default {
  data() {
    return {
      columns: {},
      data: {},
    };
  },
  mounted() {
    services.create("users").then((res) => {
      this.columns = res.data.columns;
    });
  },
  components: {
    Inputs,
  },
};
</script>

<style></style>
