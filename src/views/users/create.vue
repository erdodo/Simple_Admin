<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/users/list' }">Users</el-breadcrumb-item>
    <el-breadcrumb-item>Create</el-breadcrumb-item>
  </el-breadcrumb>

  <hr />
  <div class="row justify-content-center">
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
      <Inputs v-for="column in columns" :key="column" :column="column" v-model="data[column.name]"></Inputs>
      <div class="d-flex justify-content-end">
        <el-button class="my-3" type="primary" plain @click="save()">Save</el-button>
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
    services.create("users").then((res) => {
      this.columns = res.data.columns;
    });
  },
  methods: {
    save() {
      console.log(this.data);
      services.store("users", this.data).then(() => {
        ElNotification({
          title: "Success",
          message: "Created",
          type: "success",
        });
        this.$router.push("/users/list");
      });
    },
  },
  watch: {},
  components: {
    Inputs,
  },
};
</script>

<style></style>
