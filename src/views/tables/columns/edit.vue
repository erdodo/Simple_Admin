<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>

    <el-breadcrumb-item :to="{ path: '/tables/list' }">Tables</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/tables/datas/' + this.$route.params.table_name + '/list' }">{{
      this.$route.params.table_name
    }}</el-breadcrumb-item>
    <el-breadcrumb-item>Edit</el-breadcrumb-item>
  </el-breadcrumb>

  <hr />
  <div class="row justify-content-center">
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
      <Inputs v-for="column in columns" :key="column" :column="column" v-model="data[column.name]"></Inputs>
    </div>
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
      <div class="d-flex justify-content-end">
        <el-button type="primary" plain @click="save()">Save</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import Inputs from "@/components/Inputs";
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      columns: {},
      data: {},
    };
  },
  mounted() {
    services.edit(this.$route.params.table_name, this.$route.params.id).then((res) => {
      this.columns = res.data.columns;
      this.data = res.data.data;
    });
  },
  methods: {
    save() {
      services.update(this.$route.params.table_name, this.data.id, this.data).then(() => {
        ElNotification({
          title: "Success",
          message: "Updated",
          type: "success",
        });
        this.$router.push("/tables/datas/" + this.$route.params.table_name + "/list");
      });
    },
  },
  components: {
    Inputs,
  },
};
</script>

<style></style>
