<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/tables/list' }">Tables</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/tables/columns/' + this.$route.params.table_name + '/list' }">{{
      this.$route.params.table_name
    }}</el-breadcrumb-item>
    <el-breadcrumb-item>Create</el-breadcrumb-item>
  </el-breadcrumb>

  <hr />
  <div class="row justify-content-center">
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
      <template v-for="(d, key) in data" :key="key">
        <div class="mb-1">
          <span>{{ key }} </span>
          <el-input v-model="data[key]" :key="key" placeholder=""></el-input>
        </div>
      </template>
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
      data: {
        name: "name",
        type: "INT",
        constraint: "5",
        unsigned: "TRUE",
        auto_increment: "TRUE",
        unique: "TRUE",
        default: "King of Town",
        comment: "sdakfsd",
      },
    };
  },
  mounted() {
    this.columns = {};
  },
  methods: {
    save() {
      services.addColumn(this.$route.params.table_name, JSON.stringify(this.data)).then((res) => {
        if (res.data.status == "success") {
          ElNotification({
            title: "Success",
            message: "Created",
            type: "success",
          });
        } else {
        }
        //this.$router.push("/tables/datas/" + this.$route.params.table_name + "/list");
      });
    },
  },
  components: {
    Inputs,
  },
};
</script>

<style></style>
