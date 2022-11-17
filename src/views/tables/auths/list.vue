<template>
  <div class="d-flex justify-content-between">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/tables/list' }">Tables</el-breadcrumb-item>

      <el-breadcrumb-item>{{ this.$route.params.table_name }} auths</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button
      plain
      size="small"
      type="info"
      @click="$router.push('/tables/auths/' + this.$route.params.table_name + '/create')"
      >Add</el-button
    >
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
          column.name == 'updated_date'
        "
      ></template>
      <el-table-column
        v-else-if="
          column.name == 'list_hide' ||
          column.name == 'get_hide' ||
          column.name == 'create_hide' ||
          column.name == 'edit_hide'
        "
        :prop="column.name"
        min-width="250px"
        width="auto"
      >
        <template #header>
          <label class="fs-6 text-nowrap">{{ column.display }} </label>
        </template>
        <template #default="scope">
          <el-tag type="info" class="m-1" v-for="clm in scope.row[column.name].split(',')" :key="clm">
            {{ clm }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column v-else-if="column.type == 'tinyint'" min-width="100px">
        <template #header>
          <label class="fs-6 text-nowrap" v-tooltip="column.display">{{ column.display }} </label>
        </template>
        <template #default="scope">
          <el-tag type="success" v-if="scope.row[column.name] == 1"> Aktif </el-tag>
          <el-tag v-else type="danger">Pasif</el-tag>
        </template>
      </el-table-column>
      <el-table-column v-else :prop="column.name" min-width="250px" width="auto">
        <template #header>
          <label class="fs-6 text-nowrap">{{ column.display }} </label>
        </template>
        <template #default="scope">
          <el-tag type="warning" v-if="column.key == 'MUL' && scope.row[column.name].data != undefined">
            {{ scope.row[column.name].data }}
          </el-tag>
          <label v-else class="fs-6 ellipsis-3">{{ scope.row[column.name] }}</label>
        </template>
      </el-table-column>
    </template>
    <el-table-column fixed="right" label="Operations" width="100">
      <template #default="scope">
        <div class="d-flex justify-content-center w-100">
          <el-dropdown trigger="click">
            <el-button><i class="bi bi-pencil fs-6"></i></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  @click="$router.push('/tables/auths/' + this.$route.params.table_name + '/detail/' + scope.row.id)"
                  class="text-decoration-none text-primary"
                >
                  Detail
                </el-dropdown-item>
                <el-dropdown-item
                  @click="$router.push('/tables/auths/' + this.$route.params.table_name + '/edit/' + scope.row.id)"
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
      const params = {
        filter: {
          table_name: this.$route.params.table_name,
        },
      };
      services.list("auths", params).then((res) => {
        this.datas = res.data;
      });
    },
    deleteEvent(id) {
      ElMessageBox.alert("This data is being deleted.", "Deleting", {
        confirmButtonText: "OK",
        callback: (action) => {
          if (action == "confirm") {
            services.del("auths", id).then(() => {
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
