<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/auths/' }">Auths</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/auths/authority-groups/list' }">Authority Groups</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/auths/authority-groups/auths/' + this.$route.params.auths_id + '/list' }"
      >Auths</el-breadcrumb-item
    >
    <el-breadcrumb-item>Create</el-breadcrumb-item>
  </el-breadcrumb>

  <hr />
  <div class="d-flex align-items-center">
    <label class="m-0 me-2 text-nowrap">Table Name:</label>
    <el-input v-model="table_name" placeholder="Table Name" class="mx-3" size="" @keypress.enter="getData"></el-input>
    <el-button type="primary" @click="getData()">Get Create Data</el-button>
  </div>
  <div v-if="create_active" class="row justify-content-center">
    <div class="col-12 col-sm-11 col-md-10 col-lg-8 col-xxl-6 mb-3">
      <template v-for="column in columns" :key="column">
        <div v-if="column.name == 'list_hide'" class="mt-2">
          Liste gizlenecek kolonlar:
          <el-select v-model="data[column.name]" multiple placeholder="Select" class="w-100">
            <el-option v-for="item in table_columns" :key="item.name" :label="item.display" :value="item.name" />
          </el-select>
        </div>
        <div v-else-if="column.name == 'get_hide'" class="mt-2">
          Detay gizlenecek kolonlar:
          <el-select v-model="data[column.name]" multiple placeholder="Select" class="w-100">
            <el-option v-for="item in table_columns" :key="item.name" :label="item.display" :value="item.name" />
          </el-select>
        </div>
        <div v-else-if="column.name == 'create_hide'" class="mt-2">
          Ekle gizlenecek kolonlar:
          <el-select v-model="data[column.name]" multiple placeholder="Select" class="w-100">
            <el-option v-for="item in table_columns" :key="item.name" :label="item.display" :value="item.name" />
          </el-select>
        </div>
        <div v-else-if="column.name == 'edit_hide'" class="mt-2">
          Düzenle gizlenecek kolonlar:
          <el-select v-model="data[column.name]" multiple placeholder="Select" class="w-100">
            <el-option v-for="item in table_columns" :key="item.name" :label="item.display" :value="item.name" />
          </el-select>
        </div>
        <Inputs v-else :column="column" v-model="data[column.name]"></Inputs>
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
      data: {},
      table_columns: {},
      table_name: "",
      create_active: false,
      create_or_edit: "",
    };
  },
  mounted() {
    //this.getData();
  },
  methods: {
    getData() {
      this.columns = {};
      this.data = {};
      this.table_columns = {};
      services.getAuths(this.table_name, this.$route.params.auths_id).then((res) => {
        this.columns = res.data.columns;
        this.table_columns = res.data.table_columns;
        this.create_active = true;
        let data = res.data.data;
        if (data == null) {
          this.create_or_edit = "create";
        } else {
          this.create_or_edit = "edit";
          for (const [key, val] of Object.entries(data)) {
            if (key == "list_hide" || key == "get_hide" || key == "create_hide" || key == "edit_hide") {
              this.data[key] = val.split(",");
            } else {
              this.data[key] = val;
            }
          }
        }
      });
    },
    save() {
      for (const [key, val] of Object.entries(this.data)) {
        if (key == "list_hide" || key == "get_hide" || key == "create_hide" || key == "edit_hide") {
          this.data[key] = val.join();
        } else {
          this.data[key] = val;
        }
      }
      if (this.create_or_edit == "create") {
        services.store("auths", this.data).then(() => {
          ElNotification({
            title: "Success",
            message: "Created",
            type: "success",
          });
          this.$router.push("/auths/authority-groups/auths/" + this.$route.params.auths_id + "/list");
        });
      } else {
        services.update("auths", this.data.id, this.data).then(() => {
          ElNotification({
            title: "Success",
            message: "Created",
            type: "success",
          });
          this.$router.push("/auths/authority-groups/auths/" + this.$route.params.auths_id + "/list");
        });
      }
    },
  },
  components: {
    Inputs,
  },
};
</script>

<style></style>
