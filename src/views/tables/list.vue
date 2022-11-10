<template>
  <div class="d-flex justify-content-between">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Tables</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button size="small" plain type="info" @click="$router.push('/tables/create')">Add</el-button>
  </div>

  <hr />
  <el-table :data="datas.data" style="width: 100%">
    <template v-for="column in datas.columns" :key="column.name">
      <template
        v-if="
          column.name == 'id' ||
          column.name == 'own_id' ||
          column.name == 'user_id' ||
          column.name == 'status' ||
          column.name == 'added_date' ||
          column.name == 'updated_date' ||
          column.name == 'table_group_id'
        "
      ></template>
      <el-table-column v-else-if="column.name == 'icon'" :prop="column.name" min-width="65px" width="auto">
        <template #header>
          <label class="fs-6 text-nowrap">{{ column.display }} </label>
        </template>
        <template #default="scope">
          <i class="fs-4" :class="scope.row[column.name]"></i>
        </template>
      </el-table-column>
      <el-table-column v-else :prop="column.name" min-width="250px" width="auto">
        <template #header>
          <label class="fs-6 text-nowrap">{{ column.display }} </label>
        </template>
        <template #default="scope">
          <label class="fs-6 ellipsis-3">{{ scope.row[column.name] }}</label>
        </template>
      </el-table-column>
    </template>
    <el-table-column fixed="right" label="Operations" min-width="118">
      <template #default="scope">
        <div class="d-flex justify-content-center w-100">
          <!--Baş:Tables listeler-->
          <el-dropdown trigger="click">
            <el-button class="me-2"><i class="bi bi-wrench-adjustable fs-6"></i></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="$router.push('/tables/datas/' + scope.row.name + '/list')">Data</el-dropdown-item>
                <el-dropdown-item @click="$router.push('/tables/columns/' + scope.row.name + '/list')"
                  >Columns</el-dropdown-item
                >
                <el-dropdown-item>Auths</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <!--Son:Tables listeler-->
          <!--Baş:KALEM-->
          <el-dropdown trigger="click">
            <el-button><i class="bi bi-pencil fs-6"></i></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  @click="$router.push('/tables/detail/' + scope.row.id)"
                  class="text-decoration-none text-primary"
                >
                  Detail
                </el-dropdown-item>
                <el-dropdown-item
                  @click="$router.push('/tables/edit/' + scope.row.id)"
                  class="text-decoration-none text-primary"
                >
                  Edit
                </el-dropdown-item>
                <el-dropdown-item divided class="text-danger" @click="deleteEvent(scope.row.id)">Delete</el-dropdown-item>
                <el-divider border-style="dashed" class="my-2" />
                <div class="text-secondary fs-8 px-3" v-tooltip="'Created by ' + scope.row.own_id.data">
                  Last edited by {{ scope.row.user_id.data }}
                </div>
                <div class="text-secondary fs-8 px-3" v-tooltip="'Created ' + scope.row.added_date">
                  Last {{ scope.row.updated_date }}
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <!--Son:KALEM-->
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
