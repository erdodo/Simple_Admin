<template>
  <div class="d-flex justify-content-between">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/tables/list' }">Tables</el-breadcrumb-item>

      <el-breadcrumb-item>{{ this.$route.params.table_name }} columns</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button
      plain
      size="small"
      type="info"
      @click="$router.push('/tables/columns/' + this.$route.params.table_name + '/create')"
      >Add</el-button
    >
  </div>

  <hr />
  <el-table v-if="this.datas.length > 0" :data="datas" style="width: 100%">
    <template v-for="column in Object.keys(this.datas?.[0])" :key="column">
      <el-table-column :prop="column" min-width="150px" width="auto">
        <template #header>
          <label class="fs-6 text-nowrap">{{ column }} </label>
        </template>
        <template #default="scope">
          <label class="fs-6 ellipsis-3">{{ scope.row[column] }}</label>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
import services from "@/services";
import { ElNotification, ElMessageBox } from "element-plus";
export default {
  data() {
    return {
      datas: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      console.log(this.$route.params.table_name);
      services.list(this.$route.params.table_name).then((res) => {
        this.datas = Object.values(res.data.columns);
        console.log(Object.keys(this.datas[0]));
      });
    },
    deleteEvent(id) {
      ElMessageBox.alert("This data is being deleted.", "Deleting", {
        confirmButtonText: "OK",
        callback: (action) => {
          if (action == "confirm") {
            services.del("tables", id).then(() => {
              ElNotification({
                title: "Success",
                message: "Deleted",
                type: "success",
              });
              this.getData();
            });
          }
        },
      });
    },
  },
  components: {},
};
</script>

<style></style>
