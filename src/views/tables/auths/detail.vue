<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/tables/list' }">Tables</el-breadcrumb-item>

      <el-breadcrumb-item :to="{ path: '/tables/auths/' + this.$route.params.table_name + '/list' }"
        >{{ this.$route.params.table_name }} auths</el-breadcrumb-item
      >

      <el-breadcrumb-item>Detail</el-breadcrumb-item>
    </el-breadcrumb>

    <hr />

    <div class="row justify-content-center">
      <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
        <Shows v-for="column in detail.columns" :key="column" :column="column" v-model="detail.data[column.name]"></Shows>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import Shows from "@/components/Shows";
export default {
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      services.detail("auths", this.$route.params.auths_id).then((res) => {
        this.detail = res.data;
      });
    },
  },
  components: {
    Shows,
  },
};
</script>

<style></style>
