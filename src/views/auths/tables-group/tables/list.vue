<template>
  <div class="d-flex justify-content-between">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/auths/' }">Auths</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/auths/tables-group/list' }">Tables Group</el-breadcrumb-item>
      <el-breadcrumb-item>Tables</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button plain type="info" @click="$router.push('/auths/tables-group/tables/create')">Add</el-button>
  </div>

  <hr />
  <el-table :data="datas.data" style="width: 100%">
    <el-table-column v-for="column in datas.columns" :key="column.name" :prop="column.name" min-width="250px" width="auto">
      <template #header>
        <label class="fs-6 text-nowrap">{{ column.display }} </label>
      </template>
      <template #default="scope">
        <template v-if="column.type == 'file' && scope.row[column.name] != null">
          <el-image :src="$image_base + scope.row[column.name]" lazy fit="cover" style="height: 60px" class="rounded">
            <template #placeholder>
              <div class="image-slot">Loading<span class="dot">...</span></div>
            </template>
          </el-image>
        </template>
        <el-tag type="warning" v-else-if="column.key == 'MUL' && scope.row[column.name].data != undefined">
          {{ scope.row[column.name].data }}
        </el-tag>
        <label v-else class="fs-6 ellipsis-3">{{ scope.row[column.name] }}</label>
      </template>
    </el-table-column>

    <el-table-column fixed="right" label="Operations" width="100">
      <template #default="scope">
        <div class="d-flex justify-content-center w-100">
          <el-dropdown trigger="click">
            <el-button><i class="bi bi-pencil fs-6"></i></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <router-link
                    class="text-decoration-none text-primary"
                    :to="'/auths/tables-group/tables/detail/' + scope.row.id"
                    >Detail</router-link
                  >
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link
                    class="text-decoration-none text-success"
                    :to="'/auths/tables-group/tables/edit/' + scope.row.id"
                    >Edit</router-link
                  >
                </el-dropdown-item>
                <el-dropdown-item divided class="text-danger" @click="deleteEvent(scope.row.id)">Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import services from "@/services";
import { ElNotification, ElMessageBox } from "element-plus";
export default {
  data() {
    return {
      datas: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      services.list("tables").then((res) => {
        this.datas = res.data;
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
